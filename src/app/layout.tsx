import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7c3aed' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1b4b' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "ИНЕТШКОЛА - Образовательная платформа",
    template: "%s | ИНЕТШКОЛА"
  },
  description: "Интерактивная образовательная платформа для школьников 0-11 классов. Изучай предметы, проходи тесты, играй в обучающие игры и получай достижения! Бесплатно и эффективно.",
  keywords: [
    "ИНЕТШКОЛА", "онлайн школа", "образование", "тесты", "ЕГЭ", "ОГЭ",
    "математика", "русский язык", "физика", "химия", "биология", "история",
    "обучение", "школа онлайн", "учеба", "уроки", "игры обучающие"
  ],
  authors: [{ name: "ИНЕТШКОЛА Team" }],
  creator: "ИНЕТШКОЛА",
  publisher: "ИНЕТШКОЛА",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/inetshkola/icon.png",
    apple: "/inetshkola/icon.png",
  },
  manifest: "/inetshkola/manifest.json",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://evikass.github.io/inetshkola/",
    siteName: "ИНЕТШКОЛА",
    title: "ИНЕТШКОЛА - Образовательная платформа",
    description: "Интерактивная образовательная платформа для школьников. Изучай предметы, проходи тесты, получай достижения!",
    images: [
      {
        url: "/inetshkola/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ИНЕТШКОЛА - Образовательная платформа",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ИНЕТШКОЛА - Образовательная платформа",
    description: "Интерактивная образовательная платформа для школьников",
    images: ["/inetshkola/images/og-image.png"],
  },
  category: "Education",
  classification: "Educational Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
