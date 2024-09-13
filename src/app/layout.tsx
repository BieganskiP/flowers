import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Kwiaciarnia Wiosenna | Piękne bukiety i dekoracje kwiatowe",
  description:
    "Odkryj naszą bogatą ofertę kwiatów, bukietów i dekoracji. Profesjonalna obsługa i dostawa na terenie całej Polski.",
  keywords: "kwiaciarnia, kwiaty, bukiety, dekoracje kwiatowe, dostawa kwiatów",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Kwiaciarnia Wiosenna | Piękne bukiety i dekoracje kwiatowe",
    description:
      "Odkryj naszą bogatą ofertę kwiatów, bukietów i dekoracji. Profesjonalna obsługa i dostawa na terenie całej Polski.",
    type: "website",
    locale: "pl_PL",
    siteName: "Kwiaciarnia Wiosenna",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl_PL">
      <body
        className={`${playfairDisplay.variable} font-serif min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
