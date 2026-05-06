import type { Metadata } from "next";
import { Inter, Montserrat, Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AptabaseProvider } from '@aptabase/react';
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-hero",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rafa DEV",
  description:
    "Olá! Bem-vindo(a) ao meu site, me chamo Rafael, tenho 21 anos e sou Desenvolvedor de Software.",
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
  applicationName: "Rafa DEV",
};

export const viewport = {
  themeColor: "#22c55e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} ${roboto.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          strategy="afterInteractive"
          id="clarity-tracking"
          dangerouslySetInnerHTML={{
            __html: `
             (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r297uq3j0x");
            `,
          }}
        />
      </head>
      <body className="antialiased font-body">
        <Header />
        <AptabaseProvider appKey="A-SH-3143280001" options={{ host: 'https://analytics.rafadev.solutions' }}>{children}</AptabaseProvider>
      </body>
      <GoogleAnalytics gaId="G-62DR7EGS5B" />
    </html>
  );
}
