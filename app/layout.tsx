import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageLoader from "@/components/ui/PageLoader";

export const metadata: Metadata = {
  title: "Harsh Rana | Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer, AI Engineer & MERN Stack Developer based in Delhi, India. Building intelligent digital experiences and scalable AI products.",
  keywords: [
    "Harsh Rana",
    "Full Stack Developer",
    "AI Engineer",
    "MERN Stack",
    "React",
    "Next.js",
    "Delhi",
  ],
  openGraph: {
    title: "Harsh Rana | Full Stack Developer & AI Engineer",
    description: "Building intelligent digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise">
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
