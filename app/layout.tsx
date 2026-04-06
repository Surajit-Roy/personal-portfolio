import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surajit Roy | Mobile Developer",
  description: "Senior iOS & Flutter Developer specializing in scalable fintech and payment applications.",
  keywords: ["iOS Developer", "Flutter Developer", "Mobile Engineer", "Fintech", "Swift", "Dart", "Surajit Roy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground tracking-tight selection:bg-white/20 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
