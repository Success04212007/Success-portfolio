import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://success-portfolio-beta.vercel.app"),
  title: {
    default: "Success Daniel | Professional Wix Website Designer",
    template: "%s | Success Daniel",
  },
  description: "Success Daniel is an independent Wix website designer creating modern, responsive and thoughtfully structured websites for businesses, entrepreneurs and personal brands.",
  openGraph: {
    type: "website",
    title: "Success Daniel | Wix Website Designer",
    description: "Professional Wix website design and development for businesses and personal brands.",
    siteName: "Success Daniel",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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