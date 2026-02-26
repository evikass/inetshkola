import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ИНЕТШКОЛА - Образовательная платформа",
  description: "Интерактивная образовательная платформа для школьников. Изучай предметы, проходи тесты, получай достижения!",
  keywords: ["школа", "образование", "тесты", "ЕГЭ", "учение", "онлайн школа", "ИНЕТШКОЛА"],
  authors: [{ name: "ИНЕТШКОЛА" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "ИНЕТШКОЛА",
    description: "Интерактивная образовательная платформа для школьников",
    url: "https://evikass.github.io/inetshkola",
    siteName: "ИНЕТШКОЛА",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ИНЕТШКОЛА",
    description: "Интерактивная образовательная платформа для школьников",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
