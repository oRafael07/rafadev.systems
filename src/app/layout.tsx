import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "800"] });

export const metadata: Metadata = {
  title: "Rafa DEV",
  description:
    "Olá! Bem-vindo(a) ao meu site, me chamo Rafael, tenho 19 anos e sou Desenvolvedor de Software.",
  keywords: [
    "Rafa DEV",
    "Software Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "backend Specialist",
    "Manaus Developer",
    "Amazonas Developer",
    "Desenvolvedor em Manaus",
    "Criador de site em Manaus",
    "Desenvolvedor React Manaus ui/ux",
    "Desenvolvedor Javascript Manaus",
    "Desenvolvedor NodeJS",
  ],
  creator: "Rafael",
  colorScheme: "dark",
  themeColor: "#22c55e",
  applicationName: "Rafa DEV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Analytics />
      </body>
      <Script
        async
        src="https://analytics.rafadev.systems/tracker.js"
        data-ackee-server="https://analytics.rafadev.systems"
        data-ackee-domain-id="f7714b79-2833-4a2b-9c76-9ac38251b282"
      />
    </html>
  );
}
