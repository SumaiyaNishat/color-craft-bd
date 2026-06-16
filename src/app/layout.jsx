import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import AuthProvider from "@/context/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ColorCraft",
  description: "Handmade Jewelry Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
        <header>
          <Navbar></Navbar>
        </header>
       <main className="min-h-[calc(100vh-302px)]"> {children}</main>
        <footer>
          <Footer></Footer>
          </footer>
          </AuthProvider>
          </body>
    </html>
  );
}
