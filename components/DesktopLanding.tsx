"use client";

import { useState } from "react";

const TELEGRAM_LINK = "https://t.me/teleparkgdel";

const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";

const PHONE_LINK = "tel:+79013711584";

const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwXgg5KBMb6DWffFsGH5r1NJngX0yV18CM_T_Fuu-7vc8RQ8g45uVQ47w3EU6sefgaJ/exec";

const cars = [
  {
  name: "TENET T7",
  year: "2026",
  gearbox: "АКПП",
  img: "/images/Tenet/TenetNew.png",
  price: "3 800 ₽",
  month: "≈ 115 000 ₽ / месяц",
  term: "48 месяцев",
  tag: "ПРЕМИУМ 2026",
  tagClass: "flagship",
  cta: "Получить условия",
  features: [
    "Уже доступен к выдаче",
    "135 000 ₽ первоначальный взнос",
    "ОСАГО + КАСКО в подарок",
    "Без ограничений по пробегу",
    "48 месяцев до выкупа",
    "Одобрение 99%",
  ],
},
  {
    name: "Geely Coolray",
    year: "2022",
    gearbox: "АКПП",
    img: "/images/cars/col.jpg",
    price: "2 950 ₽",
    month: "≈ 88 500 ₽ / месяц",
    term: "18 месяцев",
    tag: "🔥 Самый популярный",
    tagClass: "yellow",
    cta: "Рассчитать платёж",
    features: [
      "Через 18 месяцев авто ваше",
      "0 ₽ первоначальный взнос",
      "ОСАГО + КАСКО в подарок",
      "Всё включено",
      "Без ограничений по пробегу",
      "Одобрение 99%",
    ],
  },
  {
    name: "Kia Rio",
    year: "2022",
    gearbox: "АКПП",
    img: "/images/cars/rio.jpg",
    price: "2 950 ₽",
    month: "≈ 88 500 ₽ / месяц",
    term: "16 месяцев",
    tag: "Для работы",
    tagClass: "blue",
    cta: "Подобрать условия",
    features: [
      "Подходит для такси и доставки",
      "Авто ваше через 16 месяцев",
      "0 ₽ первоначальный взнос",
      "Всё включено",
      "Без ограничений по пробегу",
      "Одобрение 99%",
    ],
  },
  {
    name: "Hyundai Solaris",
    year: "2021",
    gearbox: "АКПП",
    img: "/images/solaris/SolarisTOP.jpg",
    price: "2 500 ₽",
    month: "≈ 75 000 ₽ / месяц",
    term: "16 месяцев",
    tag: "Выгодный вариант",
    tagClass: "green",
    cta: "Рассчитать платёж",
    features: [
      "Самый доступный платёж",
      "Авто ваше через 16 месяцев",
      "0 ₽ первоначальный взнос",
      "Всё включено",
      "Без ограничений по пробегу",
      "Одобрение 99%",
    ],
  },
  {
    name: "Hongqi H5",
    year: "2023",
    gearbox: "АКПП",
    img: "/images/cars/hon.jpg",
    price: "4 950 ₽",
    month: "≈ 148 500 ₽ / месяц",
    term: "24 месяца",
    tag: "Premium",
    tagClass: "violet",
    cta: "Получить условия",
    features: [
      "Премиум без кредита",
      "Авто ваше через 24 месяца",
      "0 ₽ первоначальный взнос",
      "ОСАГО + КАСКО в подарок",
      "Всё включено",
      "Одобрение 99%",
    ],
  },
];

const videos = [
  ["Atlas1.MOV", "Георгий • Geely Atlas Pro", "«Нужен был автомобиль для семьи. Банк не одобрил кредит, здесь всё сделали быстро — вечером уже уехал на машине.»", "📍 Санкт-Петербург"],
  ["Coolray1.MP4", "Александр • Geely Coolray", "«Искал семейную машину без кредита. Всё прозрачно, быстро оформили — реально уехал в этот же день.»", "🚘 Забрал авто сегодня"],
  ["Coolray2.MP4", "Игорь • Geely Coolray", "«Понравилось, что без скрытых условий. Всё объяснили, платёж понятный — рекомендую.»", "🔥 Одобрение за 20 минут"],
  ["Coolray3.MP4", "Дмитрий • Geely Coolray", "«Долго искал вариант без банков. Здесь реально помогли — условия адекватные, машина супер.»", "👨‍👩‍👧 Для семьи"],
  ["Coolray4.MP4", "Максим • Geely Coolray", "«Оставил заявку утром, вечером уже оформляли документы. Всё быстро.»", "⚡ Авто в день обращения"],
  ["H51.MP4", "Роман • Hongqi H5", "«Не хотел кредит. Подобрали H5, всё официально, машина очень радует.»", "✨ Premium сегмент"],
  ["Rio1.MP4", "Артём • Kia Rio", "«Нужна была машина для работы в такси. Всё быстро оформили, сразу начал работать.»", "🚕 Для такси"],
  ["Solaris1.MP4", "Виктор • Hyundai Solaris", "«Нужен был простой и надёжный авто. Одобрили быстро, забрал без проблем.»", "🔥 Самый выгодный платёж"],
  ["Solaris2.MP4", "Сергей • Hyundai Solaris", "«Приехал посмотреть — в итоге уехал на машине в этот же день.»", "⚡ Выдали сегодня"],
  ["Tigo1.MP4", "Олег • Chery Tiggo 7 Pro", "«Хотел комфортный кроссовер без кредита. Всё объяснили, условия понятные.»", "💎 Комфортный кроссовер"],
];


const faqs = [
  {
    question: "Можно ли оформить авто с плохой кредитной историей?",
    answer:
      "Да, это возможно. Мы рассматриваем разные ситуации и учитываем текущую финансовую возможность клиента. Шанс одобрения выше, чем в банке.",
  },
  {
    question: "Нужен ли первоначальный взнос?",
    answer:
      "Нет, большинство автомобилей доступны без первоначального взноса. Условия рассчитываются индивидуально под выбранный автомобиль.",
  },
  {
    question: "Какие документы нужны для оформления?",
    answer:
      "Для оформления обычно нужны паспорт и водительское удостоверение. Менеджер заранее подскажет, что потребуется именно в вашем случае.",
  },
  {
    question: "Когда автомобиль станет моим?",
    answer:
      "После окончания срока аренды с выкупом автомобиль полностью переходит в вашу собственность.",
  },
  {
    question: "Можно ли выкупить автомобиль досрочно?",
    answer:
      "Да, досрочный выкуп возможен. Условия можно обсудить с менеджером до оформления.",
  },
  {
    question: "Есть ли ограничения по пробегу?",
    answer:
      "Нет, вы можете пользоваться автомобилем без ограничений по пробегу.",
  },
  {
    question: "Что входит в ежемесячный платёж?",
    answer:
      "В платёж входит пользование автомобилем, оформление договора и сопровождение сделки. ОСАГО + КАСКО предоставляются в подарок на первый год.",
  },
  {
    question: "Можно ли использовать автомобиль в такси?",
    answer:
      "Да, у нас есть автомобили, которые подходят для работы в такси и доставке.",
  },
  {
    question: "Сколько времени занимает одобрение?",
    answer:
      "Обычно решение занимает около 15 минут после отправки заявки.",
  },
  {
    question: "Вы работаете по договору?",
    answer:
      "Да, все условия фиксируются в договоре до оформления автомобиля.",
  },
];

export default function DesktopLanding() {
  const [phone, setPhone] = useState("+7");
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const ContactIcons = () => (
    <>
      <a className="iconBtn" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
        <img src="/icons/telegram.png" alt="Telegram" />
      </a>
      <a className="iconBtn" href={MAX_LINK} target="_blank" rel="noreferrer">
        <img src="/icons/max.png" alt="MAX" />
      </a>
    </>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

        :root {
          --bg: #050607;
          --bg-2: #090b0d;
          --graphite: #11161a;
          --graphite-2: #171d21;
          --graphite-3: #20272d;
          --lime: #c8ff2f;
          --lime-2: #98df00;
          --lime-soft: rgba(200,255,47,.09);
          --lime-border: rgba(200,255,47,.18);
          --white: #ffffff;
          --muted: rgba(255,255,255,.68);
          --line: rgba(255,255,255,.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: var(--bg);
          color: var(--white);
          font-family: 'Manrope', Arial, sans-serif;
          overflow-x: hidden;
        }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; display: block; }
        .container { max-width: 1480px; margin: 0 auto; padding: 0 28px; }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(circle at 16% 8%, rgba(200,255,47,.06), transparent 28%),
            radial-gradient(circle at 86% 18%, rgba(200,255,47,.045), transparent 30%),
            linear-gradient(180deg, #050607 0%, #090b0d 48%, #050607 100%);
          pointer-events: none;
        }

        /* HEADER */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(5,6,7,.82);
          border-bottom: 1px solid rgba(200,255,47,.12);
          backdrop-filter: blur(22px);
        }
        .nav {
          max-width: 1480px;
          margin: auto;
          padding: 10px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 250px;
        }
        .logo3d {
          width: 82px;
          height: 82px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border-radius: 0;
          box-shadow: none !important;
        }
        .logo3d img,
        .logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 12px rgba(200,255,47,.12));
        }
        .brand-title {
  font-size: 31px;
  line-height: .88;
  font-weight: 950;
  letter-spacing: .5px;
  text-transform: uppercase;
}

