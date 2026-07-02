export type Car = {
  slug: string;
  name: string;
  short: string;
  year: string;
  gearbox: string;
  img: string;
  heroImg?: string;
  price: string;
  month: string;
  term: string;
  deposit: string;
  badge: string;
  accent: string;
  video?: string;
  features: string[];
};

export const cars: Car[] = [
  {
    slug: "tenet-t7",
    name: "TENET T7",
    short: "TENET",
    year: "2026",
    gearbox: "АКПП",
    img: "/New/TenetSPB.webp",
    heroImg: "/New/TenetSPB.webp",
    price: "3 800 ₽",
    month: "≈ 115 000 ₽ / месяц",
    term: "48 месяцев",
    deposit: "135 000 ₽",
    badge: "Премиум 2026",
    accent: "#c8ff2f",
    video: "Tigo1.MP4",
    features: ["ОСАГО + КАСКО в подарок", "Без ограничений по пробегу", "Одобрение 99%"],
  },
  {
    slug: "geely-coolray",
    name: "Geely Coolray",
    short: "Coolray",
    year: "2022",
    gearbox: "АКПП",
    img: "/New/CoolraySPB.webp",
    price: "2 950 ₽",
    month: "≈ 88 500 ₽ / месяц",
    term: "18 месяцев",
    deposit: "0 ₽",
    badge: "Популярный",
    accent: "#9df000",
    video: "Coolray1.MP4",
    features: ["Без первоначального взноса", "ОСАГО + КАСКО в подарок", "Через 18 месяцев авто ваше"],
  },
  {
    slug: "kia-rio",
    name: "Kia Rio",
    short: "Rio",
    year: "2022",
    gearbox: "АКПП",
    img: "/New/RioSPB.webp",
    price: "2 950 ₽",
    month: "≈ 88 500 ₽ / месяц",
    term: "16 месяцев",
    deposit: "0 ₽",
    badge: "Для работы",
    accent: "#c8ff2f",
    video: "Rio1.MP4",
    features: ["Подходит для такси", "Без ограничений по пробегу", "Авто ваше через 16 месяцев"],
  },
  {
    slug: "hyundai-solaris",
    name: "Hyundai Solaris",
    short: "Solaris",
    year: "2021",
    gearbox: "АКПП",
    img: "/New/SolarisSPB.webp",
    price: "2 500 ₽",
    month: "≈ 75 000 ₽ / месяц",
    term: "16 месяцев",
    deposit: "0 ₽",
    badge: "Выгодный",
    accent: "#c8ff2f",
    video: "Solaris1.MP4",
    features: ["Самый доступный платёж", "Всё включено", "Одобрение за 15 минут"],
  },
  {
    slug: "hongqi-h5",
    name: "Hongqi H5",
    short: "H5",
    year: "2023",
    gearbox: "АКПП",
    img: "/New/H5SPB.webp",
    price: "4 950 ₽",
    month: "≈ 148 500 ₽ / месяц",
    term: "24 месяца",
    deposit: "0 ₽",
    badge: "Premium",
    accent: "#c8ff2f",
    video: "H51.MP4",
    features: ["Премиум без кредита", "Официальный договор", "Авто ваше через 24 месяца"],
  },
];