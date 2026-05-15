import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "SunCart",
  description: "Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <Toaster position="top-center" />

      </body>
    </html>
  );
}