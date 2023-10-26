import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "800"] });

export const metadata: Metadata = {
  title: "Rafa DEV",
  description:
    "Olá! Bem-vindo(a) ao meu site, me chamo Rafael, tenho 19 anos e sou Desenvolvedor de Software.",
  keywords: ["Rafa DEV", "Software Developer", "Software Engineer"],
  creator: "Rafael",
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
      </body>
    </html>
  );
}
