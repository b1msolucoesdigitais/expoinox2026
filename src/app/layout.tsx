import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box, Flex } from "@chakra-ui/react";
import AnalyticsScripts from "@/components/AnalyticsScripts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://expoinox.com.br"),
  title: {
    default: "Expo Inox 2026 | A Maior Feira de Negócios do Leste Mineiro",
    template: "%s | Expo Inox 2026",
  },
  description:
    "Participe da Expo Inox 2026. De 4 a 6 de junho na Praça 1º de Maio, Timóteo - MG. A maior feira de negócios do Leste Mineiro, com expositores, rodada de negócios, conteúdos técnicos e shows de encerramento.",
  keywords: [
    "Expo Inox",
    "Expo Inox 2026",
    "feira de negócios",
    "Timóteo",
    "Vale do Aço",
    "indústria",
    "comércio",
    "serviços",
    "eventos corporativos",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Expo Inox 2026",
    title: "Expo Inox 2026 | A Maior Feira de Negócios do Leste Mineiro",
    description:
      "Expo Inox 2026, de 4 a 6 de junho na Praça 1º de Maio em Timóteo - MG. Encontre expositores, negócios, conteúdo técnico e shows em um único evento.",
    images: [
      {
        url: "/feirastands.png",
        width: 1600,
        height: 900,
        alt: "Vista geral dos stands da Expo Inox 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expo Inox 2026 | A Maior Feira de Negócios do Leste Mineiro",
    description:
      "Participe da Expo Inox 2026, o principal encontro de negócios do Leste Mineiro.",
    images: ["/feirastands.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  // Espaço reservado para códigos de verificação (Google, Meta, etc.)
  // verification: {
  //   google: "GOOGLE_SITE_VERIFICATION_CODE",
  //   other: { "facebook-domain-verification": "META_VERIFICATION_CODE" },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          <Flex direction="column" minH="100vh">
            <Header />
            <Box flex="1">{children}</Box>
            <Footer />
          </Flex>
        </Providers>
        {/* Scripts de analytics e pixels (Google Analytics, Meta Pixel, etc.) */}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
