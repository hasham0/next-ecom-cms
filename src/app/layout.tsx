import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import WixContextPro from "@/context/WixContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Application",
  description: "e-commerce application using headless cms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixContextPro>
          <Navbar />
          {children}
          <Footer />
        </WixContextPro>
      </body>
    </html>
  );
}
