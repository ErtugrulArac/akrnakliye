import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Wp from "@/components/wp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AKR Nakliyat | Profesyonel Lojistik ve Nakliye Hizmetleri",
  description:
    "AKR Nakliyat, Türkiye genelinde hızlı ve güvenilir taşımacılık çözümleri sunar. Hemen teklif alın, yolculuğa güvenle çıkın!",
  metadataBase: new URL("https://akrnakliye.com"),
  openGraph: {
    title: "AKR Nakliyat | Lojistik Çözümler",
    description:
      "Kurumsal taşımacılık çözümleri. AKR Nakliyat ile hızlı, güvenli ve profesyonel lojistik deneyimi yaşayın.",
    url: "https://akrnakliye.com",
    siteName: "AKR Nakliyat",
    images: [
      {
        url: "https://akrnakliye.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "AKR Nakliyat Kamyon Görseli",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKR Nakliyat | Lojistik Hizmetleri",
    description:
      "Türkiye geneli profesyonel lojistik çözümleri. AKR Nakliyat'la yola çıkın.",
    images: ["https://akrnakliye.com/preview.jpg"],
  },
  alternates: {
    canonical: "https://akrnakliye.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Wp />
        <Footer />
      </body>
    </html>
  );
}
