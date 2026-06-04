import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my99protein — Fresh high-protein meals delivered in Kansas City",
  description:
    "Fully cooked, hand-prepared healthy meals delivered across the Kansas City metro. Keto, paleo and high-protein options every week. Get started for $99/week.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#fbfaf6] text-[#14241a]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