.brand-title span {
  color: var(--lime);
  text-shadow:
    0 0 10px rgba(200,255,47,.45),
    0 0 28px rgba(200,255,47,.25);
}
        .brand-sub {
          margin-top: 6px;
          font-size: 12px;
          color: rgba(255,255,255,.62);
          letter-spacing: 4.4px;
          text-transform: uppercase;
        }
        .navLinks {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          font-size: 15px;
          font-weight: 800;
          color: rgba(255,255,255,.78);
        }
        .navLinks a {
          transition: .22s ease;
          white-space: nowrap;
        }
        .navLinks a:hover {
          color: var(--lime);
          transform: translateY(-1px);
        }
        .actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .iconBtn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(200,255,47,.12);
          overflow: hidden;
          transition: .22s ease;
        }
        .iconBtn:hover {
          transform: translateY(-2px) scale(1.04);
          border-color: rgba(200,255,47,.28);
        }
        .iconBtn img { width: 100%; height: 100%; object-fit: cover; }
        .call {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--lime), var(--lime-2));
          color: #050607;
          font-weight: 950;
          box-shadow: 0 14px 34px rgba(200,255,47,.16);
          transition: .22s ease;
        }
        .call:hover { transform: translateY(-2px); }

        /* HERO */
        .hero {
          position: relative;
          min-height: 920px;
          overflow: hidden;
          padding-top: 102px;
          background:
            linear-gradient(90deg, rgba(5,6,7,.96) 0%, rgba(5,6,7,.86) 31%, rgba(5,6,7,.45) 54%, rgba(5,6,7,.18) 100%),
            url('/images/hero/HeroTenet2.png');
          background-size: 78% auto;
background-position: right center;
          background-repeat: no-repeat;
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 71% 48%, rgba(200,255,47,.12), transparent 27%),
            linear-gradient(180deg, rgba(5,6,7,.04) 0%, rgba(5,6,7,.64) 100%);
          pointer-events: none;
        }
        .hero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 160px;
          z-index: 1;
          background: linear-gradient(180deg, transparent, var(--bg));
          pointer-events: none;
        }
        .heroInner {
          position: relative;
          z-index: 2;
          max-width: 1480px;
          margin: auto;
          padding: 70px 28px 28px;
          display: grid;
          grid-template-columns: 610px 1fr;
          gap: 38px;
          align-items: start;
        }
        .heroContent { max-width: 610px; }
        .heroBadge { display: none !important; }
        .hero h1 {
          margin: 0;
          max-width: 660px;
          font-size: 62px;
          line-height: .96;
          font-weight: 950;
          letter-spacing: -2.4px;
          text-transform: uppercase;
        }
        .hero h1 span {
          color: var(--lime);
          text-shadow: 0 0 18px rgba(200,255,47,.20);
        }
        .heroLead {
          margin: 22px 0 0;
          font-size: 22px;
          line-height: 1.45;
          color: rgba(255,255,255,.84);
        }
        .heroOfferRow { margin-top: 30px; }
        .heroBenefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 18px;
          max-width: 590px;
          margin: 0;
        }
        .heroBenefit {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 12px;
          align-items: center;
          padding: 14px;
          border-radius: 18px;
          background: rgba(17,22,26,.54);
          border: 1px solid rgba(200,255,47,.08);
          backdrop-filter: blur(12px);
        }
        .heroIcon {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          color: var(--lime);
          background: rgba(200,255,47,.065);
          border: 1px solid rgba(200,255,47,.18);
          font-size: 22px;
        }
        .heroBenefit strong {
          display: block;
          font-size: 14px;
          line-height: 1.22;
        }
        .heroBenefit span {
          display: block;
          margin-top: 4px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.35;
        }
        .heroMiniCard {
  position: absolute;
  right: 140px;
  top: 100px;
  z-index: 6;

  width: 610px;
  padding: 28px 32px;

  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 30px;
  align-items: center;

  border-radius: 26px;
  background: rgba(10, 14, 16, .78);
  border: 1px solid rgba(200,255,47,.28);
  backdrop-filter: blur(18px);
}
    .heroOfferList {
  display: grid;
  gap: 14px;
}

.heroOfferList div {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 12px;
  align-items: center;
}

.heroOfferList span {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;

  color: var(--lime);
  background: rgba(200,255,47,.06);
  border: 1px solid rgba(200,255,47,.18);
}

.heroOfferList p {
  margin: 0;
  color: rgba(255,255,255,.66);
  font-size: 13px;
  line-height: 1.25;
}

.heroOfferList b {
  display: block;
  color: white;
  font-size: 14px;
}
        .miniTop {
          width: fit-content;
          padding: 7px 13px;
          border-radius: 999px;
          color: var(--lime);
          background: rgba(200,255,47,.08);
          border: 1px solid rgba(200,255,47,.18);
          font-size: 12px;
          font-weight: 950;
          margin-bottom: 16px;
        }
        .miniName {
          font-size: 40px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -.7px;
        }
        .miniAvailable {
          width: fit-content;
          margin-top: 12px;
          padding: 9px 13px;
          border-radius: 10px;
          background: linear-gradient(135deg, #eaff8a, var(--lime));
          color: #050607;
          font-size: 12px;
          font-weight: 950;
        }
        .miniPrice {
          margin-top: 20px;
          font-size: 18px;
          color: rgba(255,255,255,.72);
        }
        .miniPrice span {
          color: var(--lime);
          font-size: 42px;
          font-weight: 950;
          text-shadow: 0 0 16px rgba(200,255,47,.16);
        }
        .miniSub {
          color: rgba(255,255,255,.70);
          margin-top: 4px;
          font-size: 17px;
          font-weight: 700;
        }
        .miniDivider {
          height: 1px;
          margin: 20px 0;
          background: rgba(255,255,255,.10);
        }
        .miniBottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .miniBottom div {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 12px;
          align-items: center;
          font-size: 13px;
          color: rgba(255,255,255,.68);
        }
        .miniBottom span {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: var(--lime);
          background: rgba(200,255,47,.06);
          border: 1px solid rgba(200,255,47,.18);
        }
        .miniBottom b { display: block; color: white; font-size: 14px; }
        .btns {
          display: flex;
          gap: 16px;
          margin-top: 26px;
          flex-wrap: wrap;
        }
        .btn {
          height: 56px;
          min-width: 248px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 950;
          transition: .22s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .primary,
        .btn.primary,
        .carBtn,
        .formLink,
        .faqCtaBtn.telegram {
          background: linear-gradient(135deg, var(--lime), var(--lime-2)) !important;
          color: #050607 !important;
          box-shadow: 0 14px 34px rgba(200,255,47,.17) !important;
        }
        .secondary,
        .btn.secondary,
        .faqCtaBtn {
          background: rgba(255,255,255,.035) !important;
          border: 1px solid rgba(200,255,47,.18) !important;
          color: white !important;
        }
        .hiddenPay {
          margin-top: 14px;
          text-align: center;
          max-width: 514px;
          color: rgba(255,255,255,.62);
          font-size: 13px;
        }
        .heroVisual,
.neonRing {
  display: none !important;
}
        .heroTrust {
          position: relative;
          z-index: 2;
          max-width: 1480px;
          margin: 12px auto 0;
          padding: 0 28px 44px;
        }
        .heroTrustGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(18,22,25,.84), rgba(7,8,9,.94));
          border: 1px solid rgba(200,255,47,.10);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
          backdrop-filter: blur(16px);
        }
        .heroTrustItem {
          padding: 24px 26px;
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 16px;
          align-items: center;
          border-right: 1px solid rgba(255,255,255,.06);
        }
        .heroTrustItem:last-child { border-right: 0; }
        .heroTrustIcon,
        .premiumIcon,
        .faqTrustIcon,
        .contactBenefitIcon,
        .faqIcon {
          color: var(--lime) !important;
          background: rgba(200,255,47,.06) !important;
          border: 1px solid rgba(200,255,47,.18) !important;
          box-shadow: none !important;
        }
        .heroTrustIcon {
          width: 56px;
          height: 56px;
          border-radius: 17px;
          display: grid;
          place-items: center;
          font-size: 24px;
        }
        .heroTrustItem strong { display: block; font-size: 16px; margin-bottom: 5px; }
        .heroTrustItem span { color: var(--muted); line-height: 1.4; }

        /* SECTIONS */
        section { padding: 66px 0; }
        .stepsSection, .benefits, .reviewsVideo, #contact, .faqSection { background: transparent; }
        .sectionRow {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }
        h2 {
          margin: 0;
          font-size: 42px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -1px;
        }
        .muted { color: var(--muted); }
        .sectionTop {
          max-width: 900px;
          margin: 0 auto 44px;
          text-align: center;
        }
        .sectionBadge {
          display: inline-block;
          margin-bottom: 16px;
          padding: 8px 13px;
          border-radius: 999px;
          color: var(--lime) !important;
          background: rgba(200,255,47,.08) !important;
          border: 1px solid rgba(200,255,47,.18) !important;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 2px;
        }
        .sectionTop h2 { font-size: 50px; line-height: 1; letter-spacing: -1.4px; }
        .sectionTop p { color: var(--muted); font-size: 19px; line-height: 1.6; }

        /* CARS */
        .carsGrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }
        .carCard {
          overflow: hidden;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(18,22,25,.92), rgba(7,8,9,.96));
          border: 1px solid rgba(200,255,47,.10);
          box-shadow: 0 22px 60px rgba(0,0,0,.38);
          transition: .25s ease;
        }
        .carCard:hover {
          transform: translateY(-6px);
          border-color: rgba(200,255,47,.27);
          box-shadow: 0 26px 70px rgba(0,0,0,.52);
        }
        .flagshipCar {
          position: relative;
          transform: scale(1.02);
          border-color: rgba(200,255,47,.42) !important;
          background:
            radial-gradient(circle at 50% 0%, rgba(200,255,47,.10), transparent 34%),
            linear-gradient(180deg, rgba(20,24,27,.98), rgba(5,6,7,.98)) !important;
          box-shadow: 0 0 0 1px rgba(200,255,47,.10), 0 30px 80px rgba(0,0,0,.58) !important;
          z-index: 4;
        }
        .flagshipCar:hover { transform: scale(1.035) translateY(-5px); }
        .carImageWrap { position: relative; height: 205px; overflow: hidden; }
        .carImageWrap::after { content:""; position:absolute; inset:0; background: linear-gradient(180deg, transparent 42%, rgba(5,6,7,.98)); }
        .carImage { width: 100%; height: 100%; object-fit: cover; transition: .5s; }
        .carCard:hover .carImage { transform: scale(1.05); }
        .carTag {
          position: absolute;
          z-index: 2;
          top: 12px;
          left: 12px;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 950;
          text-transform: uppercase;
          background: rgba(200,255,47,.10) !important;
          color: var(--lime) !important;
          border: 1px solid rgba(200,255,47,.22) !important;
          box-shadow: none !important;
        }
        .heart { position:absolute; z-index:2; top:12px; right:12px; font-size:24px; color:white; opacity:.88; }
        .carBody { padding: 18px 18px 16px; }
        .carTitleRow { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .carBody h3 { margin: 0; font-size: 24px; line-height: 1; font-weight: 950; }
        .chips { display:flex; gap:6px; }
        .chip { padding: 5px 8px; border-radius: 8px; background: rgba(255,255,255,.08); font-size: 12px; font-weight: 900; }
        .carPrice { margin-top: 12px; color: var(--lime) !important; font-size: 28px; font-weight: 950; }
        .carPrice span { font-size: 15px; color:#fff; }
        .carMonth { margin-top: 3px; color: rgba(255,255,255,.70); font-size: 14px; font-weight: 700; }
        .termBadge {
          margin-top: 10px;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid rgba(200,255,47,.16);
          background: rgba(200,255,47,.05);
          text-align: center;
          font-size: 12px;
          color: rgba(255,255,255,.78);
          width: fit-content;
        }
        .termBadge b { display:block; color: var(--lime); font-size:13px; }
        .featureGrid { display:grid; grid-template-columns: 1fr 1fr; gap: 10px 12px; margin-top: 18px; }
        .featureItem { display:flex; gap:7px; align-items:flex-start; color: rgba(255,255,255,.76); font-size: 12px; line-height:1.25; }
        .featureItem::before { content:"✓"; color: var(--lime); font-weight:950; }
        .carBtn {
          margin-top: 18px;
          width: 100%;
          height: 48px;
          border-radius: 12px;
          border: 0;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:950;
        }
        .answerTime { margin-top: 10px; text-align:center; color: rgba(255,255,255,.62); font-size: 13px; }
        .bottomBenefits {
          margin-top: 20px;
          display:grid;
          grid-template-columns: repeat(6,1fr);
          gap: 0;
          border:1px solid rgba(200,255,47,.10);
          border-radius: 22px;
          overflow:hidden;
          background: linear-gradient(180deg, rgba(18,22,25,.82), rgba(7,8,9,.92));
        }
        .bottomBenefit { padding: 22px 18px; display:flex; align-items:center; gap:14px; color:rgba(255,255,255,.82); font-weight:700; border-right:1px solid rgba(255,255,255,.06); }
        .bottomBenefit:last-child { border-right:0; }
        .premiumIcon {
          width: 46px;
          height: 46px;
          min-width: 46px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          font-size: 22px;
          font-weight: 950;
          opacity: 1 !important;
        }

        /* STEPS / BENEFITS */
        .stepsGrid, .benefitGrid { display:grid; grid-template-columns: repeat(3,1fr); gap:22px; }
        .benefitGrid { grid-template-columns: repeat(4,1fr); }
        .stepCard, .benefitCard {
          padding: 30px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(18,22,25,.90), rgba(7,8,9,.94));
          border: 1px solid rgba(200,255,47,.10);
          box-shadow: 0 18px 48px rgba(0,0,0,.30);
        }
        .stepNumber, .benefitNumber {
          width:52px;
          height:52px;
          border-radius:50%;
          display:grid;
          place-items:center;
          background: linear-gradient(135deg, var(--lime), var(--lime-2));
          color: #050607;
          font-weight:950;
          margin-bottom:20px;
        }
        .stepCard h3, .benefitCard h3 { margin:0 0 12px; font-size:26px; }
        .stepCard p, .benefitCard p { margin:0; color:var(--muted); line-height:1.6; }

        /* REVIEWS */
        .videoGrid { display:grid; grid-template-columns: repeat(5,1fr); gap:18px; }
        .videoCard {
          overflow:hidden;
          border-radius:24px;
          background: linear-gradient(180deg, rgba(18,22,25,.90), rgba(7,8,9,.94));
          border:1px solid rgba(200,255,47,.10);
        }
        .videoCard video { width:100%; height:430px; object-fit:cover; display:block; }
        .videoInfo { padding:18px; }
        .videoInfo strong { display:block; font-size:18px; margin-bottom:8px; }
        .videoInfo p { color:rgba(255,255,255,.70); font-size:14px; line-height:1.45; }
        .videoInfo span { color:rgba(255,255,255,.58); font-size:13px; }

        /* FAQ */
        .faqSection { padding: 86px 0 72px; }
        .faqGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 38px; }
        .faqItem {
          border-radius: 20px;
          border: 1px solid rgba(200,255,47,.10);
          background: linear-gradient(180deg, rgba(18,22,25,.90), rgba(7,8,9,.94));
          overflow: hidden;
          transition: .22s;
        }
        .faqItem:hover { border-color: rgba(200,255,47,.26); }
        .faqItem summary {
          min-height: 74px;
          padding: 0 26px;
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          font-size: 18px;
          font-weight: 950;
        }
        .faqItem summary::-webkit-details-marker { display: none; }
        .faqIcon {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 24px;
          line-height: 1;
          transition: .2s;
        }
        .faqItem[open] {
          border-color: rgba(200,255,47,.26);
          background:
            radial-gradient(circle at 20% 10%, rgba(200,255,47,.09), transparent 38%),
            linear-gradient(180deg, rgba(18,22,25,.94), rgba(7,8,9,.96));
        }
        .faqItem[open] .faqIcon { transform: rotate(45deg); }
        .faqAnswer { padding: 0 26px 26px; color: var(--muted); line-height: 1.6; font-size: 16px; }
        .faqTrust {
          margin-top: 26px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-radius: 22px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(18,22,25,.86), rgba(7,8,9,.94));
          border: 1px solid rgba(200,255,47,.10);
        }
        .faqTrustItem { padding: 26px 18px; text-align: center; border-right: 1px solid rgba(255,255,255,.06); }
        .faqTrustItem:last-child { border-right: 0; }
        .faqTrustIcon {
          width: 52px;
          height: 52px;
          margin: 0 auto 14px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          font-size: 26px;
        }
        .faqTrustItem strong { display: block; margin-bottom: 8px; font-size: 17px; }
        .faqTrustItem span { color: var(--muted); font-size: 14px; line-height: 1.45; }
        .faqCta {
          margin-top: 26px;
          padding: 24px 28px;
          border-radius: 22px;
          display: grid;
          grid-template-columns: 1fr auto auto auto;
          gap: 14px;
          align-items: center;
          background:
            radial-gradient(circle at 20% 20%, rgba(200,255,47,.08), transparent 38%),
            linear-gradient(180deg, rgba(18,22,25,.86), rgba(7,8,9,.94));
          border: 1px solid rgba(200,255,47,.14);
        }
        .faqCta h3 { margin: 0 0 6px; font-size: 26px; }
        .faqCta p { margin: 0; color: var(--muted); }
        .faqCtaBtn {
          min-height: 58px;
          padding: 0 22px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          white-space: nowrap;
          font-weight: 950;
        }
        .faqCtaBtn.max { background: rgba(255,255,255,.045); border: 1px solid rgba(200,255,47,.16); }
        .faqCtaBtn img { width: 26px; height: 26px; object-fit: contain; }

        /* CONTACT */
        #contact {
          position: relative;
          padding: 86px 0;
          background:
            linear-gradient(rgba(5,6,7,.78), rgba(5,6,7,.92)),
            url('/images/hero-bg.jpg');
          background-size: 82% auto;
