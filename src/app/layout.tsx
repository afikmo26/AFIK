import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "לי מתכות | בנייה, שיפוצים ומסגרות",
  description: "לי מתכות - 60 שנה של ניסיון בבנייה, שיפוצים ומסגרות. איכות ומקצועיות ללא פשרות.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className={`${heebo.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
