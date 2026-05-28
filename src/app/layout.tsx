import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { BrandBackground } from "@/components/brand/BrandBackground";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  title: "Doce Manifesto | Confeitaria Gourmet em Muriaé",
  description:
    "Brownies artesanais, doces gourmet e experiências premium. Doce Manifesto — adoçando momentos com atitude. Peça pelo WhatsApp!",
  keywords: [
    "confeitaria",
    "brownie gourmet",
    "doces artesanais",
    "Muriaé",
    "Doce Manifesto",
    "brigadeiro gourmet",
  ],
  authors: [{ name: "Doce Manifesto" }],
  openGraph: {
    title: "Doce Manifesto | Confeitaria Gourmet",
    description: "Adoçando momentos com atitude ✨ Brownies e doces artesanais premium.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Doce Manifesto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doce Manifesto",
    description: "Confeitaria gourmet — brownies artesanais e doces premium.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="relative min-h-screen bg-cream font-body text-chocolate antialiased">
        <BrandBackground />
        <Header />
        <main className="relative z-0">{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
