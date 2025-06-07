import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          strategy="beforeInteractive"
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
      <body className={montserrat.className}>
        <Header />
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-62DR7EGS5B" />
    </html>
  );
}