background-position: right -60px bottom;
        }
        .contactBox {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          padding: 48px;
          display: grid;
          grid-template-columns: .96fr 1fr;
          gap: 56px;
          align-items: stretch;
          background: linear-gradient(180deg, rgba(18,22,25,.82), rgba(7,8,9,.94));
          border: 1px solid rgba(200,255,47,.14);
          box-shadow: 0 35px 110px rgba(0,0,0,.58), inset 0 1px 0 rgba(255,255,255,.05);
          backdrop-filter: blur(20px);
        }
        .contactBox::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 26% 38%, rgba(200,255,47,.10), transparent 30%),
            radial-gradient(circle at 75% 15%, rgba(255,255,255,.06), transparent 26%);
        }
        .contactInfo, .form { position: relative; z-index: 2; }
        .contactInfo { padding: 8px 8px 8px 0; display: flex; flex-direction: column; justify-content: space-between; min-height: 570px; }
        .contactBadge {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(200,255,47,.14);
          color: rgba(255,255,255,.86);
          font-size: 14px;
          font-weight: 800;
        }
        .contactBadgeDot { width: 12px; height: 12px; border-radius: 50%; background: var(--lime); box-shadow: 0 0 18px rgba(200,255,47,.45); }
        .contactBox h2 {
          margin: 44px 0 18px;
          max-width: 650px;
          font-size: 56px;
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 950;
          text-transform: uppercase;
        }
        .contactBox h2 span { color: var(--lime); text-shadow: 0 0 18px rgba(200,255,47,.18); }
        .contactBox p { max-width: 570px; margin: 0; color: rgba(255,255,255,.74); font-size: 20px; line-height: 1.55; font-weight: 500; }
        .contactBenefits { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 38px; }
        .contactBenefit { text-align: center; }
        .contactBenefitIcon { width: 62px; height: 62px; margin: 0 auto 14px; border-radius: 50%; display: grid; place-items: center; font-size: 28px; }
        .contactBenefit strong { display: block; margin-bottom: 8px; font-size: 14px; line-height: 1.25; text-transform: uppercase; }
        .contactBenefit span { display: block; color: var(--muted); font-size: 14px; line-height: 1.4; }
        .messengerBox {
          margin-top: 34px;
          padding: 22px 24px 24px;
          border-radius: 18px;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(200,255,47,.10);
        }
        .messengerTitle { margin-bottom: 16px; color: rgba(255,255,255,.88); font-weight: 950; text-transform: uppercase; font-size: 14px; }
        .messengerButtons { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .messengerBtn {
          min-height: 68px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid rgba(200,255,47,.14);
          background: rgba(255,255,255,.04);
          color: white;
          font-weight: 900;
          transition: .22s;
        }
        .messengerBtn:hover { transform: translateY(-2px); }
        .messengerBtn.telegram { color: var(--lime); }
        .messengerBtn.max { color: var(--lime); }
        .messengerBtn img { width: 34px; height: 34px; border-radius: 50%; object-fit: cover; }
        .form { padding-left: 46px; border-left: 1px solid rgba(255,255,255,.08); display: flex; flex-direction: column; gap: 18px; justify-content: center; }
        .formField, .phoneField, .form select, .form textarea {
          width: 100%;
          min-height: 76px;
          border: 1px solid rgba(200,255,47,.12);
          background: rgba(255,255,255,.045);
          color: white;
          border-radius: 16px;
          outline: none;
          font-size: 17px;
          font-weight: 600;
          transition: .2s;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
          backdrop-filter: blur(14px);
        }
        .formField { padding: 0 24px; }
        .phoneField { display: flex; align-items: center; gap: 16px; padding: 0 24px; }
        .phoneField span { color: rgba(255,255,255,.9); font-weight: 950; letter-spacing: .5px; }
        .phoneField input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: white; font-size: 17px; font-weight: 700; font-family: inherit; }
        .form select { padding: 0 24px; cursor: pointer; }
        .form textarea { min-height: 150px; resize: none; padding: 24px; font-family: inherit; }
        .formField::placeholder, .phoneField input::placeholder, .form textarea::placeholder { color: rgba(255,255,255,.54); font-weight: 500; }
        .formField:hover, .phoneField:hover, .form select:hover, .form textarea:hover, .formField:focus, .phoneField:focus-within, .form select:focus, .form textarea:focus {
          border-color: rgba(200,255,47,.30);
          box-shadow: 0 0 24px rgba(200,255,47,.08), inset 0 1px 0 rgba(255,255,255,.06);
          background: rgba(255,255,255,.06);
        }
        .form select option { background:#08100a; color:white; }
        .safeText { display: flex; align-items: center; justify-content: center; gap: 10px; color: rgba(255,255,255,.66); font-size: 14px; margin: 4px 0 2px; }
        .formLink { min-height: 76px; border: 0; border-radius: 16px; font-size: 22px; font-weight: 950; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 14px; transition: .22s; font-family: inherit; }
        .formLink:hover { transform: translateY(-2px); }
        .policyText { text-align: center; color: rgba(255,255,255,.55); font-size: 14px; line-height: 1.45; }
        .policyText a { color: var(--lime); font-weight: 800; }
        .floating { position:fixed; right:24px; bottom:24px; display:flex; flex-direction:column; gap:10px; z-index:100; }
        footer { padding:34px; text-align:center; color:rgba(255,255,255,.45); border-top:1px solid rgba(200,255,47,.08); }

       @media (max-width: 768px) {
          .navLinks { gap: 18px; font-size: 14px; }
          .carsGrid { grid-template-columns: repeat(2, 1fr); }
          .bottomBenefits { grid-template-columns: repeat(3,1fr); }
          .videoGrid { grid-template-columns: repeat(2,1fr); }
          .heroInner { grid-template-columns: 1fr; }
          .heroTrustGrid { grid-template-columns: repeat(2,1fr); }
          .heroMiniCard {
  position: relative;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  width: 100%;
  max-width: 100%;
  margin-top: 24px;
  padding: 22px 18px;
  grid-template-columns: 1fr;
  gap: 18px;
}
          .header { position: sticky; }
          .nav { flex-direction:column; align-items:flex-start; padding:12px 16px; gap:10px; }
          .brand-title { font-size:22px; }
          .brand-sub { font-size:10px; }
          .logo3d { width: 58px; height:58px; }
          .navLinks { display:none; }
          .actions { display:none; }
          .hero { min-height:auto; padding-top: 0; background-position: 60% center; }
          .heroInner { padding:42px 18px 24px; gap: 20px; }
          .hero h1 { font-size:42px; letter-spacing:-1px; }
          .heroLead { font-size:18px; line-height:1.45; }
          .heroBenefits { grid-template-columns: 1fr; }
         @media (max-width: 768px) {
  .heroMiniCard {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;

    width: 100%;
    max-width: 100%;
    margin-top: 24px;
    padding: 22px 18px;

    grid-template-columns: 1fr;
    gap: 18px;
  }
}

.miniName {
  font-size: 34px;
}

.miniPrice span {
  font-size: 40px;
}
          .miniBottom { grid-template-columns: 1fr; }
          .heroBenefit span { font-size:12px; }
          .heroTrust { padding: 0 18px 30px; }
          .heroTrustGrid { grid-template-columns: 1fr; }
          .heroTrustItem { border-right:0; border-bottom: 1px solid rgba(255,255,255,.07); }
          .heroTrustItem:last-child { border-bottom: 0; }
          .btn { width:100%; min-width:0; }
          .carsGrid, .stepsGrid, .benefitGrid, .videoGrid, .contactBox { grid-template-columns:1fr; }
          .sectionRow { align-items:flex-start; flex-direction:column; }
          .sectionTop h2 { font-size:34px; }
          h2 { font-size: 34px; }
          .carImageWrap { height:220px; }
          .bottomBenefits { grid-template-columns:1fr; }
          .bottomBenefit { border-right:0; border-bottom:1px solid rgba(255,255,255,.06); }
          .videoCard video { height:500px; }
          .contactBox { padding:28px 18px; border-radius:24px; }
          .contactInfo { min-height:auto; padding:0; }
          .contactBox h2 { font-size:36px; margin-top:28px; }
          .contactBenefits { grid-template-columns:1fr; text-align:left; }
          .contactBenefit { text-align:left; display:flex; gap:14px; align-items:center; }
          .contactBenefitIcon { margin:0; width:48px; height:48px; font-size:22px; }
          .messengerButtons { grid-template-columns:1fr; }
          .form { padding-left:0; border-left:0; }
          #contact { padding:42px 0; }
          .floating { right:14px; bottom:14px; }
          .faqGrid, .faqTrust, .faqCta { grid-template-columns: 1fr; }
          .faqTrustItem { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.07); }
          .faqTrustItem:last-child { border-bottom: 0; }
          .faqCtaBtn { width: 100%; }
          footer { padding-bottom:90px; }
        }
          .contactsSection {
  max-width: 1480px;
  margin: 80px auto 70px;
  padding: 0 28px;
}

