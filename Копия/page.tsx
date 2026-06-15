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

export default function Home() {
  const [phone, setPhone] = useState("+7 ");
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

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #020711; color: white; font-family: 'Manrope', Arial, sans-serif; }
        a { color: inherit; text-decoration: none; }
        .container { max-width: 1480px; margin: 0 auto; padding: 0 28px; }

        .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          background: rgba(2,7,17,.72);
          border-bottom: 1px solid rgba(255,255,255,.10);
          backdrop-filter: blur(18px);
        }
        .nav {
          max-width: 1480px; margin: auto; padding: 14px 28px;
          display: flex; align-items: center; justify-content: space-between; gap: 28px;
        }
        .brand { display: flex; align-items: center; gap: 14px; min-width: 250px; }
        .logo { width: 58px; height: 58px; border-radius: 50%; object-fit: cover; background: white; }
        .brand-title { font-size: 28px; line-height: .9; font-weight: 950; letter-spacing: 1px; text-transform: uppercase; }
        .brand-sub { margin-top: 5px; font-size: 12px; color: rgba(255,255,255,.68); letter-spacing: 4px; text-transform: uppercase; }
        .headerTrust { flex: 1; display: flex; justify-content: center; }
        .headerInfo { display: flex; align-items: center; gap: 28px; color: rgba(255,255,255,.88); font-size: 16px; font-weight: 700; }
        .headerInfo a { font-size: 22px; font-weight: 950; }
        .actions { display: flex; align-items: center; gap: 12px; }
        .iconBtn {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14);
          overflow: hidden; transition: .22s;
        }
        .iconBtn:hover { transform: translateY(-2px) scale(1.06); }
        .iconBtn img { width: 100%; height: 100%; object-fit: cover; }
        .call {
          display: inline-flex; align-items: center; justify-content: center;
          height: 48px; padding: 0 24px; border-radius: 12px;
          background: linear-gradient(135deg,#0b5cff,#2f7cff);
          font-weight: 950; box-shadow: 0 18px 40px rgba(37,99,235,.32);
        }

        .hero {
  position: relative;
  min-height: 650px;
  padding-top: 86px;
  overflow: hidden;
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  border-bottom: none;
}
        .hero::before {
          content: ""; position: absolute; inset: 0;
          background:
            radial-gradient(circle at 78% 24%, rgba(59,130,246,.18), transparent 28%),
            linear-gradient(90deg, rgba(2,7,17,.98) 0%, rgba(2,7,17,.86) 43%, rgba(2,7,17,.38) 100%),
            linear-gradient(180deg, rgba(2,7,17,.10), rgba(2,7,17,.98));
        }
        .heroInner {
          position: relative; z-index: 2; max-width: 1480px; margin: auto; padding: 48px 28px 58px;
          display: grid; grid-template-columns: 1fr .98fr; gap: 34px; align-items: center;
        }
        .hero h1 {
          margin: 0; max-width: 760px; font-size: 62px; line-height: .96; letter-spacing: -2px; font-weight: 950;
        }
        .hero h1 span { color: #1f6bff; }
        .heroLead { margin: 16px 0 0; font-size: 22px; color: rgba(255,255,255,.92); }
        .heroBenefits { display: grid; grid-template-columns: repeat(4, minmax(120px, 1fr)); gap: 18px; margin-top: 28px; max-width: 760px; }
        .heroBenefit { display: flex; gap: 12px; align-items: flex-start; }
        .heroIcon {
          width: 44px; height: 44px; border-radius: 50%; flex: 0 0 auto;
          display: grid; place-items: center; background: rgba(37,99,235,.15);
          border: 1px solid rgba(59,130,246,.32); color: #3b82f6; font-size: 22px;
        }
        .heroBenefit strong { display: block; font-size: 15px; margin-bottom: 5px; }
        .heroBenefit span { display: block; font-size: 13px; line-height: 1.35; color: rgba(255,255,255,.70); }
        .btns { display: flex; gap: 18px; margin-top: 32px; flex-wrap: wrap; }
        .btn {
          height: 58px; min-width: 265px; border-radius: 12px;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 17px; font-weight: 950; transition: .22s;
        }
        .btn:hover { transform: translateY(-2px); }
        .primary { background: linear-gradient(135deg,#0b5cff,#2f7cff); box-shadow: 0 18px 42px rgba(37,99,235,.32); }
        .secondary { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.22); }
        .hiddenPay { margin-top: 15px; text-align: center; max-width: 550px; color: rgba(255,255,255,.65); font-size: 14px; }

       .heroExclusive {
  position: relative;
  min-height: 610px;
  overflow: visible;
}

.exclusivePanel {
  position: absolute;
  left: -34px;
  top: 36px;
  z-index: 6;
  width: 455px;
  padding: 28px;
  border-radius: 26px;
  background:
    linear-gradient(135deg, rgba(5,12,28,.88), rgba(5,12,28,.58));
  border: 1px solid rgba(59,130,246,.48);
  backdrop-filter: blur(20px);
  box-shadow:
    0 34px 100px rgba(0,0,0,.62),
    0 0 46px rgba(37,99,235,.18),
    inset 0 1px 0 rgba(255,255,255,.10);
}

.exclusiveBadge {
  width: fit-content;
  padding: 11px 20px;
  border-radius: 999px;
  margin-bottom: 24px;
  color: #ffe08a;
  font-size: 17px;
  font-weight: 950;
  background: rgba(245,158,11,.10);
  border: 1px solid rgba(245,158,11,.70);
  box-shadow:
    0 0 28px rgba(245,158,11,.30),
    inset 0 1px 0 rgba(255,255,255,.12);
}

.exclusiveSmall {
  font-size: 28px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: .8px;
  text-transform: uppercase;
  color: rgba(255,255,255,.92);
}

.exclusiveName {
  margin-top: 12px;
  font-size: 62px;
  line-height: .9;
  font-weight: 950;
  color: #2f7cff;
  text-transform: uppercase;
  text-shadow:
    0 0 26px rgba(47,124,255,.65),
    0 0 60px rgba(47,124,255,.28);
}

.exclusiveAvailable {
  width: fit-content;
  margin-top: 20px;
  padding: 12px 18px;
  border-radius: 10px;
  background: linear-gradient(135deg,#ffe08a,#fbbf24);
  color: #111827;
  font-weight: 950;
  font-size: 17px;
  box-shadow: 0 16px 34px rgba(251,191,36,.18);
}

.exclusiveList.premium {
  margin-top: 28px;
  display: grid;
  gap: 18px;
}

.exclusiveList.premium div {
  display: grid;
  grid-template-columns: 42px 1fr;
  column-gap: 14px;
  align-items: center;
}

.exclusiveList.premium span {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #ffd166;
  background: rgba(245,158,11,.10);
  border: 1px solid rgba(245,158,11,.46);
  box-shadow: 0 0 22px rgba(245,158,11,.13);
}

.exclusiveList.premium b {
  display: block;
  font-size: 16px;
  font-weight: 950;
}

.exclusiveList.premium small {
  grid-column: 2;
  margin-top: 3px;
  color: rgba(255,255,255,.66);
  font-size: 14px;
}

.exclusiveCar {
  position: absolute;
  right: -145px;
  bottom: 92px;
  z-index: 5;
  width: 835px;
  max-width: none;
  filter:
    drop-shadow(0 50px 80px rgba(0,0,0,.78))
    drop-shadow(0 0 38px rgba(47,124,255,.24));
}

.neonRing {
  position: absolute;
  right: -30px;
  bottom: 80px;
  z-index: 2;
  width: 760px;
  height: 178px;
  border-radius: 50%;
  border: 3px solid rgba(47,124,255,.92);
  transform: perspective(850px) rotateX(68deg);
  box-shadow:
    0 0 34px rgba(47,124,255,.98),
    0 0 90px rgba(47,124,255,.28),
    inset 0 0 30px rgba(47,124,255,.35);
}

.neonRing::after {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border-bottom: 3px solid rgba(251,146,60,.95);
  filter: blur(.2px);
  opacity: .95;
}

.availableBox {
  position: absolute;
  left: -34px;
  bottom: 0;
  z-index: 7;
  width: 430px;
  padding: 22px 26px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:
    radial-gradient(circle at 90% 50%, rgba(34,197,94,.22), transparent 32%),
    rgba(5,12,28,.72);
  border: 1px solid rgba(59,130,246,.48);
  backdrop-filter: blur(18px);
  box-shadow:
    0 24px 70px rgba(0,0,0,.48),
    0 0 40px rgba(47,124,255,.18);
}

.availableBox b {
  display: block;
  font-size: 22px;
  font-weight: 950;
  letter-spacing: .5px;
}

.availableBox span {
  display: block;
  margin-top: 8px;
  color: #22c55e;
  font-size: 18px;
  font-weight: 950;
}

.availableBox strong {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: white;
  background: #22c55e;
  font-size: 26px;
  box-shadow: 0 0 28px rgba(34,197,94,.55);
}

        .exclusiveGlow {
          position: absolute;
          right: 28px;
          bottom: 28px;
          width: 590px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47,124,255,.38), transparent 70%);
          filter: blur(18px);
          z-index: 1;
        }

        .exclusivePlatform {
          position: absolute;
          right: 70px;
          bottom: 20px;
          width: 560px;
          height: 150px;
          border-radius: 50%;
          border: 1px solid rgba(47,124,255,.28);
          transform: perspective(700px) rotateX(66deg);
          box-shadow: 0 0 42px rgba(47,124,255,.25), inset 0 0 34px rgba(47,124,255,.12);
          z-index: 2;
        }

        section { padding: 58px 0; }
        .sectionRow { display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 18px; }
        h2 { margin: 0; font-size: 32px; line-height: 1; font-weight: 950; }
        .muted { color: rgba(255,255,255,.60); }

        .carsGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .carCard {
          overflow: hidden; border-radius: 18px; background: rgba(9,16,31,.86);
          border: 1px solid rgba(255,255,255,.08); box-shadow: 0 26px 60px rgba(0,0,0,.35);
          transition: .25s;
        }
        .carCard:hover { transform: translateY(-5px); border-color: rgba(59,130,246,.42); }
        .carCard.featured { border-color: #0b5cff; box-shadow: 0 0 0 1px rgba(37,99,235,.25), 0 30px 70px rgba(37,99,235,.14); }
        .carImageWrap { position: relative; height: 195px; overflow: hidden; }
        .carImageWrap::after { content:""; position:absolute; inset:0; background: linear-gradient(180deg, transparent 42%, rgba(4,8,20,.98)); }
        .carImage { width: 100%; height: 100%; object-fit: cover; transition: .5s; }
        .carCard:hover .carImage { transform: scale(1.05); }
        .carTag {
          position: absolute; z-index: 2; top: 12px; left: 12px; padding: 8px 12px;
          border-radius: 8px; font-size: 12px; font-weight: 950; text-transform: uppercase;
        }
        .carTag.yellow { background: #facc15; color:#111827; }
        .carTag.blue { background: #2563eb; color:white; }
        .carTag.green { background: #16a34a; color:white; }
        .carTag.violet { background: #7c3aed; color:white; }
        .heart { position:absolute; z-index:2; top:12px; right:12px; font-size:24px; color:white; opacity:.9; }
        .carBody { padding: 18px 18px 14px; }
        .carTitleRow { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .carBody h3 { margin: 0; font-size: 26px; line-height: 1; font-weight: 950; }
        .chips { display:flex; gap:6px; }
        .chip { padding: 5px 8px; border-radius: 8px; background: rgba(255,255,255,.10); font-size: 13px; font-weight: 900; }
        .carPrice { margin-top: 12px; color:#1f6bff; font-size: 29px; font-weight: 950; }
        .carPrice span { font-size: 16px; color:#fff; }
        .carMonth { margin-top: 2px; color: rgba(255,255,255,.76); font-size: 14px; font-weight: 700; }
        .termBadge {
          float: right; margin-top: -42px; padding: 8px 10px; border-radius: 10px;
          border: 1px solid rgba(59,130,246,.24); background: rgba(37,99,235,.08);
          text-align: center; font-size: 12px; color: rgba(255,255,255,.78);
        }
        .termBadge b { display:block; color:#3b82f6; font-size:13px; }
        .featureGrid { clear: both; display:grid; grid-template-columns: 1fr 1fr; gap: 10px 14px; margin-top: 18px; }
        .featureItem { display:flex; gap:7px; align-items:flex-start; color: rgba(255,255,255,.78); font-size: 12.5px; line-height:1.25; }
        .featureItem::before { content:"✓"; color:#22c55e; font-weight:950; }
        .carBtn {
          margin-top: 18px; width: 100%; height: 48px; border-radius: 10px; border:0;
          display:flex; align-items:center; justify-content:center;
          background: linear-gradient(135deg,#0b5cff,#2f7cff); color:white; font-weight:950;
          box-shadow: 0 16px 36px rgba(37,99,235,.28);
        }
        .answerTime { margin-top: 10px; text-align:center; color: rgba(255,255,255,.70); font-size: 13px; }

        .bottomBenefits {
          margin-top: 18px; display:grid; grid-template-columns: repeat(6,1fr); gap: 0;
          border:1px solid rgba(255,255,255,.08); border-radius: 18px; overflow:hidden;
          background: rgba(255,255,255,.035);
        }
        .bottomBenefit { padding: 22px 18px; display:flex; align-items:center; gap:14px; color:rgba(255,255,255,.82); font-weight:700; border-right:1px solid rgba(255,255,255,.06); }
        .bottomBenefit:last-child { border-right:0; }
        .bottomBenefit span { font-size: 26px; opacity:.75; }
.premiumIcon {
  width: 46px;
  height: 46px;
  min-width: 46px;
  border-radius: 14px;
  display: grid;
  place-items: center;

  color: #2f7cff;
  font-size: 22px;
  font-weight: 950;

  background:
    radial-gradient(circle at 30% 20%,
      rgba(96,165,250,.35),
      transparent 38%),
    rgba(37,99,235,.13);

  border: 1px solid rgba(59,130,246,.34);

  box-shadow:
    0 16px 34px rgba(37,99,235,.18),
    inset 0 1px 0 rgba(255,255,255,.12);

  transition: all .25s ease;
}

.premiumIcon:hover {
  transform: translateY(-2px);

  box-shadow:
    0 22px 42px rgba(37,99,235,.25),
    inset 0 1px 0 rgba(255,255,255,.18);
}
        .stepsSection, .benefits, .reviewsVideo, #contact { background: #020711; }
        .sectionTop { max-width: 860px; margin: 0 auto 42px; text-align:center; }
        .sectionBadge { display:inline-block; margin-bottom: 14px; color:#3b82f6; font-size:13px; font-weight:950; letter-spacing:2px; }
        .sectionTop h2 { font-size: 48px; line-height:1; letter-spacing:-1px; }
        .sectionTop p { color:rgba(255,255,255,.68); font-size:19px; line-height:1.6; }
        .stepsGrid, .benefitGrid { display:grid; grid-template-columns: repeat(3,1fr); gap:22px; }
        .benefitGrid { grid-template-columns: repeat(4,1fr); }
        .stepCard, .benefitCard {
          padding: 30px; border-radius: 24px; background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.08);
        }
        .stepNumber, .benefitNumber {
          width:52px; height:52px; border-radius:50%; display:grid; place-items:center;
          background:#0b5cff; font-weight:950; margin-bottom:20px;
        }
        .stepCard h3, .benefitCard h3 { margin:0 0 12px; font-size:26px; }
        .stepCard p, .benefitCard p { margin:0; color:rgba(255,255,255,.68); line-height:1.6; }

        .videoGrid { display:grid; grid-template-columns: repeat(5,1fr); gap:18px; }
        .videoCard { overflow:hidden; border-radius:22px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
        .videoCard video { width:100%; height:430px; object-fit:cover; display:block; }
        .videoInfo { padding:18px; }
        .videoInfo strong { display:block; font-size:18px; margin-bottom:8px; }
        .videoInfo p { color:rgba(255,255,255,.72); font-size:14px; line-height:1.45; }
        .videoInfo span { color:rgba(255,255,255,.62); font-size:13px; }


        .faqSection {
          background: #020711;
          padding: 86px 0 72px;
        }

        .faqGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 38px;
        }

        .faqItem {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.035);
          overflow: hidden;
          transition: .22s;
        }

        .faqItem:hover {
          border-color: rgba(59,130,246,.42);
          box-shadow: 0 18px 42px rgba(37,99,235,.10);
        }

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

        .faqItem summary::-webkit-details-marker {
          display: none;
        }

        .faqIcon {
          width: 34px;
          height: 34px;
          min-width: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(37,99,235,.16);
          color: #7fb0ff;
          border: 1px solid rgba(59,130,246,.24);
          font-size: 24px;
          line-height: 1;
          transition: .2s;
        }

        .faqItem[open] {
          border-color: rgba(59,130,246,.55);
          background:
            radial-gradient(circle at 20% 10%, rgba(37,99,235,.18), transparent 38%),
            rgba(255,255,255,.045);
        }

        .faqItem[open] .faqIcon {
          transform: rotate(45deg);
          background: rgba(37,99,235,.30);
        }

        .faqAnswer {
          padding: 0 26px 26px;
          color: rgba(255,255,255,.68);
          line-height: 1.6;
          font-size: 16px;
        }

        .faqTrust {
          margin-top: 26px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-radius: 22px;
          overflow: hidden;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.09);
        }

        .faqTrustItem {
          padding: 26px 18px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,.07);
        }

        .faqTrustItem:last-child {
          border-right: 0;
        }

        .faqTrustIcon {
          width: 52px;
          height: 52px;
          margin: 0 auto 14px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          color: #2f7cff;
          font-size: 26px;
          background: rgba(37,99,235,.14);
          border: 1px solid rgba(59,130,246,.28);
        }

        .faqTrustItem strong {
          display: block;
          margin-bottom: 8px;
          font-size: 17px;
        }

        .faqTrustItem span {
          color: rgba(255,255,255,.62);
          font-size: 14px;
          line-height: 1.45;
        }

        .faqCta {
          margin-top: 26px;
          padding: 24px 28px;
          border-radius: 22px;
          display: grid;
          grid-template-columns: 1fr auto auto auto;
          gap: 14px;
          align-items: center;
          background:
            radial-gradient(circle at 20% 20%, rgba(37,99,235,.22), transparent 38%),
            rgba(255,255,255,.035);
          border: 1px solid rgba(59,130,246,.30);
        }

        .faqCta h3 {
          margin: 0 0 6px;
          font-size: 26px;
        }

        .faqCta p {
          margin: 0;
          color: rgba(255,255,255,.66);
        }

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
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
        }

        .faqCtaBtn.telegram {
          background: linear-gradient(135deg,#0b5cff,#2f7cff);
        }

        .faqCtaBtn.max {
          background: linear-gradient(135deg,#2563eb,#7c3aed,#9333ea);
        }

        .faqCtaBtn img {
          width: 26px;
          height: 26px;
          object-fit: contain;
        }

        #contact {
          position: relative;
          padding: 86px 0;
          background:
            linear-gradient(rgba(2,7,17,.70), rgba(2,7,17,.88)),
            url('/images/hero-bg.jpg');
          background-size: cover;
          background-position: center;
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
          background: rgba(7,12,25,.70);
          border: 1px solid rgba(255,255,255,.14);
          box-shadow: 0 35px 110px rgba(0,0,0,.58), inset 0 1px 0 rgba(255,255,255,.08);
          backdrop-filter: blur(20px);
        }
        .contactBox::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 26% 38%, rgba(37,99,235,.24), transparent 30%),
            radial-gradient(circle at 75% 15%, rgba(255,255,255,.08), transparent 26%);
        }
        .contactInfo,
        .form {
          position: relative;
          z-index: 2;
        }
        .contactInfo {
          padding: 8px 8px 8px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 570px;
        }
        .contactBadge {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          color: rgba(255,255,255,.86);
          font-size: 14px;
          font-weight: 800;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
        }
        .contactBadgeDot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2f7cff;
          box-shadow: 0 0 22px rgba(47,124,255,.9);
        }
        .contactBox h2 {
          margin: 44px 0 18px;
          max-width: 650px;
          font-size: 58px;
          line-height: 1.04;
          letter-spacing: -1.8px;
          font-weight: 950;
          text-transform: uppercase;
        }
        .contactBox h2 span {
          color: #2f7cff;
          text-shadow: 0 0 34px rgba(47,124,255,.35);
        }
        .contactBox p {
          max-width: 570px;
          margin: 0;
          color: rgba(255,255,255,.76);
          font-size: 20px;
          line-height: 1.55;
          font-weight: 500;
        }
        .contactBenefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 38px;
        }
        .contactBenefit {
          text-align: center;
        }
        .contactBenefitIcon {
          width: 62px;
          height: 62px;
          margin: 0 auto 14px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #2f7cff;
          font-size: 28px;
          background: rgba(37,99,235,.14);
          border: 1px solid rgba(59,130,246,.28);
          box-shadow: 0 14px 34px rgba(37,99,235,.18), inset 0 1px 0 rgba(255,255,255,.08);
        }
        .contactBenefit strong {
          display: block;
          margin-bottom: 8px;
          font-size: 14px;
          line-height: 1.25;
          text-transform: uppercase;
        }
        .contactBenefit span {
          display: block;
          color: rgba(255,255,255,.66);
          font-size: 14px;
          line-height: 1.4;
        }
        .messengerBox {
          margin-top: 34px;
          padding: 22px 24px 24px;
          border-radius: 18px;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
        }
        .messengerTitle {
          margin-bottom: 16px;
          color: rgba(255,255,255,.88);
          font-weight: 950;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: .2px;
        }
        .messengerButtons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .messengerBtn {
          min-height: 68px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.04);
          color: white;
          font-weight: 900;
          transition: .22s;
        }
        .messengerBtn:hover {
          transform: translateY(-2px);
        }
        .messengerBtn.telegram {
          border-color: rgba(56,189,248,.65);
          color: #38bdf8;
          box-shadow: 0 0 24px rgba(56,189,248,.12);
        }
        .messengerBtn.max {
          border-color: rgba(168,85,247,.70);
          color: #a855f7;
          box-shadow: 0 0 24px rgba(168,85,247,.12);
        }
        .messengerBtn img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
        }
        .form {
          padding-left: 46px;
          border-left: 1px solid rgba(255,255,255,.10);
          display: flex;
          flex-direction: column;
          gap: 18px;
          justify-content: center;
        }
        .formField,
        .phoneField,
        .form select,
        .form textarea {
          width: 100%;
          min-height: 76px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(255,255,255,.055);
          color: white;
          border-radius: 16px;
          outline: none;
          font-size: 17px;
          font-weight: 600;
          transition: .2s;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
          backdrop-filter: blur(14px);
        }
        .formField {
          padding: 0 24px;
        }
        .phoneField {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 24px;
        }
        .phoneField span {
          color: rgba(255,255,255,.9);
          font-weight: 950;
          letter-spacing: .5px;
        }
        .phoneField input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          font-size: 17px;
          font-weight: 700;
          font-family: inherit;
        }
        .form select {
          padding: 0 24px;
          cursor: pointer;
        }
        .form textarea {
          min-height: 150px;
          resize: none;
          padding: 24px;
          font-family: inherit;
        }
        .formField::placeholder,
        .phoneField input::placeholder,
        .form textarea::placeholder {
          color: rgba(255,255,255,.58);
          font-weight: 500;
        }
        .formField:hover,
        .phoneField:hover,
        .form select:hover,
        .form textarea:hover,
        .formField:focus,
        .phoneField:focus-within,
        .form select:focus,
        .form textarea:focus {
          border-color: rgba(59,130,246,.55);
          box-shadow: 0 0 28px rgba(59,130,246,.16), inset 0 1px 0 rgba(255,255,255,.06);
          background: rgba(255,255,255,.075);
        }
        .form select option { background:#08111f; color:white; }
        .safeText {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: rgba(255,255,255,.70);
          font-size: 14px;
          margin: 4px 0 2px;
        }
        .formLink {
          min-height: 76px;
          border: 0;
          border-radius: 16px;
          background: linear-gradient(135deg,#2f7cff 0%, #0b5cff 52%, #0047d9 100%);
          color: white;
          font-size: 22px;
          font-weight: 950;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          transition: .22s;
          box-shadow: 0 0 35px rgba(37,99,235,.35), 0 20px 50px rgba(37,99,235,.26);
          font-family: inherit;
        }
        .formLink:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 44px rgba(37,99,235,.45), 0 24px 60px rgba(37,99,235,.34);
        }
        .policyText {
          text-align: center;
          color: rgba(255,255,255,.58);
          font-size: 14px;
          line-height: 1.45;
        }
        .policyText a {
          color: #2f7cff;
          font-weight: 800;
        }
        .floating { position:fixed; right:24px; bottom:24px; display:flex; flex-direction:column; gap:10px; z-index:100; }
        footer { padding:34px; text-align:center; color:rgba(255,255,255,.45); border-top:1px solid rgba(255,255,255,.08); }

        @media (max-width: 1200px) {
          .carsGrid { grid-template-columns: repeat(2, 1fr); }
          .bottomBenefits { grid-template-columns: repeat(3,1fr); }
          .videoGrid { grid-template-columns: repeat(2,1fr); }
          .heroInner { grid-template-columns: 1fr; }
          .heroVisual { display:none; }
        }
        @media (max-width: 768px) {
          .header { position: sticky; }
          .nav { flex-direction:column; align-items:flex-start; padding:12px 16px; gap:10px; }
          .brand-title { font-size:22px; }
          .brand-sub { font-size:10px; }
          .logo { width:48px; height:48px; }
          .headerTrust { justify-content:flex-start; }
          .headerInfo { display:grid; gap:5px; font-size:12px; }
          .headerInfo a { font-size:15px; }
          .actions { display:none; }
          .hero { min-height:auto; padding-top:0; }
          .heroInner { padding:42px 18px 48px; }
          .hero h1 { font-size:42px; letter-spacing:-1px; }
          .heroLead { font-size:17px; line-height:1.5; }
          .heroBenefits { grid-template-columns:1fr 1fr; gap:14px; }
          .heroBenefit span { font-size:12px; }
          .btn { width:100%; min-width:0; }
          .carsGrid, .stepsGrid, .benefitGrid, .videoGrid, .contactBox { grid-template-columns:1fr; }
          .sectionRow { align-items:flex-start; flex-direction:column; }
          .sectionTop h2 { font-size:34px; }
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

          .faqGrid {
            grid-template-columns: 1fr;
          }
          .faqTrust {
            grid-template-columns: 1fr;
          }
          .faqTrustItem {
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.07);
          }
          .faqTrustItem:last-child {
            border-bottom: 0;
          }
          .faqCta {
            grid-template-columns: 1fr;
          }
          .faqCtaBtn {
            width: 100%;
          }
          footer { padding-bottom:90px; }
        }
      `}</style>

      <main>
        <header className="header">
          <div className="nav">
            <div className="brand">
              <img src="/logo/telepark-logo.jpg" className="logo" alt="Телепарк" />
              <div>
                <div className="brand-title">ТЕЛЕПАРК</div>
                <div className="brand-sub">авто под выкуп</div>
              </div>
            </div>

            <div className="headerTrust">
              <div className="headerInfo">
                <span>📍 Санкт-Петербург, пр-т. Обуховской обороны 271</span>
                <a href={PHONE_LINK}>+7 901 371 1584</a>
              </div>
            </div>

            <div className="actions">
              <ContactIcons />
              <a className="call" href="#contact">Перезвоните мне</a>
            </div>
          </div>
        </header>

        <section className="hero">
          <div className="heroInner">
            <div>
              <h1>Авто под выкуп<br />в <span>Санкт-Петербурге</span></h1>
              <p className="heroLead">Без банка • Без первоначального взноса • Всё включено</p>

              <div className="heroBenefits">
                <div className="heroBenefit"><div className="heroIcon">🛡</div><div><strong>Одобрение 99%</strong><span>Даже с плохой кредитной историей</span></div></div>
                <div className="heroBenefit"><div className="heroIcon">⏱</div><div><strong>Решение за 15 минут</strong><span>Быстрое оформление и выдача авто</span></div></div>
                <div className="heroBenefit"><div className="heroIcon">🎁</div><div><strong>ОСАГО + КАСКО</strong><span>В подарок на 1 год без доплат</span></div></div>
                <div className="heroBenefit"><div className="heroIcon">🏁</div><div><strong>Без ограничений по пробегу</strong><span>Пробег не ограничен</span></div></div>
              </div>

              <div className="btns">
                <a href="#contact" className="btn primary">Подобрать автомобиль</a>
                <a href="#cars" className="btn secondary">Рассчитать платёж</a>
              </div>
              <div className="hiddenPay">🔒 Никаких скрытых платежей и комиссий</div>
            </div>

         <div className="heroVisual heroExclusive">
  <div className="exclusivePanel">
    <div className="exclusiveBadge">👑 ЭКСКЛЮЗИВ</div>

    <div className="exclusiveSmall">НОВОЕ ПОСТУПЛЕНИЕ</div>
    <div className="exclusiveName">TENET T7</div>

    <div className="exclusiveAvailable">УЖЕ ДОСТУПЕН К ВЫДАЧЕ</div>

    <div className="exclusiveList premium">
      <div><span>🛡</span><b>0 ₽ первоначальный взнос</b><small>Без скрытых платежей и комиссий</small></div>
      <div><span>⏱</span><b>Одобрение за 15 минут</b><small>Быстрое оформление и выдача авто</small></div>
      <div><span>🎁</span><b>ОСАГО + КАСКО в подарок</b><small>На 1 год без дополнительных оплат</small></div>
      <div><span>🏁</span><b>Без ограничений по пробегу</b><small>Пробег не ограничен</small></div>
    </div>
  </div>

  <img
    className="exclusiveCar"
    src="/images/hero/tenet-t7.png"
    alt="TENET T7"
  />

  <div className="neonRing" />

  <div className="availableBox">
    <div>
      <b>УЖЕ ДОСТУПНО К ВЫДАЧЕ</b>
      <span>АВТОМОБИЛЬ В НАЛИЧИИ</span>
    </div>
    <strong>✓</strong>
  </div>
</div>

  <img
    className="exclusiveCar"
    src="/images/hero/tenet-t7.png"
    alt="TENET T7"
  />

  <div className="neonRing" />
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
              {cars.map((car, index) => (
                <article className={`carCard ${index === 0 ? "featured" : ""}`} key={car.name}>
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

        <section className="stepsSection">
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

        <section className="reviewsVideo">
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
  action={FORM_ENDPOINT}
  method="POST"
  onSubmit={(e) => {
    const digits = phone.replace(/\D/g, "");

    if (digits.length !== 11) {
      e.preventDefault();
      alert("Введите полный номер телефона");
    }
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
  placeholder="(999) 999-99-99"
    onChange={(e) => {
      let value = e.target.value.replace(/\D/g, "");

      // если вставили +7 — убираем лишнюю 7
      if (value.startsWith("7")) {
        value = value.slice(1);
      }

      // максимум 10 цифр после +7
      value = value.substring(0, 10);

      let formatted = "+7 ";

      if (value.length > 0) {
        formatted += `(${value.substring(0, 3)}`;
      }

      if (value.length >= 4) {
        formatted += `) ${value.substring(3, 6)}`;
      }

      if (value.length >= 7) {
        formatted += `-${value.substring(6, 8)}`;
      }

      if (value.length >= 9) {
        formatted += `-${value.substring(8, 10)}`;
      }

      setPhone(formatted);
    }}
    onKeyDown={(e) => {
      // нельзя удалить +7
      if (
        (e.key === "Backspace" || e.key === "Delete") &&
        phone.length <= 3
      ) {
        e.preventDefault();
      }
    }}
    style={{
      flex: 1,
      border: "none",
      background: "transparent",
      color: "white",
      fontSize: "17px",
      fontWeight: 700,
      outline: "none",
      fontFamily: "inherit",
    }}
  />
</div>

                <select name="car" required defaultValue="">
                  <option value="">Какой автомобиль интересует?</option>
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
                  Нажимая кнопку, вы соглашаетесь с нашей <a href="#">политикой конфиденциальности</a>
                </div>
              </form>
            </div>
          </div>
        </section>

        <div className="floating">
          <ContactIcons />
          <a className="iconBtn" href={PHONE_LINK}>☎</a>
        </div>

        <footer>© 2026 Телепарк — аренда авто под выкуп</footer>
      </main>
    </>
  );
}
