import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Premium UI/UX & Product Designer Portfolio",
  description: "Enterprise-grade design portfolio featuring glassmorphism and AI motion aesthetics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        {/* Mesh Gradient Background Blobs */}
        <div className="blob bg-primary w-[500px] h-[500px] -top-20 -left-20 opacity-20" />
        <div className="blob bg-secondary w-[600px] h-[600px] -bottom-20 -right-20 opacity-15" />
        
        {children}
      </body>
    </html>
  );
}
