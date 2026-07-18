import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Aaron Emmanuel | Mechatronics & Robotics";
const description = "Engineering portfolio focused on robotics, mechatronics, embedded control, and electrical systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaronemmanuel.github.io"),
  title,
  description,
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og-portfolio-v2.jpg", width: 1200, height: 630, alt: "Aaron Emmanuel robotics and mechatronics engineering portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-portfolio-v2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