.contactsBox {
  display: grid;
  grid-template-columns: 430px 1fr;
  gap: 34px;
  padding: 34px;
  border-radius: 34px;
  background:
    radial-gradient(circle at 18% 20%, rgba(200,255,47,.08), transparent 32%),
    linear-gradient(180deg, rgba(18,22,25,.90), rgba(7,8,9,.96));
  border: 1px solid rgba(200,255,47,.14);
}

.contactsBadge {
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  color: var(--lime);
  background: rgba(200,255,47,.08);
  border: 1px solid rgba(200,255,47,.18);
  font-size: 12px;
  font-weight: 950;
  margin-bottom: 18px;
}

.contactsSection h2 {
  margin: 0 0 28px;
  font-size: 44px;
}

.contactItem {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 14px;
  align-items: center;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255,255,255,.035);
  border: 1px solid rgba(200,255,47,.09);
  margin-bottom: 14px;
}

.contactItem span {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: grid;
  place-items: center;
  color: var(--lime);
  background: rgba(200,255,47,.065);
  border: 1px solid rgba(200,255,47,.18);
  font-size: 22px;
}

.contactItem b {
  display: block;
  margin-bottom: 4px;
}

.contactItem p {
  margin: 0;
  color: var(--muted);
  line-height: 1.45;
}

.mapPlaceholder {
  min-height: 430px;
  border-radius: 26px;
  overflow: hidden;
  border: 1px solid rgba(200,255,47,.14);
  background:
    linear-gradient(rgba(5,6,7,.15), rgba(5,6,7,.15)),
    url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}


        /* MOBILE SITE FIX v2 — адаптив для всего сайта, без скрытия блоков */
        .mobileActions { display: none; }

        @media (max-width: 768px) {
          :root { --mobile-pad: 18px; }

          html, body { width: 100%; overflow-x: hidden; }
          body { background: #050607; }
          .container { width: 100%; padding: 0 var(--mobile-pad); }
          section { padding: 44px 0; }

          .header {
            position: sticky;
            top: 0;
            z-index: 9999;
            background: rgba(5,6,7,.92);
            border-bottom: 1px solid rgba(255,255,255,.08);
            backdrop-filter: blur(18px);
          }
          .nav {
            height: 72px;
            padding: 10px var(--mobile-pad);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .brand { min-width: 0; gap: 10px; }
          .logo3d { width: 46px; height: 46px; }
          .brand-title { font-size: 20px; line-height: .92; letter-spacing: .2px; }
          .brand-sub { margin-top: 4px; font-size: 8px; letter-spacing: 2.6px; }
          .navLinks, .actions { display: none !important; }
          .mobileActions { display: flex; margin-left: auto; gap: 10px; }
          .mobileRoundBtn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: var(--lime);
            background: rgba(255,255,255,.045);
            border: 1px solid rgba(255,255,255,.12);
            font-family: inherit;
            font-size: 24px;
            font-weight: 950;
            cursor: pointer;
            padding: 0;
          }

          .menuOverlay {
            position: fixed;
            inset: 72px 0 0;
            z-index: 9998;
            background: transparent;
          }

          .mobileMenuNative {
  position: absolute;
  top: 12px;
  right: var(--mobile-pad);
  z-index: 9999;
  width: min(270px, calc(100vw - 36px));
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  border-radius: 18px;
  background: rgba(10,12,14,.98);
  border: 1px solid rgba(200,255,47,.18);
  box-shadow: 0 20px 50px rgba(0,0,0,.55);
  backdrop-filter: blur(20px);
}


          .mobileMenuNative a {
            display: block;
            padding: 14px 16px;
            border-radius: 12px;
            background: rgba(255,255,255,.04);
            border: 1px solid rgba(255,255,255,.06);
            color: #fff;
            font-size: 15px;
            font-weight: 800;
            text-align: left;
          }

          .mobileMenuNative a:hover {
            border-color: rgba(200,255,47,.25);
            color: var(--lime);
          }

          .hero {
            min-height: auto;
            padding-top: 0;
            background:
              linear-gradient(180deg, rgba(5,6,7,.22), rgba(5,6,7,.90) 76%, #050607 100%),
              linear-gradient(90deg, rgba(5,6,7,.95), rgba(5,6,7,.45)),
              url('/images/hero/HeroTenet2.png');
            background-size: auto 610px;
            background-position: 56% top;
            background-repeat: no-repeat;
          }
          .hero::before { background: radial-gradient(circle at 72% 34%, rgba(200,255,47,.22), transparent 30%); }
          .hero::after { height: 70px; }
          .heroInner {
            padding: 36px var(--mobile-pad) 20px;
            display: block;
          }
          .heroContent { max-width: none; }
          .hero h1 {
            max-width: 340px;
            font-size: 42px;
            line-height: .98;
            letter-spacing: -1.4px;
            text-transform: none;
          }
          .heroLead { max-width: 330px; margin-top: 14px; font-size: 16px; line-height: 1.45; }
          .heroOfferRow { margin-top: 96px; }
          .heroBenefits { grid-template-columns: 1fr; gap: 10px; max-width: 330px; }
          .heroBenefit {
            grid-template-columns: 48px 1fr;
            gap: 12px;
            padding: 0;
            background: transparent;
            border: 0;
          }
          .heroBenefit:nth-child(n+4) { display: none; }
          .heroIcon { width: 48px; height: 48px; border-radius: 14px; }
          .heroBenefit strong { font-size: 14px; }
          .heroBenefit span { color: var(--lime); font-weight: 900; }
          .heroMiniCard { display: none !important; }
          .btns { margin-top: 24px; display: grid; gap: 12px; }
          .btn { width: 100%; min-width: 0; height: 64px; border-radius: 14px; }
          .hiddenPay { max-width: none; margin-top: 12px; font-size: 13px; }

          .heroTrust { padding: 8px var(--mobile-pad) 24px; }
          .heroTrustGrid { grid-template-columns: repeat(2, 1fr); border-radius: 18px; }
          .heroTrustItem {
            display: block;
            text-align: center;
            padding: 16px 10px;
            border-right: 1px solid rgba(255,255,255,.06);
            border-bottom: 1px solid rgba(255,255,255,.06);
          }
          .heroTrustItem:nth-child(even) { border-right: 0; }
          .heroTrustIcon { width: 48px; height: 48px; margin: 0 auto 9px; border-radius: 50%; }
          .heroTrustItem strong { font-size: 15px; }
          .heroTrustItem span { display: block; margin-top: 5px; font-size: 12px; line-height: 1.35; }

          .sectionRow { display: block; margin-bottom: 20px; }
          .sectionRow h2, h2 { font-size: 28px; line-height: 1.08; letter-spacing: -.5px; }
          .sectionRow .muted, .sectionTop p { font-size: 14px; line-height: 1.55; }
          .sectionTop { margin-bottom: 24px; text-align: left; }
          .sectionTop h2 { font-size: 30px; }
          .sectionBadge { margin-bottom: 12px; }

          .carsGrid { grid-template-columns: 1fr; gap: 16px; }
          .flagshipCar { transform: none; }
          .flagshipCar:hover { transform: translateY(-3px); }
          .carCard { border-radius: 18px; overflow: hidden; }
          .carImageWrap { height: 230px; }
          .carBody { padding: 18px; }
          .carTitleRow { align-items: flex-start; }
          .carBody h3 { font-size: 24px; }
          .carPrice { font-size: 28px; }
          .termBadge { margin-top: 10px; }
          .featureGrid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .featureItem { font-size: 12px; }
          .carBtn { height: 50px; }

          .bottomBenefits { grid-template-columns: 1fr; border-radius: 18px; }
          .bottomBenefit { padding: 16px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.06); }
          .bottomBenefit:last-child { border-bottom: 0; }

          .stepsGrid, .benefitGrid, .videoGrid, .faqGrid, .faqTrust, .faqCta, .contactsBox, .contactBox {
            grid-template-columns: 1fr;
          }
          .stepsGrid, .benefitGrid, .videoGrid, .faqGrid { gap: 16px; }
          .stepCard, .benefitCard { padding: 22px; border-radius: 20px; }
          .stepCard h3, .benefitCard h3 { font-size: 22px; }

          .videoCard { border-radius: 20px; }
          .videoCard video { height: 520px; }
          .videoInfo { padding: 16px; }

          .faqSection { padding: 48px 0; }
          .faqItem summary { min-height: 64px; padding: 0 18px; font-size: 15px; }
          .faqAnswer { padding: 0 18px 18px; font-size: 14px; }
          .faqTrustItem { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.07); }
          .faqTrustItem:last-child { border-bottom: 0; }
          .faqCta { padding: 20px; }
          .faqCta h3 { font-size: 22px; }
          .faqCtaBtn { width: 100%; }

          .contactsSection { margin: 44px auto; padding: 0 var(--mobile-pad); }
          .contactsBox { padding: 18px; border-radius: 22px; gap: 18px; }
          .contactsSection h2 { font-size: 28px; }
          .contactItem { grid-template-columns: 44px 1fr; padding: 14px; }
          .contactItem span { width: 44px; height: 44px; }
          .mapPlaceholder { min-height: 260px; border-radius: 18px; }

          #contact { padding: 44px 0; background-position: center bottom; background-size: cover; }
          .contactBox { padding: 20px; border-radius: 24px; gap: 22px; }
          .contactInfo { min-height: 0; padding: 0; }
          .contactBox h2 { margin-top: 28px; font-size: 32px; line-height: 1.08; }
          .contactBox p { font-size: 15px; }
          .contactBenefits { grid-template-columns: 1fr; gap: 14px; }
          .contactBenefit { text-align: left; display: flex; align-items: center; gap: 12px; }
          .contactBenefitIcon { margin: 0; width: 48px; height: 48px; min-width: 48px; }
          .messengerButtons { grid-template-columns: 1fr; gap: 12px; }
          .form { padding-left: 0; border-left: 0; gap: 12px; }
          .formField, .phoneField, .form select, .form textarea { min-height: 60px; border-radius: 14px; font-size: 15px; }
          .formLink { min-height: 62px; font-size: 18px; }
          .policyText { font-size: 12px; }

          .floating {
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px var(--mobile-pad) max(10px, env(safe-area-inset-bottom));
  background: rgba(5,6,7,.94);
  border-top: 1px solid rgba(255,255,255,.09);
  backdrop-filter: blur(18px);
}

.floatingCta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 58px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--lime), var(--lime-2));
  color: #050607;
  font-size: 18px;
  font-weight: 950;
}
          footer { padding: 26px 18px 92px; font-size: 12px; }
        }

        @media (max-width: 390px) {
          :root { --mobile-pad: 14px; }
          .hero h1 { font-size: 36px; }
          .heroOfferRow { margin-top: 72px; }
          .carImageWrap { height: 205px; }
          .videoCard video { height: 470px; }
        }
