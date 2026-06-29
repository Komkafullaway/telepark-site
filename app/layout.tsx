import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tpark.ru"),

  title: {
    default: "Телепарк — авто под выкуп",
    template: "%s | Телепарк",
  },

  description:
    "Автомобиль под выкуп без банка и лишних условий. Одобрение 99%, решение за 15 минут, авто сегодня.",

  keywords: [
    "авто под выкуп",
    "автомобиль под выкуп",
    "аренда с выкупом",
    "Телепарк",
    "tpark",
    "авто под выкуп СПб",
    "авто Санкт-Петербург",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://tpark.ru",
    siteName: "Телепарк",
    title: "Телепарк — авто под выкуп",
    description:
      "Автомобиль под выкуп без банка и лишних условий. Одобрение 99%, решение за 15 минут, авто сегодня.",
   images: [
  {
    url: "/og-image.png?v=2",
    width: 1200,
    height: 630,
    alt: "Телепарк — авто под выкуп",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "Телепарк — авто под выкуп",
    description:
      "Автомобиль под выкуп без банка и лишних условий.",
    images: ["/og-image.png?v=2"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D0F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
