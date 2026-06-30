import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

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
  priceRange: "₽₽",
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
],
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
  geo: {
  "@type": "GeoCoordinates",
  latitude: 59.85125,
  longitude: 30.479254,
},
sameAs: [
  "https://t.me/telepark1",
  "https://max.ru/id7811810344_biz",
],
};

const faqSchema = {
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, faqSchema],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
    <body>
  <Script id="yandex-metrika" strategy="afterInteractive">
    {`
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110291694', 'ym');

      ym(110291694, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true
      });
    `}
  </Script>

  <noscript>
    <div>
      <img
        src="https://mc.yandex.ru/watch/110291694"
        style={{ position: "absolute", left: "-9999px" }}
        alt=""
      />
    </div>
  </noscript>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd),
    }}
  />

  {children}
</body>
    </html>
  );
}