@media (max-width: 768px) {
  .header {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }

  .hero {
    padding-top: 92px !important;
  }
}

/* FINAL MOBILE MENU FIX */
@media (max-width: 768px) {
  .header {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 999999 !important;
  }

  .nav,
  .mobileActions,
  .mobileRoundBtn {
    position: relative !important;
    z-index: 1000001 !important;
    pointer-events: auto !important;
  }

  .mobileRoundBtn {
    appearance: none !important;
    -webkit-appearance: none !important;
    border: 1px solid rgba(255,255,255,.12) !important;
  }

  .menuOverlay {
    position: fixed !important;
    inset: 72px 0 0 !important;
    z-index: 1000000 !important;
    background: transparent !important;
  }

  .mobileMenuNative {
    position: fixed !important;
    top: 84px !important;
    right: 18px !important;
    z-index: 1000002 !important;
    width: min(270px, calc(100vw - 36px)) !important;
    padding: 12px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
    border-radius: 18px !important;
    background: rgba(10,12,14,.98) !important;
    border: 1px solid rgba(200,255,47,.18) !important;
    box-shadow: 0 20px 50px rgba(0,0,0,.55) !important;
    backdrop-filter: blur(20px) !important;
  }

  .mobileMenuNative a {
    display: block !important;
    padding: 14px 16px !important;
    border-radius: 12px !important;
    background: rgba(255,255,255,.04) !important;
    border: 1px solid rgba(255,255,255,.06) !important;
    color: #fff !important;
    font-size: 15px !important;
    font-weight: 800 !important;
    text-align: left !important;
  }

  .hero {
    padding-top: 92px !important;
  }
}


/* FINAL CHECKBOX MOBILE MENU — работает даже без React-клика */
@media (max-width: 768px) {
  .header {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 999999 !important;
  }

  .nav,
  .mobileActions,
  .mobileRoundBtn,
  .mobileMenuButton {
    position: relative !important;
    z-index: 1000003 !important;
    pointer-events: auto !important;
  }

  .mobileActions {
    display: flex !important;
    margin-left: auto !important;
    gap: 10px !important;
  }

  .mobileMenuToggle {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  .mobileMenuButton {
    cursor: pointer !important;
    user-select: none !important;
    -webkit-tap-highlight-color: transparent !important;
  }

  .menuOverlay {
    display: none !important;
    position: fixed !important;
    inset: 72px 0 0 0 !important;
    z-index: 1000000 !important;
    background: transparent !important;
  }

  .mobileMenuNative {
    display: none !important;
    position: fixed !important;
    top: 84px !important;
    right: 18px !important;
    z-index: 1000002 !important;
    width: min(270px, calc(100vw - 36px)) !important;
    padding: 12px !important;
    flex-direction: column !important;
    gap: 8px !important;
    border-radius: 18px !important;
    background: rgba(10,12,14,.98) !important;
    border: 1px solid rgba(200,255,47,.18) !important;
    box-shadow: 0 20px 50px rgba(0,0,0,.55) !important;
    backdrop-filter: blur(20px) !important;
  }

  .mobileMenuToggle:checked ~ .menuOverlay {
    display: block !important;
  }

  .mobileMenuToggle:checked ~ .mobileMenuNative {
    display: flex !important;
  }

  .mobileMenuNative a {
    display: block !important;
    padding: 14px 16px !important;
    border-radius: 12px !important;
    background: rgba(255,255,255,.04) !important;
    border: 1px solid rgba(255,255,255,.06) !important;
    color: #fff !important;
    font-size: 15px !important;
    font-weight: 800 !important;
    text-align: left !important;
  }

  .hero {
    padding-top: 92px !important;
  }
}
  @media (max-width: 768px) {
  .mobileMenuToggle {
    display: none !important;
  }

  .menuOverlay {
    display: none;
    position: fixed !important;
    inset: 72px 0 0 0 !important;
    z-index: 999998 !important;
    background: transparent !important;
  }

  .mobileMenuNative {
    display: none !important;
    position: fixed !important;
    top: 84px !important;
    right: 18px !important;
    z-index: 999999 !important;
  }

  .mobileMenuToggle:checked ~ .menuOverlay {
    display: block !important;
  }

  .mobileMenuToggle:checked ~ .mobileMenuNative {
    display: flex !important;
  }
}
  .leadModalOverlay {
  position: fixed;
  inset: 0;
  z-index: 2000000;
  background: rgba(0,0,0,.78);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
}

.leadModal {
  position: relative;
  width: 100%;
  max-width: 520px;
  padding: 28px 18px 20px;
  border-radius: 30px;
  background:
    radial-gradient(circle at 18% 0%, rgba(200,255,47,.10), transparent 32%),
    linear-gradient(180deg, rgba(18,22,25,.98), rgba(7,8,9,.98));
  border: 1px solid rgba(200,255,47,.26);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.04) inset,
    0 0 34px rgba(200,255,47,.14),
    0 30px 90px rgba(0,0,0,.70);
}

.leadModal::after {
  content: "";
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: -1px;
  height: 1px;
  background: var(--lime);
  box-shadow: 0 0 22px rgba(200,255,47,.9);
}

.leadModalClose {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(200,255,47,.18);
  border-radius: 50%;
  background: rgba(255,255,255,.07);
  color: white;
  font-size: 34px;
  line-height: 1;
  cursor: pointer;
}

.leadModalCarIcon {
  margin-bottom: 12px;
  color: var(--lime);
  font-size: 28px;
  filter: drop-shadow(0 0 14px rgba(200,255,47,.35));
}

.leadModal h2 {
  margin: 0 50px 12px 0;
  font-size: 34px;
  line-height: 1.04;
  font-weight: 950;
  letter-spacing: -.8px;
}

.leadModal h2 span {
  display: block;
  color: var(--lime);
}

.leadModalText {
  margin: 0 0 20px;
  color: rgba(255,255,255,.70);
  font-size: 17px;
  line-height: 1.45;
}

.leadModalForm {
  padding: 0 !important;
  border-left: 0 !important;
  gap: 12px !important;
}

