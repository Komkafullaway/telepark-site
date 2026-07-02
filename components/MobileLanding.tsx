"use client";

import { useEffect, useState } from "react";

const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84aEq84lB67ECiRtZ5w0t2uVTA5_LP4".replace("aEq84aEq84", "aEq84");
const PHONE_LINK = "tel:+79013711584";
const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwXgg5KBMb6DWffFsGH5r1NJngX0yV18CM_T_Fuu-7vc8RQ8g45uVQ47w3EU6sefgaJ/exec";

type Car = {
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

const cars: Car[] = [
  {
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

const videos = [
  ["Coolray1.MP4", "Александр", "Geely Coolray", "Всё быстро и прозрачно. Реально уехал в этот же день."],
  ["Coolray2.MP4", "Игорь", "Geely Coolray", "Без скрытых условий. Всё объяснили, платёж понятный."],
  ["Coolray3.MP4", "Дмитрий", "Geely Coolray", "Помогли без банка, условия адекватные, машина супер."],
  ["Coolray4.MP4", "Максим", "Geely Coolray", "Оставил заявку утром, вечером уже оформляли документы."],
  ["H51.MP4", "Роман", "Hongqi H5", "Подобрали H5, всё официально, машина очень радует."],
  ["Rio1.MP4", "Артём", "Kia Rio", "Нужна была машина для работы. Быстро оформили."],
  ["Solaris1.MP4", "Виктор", "Hyundai Solaris", "Одобрили быстро, забрал без проблем."],
  ["Solaris2.MP4", "Сергей", "Hyundai Solaris", "Приехал посмотреть — уехал на машине в этот же день."],
  ["Tigo1.MP4", "Олег", "Chery Tiggo 7 Pro", "Хотел кроссовер без кредита. Всё объяснили."],
  ["Atlas1.MOV", "Георгий", "Geely Atlas Pro", "Банк не одобрил кредит, здесь всё сделали быстро."],
];

const faqs = [
  ["Можно ли оформить с плохой кредитной историей?", "Да. Мы рассматриваем разные ситуации и часто одобряем заявки, которые банк не принимает."],
  ["Нужен ли первоначальный взнос?", "Есть автомобили без первоначального взноса. По некоторым моделям условия рассчитываются индивидуально."],
  ["Какие документы нужны?", "Обычно достаточно паспорта и водительского удостоверения."],
  ["Когда автомобиль станет моим?", "После окончания срока аренды с выкупом автомобиль переходит в вашу собственность."],
  ["Можно ли выкупить досрочно?", "Да, досрочный выкуп возможен. Условия фиксируются в договоре."],
  ["Есть ли ограничения по пробегу?", "Нет, вы можете пользоваться автомобилем без ограничений по пробегу."],
];


function PhoneCallIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.63a16 16 0 0 0 6.28 6.28l1.19-1.19a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z" />
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 11l1.5-4.2A3 3 0 0 1 9.3 5h5.4a3 3 0 0 1 2.8 1.8L19 11" />
      <path d="M4 11h16v6H4z" />
      <path d="M7 17v2" />
      <path d="M17 17v2" />
      <circle cx="7.5" cy="14.5" r="1" />
      <circle cx="16.5" cy="14.5" r="1" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function formatPhone(value: string) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("7") || digits.startsWith("8")) digits = digits.slice(1);
  digits = digits.slice(0, 10);

  const p1 = digits.slice(0, 3);
  const p2 = digits.slice(3, 6);
  const p3 = digits.slice(6, 8);
  const p4 = digits.slice(8, 10);

  let formatted = "+7";
  if (p1) formatted += ` (${p1}`;
  if (p1.length === 3) formatted += ")";
  if (p2) formatted += ` ${p2}`;
  if (p3) formatted += `-${p3}`;
  if (p4) formatted += `-${p4}`;
  return formatted;
}

export default function MobileLanding() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [leadOpen, setLeadOpen] = useState(false);
  const [phone, setPhone] = useState("+7");
  const [selectedCarName, setSelectedCarName] = useState(cars[0].name);
  const [activeNav, setActiveNav] = useState("top");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const selectedCar = cars[selectedIndex];

  useEffect(() => {
    const onScroll = () => {
      const points = [
        ["tmContacts", "contacts"],
        ["tmReviews", "reviews"],
        ["tmCars", "cars"],
        ["top", "top"],
      ] as const;

      const current = points.find(([id]) => {
        const element = document.getElementById(id);
        if (!element) return false;
        return element.getBoundingClientRect().top <= 130;
      });

      if (current) setActiveNav(current[1]);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openLead = (carName = selectedCar.name) => {
    setSelectedCarName(carName);
    setLeadOpen(true);
  };

  const nextCar = () => setSelectedIndex((value) => (value + 1) % cars.length);
  const prevCar = () => setSelectedIndex((value) => (value - 1 + cars.length) % cars.length);
  const selectCar = (index: number) => setSelectedIndex(index);
  const scrollToId = (id: string, nav: string) => {
    setActiveNav(nav);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="tm">
      <style>{`
        .tmHeroTrust {
  margin-top: 18px;
  color: rgba(255,255,255,.82);
  font-size: 14px;
  line-height: 1.6;
  text-shadow: 0 8px 20px rgba(0,0,0,.5);
}

.tmHeroTrust strong {
  color: var(--tm-lime);
  font-weight: 900;
}

        :root {
          --tm-bg: #050607;
          --tm-card: #0d1215;
          --tm-card-2: #131a1f;
          --tm-lime: #c8ff2f;
          --tm-lime-2: #95ea00;
          --tm-muted: rgba(255,255,255,.64);
          --tm-line: rgba(200,255,47,.16);
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; background: var(--tm-bg); color: #fff; font-family: Manrope, Arial, sans-serif; overflow-x: hidden; }
        button, input, select { font-family: inherit; }
        button { cursor: pointer; -webkit-tap-highlight-color: transparent; }
        a { color: inherit; text-decoration: none; }
        img, video { display: block; max-width: 100%; }

        .tm {
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% -10%, rgba(200,255,47,.15), transparent 26%),
            radial-gradient(circle at 100% 20%, rgba(200,255,47,.08), transparent 34%),
            linear-gradient(180deg, #050607 0%, #080d10 46%, #050607 100%);
          padding-bottom: 132px;
        }

        .tmHeader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background:
            linear-gradient(90deg, rgba(5,6,7,.96), rgba(10,14,16,.78)),
            radial-gradient(circle at 85% 50%, rgba(200,255,47,.12), transparent 42%);
          border-bottom: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(18px);
        }

        .tmBrand { display: flex; align-items: center; gap: 10px; }
        .tmBrand img { width: 44px; height: 44px; object-fit: contain; }
        .tmBrand strong { display: block; font-size: 21px; line-height: .9; font-weight: 950; letter-spacing: .2px; }
        .tmBrand strong span { color: var(--tm-lime); text-shadow: 0 0 24px rgba(200,255,47,.55); }
        .tmBrand small { display: block; margin-top: 5px; color: rgba(255,255,255,.54); font-size: 8px; letter-spacing: 2.8px; }

        .tmHeaderActions { display: flex; gap: 8px; align-items: center; }
        .tmHeaderPhone {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          border: 1px solid rgba(200,255,47,.28);
          background: rgba(200,255,47,.08);
          color: var(--tm-lime);
          font-size: 21px;
          font-weight: 950;
          box-shadow: 0 0 28px rgba(200,255,47,.16), inset 0 1px 0 rgba(255,255,255,.05);
        }
        .tmHeaderPhone svg { width: 23px; height: 23px; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; fill: none; }
        .tmHeaderCta {
          height: 48px;
          padding: 0 19px;
          border: 0;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--tm-lime), var(--tm-lime-2));
          color: #050607;
          font-size: 14px;
          font-weight: 950;
          box-shadow: 0 0 34px rgba(200,255,47,.28);
        }

        .tmHero {
  min-height: 82svh;
  position: relative;
  overflow: hidden;
  padding: 104px 18px 28px;
  display: flex;
  align-items: flex-start;
  background:
    linear-gradient(180deg, rgba(5,6,7,0) 0%, rgba(5,6,7,.10) 44%, rgba(5,6,7,.64) 78%, #050607 100%);
  background-size: cover;
  background-position: center 18%;
  background-repeat: no-repeat;
}
 .tmHeroImg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 80%;
  z-index: 0;
}

.tmHero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(5,6,7,0) 0%,
    rgba(5,6,7,.10) 44%,
    rgba(5,6,7,.64) 78%,
    #050607 100%
  );
  z-index: 1;
  pointer-events: none;
}

        .tmHeroTop { position: relative; z-index: 2; width: 100%; }
        .tmBadge {
          width: fit-content;
          padding: 9px 14px;
          border-radius: 999px;
          color: var(--tm-lime);
          border: 1px solid rgba(200,255,47,.30);
          background: rgba(200,255,47,.09);
          box-shadow: 0 0 28px rgba(200,255,47,.12);
          font-size: 11px;
          font-weight: 950;
        }

        .tmHero h1 {
          margin: 18px 0 0;
          max-width: 360px;
          font-size: clamp(44px, 13vw, 62px);
          line-height: .86;
          letter-spacing: -2.4px;
          font-weight: 950;
          text-shadow: 0 16px 40px rgba(0,0,0,.62);
        }
        .tmHero h1 span { color: var(--tm-lime); text-shadow: 0 0 26px rgba(200,255,47,.46); }
        .tmBullets { margin-top: 22px; display: grid; gap: 11px; }
        .tmBullets div { display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,.92); font-size: 15px; font-weight: 850; text-shadow: 0 8px 20px rgba(0,0,0,.72); }
        .tmBullets b { width: 25px; height: 25px; border-radius: 50%; display: grid; place-items: center; color: var(--tm-lime); background: rgba(200,255,47,.11); border: 1px solid rgba(200,255,47,.28); font-size: 13px; box-shadow: 0 0 20px rgba(200,255,47,.15); }

        .tmPrimary {
          width: 100%;
          min-height: 66px;
          border: 0;
          border-radius: 18px;
          color: #050607;
          background: linear-gradient(135deg, var(--tm-lime), var(--tm-lime-2));
          font-size: 17px;
          font-weight: 950;
          box-shadow: 0 0 46px rgba(200,255,47,.36), 0 20px 55px rgba(200,255,47,.18);
        }

        .tmSection { padding: 34px 18px; scroll-margin-top: 90px; }
        .tmKicker { color: var(--tm-lime); font-size: 11px; letter-spacing: 1.8px; text-transform: uppercase; font-weight: 950; }
        .tmSection h2 { margin: 8px 0 18px; font-size: 29px; line-height: 1.03; letter-spacing: -.8px; font-weight: 950; }

        .tmCarStage {
          position: relative;
          padding: 0 16px 18px;
          border-radius: 34px;
          background:
            radial-gradient(circle at 50% 0%, rgba(200,255,47,.16), transparent 38%),
            linear-gradient(180deg, rgba(16,22,26,.98), rgba(6,8,9,.99));
          border: 1px solid rgba(200,255,47,.22);
          overflow: hidden;
          box-shadow: 0 26px 80px rgba(0,0,0,.52), inset 0 1px 0 rgba(255,255,255,.04);
        }

        .tmCarPhoto {
          position: relative;
          margin: 0 -16px;
          min-height: 435px;
          overflow: hidden;
          border-radius: 34px 34px 0 0;
          background: #091012;
          box-shadow: inset 0 -80px 80px rgba(5,6,7,.88);
        }

        .tmCarPhotoBg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: blur(15px) brightness(.58) saturate(1.08);
          transform: scale(1.08);
        }

        .tmCarPhoto::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(180deg, rgba(5,6,7,.42) 0%, rgba(5,6,7,.03) 34%, rgba(5,6,7,.94) 100%),
            radial-gradient(circle at 80% 72%, rgba(200,255,47,.20), transparent 42%);
          pointer-events: none;
        }

        .tmCarMainImg {
          position: absolute;
          z-index: 1;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(1.06) contrast(1.05);
        }

        .tmCarPhotoTop { position: absolute; left: 20px; right: 20px; top: 24px; z-index: 3; }
        .tmCarPhotoTop strong { display: block; font-size: clamp(36px, 11vw, 54px); line-height: .92; letter-spacing: -1.5px; font-weight: 950; text-transform: uppercase; text-shadow: 0 18px 38px rgba(0,0,0,.72); }
        .tmCarPhotoTop span { display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; padding: 8px 12px; border-radius: 999px; color: var(--tm-lime); background: rgba(5,6,7,.70); border: 1px solid rgba(200,255,47,.30); box-shadow: 0 0 28px rgba(200,255,47,.14); font-size: 10px; font-weight: 950; text-transform: uppercase; }
        .tmCarPhotoTop span::before { content: "✦"; }

        .tmArrow { position: absolute; z-index: 4; top: 48%; width: 48px; height: 48px; border-radius: 50%; border: 1px solid rgba(200,255,47,.28); background: rgba(5,6,7,.58); color: #fff; font-size: 30px; display: grid; place-items: center; box-shadow: 0 0 24px rgba(0,0,0,.45), 0 0 22px rgba(200,255,47,.10); }
        .tmArrowLeft { left: 14px; }
        .tmArrowRight { right: 14px; }

        .tmCarOffer {
          margin-top: 16px;
          padding: 18px 18px 16px;
          border-radius: 24px;
          background:
            radial-gradient(circle at 30% 20%, rgba(200,255,47,.16), transparent 45%),
            linear-gradient(135deg, rgba(15,21,24,.94), rgba(6,8,9,.98));
          border: 1px solid rgba(200,255,47,.18);
          box-shadow: 0 18px 44px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.04);
        }
        .tmCarOfferPrice { display: flex; align-items: flex-end; gap: 7px; }
        .tmCarOfferPrice b { color: var(--tm-lime); font-size: 50px; line-height: .9; letter-spacing: -1.7px; font-weight: 950; text-shadow: 0 0 26px rgba(200,255,47,.46); }
        .tmCarOfferPrice span { color: rgba(255,255,255,.84); margin-bottom: 7px; font-weight: 900; }
        .tmMonth { margin-top: 10px; color: rgba(255,255,255,.66); font-size: 16px; font-weight: 900; }

        .tmCalcGrid { margin-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .tmCalcRow { min-height: 122px; padding: 15px; border-radius: 22px; display: flex; flex-direction: column; justify-content: space-between; background: radial-gradient(circle at 30% 18%, rgba(200,255,47,.10), transparent 38%), rgba(255,255,255,.035); border: 1px solid rgba(200,255,47,.13); box-shadow: inset 0 1px 0 rgba(255,255,255,.04); }
        .tmCalcIcon { width: 48px; height: 48px; border-radius: 16px; display: grid; place-items: center; color: var(--tm-lime); background: rgba(200,255,47,.09); border: 1px solid rgba(200,255,47,.22); font-size: 23px; box-shadow: 0 0 26px rgba(200,255,47,.12); }
        .tmCalcRow strong { display: block; margin-top: 10px; font-size: 20px; line-height: 1.1; }
        .tmCalcRow span { display: block; margin-top: 5px; color: var(--tm-muted); font-size: 12px; line-height: 1.25; }

        .tmMiniFeatures { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 12px; border-radius: 22px; overflow: hidden; border: 1px solid rgba(200,255,47,.12); background: rgba(255,255,255,.025); }
        .tmMiniFeatures div { padding: 15px 8px; text-align: center; border-right: 1px solid rgba(255,255,255,.06); }
        .tmMiniFeatures div:last-child { border-right: 0; }
        .tmMiniFeatures b { display: block; color: var(--tm-lime); margin-bottom: 8px; font-size: 18px; text-shadow: 0 0 18px rgba(200,255,47,.30); }
        .tmMiniFeatures span { color: rgba(255,255,255,.72); font-size: 10px; line-height: 1.35; font-weight: 850; }

        .tmThumbs { display: flex; gap: 10px; overflow-x: auto; padding: 14px 2px 4px; scroll-snap-type: x mandatory; }
        .tmThumbs::-webkit-scrollbar { display: none; }
        .tmThumb { flex: 0 0 108px; min-height: 118px; border-radius: 20px; border: 1px solid rgba(255,255,255,.10); background: rgba(255,255,255,.035); color: rgba(255,255,255,.76); overflow: hidden; scroll-snap-align: start; padding: 0; }
        .tmThumb.active { border-color: rgba(200,255,47,.72); color: var(--tm-lime); box-shadow: 0 0 26px rgba(200,255,47,.18); }
        .tmThumbPic { height: 74px; background-size: cover; background-position: center; filter: saturate(.96) contrast(1.05); }
        .tmThumb span { display: grid; place-items: center; min-height: 42px; font-size: 11px; font-weight: 950; text-transform: uppercase; }

        .tmBenefits { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .tmBenefit { min-height: 154px; padding: 18px 14px; border-radius: 22px; background: radial-gradient(circle at 35% 10%, rgba(200,255,47,.08), transparent 42%), linear-gradient(180deg, rgba(17,22,26,.86), rgba(9,12,14,.92)); border: 1px solid rgba(200,255,47,.12); box-shadow: inset 0 1px 0 rgba(255,255,255,.04); }
        .tmBenefitIcon { width: 48px; height: 48px; border-radius: 16px; display: grid; place-items: center; color: var(--tm-lime); background: rgba(200,255,47,.08); border: 1px solid rgba(200,255,47,.20); font-size: 26px; margin-bottom: 18px; box-shadow: 0 0 24px rgba(200,255,47,.10); }
        .tmBenefit strong { display: block; font-size: 15px; line-height: 1.18; }
        .tmBenefit span { display: block; margin-top: 7px; color: rgba(255,255,255,.56); font-size: 11px; line-height: 1.35; }

        .tmReviews { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px; scroll-snap-type: x mandatory; }
        .tmReviews::-webkit-scrollbar { display: none; }
        .tmReview { flex: 0 0 86%; scroll-snap-align: center; padding: 12px; border-radius: 24px; background: linear-gradient(180deg, rgba(17,22,26,.90), rgba(7,8,9,.96)); border: 1px solid rgba(200,255,47,.12); box-shadow: inset 0 1px 0 rgba(255,255,255,.04); }
        .tmReview video { width: 100%; height: 360px; object-fit: cover; border-radius: 18px; background: #111; }
        .tmVideoPreview {
  width: 100%;
  height: 360px;
  border: 0;
  border-radius: 18px;
  background:
    radial-gradient(circle at 50% 45%, rgba(200,255,47,.18), transparent 34%),
    linear-gradient(180deg, rgba(17,22,26,.92), rgba(5,6,7,.96));
  display: grid;
  place-items: center;
  color: #050607;
}

.tmVideoPreview span {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--tm-lime), var(--tm-lime-2));
  font-size: 28px;
  font-weight: 950;
  box-shadow: 0 0 36px rgba(200,255,47,.35);
}
        .tmReviewInfo { padding: 14px 4px 2px; }
        .tmReview strong { display: block; font-size: 18px; }
        .tmReview small { display: block; margin-top: 4px; color: rgba(255,255,255,.55); }
        .tmStars { margin-top: 5px; color: var(--tm-lime); letter-spacing: 2px; text-shadow: 0 0 18px rgba(200,255,47,.28); }
        .tmReview p { margin: 10px 0 0; color: rgba(255,255,255,.70); font-size: 13px; line-height: 1.45; }

        .tmFaq { display: grid; gap: 10px; }
        .tmFaq details { border-radius: 18px; background: rgba(17,22,26,.78); border: 1px solid rgba(200,255,47,.10); overflow: hidden; }
        .tmFaq summary { min-height: 62px; padding: 0 16px; cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 14px; font-weight: 900; }
        .tmFaq summary::-webkit-details-marker { display: none; }
        .tmFaq summary::after { content: "+"; width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; background: rgba(255,255,255,.05); color: var(--tm-lime); font-size: 20px; flex-shrink: 0; }
        .tmFaq details[open] summary::after { content: "×"; }
        .tmFaq p { margin: 0; padding: 0 16px 16px; color: rgba(255,255,255,.62); font-size: 13px; line-height: 1.55; }
        .tmSeoText {
  margin: 0 0 18px;
  color: rgba(255,255,255,.68);
  font-size: 14px;
  line-height: 1.65;
}

.tmSeoSubtitle {
  margin: 24px 0 10px;
  color: #fff;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 950;
  letter-spacing: -.3px;
}

        .tmContacts { display: grid; gap: 12px; }
        .tmContact {
          min-height: 92px;
          display: grid;
          grid-template-columns: 62px 1fr 28px;
          gap: 14px;
          align-items: center;
          padding: 14px;
          border-radius: 25px;
          background:
            radial-gradient(circle at 17% 50%, rgba(200,255,47,.10), transparent 34%),
            linear-gradient(135deg, rgba(19,25,29,.92), rgba(7,9,10,.94));
          border: 1px solid rgba(200,255,47,.14);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.045), 0 18px 42px rgba(0,0,0,.28);
          transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .tmContact:active {
          transform: scale(.985);
          border-color: rgba(200,255,47,.38);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.06), 0 0 28px rgba(200,255,47,.14), 0 18px 42px rgba(0,0,0,.30);
        }
        .tmContactIcon {
          width: 62px;
          height: 62px;
          border-radius: 20px;
          display: grid;
          place-items: center;
          color: var(--tm-lime);
          background:
            radial-gradient(circle at 50% 25%, rgba(200,255,47,.20), rgba(200,255,47,.06) 44%, rgba(255,255,255,.025) 100%);
          border: 1px solid rgba(200,255,47,.28);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.06), 0 0 28px rgba(200,255,47,.10);
        }
        .tmContactIcon svg {
          width: 30px;
          height: 30px;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
          filter: drop-shadow(0 0 12px rgba(200,255,47,.28));
        }
        .tmContactIcon img { width: 34px; height: 34px; object-fit: contain; filter: drop-shadow(0 0 12px rgba(200,255,47,.16)); }
        .tmContact strong { display: block; font-size: 17px; line-height: 1.08; letter-spacing: -.2px; }
        .tmContact span { display: block; margin-top: 6px; color: rgba(255,255,255,.58); font-size: 13px; line-height: 1.35; }
        .tmContactArrow { display:grid; place-items:center; color:var(--tm-lime); opacity:.92; }
        .tmContactArrow svg { width:25px; height:25px; stroke:currentColor; stroke-width:2.4; stroke-linecap:round; stroke-linejoin:round; fill:none; filter:drop-shadow(0 0 14px rgba(200,255,47,.36)); }

        .tmBottomNav { position: fixed; left: 10px; right: 10px; bottom: max(10px, env(safe-area-inset-bottom)); z-index: 999; padding: 10px; border-radius: 24px; background: rgba(8,11,13,.90); border: 1px solid rgba(200,255,47,.20); backdrop-filter: blur(20px); box-shadow: 0 22px 70px rgba(0,0,0,.62), 0 0 38px rgba(200,255,47,.10); }
        .tmNavRow { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 9px; }
        .tmNavRow button { display: grid; place-items: center; gap: 2px; min-height: 44px; border: 0; border-radius: 14px; background: transparent; color: rgba(255,255,255,.58); font-size: 10px; font-weight: 850; transition: .2s ease; }
        .tmNavRow button.active { color: var(--tm-lime); background: radial-gradient(circle at 50% 0%, rgba(200,255,47,.22), rgba(200,255,47,.07)); box-shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 0 20px rgba(200,255,47,.12); }
        .tmNavRow b { display:grid; place-items:center; width:22px; height:22px; }
        .tmNavRow b svg { width:22px; height:22px; stroke:currentColor; stroke-width:1.9; stroke-linecap:round; stroke-linejoin:round; fill:none; filter:drop-shadow(0 0 10px rgba(200,255,47,.18)); }
        .tmNavRow button.active b svg { filter:drop-shadow(0 0 14px rgba(200,255,47,.44)); }
        .tmBottomNav .tmPrimary { min-height: 54px; border-radius: 16px; }

        .tmModalOverlay { position: fixed; inset: 0; z-index: 2000; display: grid; align-items: end; background: rgba(0,0,0,.68); backdrop-filter: blur(16px); }
        .tmModal { position: relative; max-height: 94vh; overflow-y: auto; padding: 30px 18px 22px; border-radius: 34px 34px 0 0; background: radial-gradient(circle at 72% 0%, rgba(200,255,47,.13), transparent 35%), linear-gradient(180deg, rgba(17,22,26,.98), rgba(5,6,7,.99)); border: 1px solid rgba(200,255,47,.20); box-shadow: 0 -25px 90px rgba(0,0,0,.75); }
        .tmModal::before { content:""; display:block; width:72px; height:5px; margin:0 auto 22px; border-radius:999px; background:rgba(255,255,255,.22); }
        .tmClose { position: absolute; right: 18px; top: 18px; width: 52px; height: 52px; border: 0; border-radius: 50%; background: rgba(255,255,255,.08); color: #fff; font-size: 30px; }
        .tmModal h2 { margin: 0; max-width: 310px; font-size: 39px; line-height: 1.04; letter-spacing: -1.5px; font-weight: 950; }
        .tmModal h2 span { color: var(--tm-lime); }
        .tmLeadCar { margin-top: 20px; display:grid; grid-template-columns: 132px 1fr; gap: 13px; padding: 12px; border-radius: 22px; background: rgba(255,255,255,.04); border: 1px solid rgba(200,255,47,.12); }
        .tmLeadCar img { width:132px; height:118px; object-fit:cover; border-radius:16px; }
        .tmLeadCar strong { display:block; font-size:22px; line-height:1.05; font-weight:950; }
        .tmLeadBadge { display:inline-flex; margin-top:8px; padding:6px 10px; border-radius:999px; color:var(--tm-lime); border:1px solid rgba(200,255,47,.25); background:rgba(200,255,47,.08); font-size:10px; font-weight:950; text-transform:uppercase; }
        .tmLeadPrice { margin-top:10px; font-size:13px; color:rgba(255,255,255,.78); font-weight:850; }
        .tmLeadPrice span { color: var(--tm-lime); font-size:24px; font-weight:950; text-shadow:0 0 18px rgba(200,255,47,.36); }
        .tmLeadCar small { display:block; margin-top:3px; color:rgba(255,255,255,.55); font-weight:800; }
        .tmLeadInfo { margin: 16px 0 12px; display:grid; grid-template-columns: 36px 1fr; gap: 10px; align-items:center; }
        .tmLeadInfoIcon { color:var(--tm-lime); font-size:26px; }
        .tmLeadInfo b { display:block; font-size:16px; }
        .tmLeadInfo span { display:block; margin-top:3px; color:rgba(255,255,255,.58); font-size:13px; }
        .tmForm { display: grid; gap: 12px; }
        .tmField, .tmPhone, .tmForm select { width: 100%; min-height: 62px; border-radius: 17px; border: 1px solid rgba(200,255,47,.14); background: rgba(255,255,255,.045); color: #fff; padding: 0 18px; font-size: 16px; font-weight: 750; outline: none; }
        .tmPhone { display: flex; align-items: center; gap: 12px; }
        .tmPhone span { font-weight: 950; color:var(--tm-lime); }
        .tmPhone input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: #fff; font-size: 16px; font-weight: 750; }
        .tmForm select option { background: #0b0f12; color: white; }
        .tmFastLinks { display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
        .tmFastLink { min-height:62px; display:flex; align-items:center; gap:10px; padding:10px 12px; border-radius:17px; background:rgba(255,255,255,.045); border:1px solid rgba(200,255,47,.12); }
        .tmFastLink img { width:32px; height:32px; object-fit:contain; }
        .tmFastLink strong { display:block; font-size:14px; }
        .tmFastLink span { display:block; margin-top:2px; font-size:11px; color:rgba(255,255,255,.55); }
        .tmPolicy { margin-top: 6px !important; text-align: center; font-size: 11px; line-height:1.55; color: rgba(255,255,255,.50) !important; }
        .tmPolicy a { color: var(--tm-lime); font-weight: 850; }

        @media (max-width: 390px) {
          .tmHero { padding-left: 14px; padding-right: 14px; min-height: 76svh; }
          .tmCarPhoto { min-height: 400px; }
          .tmCarOfferPrice b { font-size: 42px; }
          .tmCalcGrid { grid-template-columns: 1fr; }
          .tmReview video { height: 330px; }
          .tmModal h2 { font-size: 35px; }
          .tmLeadCar { grid-template-columns: 116px 1fr; }
          .tmLeadCar img { width:116px; height:112px; }
          .tmLeadPrice span { font-size:21px; }
        }
      `}</style>

      <header className="tmHeader">
        <a className="tmBrand" href="#top">
          <img src="/icon.png" alt="Телепарк" />
          <div>
            <strong>ТЕЛЕ<span>ПАРК</span></strong>
            <small>АВТО ПОД ВЫКУП</small>
          </div>
        </a>

        <div className="tmHeaderActions">
          <a className="tmHeaderPhone" href={PHONE_LINK} aria-label="Позвонить"><PhoneCallIcon /></a>
          <button className="tmHeaderCta" type="button" onClick={() => openLead()}>Заявка</button>
        </div>
      </header>

      <section className="tmHero" id="top">

  <img
    className="tmHeroImg"
    src="/New/TenetSPB.webp"
    alt=""
    fetchPriority="high"
    decoding="async"
  />

 <div className="tmHeroTop">
  <div className="tmBadge">АВТОМОБИЛЬ ПОД ВЫКУП</div>

 <h1>
  АВТО
  <br />
  ПОД ВЫКУП
  <br />
  БЕЗ <span>БАНКА</span>
</h1>

  <div className="tmBullets">
    <div><b>✓</b>Одобрение 99%</div>
    <div><b>✓</b>Решение за 15 минут</div>
    <div><b>✓</b>Авто сегодня</div>
  </div>
  <div className="tmHeroTrust">
  Уже передали клиентам <strong>более 50 автомобилей</strong> • Официальный
  договор • Выдача автомобиля <strong>в течение суток</strong>
</div>
</div>

</section>

      <section className="tmSection" id="tmCars">
        <div className="tmKicker">Выбор автомобиля</div>
        <h2>Автомобили под выкуп в Санкт-Петербурге</h2>

        <div className="tmCarStage">
          <div className="tmCarPhoto">
            <div className="tmCarPhotoBg" style={{ backgroundImage: `url(${selectedCar.img})` }} />
            <img
  className="tmCarMainImg"
  src={selectedCar.img}
  alt={selectedCar.name}
  fetchPriority="high"
  decoding="async"
/>
            <button className="tmArrow tmArrowLeft" type="button" onClick={prevCar}>‹</button>
            <button className="tmArrow tmArrowRight" type="button" onClick={nextCar}>›</button>

            <div className="tmCarPhotoTop">
              <strong>{selectedCar.name}</strong>
              <span>{selectedCar.badge}</span>
            </div>

          </div>

          <div className="tmCarOffer">
            <div className="tmCarOfferPrice">
              <b>{selectedCar.price}</b>
              <span>/ сутки</span>
            </div>
            <div className="tmMonth">{selectedCar.month}</div>
          </div>

          <div className="tmCalcGrid">
            <div className="tmCalcRow">
              <div className="tmCalcIcon">⏱</div>
              <div>
                <strong>{selectedCar.term}</strong>
                <span>срок аренды с выкупом</span>
              </div>
            </div>

            <div className="tmCalcRow">
              <div className="tmCalcIcon">₽</div>
              <div>
                <strong>{selectedCar.deposit}</strong>
                <span>первоначальный взнос</span>
              </div>
            </div>
          </div>

          <div className="tmMiniFeatures">
            {selectedCar.features.map((feature) => (
              <div key={feature}>
                <b>✓</b>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="tmPrimary" type="button" style={{ marginTop: 16 }} onClick={() => openLead(selectedCar.name)}>
            ⚡ Получить условия
          </button>

          <div className="tmThumbs">
            {cars.map((car, index) => (
              <button
                key={car.name}
                className={`tmThumb ${index === selectedIndex ? "active" : ""}`}
                type="button"
                onClick={() => selectCar(index)}
              >
                <div className="tmThumbPic" style={{ backgroundImage: `url(${car.img})` }} />
                <span>{car.short}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="tmSection" id="benefits">
        <div className="tmKicker">Почему мы</div>
        <h2>Почему выбирают Телепарк для аренды автомобиля с выкупом</h2>
        <div className="tmBenefits">
          <div className="tmBenefit"><div className="tmBenefitIcon">🛡</div><strong>Без банка</strong><span>Работаем без участия банков</span></div>
          <div className="tmBenefit"><div className="tmBenefitIcon">⚡</div><strong>15 минут</strong><span>Быстрое решение по заявке</span></div>
          <div className="tmBenefit"><div className="tmBenefitIcon">🎁</div><strong>ОСАГО и КАСКО</strong><span>В подарок на первый год</span></div>
          <div className="tmBenefit"><div className="tmBenefitIcon">🚘</div><strong>Авто сегодня</strong><span>Выдача в день обращения</span></div>
          <div className="tmBenefit"><div className="tmBenefitIcon">📄</div><strong>Договор</strong><span>Все условия официально</span></div>
          <div className="tmBenefit"><div className="tmBenefitIcon">💳</div><strong>Без скрытых платежей</strong><span>Платёж понятен заранее</span></div>
        </div>
      </section>

      <section className="tmSection" id="tmReviews">
        <div className="tmKicker">Видеоотзывы</div>
        <h2>Отзывы клиентов Телепарк</h2>
        <div className="tmReviews">
          {videos.map((video) => (
            <article className="tmReview" key={video[0]}>
              {playingVideo === video[0] ? (
  <video
    controls
    autoPlay
    playsInline
    preload="auto"
    src={`/videos/${video[0]}`}
  />
) : (
  <button
    className="tmVideoPreview"
    type="button"
    onClick={() => setPlayingVideo(video[0])}
    aria-label="Смотреть видеоотзыв"
  >
    <span>▶</span>
  </button>
)}
              <div className="tmReviewInfo">
                <strong>{video[1]}</strong>
                <small>{video[2]}</small>
                <div className="tmStars">★★★★★</div>
                <p>{video[3]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tmSection" id="faq">
        <div className="tmKicker">FAQ</div>
        <h2>Часто задаваемые вопросы</h2>
        <div className="tmFaq">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="tmSection" id="seo">
  <div className="tmKicker">Информация</div>

  <h2>Автомобили под выкуп в Санкт-Петербурге без банка</h2>

  <p className="tmSeoText">
    Телепарк предлагает автомобили под выкуп в Санкт-Петербурге без участия
    банков и длительного ожидания. Вы можете выбрать автомобиль для личного
    пользования, работы или такси и оформить его по договору аренды с
    последующим выкупом. Решение по заявке принимается в течение 15 минут, а
    получить автомобиль можно уже в день обращения.
  </p>
  <h3 className="tmSeoSubtitle">
  Как проходит оформление
</h3>

<p className="tmSeoText">
  Оформление автомобиля под выкуп занимает минимум времени. После подачи
  заявки менеджер связывается с вами, помогает подобрать подходящую модель,
  объясняет условия договора и отвечает на все вопросы. После одобрения вы
  приезжаете в офис, подписываете договор и получаете автомобиль. В большинстве
  случаев весь процесс занимает один день.
</p>

<h3 className="tmSeoSubtitle">
  Кому подходит аренда с выкупом
</h3>

<p className="tmSeoText">
  Услуга подходит тем, кто хочет приобрести автомобиль без банковского кредита,
  использовать машину для личных поездок, работы или такси. Многие клиенты
  выбирают аренду с выкупом, когда банк отказал в кредите или не хочется
  переплачивать по кредитным программам. После завершения срока договора
  автомобиль переходит в собственность клиента.
</p>

  <h3 className="tmSeoSubtitle">
    Почему аренда с выкупом выгоднее кредита
  </h3>

  <p className="tmSeoText">
    В отличие от банковского кредита, оформление автомобиля под выкуп не
    требует сложной проверки и большого пакета документов. Мы рассматриваем
    каждую заявку индивидуально, поэтому даже при сложной кредитной истории
    вероятность одобрения остаётся высокой. Все условия фиксируются в договоре,
    а после завершения выплат автомобиль переходит в вашу собственность.
  </p>

  <h3 className="tmSeoSubtitle">
    Какие автомобили доступны
  </h3>

  <p className="tmSeoText">
    В наличии представлены современные автомобили различных классов: Kia Rio,
    Hyundai Solaris, Geely Coolray, Hongqi H5, TENET T7 и другие модели. Все
    автомобили проходят техническую проверку и готовы к эксплуатации сразу после
    оформления договора.
  </p>
  <h3 className="tmSeoSubtitle">
  Почему выбирают Телепарк
</h3>

<p className="tmSeoText">
  Компания «Телепарк» работает в Санкт-Петербурге и помогает клиентам оформить
  автомобиль под выкуп без участия банков. Мы предлагаем понятные условия,
  50+ автомобилей передано • Работаем официально • Выдача в течение суток, прозрачные платежи и широкий выбор автомобилей. Наша
  цель — сделать оформление максимально простым и понятным, чтобы вы могли
  пользоваться автомобилем уже в день обращения.
</p>
</section>

      <section className="tmSection" id="tmContacts">
        <div className="tmKicker">Контакты</div>
        <h2>Контакты Телепарк в Санкт-Петербурге</h2>
        <div className="tmContacts">
          <a className="tmContact" href={PHONE_LINK}>
            <div className="tmContactIcon"><PhoneCallIcon /></div>
            <div><strong>Позвонить</strong><span>+7 (901) 371-15-84</span></div>
            <div className="tmContactArrow"><ChevronIcon /></div>
          </a>
          <a className="tmContact" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
            <div className="tmContactIcon"><img src="/icons/telegram.png" alt="" /></div>
            <div><strong>Telegram</strong><span>@teleparkgdel</span></div>
            <div className="tmContactArrow"><ChevronIcon /></div>
          </a>
          <a className="tmContact" href={MAX_LINK} target="_blank" rel="noreferrer">
            <div className="tmContactIcon"><img src="/icons/max.png" alt="" /></div>
            <div><strong>MAX</strong><span>Написать менеджеру</span></div>
            <div className="tmContactArrow"><ChevronIcon /></div>
          </a>
          <div className="tmContact">
            <div className="tmContactIcon"><MapPinIcon /></div>
            <div><strong>Адрес офиса</strong><span>Санкт-Петербург, пр-т Обуховской Обороны, 271А</span></div>
            <div className="tmContactArrow"><ChevronIcon /></div>
          </div>
          <div className="tmContact">
            <div className="tmContactIcon"><ClockIcon /></div>
            <div><strong>Работаем ежедневно</strong><span>с 9:00 до 18:00</span></div>
            <div className="tmContactArrow"><ChevronIcon /></div>
          </div>
        </div>
      </section>

      <nav className="tmBottomNav">
        <div className="tmNavRow">
          <button type="button" className={activeNav === "top" ? "active" : ""} onClick={() => scrollToId("top", "top")}>
            <b><HomeIcon /></b><span>Главная</span>
          </button>
          <button type="button" className={activeNav === "cars" ? "active" : ""} onClick={() => scrollToId("tmCars", "cars")}>
            <b><CarIcon /></b><span>Авто</span>
          </button>
          <button type="button" className={activeNav === "reviews" ? "active" : ""} onClick={() => scrollToId("tmReviews", "reviews")}>
            <b><StarIcon /></b><span>Отзывы</span>
          </button>
          <button type="button" className={activeNav === "contacts" ? "active" : ""} onClick={() => scrollToId("tmContacts", "contacts")}>
            <b><ContactIcon /></b><span>Контакты</span>
          </button>
        </div>
        <button className="tmPrimary" type="button" onClick={() => openLead()}>Получить предложение</button>
      </nav>

      {leadOpen && (
        <div className="tmModalOverlay" onClick={() => setLeadOpen(false)}>
          <div className="tmModal" onClick={(event) => event.stopPropagation()}>
            <button className="tmClose" type="button" onClick={() => setLeadOpen(false)}>×</button>
            <h2>Получить условия<br />по выбранному <span>авто</span></h2>

            <div className="tmLeadCar">
              <img src={selectedCar.img} alt={selectedCar.name} />
              <div>
                <strong>{selectedCar.name}</strong>
                <div className="tmLeadBadge">{selectedCar.badge}</div>
                <div className="tmLeadPrice"><span>{selectedCar.price}</span> / сутки</div>
                <small>{selectedCar.month}</small>
              </div>
            </div>

            <div className="tmLeadInfo">
              <div className="tmLeadInfoIcon">⚡</div>
              <div>
                <b>Ответим за 15 минут</b>
                <span>Это бесплатно и ни к чему не обязывает</span>
              </div>
            </div>

            <form
              className="tmForm"
              onSubmit={async (event) => {
                event.preventDefault();
                const digits = phone.replace(/\D/g, "");
                if (digits.length !== 11) {
                  alert("Введите полный номер телефона");
                  return;
                }

                const form = event.currentTarget;
                const formData = new FormData(form);
                const request = "TP-" + Date.now().toString().slice(-6);
                formData.append("request", request);

                await fetch(FORM_ENDPOINT, {
                  method: "POST",
                  body: formData,
                  mode: "no-cors",
                });
                
                window.ym?.(110291694, "reachGoal", "lead_submit");

                const name = String(formData.get("name") || "Спасибо");
                const car = String(formData.get("car") || selectedCarName);
                window.location.href = `/thanks?name=${encodeURIComponent(name)}&car=${encodeURIComponent(car)}&request=${encodeURIComponent(request)}`;
              }}
            >
              <input className="tmField" name="name" placeholder="Ваше имя" required />
              <div className="tmPhone">
                <span>RU</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  minLength={18}
                  maxLength={18}
                  placeholder="+7 (999) 999-99-99"
                  onChange={(event) => setPhone(formatPhone(event.target.value))}
                />
              </div>
              <select name="car" required value={selectedCarName} onChange={(event) => setSelectedCarName(event.target.value)}>
                {cars.map((car) => <option key={car.name}>{car.name}</option>)}
              </select>

              <div className="tmFastLinks">
                <a className="tmFastLink" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                  <img src="/icons/telegram.png" alt="" />
                  <div><strong>Telegram</strong><span>Написать</span></div>
                </a>
                <a className="tmFastLink" href={MAX_LINK} target="_blank" rel="noreferrer">
                  <img src="/icons/max.png" alt="" />
                  <div><strong>MAX</strong><span>Написать</span></div>
                </a>
              </div>

              <button className="tmPrimary" type="submit">✈ Отправить заявку</button>
              <p className="tmPolicy">
                Нажимая кнопку <b>«Отправить заявку»</b>, вы соглашаетесь с <a href="/privacy">политикой конфиденциальности</a> и <a href="/consent">согласием на обработку персональных данных</a>.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
