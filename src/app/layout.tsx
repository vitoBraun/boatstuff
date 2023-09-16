import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOATSTUFF.PRO",
  description:
    "We specialize in offering a wide selection of boats and yachts, catering to all levels of experience and preferences. Our extensive inventory features a range of sizes, designs, and price points, ensuring that every customer finds their perfect vessel. In addition to boats, we also provide a comprehensive range of accessories and equipment to enhance your boating experience. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