.leadInput {
  min-height: 62px !important;
  border-radius: 16px !important;
  background: rgba(255,255,255,.045) !important;
  border: 1px solid rgba(255,255,255,.12) !important;
}

.leadInput:focus,
.leadInput:focus-within {
  border-color: rgba(200,255,47,.34) !important;
  box-shadow: 0 0 24px rgba(200,255,47,.10) !important;
}

.leadModalSubmit {
  margin-top: 6px;
  width: 100%;
  min-height: 66px;
  border: 0;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--lime), var(--lime-2));
  color: #050607;
  font-size: 20px;
  font-weight: 950;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;
  box-shadow: 0 0 28px rgba(200,255,47,.22);
}

.leadModalSubmit span {
  font-size: 28px;
}

.leadModalTrust {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 18px;
}

.leadModalTrust div {
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 8px;
  align-items: start;
  color: rgba(255,255,255,.70);
  font-size: 13px;
  line-height: 1.35;
}

.leadModalTrust b {
  color: var(--lime);
  font-size: 22px;
  line-height: 1;
}

.leadModalRating {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,.10);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  align-items: center;
}

.leadModalRating span {
  color: #ffd84d;
  letter-spacing: 3px;
  font-size: 17px;
}

.leadModalRating p {
  margin: 0;
  color: rgba(255,255,255,.72);
  font-size: 14px;
  line-height: 1.35;
}

.leadModalPolicy {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,.10);
  color: rgba(255,255,255,.58);
  font-size: 12px;
  line-height: 1.45;
  text-align: center;
}

.leadModalPolicy a {
  color: var(--lime);
  font-weight: 800;
}

@media (max-width: 390px) {
  .leadModal {
    padding: 24px 14px 18px;
    border-radius: 26px;
  }

  .leadModal h2 {
    font-size: 30px;
  }

  .leadModalTrust {
    grid-template-columns: 1fr;
  }
}
  /* =========================
   TELEPARK MOBILE V2
========================= */

.mobileV2{
  display:none;
}

