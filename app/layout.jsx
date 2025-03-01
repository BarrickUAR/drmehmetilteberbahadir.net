import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Dr. Mehmet İlteber Bahadır", // Sayfa başlığı
  description: "This is an SEO optimized Next.js app.", // Açıklama
  keywords: ["nextjs", "react", "frontend", "seo"], // Anahtar kelimeler
  authors: [
    { name: "Ümit Berk Uçar", url: "https://www.linkedin.com/in/uberkucar" },
  ],
  icons: {
    icon: "/favicon.ico", // Standart favicon
    apple: "/favicon.png", // Apple cihazları için favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
