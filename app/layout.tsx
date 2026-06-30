import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tpark.ru"),

 verification: {
  google: "dCH-UYbFICNFbl_pHmZzqJXonyjeZtbewojovGGqKXk",
  yandex: "6aff71feb4cd87e9",
},

  alternates: {
    canonical: "/",
  },

  title: {
    default: "Авто под выкуп в Санкт-Петербурге без банка — Телепарк",
    template: "%s | Телепарк",
  },

  description:
    "Авто под выкуп в Санкт-Петербурге без банка. Одобрение за 15 минут, выдача авто в день обращения, официальный договор, ОСАГО и КАСКО.",

  keywords: [
    "авто под выкуп",
    "автомобиль под выкуп",
    "аренда с выкупом",
    "авто под выкуп СПб",
    "авто под выкуп Санкт-Петербург",
    "аренда авто с выкупом СПб",
    "Телепарк",
    "tpark",
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
    url: "https://tpark.ru/",
    siteName: "Телепарк",
    title: "Авто под выкуп в Санкт-Петербурге без банка — Телепарк",
    description:
      "Авто под выкуп в Санкт-Петербурге без банка. Одобрение за 15 минут, выдача авто в день обращения, официальный договор, ОСАГО и КАСКО.",
    images: [
      {
        url: "/og-telepark-v4.png",
        width: 1200,
        height: 630,
        alt: "Телепарк — авто под выкуп в Санкт-Петербурге",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Авто под выкуп в Санкт-Петербурге без банка — Телепарк",
    description:
      "Авто под выкуп в Санкт-Петербурге без банка. Одобрение за 15 минут, выдача авто в день обращения.",
    images: ["/og-telepark-v4.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D0F",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ООО «Телепарк»",
  alternateName: "Телепарк",
  url: "https://tpark.ru/",
  logo: "https://tpark.ru/telepark-logo.png",
  image: "https://tpark.ru/og-telepark-v3.png",
  email: "info@tpark.ru",
  telephone: "+79013711584",
  address: {
    "@type": "PostalAddress",
    postalCode: "192012",
    addressCountry: "RU",
    addressLocality: "Санкт-Петербург",
    streetAddress: "пр-т Обуховской Обороны, 271А, помещение 7-Н",
  },
  areaServed: {
    "@type": "City",
    name: "Санкт-Петербург",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
  {
    "@type": "Question",
    name: "Можно ли оформить с плохой кредитной историей?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Да. Мы рассматриваем разные ситуации и часто одобряем заявки, которые банк не принимает.",
    },
  },
  {
    "@type": "Question",
    name: "Нужен ли первоначальный взнос?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Есть автомобили без первоначального взноса. По некоторым моделям условия рассчитываются индивидуально.",
    },
  },
],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd),
    }}
  />
  {children}
</body>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, faqSchema],
};
        {children}
      </body>
    </html>
  );
}