@media (max-width:768px){

.hero {
  display: none !important;
}

.mobileV2{
    display:block;
    background:#050607;
}

.mobileV2Hero{

padding:95px 20px 28px;

background:
linear-gradient(180deg,
rgba(5,6,7,.18),
rgba(5,6,7,.92) 72%),

url('/images/hero/HeroTenet2.png');

background-size:cover;
background-position:center;

}

.mobileV2Badge{

display:inline-block;

padding:8px 14px;

border-radius:999px;

background:rgba(200,255,47,.08);

border:1px solid rgba(200,255,47,.2);

color:var(--lime);

font-size:12px;

font-weight:900;

margin-bottom:22px;

}

.mobileV2Hero h1{

margin:0;

font-size:48px;

line-height:.95;

font-weight:950;

letter-spacing:-2px;

}

.mobileV2Hero h1 span{

color:var(--lime);

text-shadow:0 0 18px rgba(200,255,47,.45);

}

.mobileV2Hero p{

margin:20px 0 28px;

color:rgba(255,255,255,.74);

line-height:1.55;

font-size:16px;

}

.mobileV2Cta,

.mobileV2BottomCta{

width:100%;

height:64px;

border:none;

border-radius:18px;

font-size:18px;

font-weight:950;

background:linear-gradient(135deg,var(--lime),var(--lime-2));

color:#050607;

box-shadow:

0 0 35px rgba(200,255,47,.25),

0 18px 45px rgba(200,255,47,.18);

}

.mobileV2Benefits{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:12px;

margin-top:30px;

}

.mobileV2Benefits div{

padding:18px 12px;

border-radius:18px;

background:#11161a;

border:1px solid rgba(200,255,47,.08);

text-align:center;

}

.mobileV2Benefits b{

display:block;

font-size:28px;

margin-bottom:10px;

}

.mobileV2Benefits span{

font-size:13px;

color:#d8d8d8;

}

.mobileV2Block{

padding:34px 20px;

}

.mobileV2TitleRow{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:18px;

}

.mobileV2TitleRow h2,

.mobileV2Block h2{

margin:0;

font-size:28px;

font-weight:950;

}

.mobileV2TitleRow a{

color:var(--lime);

font-size:14px;

font-weight:800;

}

.mobileV2Cars{

display:flex;

gap:16px;

overflow-x:auto;

padding-bottom:10px;

scroll-snap-type:x mandatory;

}

.mobileV2Car{

flex:0 0 86%;

background:#11161a;

border:1px solid rgba(200,255,47,.1);

border-radius:24px;

overflow:hidden;

padding-bottom:18px;

scroll-snap-align:center;

}

.mobileV2Car img{

height:220px;

width:100%;

object-fit:cover;

}

.mobileV2Car strong{

display:block;

font-size:22px;

padding:18px 18px 8px;

color:white;

}

.mobileV2Car span{

padding:0 18px;

display:block;

font-size:18px;

color:var(--lime);

font-weight:900;

}

.mobileV2Steps{

display:grid;

gap:18px;

margin-top:22px;

}

.mobileV2Steps div{

padding:22px;

border-radius:22px;

background:#11161a;

border:1px solid rgba(200,255,47,.08);

}

.mobileV2Steps b{

width:42px;

height:42px;

display:grid;

place-items:center;

border-radius:50%;

background:var(--lime);

color:#050607;

margin-bottom:14px;

}

.mobileV2Steps strong{

display:block;

font-size:20px;

margin-bottom:8px;

}

.mobileV2Steps span{

color:#b8b8b8;

}

.mobileV2Why{

display:grid;

gap:14px;

margin-top:20px;

}

.mobileV2Why div{

padding:20px;

border-radius:18px;

background:#11161a;

border:1px solid rgba(200,255,47,.08);

font-size:18px;

}

.mobileV2BottomCta{

margin:25px 20px 45px;

.mobileV2TextBtn {
  border: 0;
  background: transparent;
  color: var(--lime);
  font-size: 14px;
  font-weight: 900;
  font-family: inherit;
}

.mobileV2Contacts {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.mobileV2Contacts a {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 14px;
  align-items: center;
  padding: 16px;
  border-radius: 20px;
  background: #11161a;
  border: 1px solid rgba(200,255,47,.12);
}

.mobileV2ContactIcon {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: var(--lime);
  background: rgba(200,255,47,.07);
  border: 1px solid rgba(200,255,47,.18);
  font-size: 24px;
}

.mobileV2ContactIcon img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.mobileV2Contacts strong {
  display: block;
  color: #fff;
  font-size: 17px;
  font-weight: 950;
}

.mobileV2Contacts span {
  display: block;
  margin-top: 4px;
  color: rgba(255,255,255,.62);
  font-size: 14px;
}
}

      `}</style>

      <main id="top">
        <header className="header">
          <div className="nav">
            <a className="brand" href="#top" aria-label="Телепарк">

  <div className="logo3d">
    <img src="/logo/teleparklogo3.png" className="logo" alt="Телепарк" />
  </div>

  <div>
    <div className="brand-title">
  ТЕЛЕ<span>ПАРК</span>
</div>
    <div className="brand-sub">АВТО ПОД ВЫКУП</div>
  </div>

</a>

            <nav className="navLinks" aria-label="Главное меню">
  <a onClick={() => document.getElementById("mobileMenuToggle")?.click()} href="#cars">Авто</a>
<a onClick={() => document.getElementById("mobileMenuToggle")?.click()} href="#conditions">Условия</a>
<a onClick={() => document.getElementById("mobileMenuToggle")?.click()} href="#steps">Как это работает</a>
<a onClick={() => document.getElementById("mobileMenuToggle")?.click()} href="#reviews">Отзывы</a>
<a onClick={() => document.getElementById("mobileMenuToggle")?.click()} href="#faq">FAQ</a>
<a onClick={() => document.getElementById("mobileMenuToggle")?.click()} href="#contacts">Контакты</a>
            </nav>

            <div className="actions">
              <ContactIcons />
              <a className="call" href="#contact">Подобрать авто</a>
            </div>

            <div className="mobileActions" aria-label="Быстрые действия">
              <a className="mobileRoundBtn" href={PHONE_LINK} aria-label="Позвонить">
                ☎
              </a>

              <input
                id="mobileMenuToggle"
                className="mobileMenuToggle"
                type="checkbox"
                aria-hidden="true"
              />

              <label
                className="mobileRoundBtn mobileMenuButton"
                htmlFor="mobileMenuToggle"
                aria-label="Открыть меню"
              >
                ☰
                </label>
              <nav className="mobileMenuNative" aria-label="Мобильное меню">
                <a onClick={() => { const el = document.getElementById("mobileMenuToggle") as HTMLInputElement | null; if (el) el.checked = false; }} href="#cars">Авто</a>
                <a onClick={() => { const el = document.getElementById("mobileMenuToggle") as HTMLInputElement | null; if (el) el.checked = false; }} href="#conditions">Условия</a>
                <a onClick={() => { const el = document.getElementById("mobileMenuToggle") as HTMLInputElement | null; if (el) el.checked = false; }} href="#steps">Как это работает</a>
                <a onClick={() => { const el = document.getElementById("mobileMenuToggle") as HTMLInputElement | null; if (el) el.checked = false; }} href="#reviews">Отзывы</a>
                <a onClick={() => { const el = document.getElementById("mobileMenuToggle") as HTMLInputElement | null; if (el) el.checked = false; }} href="#faq">FAQ</a>
                <a onClick={() => { const el = document.getElementById("mobileMenuToggle") as HTMLInputElement | null; if (el) el.checked = false; }} href="#contacts">Контакты</a>
              </nav>
              <label
  className="menuOverlay"
  htmlFor="mobileMenuToggle"
  aria-label="Закрыть меню"
/>
            </div>
          </div>

          
        </header>
        <section className="mobileV2">
  <div className="mobileV2Hero">
    <div className="mobileV2Badge">АВТОМОБИЛЬ ПОД ВЫКУП</div>

    <h1>
      БЕЗ БАНКА<br />
      И <span>ЛИШНИХ</span><br />
      УСЛОВИЙ
    </h1>

    <p>
      Одобрение 99% • Решение за 15 минут<br />
      Авто в день обращения
    </p>
    <div className="mobileV2Block">
  <h2>Свяжитесь с нами</h2>

  <div className="mobileV2Contacts">

    <a href={PHONE_LINK}>
      <div className="mobileV2ContactIcon">📞</div>

      <div>
        <strong>Позвонить</strong>
        <span>+7 (901) 371-15-84</span>
      </div>

    </a>

    <a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noreferrer"
    >
      <div className="mobileV2ContactIcon">
        <img src="/icons/telegram.png" alt="" />
      </div>

      <div>
        <strong>Telegram</strong>
        <span>@teleparkgdel</span>
      </div>

    </a>

    <a
      href={MAX_LINK}
      target="_blank"
      rel="noreferrer"
    >
      <div className="mobileV2ContactIcon">
        <img src="/icons/max.png" alt="" />
      </div>

      <div>
        <strong>MAX</strong>
        <span>Написать менеджеру</span>
      </div>

    </a>

  </div>
</div>

    <button
      type="button"
      className="mobileV2Cta"
      onClick={() => setLeadModalOpen(true)}
    >
      Получить предложение
    </button>

    <div className="mobileV2Benefits">
      <div>
        <b>🛡</b>
        <span>Одобрение<br />99%</span>
      </div>
      <div>
        <b>⚡</b>
        <span>Решение<br />за 15 минут</span>
      </div>
      <div>
        <b>🎁</b>
        <span>ОСАГО и КАСКО<br />в подарок</span>
      </div>
    </div>
  </div>

  <div className="mobileV2Block" id="cars">
    <div className="mobileV2TitleRow">
      <h2>Популярные автомобили</h2>
      <button
  type="button"
  className="mobileV2TextBtn"
  onClick={() => setLeadModalOpen(true)}
>
  Смотреть все
</button>
    </div>

    <div className="mobileV2Cars">
      {cars.slice(0, 3).map((car) => (
        <button
          type="button"
          className="mobileV2Car"
          key={car.name}
          onClick={() => setLeadModalOpen(true)}
        >
          <img src={car.img} alt={car.name} />
          <strong>{car.name}</strong>
          <span>{car.price} / день</span>
        </button>
      ))}
    </div>
  </div>

  <div className="mobileV2Block" id="steps">
    <h2>Как это работает</h2>

    <div className="mobileV2Steps">
      <div>
        <b>1</b>
        <strong>Оставляете заявку</strong>
        <span>Заполните форму за 1 минуту</span>
      </div>

      <div>
        <b>2</b>
        <strong>Получаете решение</strong>
        <span>Мы одобряем заявку за 15 минут</span>
      </div>

      <div>
        <b>3</b>
        <strong>Забираете автомобиль</strong>
        <span>Вы получаете авто в день обращения</span>
      </div>
    </div>
  </div>

  <div className="mobileV2Block">
    <h2>Почему выбирают нас</h2>

    <div className="mobileV2Why">
      <div>🛡 <b>Без скрытых платежей</b></div>
      <div>⚡ <b>Решение за 15 минут</b></div>
      <div>🚗 <b>Авто в день обращения</b></div>
      <div>📄 <b>Официальный договор</b></div>
    </div>
  </div>

  <button
    type="button"
    className="mobileV2BottomCta"
    onClick={() => setLeadModalOpen(true)}
  >
    Получить предложение
  </button>
</section>

        <section className="hero">
          <div className="heroInner">
            <div className="heroContent">
              

              <h1>
                Автомобиль под выкуп<br />
                <span>без банка и лишних условий</span>
              </h1>

              <p className="heroLead">
                Премиальный подбор авто для работы, семьи и бизнеса. Официальный договор, прозрачный платёж и выдача в день обращения.
              </p>

              <div className="heroOfferRow">
                <div className="heroBenefits">
                  <div className="heroBenefit">
                    <div className="heroIcon">🛡</div>
                    <div>
                      <strong>Одобрение 99%</strong>
                      <span>Даже с плохой кредитной историей</span>
                    </div>
                  </div>

                  <div className="heroBenefit">
                    <div className="heroIcon">⏱</div>
                    <div>
                      <strong>Решение за 15 минут</strong>
                      <span>Быстрое оформление и выдача авто</span>
                    </div>
                  </div>

                  <div className="heroBenefit">
                    <div className="heroIcon">🎁</div>
                    <div>
                      <strong>ОСАГО + КАСКО</strong>
                      <span>В подарок на 1 год без доплат</span>
                    </div>
                  </div>

                  <div className="heroBenefit">
                    <div className="heroIcon">🏁</div>
                    <div>
                      <strong>Без ограничений по пробегу</strong>
                      <span>Пробег не ограничен</span>
                    </div>
                  </div>
                </div>

                <div className="heroMiniCard heroOfferCard">
  <div>
    <div className="miniTop">✦ НОВОЕ ПОСТУПЛЕНИЕ</div>
    <div className="miniName">TENET T7</div>

    <div className="miniPrice">
      от <span>3 800 ₽</span> / сутки
    </div>

    <div className="miniSub">≈ 115 000 ₽ / месяц</div>
  </div>

  <div className="heroOfferList">
    <div>
      <span>▣</span>
      <p><b>48 месяцев</b>до выкупа</p>
    </div>

    <div>
      <span>₽</span>
      <p><b>135 000 ₽</b>первоначальный взнос</p>
    </div>

    <div>
      <span>⚡</span>
      <p><b>Ответ</b>за 15 минут</p>
    </div>
  </div>
</div>

              <div className="btns">
                <a href="#contact" className="btn primary">Подобрать автомобиль</a>
                <a href="#cars" className="btn secondary">Рассчитать платёж</a>
              </div>

              <div className="hiddenPay">🔒 Никаких скрытых платежей и комиссий</div>
            </div>

            <div className="heroVisual">
              <img
                className="heroCar"
                src="/images/hero/tenet-t7.png"
                alt="TENET T7"
              />

              <div className="neonRing" />
            </div>
          </div>
</div>
          <div className="heroTrust">
            <div className="heroTrustGrid">
              <div className="heroTrustItem">
                <div className="heroTrustIcon">🛡</div>
                <div>
                  <strong>Прозрачные условия</strong>
                  <span>Без скрытых платежей и комиссий</span>
                </div>
              </div>

              <div className="heroTrustItem">
                <div className="heroTrustIcon">▣</div>
                <div>
                  <strong>Официальный договор</strong>
                  <span>Полная юридическая защита</span>
                </div>
              </div>

              <div className="heroTrustItem">
                <div className="heroTrustIcon">🚘</div>
                <div>
                  <strong>Авто в день обращения</strong>
                  <span>Быстрая выдача без задержек</span>
                </div>
              </div>

              <div className="heroTrustItem">
                <div className="heroTrustIcon">🎧</div>
                <div>
                  <strong>Поддержка 24/7</strong>
                  <span>Всегда на связи, поможем и подскажем</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cars">
          <div className="container">
            <div className="sectionRow">
              <div>
                <h2>Популярные автомобили</h2>
                <p className="muted">Все автомобили проверены и готовы к выдаче</p>
              </div>
              <a className="muted" href="#contact">Смотреть все автомобили →</a>
            </div>

            <div className="carsGrid">
              {cars.map((car) => (
                <article
                  className={`carCard ${
                    car.name === "TENET T7" ? "flagshipCar" : ""
                  }`}
                  key={car.name}
                >
                  <div className="carImageWrap">
                    <img src={car.img} className="carImage" alt={car.name} />
                    <div className={`carTag ${car.tagClass}`}>{car.tag}</div>
                    <div className="heart">♡</div>
                  </div>

                  <div className="carBody">
                    <div className="carTitleRow">
                      <h3>{car.name}</h3>
                      <div className="chips">
                        <span className="chip">{car.year}</span>
                        <span className="chip">{car.gearbox}</span>
                      </div>
                    </div>

                    <div className="carPrice">{car.price} <span>/ сутки</span></div>
                    <div className="carMonth">{car.month}</div>
                    <div className="termBadge"><b>{car.term}</b>до выкупа</div>

                    <div className="featureGrid">
                      {car.features.map((feature) => (
                        <div className="featureItem" key={feature}>{feature}</div>
                      ))}
                    </div>

                    <a className="carBtn" href="#contact">{car.cta}</a>
                    <div className="answerTime">⚡ Ответ за 15 минут</div>
                  </div>
                </article>
              ))}
            </div>

              <div className="bottomBenefits">
              <div className="bottomBenefit">
                <span className="premiumIcon">🛡</span>
                <b>Без залогов и депозитов</b>
              </div>

              <div className="bottomBenefit">
                <span className="premiumIcon">₽</span>
                <b>Никаких скрытых платежей</b>
              </div>

              <div className="bottomBenefit">
                <span className="premiumIcon">✦</span>
                <b>ОСАГО + КАСКО в подарок</b>
              </div>

              <div className="bottomBenefit">
                <span className="premiumIcon">✓</span>
                <b>Можно выкупить досрочно</b>
              </div>

              <div className="bottomBenefit">
                <span className="premiumIcon">▣</span>
                <b>Оформление по двум документам</b>
              </div>

              <div className="bottomBenefit">
                <span className="premiumIcon">🚘</span>
                <b>Выдача авто в день обращения</b>
              </div>
            </div>
          </div>
        </section>

        <section className="stepsSection" id="steps">
          <div className="container">
            <div className="sectionTop">
              <span className="sectionBadge">КАК ЭТО РАБОТАЕТ</span>
              <h2>Получить авто проще,<br />чем кажется</h2>
              <p>Без банка, долгих ожиданий и сложных схем.</p>
            </div>

            <div className="stepsGrid">
              <div className="stepCard"><div className="stepNumber">01</div><h3>Оставьте заявку</h3><p>Подберём автомобиль под вашу задачу: работа, такси, семья или личные поездки.</p></div>
              <div className="stepCard"><div className="stepNumber">02</div><h3>Получите решение</h3><p>Обычно в течение 15 минут. Без банка и долгих ожиданий.</p></div>
              <div className="stepCard"><div className="stepNumber">03</div><h3>Заберите авто</h3><p>Большинство клиентов уезжают на автомобиле уже в день обращения.</p></div>
            </div>
          </div>
        </section>

        <section id="conditions" className="benefits">
          <div className="container">
            <div className="sectionTop">
              <span className="sectionBadge">ПОЧЕМУ ВЫБИРАЮТ ТЕЛЕПАРК</span>
              <h2>Условия, с которыми<br />удобно начать</h2>
              <p>Подберём автомобиль для такси, работы, доставки или личного пользования. Решение за 15 минут — даже если банк отказал.</p>
            </div>

            <div className="benefitGrid">
              {[
                ["01", "0 ₽ взнос", "Начните пользоваться авто без крупного первого платежа"],
                ["02", "16–24 мес.", "Комфортный срок выкупа под ваш бюджет"],
                ["03", "Решение сразу", "Быстро рассматриваем заявку и предлагаем варианты"],
                ["04", "21+ лет", "Простые условия оформления для водителей"],
              ].map(([num, title, text]) => (
                <div className="benefitCard" key={num}>
                  <div className="benefitNumber">{num}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="reviewsVideo" id="reviews">
          <div className="container">
            <div className="sectionTop">
              <span className="sectionBadge">РЕАЛЬНЫЕ КЛИЕНТЫ ТЕЛЕПАРК</span>
              <h2>Люди реально получают<br />автомобили в день обращения</h2>
              <p>Реальные выдачи автомобилей в Санкт-Петербурге.</p>
            </div>

            <div className="videoGrid">
              {videos.map(([src, title, text, label]) => (
                <div className="videoCard" key={src}>
                  <video autoPlay muted loop playsInline>
                    <source src={`/videos/${src}`} />
                  </video>
                  <div className="videoInfo">
                    <strong>{title}</strong>
                    <p>{text}</p>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="faqSection" id="faq">
          <div className="container">
            <div className="sectionTop">
              <span className="sectionBadge">FAQ</span>
              <h2>
                Ответы на частые<br />вопросы
              </h2>
              <p>
                Собрали главное, чтобы вам было проще принять решение перед заявкой.
              </p>
            </div>

            <div className="faqGrid">
              {faqs.map((item, index) => (
                <details className="faqItem" key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <span className="faqIcon">+</span>
                  </summary>

                  <div className="faqAnswer">{item.answer}</div>
                </details>
              ))}
            </div>

            <div className="faqTrust">
              <div className="faqTrustItem">
                <div className="faqTrustIcon">🛡</div>
                <strong>Надёжно и прозрачно</strong>
                <span>Работаем по договору. Все условия фиксируются до оформления.</span>
              </div>

              <div className="faqTrustItem">
                <div className="faqTrustIcon">🔒</div>
                <strong>Данные защищены</strong>
                <span>Мы не передаём ваши данные третьим лицам.</span>
              </div>

              <div className="faqTrustItem">
                <div className="faqTrustIcon">⏱</div>
                <strong>Быстрое решение</strong>
                <span>Обычно решение по заявке занимает около 15 минут.</span>
              </div>

              <div className="faqTrustItem">
                <div className="faqTrustIcon">🎁</div>
                <strong>ОСАГО + КАСКО</strong>
                <span>Страховка предоставляется в подарок на первый год.</span>
              </div>
            </div>

            <div className="faqCta">
              <div>
                <h3>Остались вопросы?</h3>
                <p>Напишите нам в удобный мессенджер или оставьте заявку на сайте.</p>
              </div>

              <a className="faqCtaBtn telegram" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                <img src="/icons/telegram.png" alt="Telegram" />
                Telegram
              </a>

              <a className="faqCtaBtn max" href={MAX_LINK} target="_blank" rel="noreferrer">
                <img src="/icons/max.png" alt="MAX" />
                MAX
              </a>

              <a className="faqCtaBtn" href="#contact">
                Оставить заявку
              </a>
            </div>
          </div>
        </section>
         <section className="contactsSection" id="contacts">

  <div className="contactsBox">

    <div className="contactsLeft">

      <div className="contactsBadge">КОНТАКТЫ</div>



      <h2>Приезжайте в Телепарк</h2>



      <div className="contactItem">

        <span>📍</span>

        <div>

          <b>Адрес</b>

          <p>Санкт-Петербург, пр-т Обуховской Обороны, 271</p>

        </div>

      </div>



      <div className="contactItem">

        <span>📞</span>

        <div>

          <b>Телефон</b>

          <p>+7 (901) 371-15-84</p>

        </div>

      </div>



      <div className="contactItem">

        <span>🕒</span>

        <div>

          <b>Режим работы</b>

          <p>Ежедневно с 09:00 до 18:00</p>

        </div>

      </div>

    </div>



    <div className="contactsRight">

      <div className="mapPlaceholder"></div>

    </div>

  </div>

</section>

        <section id="contact">
          <div className="container">
            <div className="contactBox">
              <div className="contactInfo">
                <div>
                  <div className="contactBadge">
                    <span className="contactBadgeDot" />
                    Мы на связи 24/7
                  </div>

                  <h2>
                    Оставьте заявку<br />
                    и мы <span>подберём<br />лучший вариант</span>
                  </h2>

                  <p>
                    Ответим на все вопросы и рассчитаем условия аренды с выкупом за несколько минут.
                  </p>

                  <div className="contactBenefits">
                    <div className="contactBenefit">
                      <div className="contactBenefitIcon">🛡</div>
                      <div>
                        <strong>Без скрытых платежей</strong>
                        <span>Прозрачные условия</span>
                      </div>
                    </div>

                    <div className="contactBenefit">
                      <div className="contactBenefitIcon">⚡</div>
                      <div>
                        <strong>Ответим быстро</strong>
                        <span>Среднее время 30 минут</span>
                      </div>
                    </div>

                    <div className="contactBenefit">
                      <div className="contactBenefitIcon">🚘</div>
                      <div>
                        <strong>Авто уже сегодня</strong>
                        <span>В день обращения</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="messengerBox">
                  <div className="messengerTitle">Или напишите нам в мессенджере</div>
                  <div className="messengerButtons">
                    <a className="messengerBtn telegram" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
                      <img src="/icons/telegram.png" alt="Telegram" />
                      Telegram
                    </a>
                    <a className="messengerBtn max" href={MAX_LINK} target="_blank" rel="noreferrer">
                      <img src="/icons/max.png" alt="MAX" />
                      MAX
                    </a>
                  </div>
                </div>
              </div>

              <form
  className="form"
  onSubmit={async (e) => {
    e.preventDefault();

    const digits = phone.replace(/\D/g, "");

    if (digits.length !== 11) {
      alert("Введите полный номер телефона");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const request = "TP-" + Date.now().toString().slice(-6);
    formData.append("request", request);

    await fetch(FORM_ENDPOINT, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    const name = String(formData.get("name") || "Спасибо");
    const car = String(formData.get("car") || "автомобилю");

    window.location.href =
      `/thanks?name=${encodeURIComponent(name)}&car=${encodeURIComponent(car)}&request=${encodeURIComponent(request)}`;
  }}
>
                <input className="formField" name="name" placeholder="Ваше имя" required />

                <div className="phoneField">
  <span>RU</span>

  <input
    name="phone"
    type="tel"
    required
    value={phone}
    minLength={18}
    maxLength={18}
    placeholder="+7 (999) 999-99-99"
    onChange={(e) => {
      let digits = e.target.value.replace(/\D/g, "");

      if (digits.startsWith("7") || digits.startsWith("8")) {
        digits = digits.slice(1);
      }

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

      setPhone(formatted);
    }}
  />
</div>

                <select name="car" required defaultValue="">
                  <option value="">Какой автомобиль интересует?</option>
                  <option>TENET T7</option>
                  <option>Geely Coolray</option>
                  <option>Kia Rio</option>
                  <option>Hyundai Solaris</option>
                  <option>Hongqi H5</option>
                </select>

                <textarea name="comment" placeholder="Комментарий (необязательно)" />

                <div className="safeText">🔒 Ваши данные защищены и не передаются третьим лицам</div>

                <button type="submit" className="formLink">
                  ✈ Отправить заявку
                </button>

                <div className="policyText">
  Нажимая кнопку «Отправить заявку», вы соглашаетесь с{" "}
  <a href="/privacy" target="_blank">
    политикой конфиденциальности
  </a>{" "}
  и{" "}
  <a href="/consent" target="_blank">
    согласием на обработку персональных данных
  </a>.
</div>
              </form>
            </div>
          </div>
        </section>
        {leadModalOpen && (
  <div className="leadModalOverlay" onClick={() => setLeadModalOpen(false)}>
    <div className="leadModal" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="leadModalClose"
        onClick={() => setLeadModalOpen(false)}
        aria-label="Закрыть"
      >
        ×
      </button>

      <div className="leadModalCarIcon">🚗</div>

      <h2>
        Получите предложение
        <span>за 15 минут</span>
      </h2>

      <p className="leadModalText">
        Подберём автомобиль и рассчитаем ежемесячный платёж.
      </p>

      <form
        className="form leadModalForm"
        onSubmit={async (e) => {
          e.preventDefault();

          const digits = phone.replace(/\D/g, "");

          if (digits.length !== 11) {
            alert("Введите полный номер телефона");
            return;
          }

          const form = e.currentTarget;
          const formData = new FormData(form);

          const request = "TP-" + Date.now().toString().slice(-6);
          formData.append("request", request);

          await fetch(FORM_ENDPOINT, {
            method: "POST",
            body: formData,
            mode: "no-cors",
          });

          const name = String(formData.get("name") || "Спасибо");
          const car = String(formData.get("car") || "автомобилю");

          window.location.href =
            `/thanks?name=${encodeURIComponent(name)}&car=${encodeURIComponent(car)}&request=${encodeURIComponent(request)}`;
        }}
      >
        <input
          className="formField leadInput"
          name="name"
          placeholder="Ваше имя"
          required
        />

        <div className="phoneField leadInput">
          <span>RU</span>

          <input
            name="phone"
            type="tel"
            required
            value={phone}
            minLength={18}
            maxLength={18}
            placeholder="+7 (999) 999-99-99"
            onChange={(e) => {
              let digits = e.target.value.replace(/\D/g, "");

              if (digits.startsWith("7") || digits.startsWith("8")) {
                digits = digits.slice(1);
              }

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

              setPhone(formatted);
            }}
          />
        </div>

        <select className="leadInput" name="car" required defaultValue="">
          <option value="">Какой автомобиль интересует?</option>
          <option>TENET T7</option>
          <option>Geely Coolray</option>
          <option>Kia Rio</option>
          <option>Hyundai Solaris</option>
          <option>Hongqi H5</option>
        </select>

        <button type="submit" className="leadModalSubmit">
          Получить предложение <span>→</span>
        </button>

        <div className="leadModalTrust">
          <div>
            <b>⚡</b>
            <span>Ответим в течение 15 минут</span>
          </div>

          <div>
            <b>🛡</b>
            <span>Ваши данные защищены и не передаются третьим лицам</span>
          </div>
        </div>

        <div className="leadModalRating">
          <span>★★★★★</span>
          <p>Более 50 автомобилей выдано клиентам</p>
        </div>

        <div className="leadModalPolicy">
          Нажимая кнопку «Получить предложение», вы соглашаетесь с{" "}
          <a href="/privacy" target="_blank">
            политикой конфиденциальности
          </a>{" "}
          и{" "}
          <a href="/consent" target="_blank">
            обработкой персональных данных
          </a>.
        </div>
      </form>
    </div>
  </div>
)}

        <div className="floating">
  <button
    type="button"
    className="floatingCta"
    onClick={() => setLeadModalOpen(true)}
  >
    Оставить заявку
  </button>
</div>
        
        <footer>© 2026 Телепарк — аренда авто под выкуп</footer>
      </main>
    </>
  );
}
