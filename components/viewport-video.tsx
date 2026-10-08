"use client";

import { useEffect, useRef, type VideoHTMLAttributes } from "react";

type ViewportVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "autoPlay" | "preload" | "muted" | "playsInline">;

export function ViewportVideo(props: ViewportVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let inView = false;
    let manuallyPaused = false;
    let managedPause = false;
    let disposed = false;

    const shouldPlay = () => !disposed && inView && !document.hidden && !reducedMotion.matches && !connection?.saveData && !manuallyPaused;
    const pause = () => {
      if (!video.paused) {
        managedPause = true;
        video.pause();
      }
    };
    const update = () => {
      if (!shouldPlay()) {
        pause();
        return;
      }
      if (!video.paused) return;
      // Recheck after loading: the user may have scrolled away during play().
      void video.play().catch(() => undefined).then(() => {
        if (!shouldPlay()) pause();
      });
    };
    const onPause = () => {
      if (managedPause) managedPause = false;
      else if (!video.ended) manuallyPaused = true;
    };
    const onPlay = () => { manuallyPaused = false; };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
      update();
    }, { threshold: [0, 0.25] });

    observer.observe(video);
    video.addEventListener("pause", onPause);
    video.addEventListener("play", onPlay);
    document.addEventListener("visibilitychange", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      disposed = true;
      observer.disconnect();
      video.removeEventListener("pause", onPause);
      video.removeEventListener("play", onPlay);
      document.removeEventListener("visibilitychange", update);
      reducedMotion.removeEventListener("change", update);
      video.pause();
    };
  }, []);

  return <video {...props} ref={videoRef} muted playsInline preload="none" data-viewport-video="" />;
}
