"use client";

import { useMemo, useState } from "react";

const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";
const PHONE_LINK = "tel:+79013711584";
const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwXgg5KBMb6DWffFsGH5r1NJngX0yV18CM_T_Fuu-7vc8RQ8g45uVQ47w3EU6sefgaJ/exec";

const cars = [
  {
    name: "TENET T7",
    short: "TENET",
    year: "2026",
    gearbox: "АКПП",
    type: "Кроссовер",
    img: "/images/Tenet/TenetNew.png",
    price: "3 800 ₽",
    month: "≈ 115 000 ₽ / месяц",
    term: "48 месяцев",
    upfront: "135 000 ₽",
    tag: "Премиум 2026",
    video: "Coolray1.MP4",
    bestFor: "семьи и бизнеса",
    features: [
      "Уже доступен к выдаче",
      "ОСАГО + КАСКО в подарок",
      "Без ограничений по пробегу",
      "Одобрение 99%",
    ],
  },
  {
    name: "Geely Coolray",
    short: "Coolray",
    year: "2022",
    gearbox: "АКПП",
    type: "Кроссовер",
    img: "/images/cars/col.jpg",
    price: "2 950 ₽",
    month: "≈ 88 500 ₽ / месяц",
    term: "18 месяцев",
    upfront: "0 ₽",
    tag: "Самый популярный",
    video: "Coolray1.MP4",
    bestFor: "семьи и работы",
    features: [
      "Через 18 месяцев авто ваше",
      "0 ₽ первоначальный взнос",
      "ОСАГО + КАСКО в подарок",
      "Без ограничений по пробегу",
    ],
  },
  {
    name: "Kia Rio",
    short: "Rio",
    year: "2022",
    gearbox: "АКПП",
    type: "Седан",
    img: "/images/cars/rio.jpg",
    price: "2 950 ₽",
    month: "≈ 88 500 ₽ / месяц",
    term: "16 месяцев",
    upfront: "0 ₽",
    tag: "Для работы",
    video: "Rio1.MP4",
    bestFor: "такси и доставки",
    features: [
      "Подходит для такси",
      "Авто ваше через 16 месяцев",
      "Всё включено",
      "Одобрение 99%",
    ],
  },
  {
    name: "Hyundai Solaris",
    short: "Solaris",
    year: "2021",
    gearbox: "АКПП",
    type: "Седан",
    img: "/images/solaris/SolarisTOP.jpg",
    price: "2 500 ₽",
    month: "≈ 75 000 ₽ / месяц",
    term: "16 месяцев",
    upfront: "0 ₽",
    tag: "Выгодный вариант",
    video: "Solaris1.MP4",
    bestFor: "работы каждый день",
    features: [
      "Самый доступный платёж",
      "Авто ваше через 16 месяцев",
      "Всё включено",
      "Без ограничений по пробегу",
    ],
  },
  {
    name: "Hongqi H5",
    short: "H5",
    year: "2023",
    gearbox: "АКПП",
    type: "Premium",
    img: "/images/cars/hon.jpg",
    price: "4 950 ₽",
    month: "≈ 148 500 ₽ / месяц",
    term: "24 месяца",
    upfront: "0 ₽",
    tag: "Premium",
    video: "H51.MP4",
    bestFor: "премиум-задач",
    features: [
      "Премиум без кредита",
      "Авто ваше через 24 месяца",
      "ОСАГО + КАСКО в подарок",
      "Всё официально",
    ],
  },
];

const reviews = [
  {
    video: "Coolray1.MP4",
    name: "Александр",
    car: "Geely Coolray",
    text: "Искал семейную машину без кредита. Всё прозрачно, быстро оформили — реально уехал в этот же день.",
  },
  {
    video: "Rio1.MP4",
    name: "Артём",
    car: "Kia Rio",
    text: "Нужна была машина для работы. Быстро оформили, сразу начал работать.",
  },
  {
    video: "Solaris1.MP4",
    name: "Виктор",
    car: "Hyundai Solaris",
    text: "Одобрили быстро, условия понятные, забрал авто без проблем.",
  },
];

const faqs = [
  {
    question: "Можно ли оформить авто с плохой кредитной историей?",
    answer:
      "Да. Мы рассматриваем разные ситуации и чаще одобряем заявки, чем банки.",
  },
  {
    question: "Нужен ли первоначальный взнос?",
    answer:
      "Есть автомобили без первоначального взноса. По некоторым моделям условия рассчитываются индивидуально.",
  },
  {
    question: "Какие документы нужны?",
    answer: "Обычно достаточно паспорта и водительского удостоверения.",
  },
  {
    question: "Когда автомобиль станет моим?",
    answer:
      "После окончания срока аренды с выкупом автомобиль полностью переходит в вашу собственность.",
  },
  {
    question: "Можно ли выкупить авто досрочно?",
    answer: "Да, досрочный выкуп возможен. Условия фиксируются в договоре.",
  },
  {
    question: "Есть ли ограничения по пробегу?",
    answer: "Нет, вы можете пользоваться автомобилем без ограничений по пробегу.",
  },
];

function formatPhone(value: string) {
  let digits = value.replace(/\D/g, "");

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

  return formatted;
}

export default function MobileLanding() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [phone, setPhone] = useState("+7");
  const selectedCar = cars[selectedIndex];

  const requestId = useMemo(
    () => "TP-" + Date.now().toString().slice(-6),
    [leadModalOpen]
  );

  const openLead = (index = selectedIndex) => {
    setSelectedIndex(index);
    setLeadModalOpen(true);
  };

  const goCar = (direction: -1 | 1) => {
    setSelectedIndex((current) =>
      current + direction < 0
        ? cars.length - 1
        : current + direction >= cars.length
          ? 0
          : current + direction
    );
  };

  return (
    <main className="tpMobile" id="top">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

        :root {
          --tp-bg: #050607;
          --tp-graphite: #10161a;
          --tp-graphite-2: #151c20;
          --tp-graphite-3: #20282e;
          --tp-lime: #c8ff2f;
          --tp-lime-2: #98df00;
          --tp-muted: rgba(255,255,255,.66);
          --tp-line: rgba(200,255,47,.14);
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; background: var(--tp-bg); color: #fff; font-family: Manrope, Arial, sans-serif; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        button, input, select, textarea { font-family: inherit; }
        button { cursor: pointer; }
        img, video { display: block; max-width: 100%; }

        .tpMobile {
          min-height: 100vh;
          padding-bottom: 104px;
          background:
            radial-gradient(circle at 15% 0%, rgba(200,255,47,.10), transparent 28%),
            radial-gradient(circle at 85% 26%, rgba(200,255,47,.06), transparent 30%),
            linear-gradient(180deg, #050607 0%, #080b0d 48%, #050607 100%);
        }

        .mHeader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 76px;
          z-index: 1000;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(5,6,7,.86);
          border-bottom: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(18px);
        }

        .mBrand { display: flex; align-items: center; gap: 10px; }
        .mBrand img { width: 44px; height: 44px; object-fit: contain; }
        .mBrand strong { display: block; font-size: 21px; line-height: .9; letter-spacing: .3px; font-weight: 950; }
        .mBrand strong span { color: var(--tp-lime); text-shadow: 0 0 18px rgba(200,255,47,.45); }
        .mBrand small { display: block; margin-top: 5px; color: rgba(255,255,255,.55); font-size: 8px; letter-spacing: 3px; }
        .mHeaderActions { display: flex; align-items: center; gap: 10px; }
        .mRound {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.045);
          border: 1px solid rgba(255,255,255,.12);
          color: var(--tp-lime);
          font-size: 22px;
          font-weight: 950;
        }

        .mHero {
          min-height: 100svh;
          padding: 104px 16px 24px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(5,6,7,.10), rgba(5,6,7,.72) 62%, #050607 100%),
            linear-gradient(90deg, rgba(5,6,7,.98), rgba(5,6,7,.34)),
            url('/images/hero/HeroTenet2.png');
          background-size: auto 690px;
          background-position: 61% top;
          background-repeat: no-repeat;
        }

        .mHero::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -80px;
          height: 220px;
          background: radial-gradient(ellipse at center, rgba(200,255,47,.18), transparent 62%);
          pointer-events: none;
        }

        .mBadge {
          width: fit-content;
          padding: 9px 14px;
          border-radius: 999px;
          color: var(--tp-lime);
          background: rgba(200,255,47,.08);
          border: 1px solid rgba(200,255,47,.22);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: .4px;
          text-transform: uppercase;
        }

        .mHero h1 {
          margin: 20px 0 0;
          max-width: 355px;
          font-size: clamp(43px, 12vw, 61px);
          line-height: .91;
          letter-spacing: -2.4px;
          font-weight: 950;
          text-transform: uppercase;
        }
        .mHero h1 span { color: var(--tp-lime); text-shadow: 0 0 18px rgba(200,255,47,.42); }
        .mHeroLead { margin: 16px 0 0; max-width: 345px; color: rgba(255,255,255,.78); line-height: 1.5; font-size: 15px; }

        .mChoice {
          margin-top: clamp(130px, 26vh, 210px);
          position: relative;
          z-index: 2;
          padding: 16px;
          border-radius: 26px;
          background: rgba(12,17,20,.78);
          border: 1px solid rgba(200,255,47,.15);
          box-shadow: 0 26px 80px rgba(0,0,0,.45), 0 0 45px rgba(200,255,47,.08);
          backdrop-filter: blur(18px);
        }
        .mChoiceTitle { margin: 0 0 12px; font-size: 18px; font-weight: 950; }
        .mChoiceGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .mChoiceBtn {
          min-height: 48px;
          border-radius: 14px;
          border: 1px solid rgba(200,255,47,.15);
          background: rgba(255,255,255,.045);
          color: #fff;
          font-size: 14px;
          font-weight: 900;
        }
        .mChoiceBtnActive {
          color: #050607;
          background: linear-gradient(135deg, var(--tp-lime), var(--tp-lime-2));
          box-shadow: 0 0 26px rgba(200,255,47,.24);
        }

        .mHeroStats {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          position: relative;
          z-index: 2;
        }
        .mHeroStat {
          min-height: 86px;
          padding: 12px 7px;
          border-radius: 18px;
          background: rgba(17,22,26,.78);
          border: 1px solid rgba(200,255,47,.12);
          display: grid;
          place-items: center;
          text-align: center;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
        }
        .mHeroStat b { color: var(--tp-lime); font-size: 21px; filter: drop-shadow(0 0 12px rgba(200,255,47,.35)); }
        .mHeroStat span { display: block; margin-top: 6px; color: rgba(255,255,255,.82); font-size: 11px; line-height: 1.28; font-weight: 800; }

        .mSection { padding: 34px 16px; }
        .mSectionTight { padding-top: 18px; }
        .mKicker { margin: 0 0 9px; color: var(--tp-lime); font-size: 11px; font-weight: 950; letter-spacing: 1.5px; text-transform: uppercase; }
        .mSection h2 { margin: 0; font-size: 28px; line-height: 1.04; letter-spacing: -.7px; font-weight: 950; }
        .mSectionText { margin: 10px 0 0; color: var(--tp-muted); line-height: 1.55; font-size: 14px; }

        .mCarShell {
          margin-top: 18px;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(200,255,47,.16);
          background:
            radial-gradient(circle at 80% 0%, rgba(200,255,47,.10), transparent 35%),
            linear-gradient(180deg, rgba(17,22,26,.96), rgba(7,8,9,.98));
          box-shadow: 0 30px 90px rgba(0,0,0,.52), 0 0 38px rgba(200,255,47,.07);
        }
        .mCarTop {
          min-height: 330px;
          position: relative;
          background: #0b0f12;
          overflow: hidden;
        }
        .mCarTop img { width: 100%; height: 330px; object-fit: cover; opacity: .92; }
        .mCarTop::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 35%, rgba(7,8,9,.96) 100%); }
        .mArrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;
          background: rgba(5,6,7,.70);
          color: #fff;
          font-size: 26px;
          backdrop-filter: blur(10px);
        }
        .mArrowLeft { left: 12px; }
        .mArrowRight { right: 12px; }
        .mTag {
          position: absolute;
          left: 16px;
          bottom: 18px;
          z-index: 2;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(200,255,47,.12);
          border: 1px solid rgba(200,255,47,.22);
          color: var(--tp-lime);
          font-size: 11px;
          font-weight: 950;
          text-transform: uppercase;
        }
        .mDots { position: absolute; right: 18px; bottom: 26px; z-index: 2; display: flex; gap: 6px; }
        .mDot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,.28); }
        .mDotActive { width: 18px; border-radius: 99px; background: var(--tp-lime); }

        .mCarInfo { padding: 20px; }
        .mCarNameRow { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
        .mCarName { margin: 0; font-size: 31px; line-height: .98; letter-spacing: -.8px; font-weight: 950; }
        .mCarSub { margin-top: 7px; color: rgba(255,255,255,.56); font-size: 13px; }
        .mTermPill { padding: 8px 11px; border-radius: 999px; background: rgba(255,255,255,.06); color: rgba(255,255,255,.78); font-size: 12px; font-weight: 900; white-space: nowrap; }
        .mPrice { margin-top: 16px; color: rgba(255,255,255,.66); font-size: 15px; font-weight: 800; }
        .mPrice b { color: var(--tp-lime); font-size: 41px; letter-spacing: -1px; text-shadow: 0 0 18px rgba(200,255,47,.34); }
        .mMonth { margin-top: 5px; color: rgba(255,255,255,.64); font-size: 14px; font-weight: 700; }
        .mFacts { margin-top: 18px; display: grid; gap: 10px; }
        .mFact {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 11px;
          align-items: center;
          padding: 12px;
          border-radius: 16px;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.06);
        }
        .mFactIcon { width: 40px; height: 40px; border-radius: 13px; display: grid; place-items: center; color: var(--tp-lime); background: rgba(200,255,47,.07); border: 1px solid rgba(200,255,47,.16); }
        .mFact strong { display: block; font-size: 14px; }
        .mFact span { display: block; margin-top: 2px; color: rgba(255,255,255,.55); font-size: 12px; }

        .mPrimary {
          width: 100%;
          min-height: 64px;
          margin-top: 18px;
          border: 0;
          border-radius: 18px;
          background: linear-gradient(135deg, var(--tp-lime), var(--tp-lime-2));
          color: #050607;
          font-size: 17px;
          font-weight: 950;
          box-shadow: 0 0 40px rgba(200,255,47,.30), 0 18px 50px rgba(200,255,47,.18);
        }

        .mMiniCars { display: flex; gap: 10px; overflow-x: auto; padding: 14px 16px 2px; scroll-snap-type: x mandatory; }
        .mMiniCars::-webkit-scrollbar { display: none; }
        .mMiniCar {
          flex: 0 0 auto;
          min-width: 104px;
          border: 1px solid rgba(200,255,47,.12);
          border-radius: 16px;
          background: rgba(17,22,26,.70);
          color: rgba(255,255,255,.78);
          padding: 10px;
          font-weight: 900;
          font-size: 12px;
        }
        .mMiniCarActive { color: #050607; background: linear-gradient(135deg, var(--tp-lime), var(--tp-lime-2)); }

        .mWhyGrid { margin-top: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .mWhyCard {
          min-height: 130px;
          padding: 16px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(21,28,32,.95), rgba(12,16,19,.95));
          border: 1px solid rgba(200,255,47,.11);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
        }
        .mWhyIcon { width: 42px; height: 42px; border-radius: 14px; display: grid; place-items: center; color: var(--tp-lime); background: rgba(200,255,47,.07); border: 1px solid rgba(200,255,47,.16); font-size: 21px; }
        .mWhyCard strong { display: block; margin-top: 14px; font-size: 15px; line-height: 1.22; }
        .mWhyCard span { display: block; margin-top: 6px; color: rgba(255,255,255,.52); font-size: 12px; line-height: 1.35; }

        .mVideoMain {
          margin-top: 18px;
          overflow: hidden;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(21,28,32,.95), rgba(8,10,12,.96));
          border: 1px solid rgba(200,255,47,.13);
          box-shadow: 0 25px 75px rgba(0,0,0,.40);
        }
        .mVideoWrap { position: relative; background: #0b0f12; }
        .mVideoWrap video { width: 100%; aspect-ratio: 9 / 14; object-fit: cover; }
        .mPlayBadge {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 76px;
          height: 76px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.92);
          color: #050607;
          font-size: 28px;
          pointer-events: none;
          box-shadow: 0 0 38px rgba(255,255,255,.18);
        }
        .mVideoInfo { padding: 17px; }
        .mVideoInfo strong { display: block; font-size: 18px; }
        .mVideoInfo span { display: block; margin-top: 7px; color: rgba(255,255,255,.58); font-size: 13px; line-height: 1.45; }

        .mReviews { margin-top: 18px; display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px; scroll-snap-type: x mandatory; }
        .mReviews::-webkit-scrollbar { display: none; }
        .mReview {
          flex: 0 0 82%;
          scroll-snap-align: center;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(21,28,32,.95), rgba(8,10,12,.96));
          border: 1px solid rgba(200,255,47,.11);
        }
        .mReview video { width: 100%; height: 260px; object-fit: cover; }
        .mReviewBody { padding: 16px; }
        .mStars { color: var(--tp-lime); letter-spacing: 1px; font-size: 13px; }
        .mReviewBody strong { display: block; margin-top: 8px; font-size: 16px; }
        .mReviewBody p { margin: 9px 0 0; color: rgba(255,255,255,.60); font-size: 13px; line-height: 1.45; }

        .mSteps { margin-top: 18px; display: grid; gap: 12px; }
        .mStep {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 13px;
          align-items: center;
          padding: 16px;
          border-radius: 20px;
          background: rgba(17,22,26,.72);
          border: 1px solid rgba(200,255,47,.10);
        }
        .mStepNum { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; background: var(--tp-lime); color: #050607; font-weight: 950; }
        .mStep strong { display: block; }
        .mStep span { display: block; margin-top: 3px; color: rgba(255,255,255,.55); font-size: 13px; line-height: 1.35; }

        .mFaq { margin-top: 18px; display: grid; gap: 10px; }
        .mFaq details {
          border-radius: 18px;
          background: rgba(17,22,26,.78);
          border: 1px solid rgba(200,255,47,.10);
          overflow: hidden;
        }
        .mFaq summary {
          min-height: 60px;
          padding: 0 16px;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: 14px;
          font-weight: 900;
        }
        .mFaq summary::-webkit-details-marker { display: none; }
        .mFaq summary::after { content: "+"; color: var(--tp-lime); font-size: 23px; font-weight: 800; }
        .mFaq details[open] summary::after { content: "×"; }
        .mFaq p { margin: 0; padding: 0 16px 16px; color: rgba(255,255,255,.60); font-size: 13px; line-height: 1.5; }

        .mContacts { margin-top: 18px; display: grid; gap: 11px; }
        .mContact {
          min-height: 72px;
          display: grid;
          grid-template-columns: 48px 1fr 34px;
          gap: 12px;
          align-items: center;
          padding: 12px;
          border-radius: 20px;
          background: rgba(17,22,26,.78);
          border: 1px solid rgba(200,255,47,.10);
        }
        .mContactIcon { width: 48px; height: 48px; border-radius: 16px; display: grid; place-items: center; background: rgba(200,255,47,.07); border: 1px solid rgba(200,255,47,.16); color: var(--tp-lime); font-size: 20px; }
        .mContactIcon img { width: 28px; height: 28px; object-fit: contain; }
        .mContact strong { display: block; font-size: 15px; }
        .mContact span { display: block; margin-top: 3px; color: rgba(255,255,255,.56); font-size: 12px; line-height: 1.3; }
        .mContactGo { opacity: .45; font-size: 22px; }

        .mQuestionBox {
          margin-top: 22px;
          padding: 22px;
          border-radius: 26px;
          text-align: center;
          background: radial-gradient(circle at 50% 0%, rgba(200,255,47,.10), transparent 42%), rgba(17,22,26,.82);
          border: 1px solid rgba(200,255,47,.13);
        }
        .mQuestionBox strong { display: block; font-size: 22px; }
        .mQuestionBox p { margin: 9px 0 0; color: rgba(255,255,255,.60); font-size: 13px; line-height: 1.45; }

        .mFooter { padding: 14px 16px 20px; text-align: center; color: rgba(255,255,255,.38); font-size: 12px; }
        .mFooterBrand { display: flex; align-items: center; justify-content: center; gap: 9px; margin-bottom: 12px; }
        .mFooterBrand img { width: 38px; height: 38px; }
        .mFooterBrand strong { font-size: 18px; }
        .mFooterBrand span { color: var(--tp-lime); }

        .mFixedCta {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          padding: 10px 16px max(10px, env(safe-area-inset-bottom));
          background: rgba(5,6,7,.88);
          border-top: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(18px);
        }
        .mFixedCta button {
          width: 100%;
          min-height: 60px;
          border: 0;
          border-radius: 17px;
          background: linear-gradient(135deg, var(--tp-lime), var(--tp-lime-2));
          color: #050607;
          font-size: 18px;
          font-weight: 950;
          box-shadow: 0 0 30px rgba(200,255,47,.26);
        }

        .leadModalOverlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: grid;
          align-items: end;
          background: rgba(0,0,0,.72);
          backdrop-filter: blur(8px);
        }
        .leadModal {
          width: 100%;
          max-height: 92svh;
          overflow: auto;
          padding: 26px 18px max(22px, env(safe-area-inset-bottom));
          border-radius: 30px 30px 0 0;
          background: radial-gradient(circle at 25% 0%, rgba(200,255,47,.12), transparent 34%), #0c1114;
          border: 1px solid rgba(200,255,47,.16);
          box-shadow: 0 -30px 80px rgba(0,0,0,.45);
        }
        .leadModalTop { display: flex; justify-content: space-between; gap: 14px; align-items: flex-start; }
        .leadModal h2 { margin: 0; font-size: 34px; line-height: 1; letter-spacing: -1px; }
        .leadModal p { margin: 10px 0 0; color: rgba(255,255,255,.66); line-height: 1.5; }
        .leadModalClose { width: 48px; height: 48px; border-radius: 50%; border: 0; background: rgba(255,255,255,.08); color: #fff; font-size: 34px; line-height: 1; }
        .leadSelected {
          margin: 18px 0 14px;
          padding: 14px;
          border-radius: 18px;
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 12px;
          align-items: center;
          background: rgba(200,255,47,.06);
          border: 1px solid rgba(200,255,47,.14);
        }
        .leadSelected img { width: 72px; height: 58px; object-fit: cover; border-radius: 14px; }
        .leadSelected strong { display: block; }
        .leadSelected span { display: block; margin-top: 3px; color: var(--tp-lime); font-weight: 950; }
        .leadForm { display: grid; gap: 12px; }
        .leadInput, .leadPhone, .leadSelect, .leadComment {
          width: 100%;
          min-height: 62px;
          border-radius: 16px;
          border: 1px solid rgba(200,255,47,.13);
          background: rgba(255,255,255,.045);
          color: #fff;
          outline: none;
          font-size: 16px;
          font-weight: 700;
        }
        .leadInput { padding: 0 18px; }
        .leadPhone { display: flex; align-items: center; gap: 12px; padding: 0 18px; }
        .leadPhone span { font-weight: 950; }
        .leadPhone input { flex: 1; min-width: 0; border: 0; background: transparent; outline: 0; color: #fff; font-size: 16px; font-weight: 800; }
        .leadSelect { padding: 0 18px; }
        .leadSelect option { background: #0c1114; color: #fff; }
        .leadComment { min-height: 96px; resize: none; padding: 18px; }
        .leadSubmit {
          min-height: 64px;
          border: 0;
          border-radius: 18px;
          background: linear-gradient(135deg, var(--tp-lime), var(--tp-lime-2));
          color: #050607;
          font-size: 18px;
          font-weight: 950;
        }
        .leadPolicy { margin: 2px 0 0; text-align: center; color: rgba(255,255,255,.52); font-size: 11px; line-height: 1.45; }
        .leadPolicy a { color: var(--tp-lime); font-weight: 900; }

        @media (max-width: 380px) {
          .mHero { background-size: auto 620px; }
          .mChoice { margin-top: 110px; }
          .mHero h1 { font-size: 40px; }
          .mSection h2 { font-size: 25px; }
          .mPrice b { font-size: 35px; }
          .mCarTop, .mCarTop img { height: 292px; }
        }
      `}</style>

      <header className="mHeader">
        <a className="mBrand" href="#top" aria-label="Телепарк">
          <img src="/icon.png" alt="" />
          <div>
            <strong>
              ТЕЛЕ<span>ПАРК</span>
            </strong>
            <small>АВТО ПОД ВЫКУП</small>
          </div>
        </a>

        <div className="mHeaderActions">
          <a className="mRound" href={PHONE_LINK} aria-label="Позвонить">
            ☎
          </a>
          <a className="mRound" href="#contacts" aria-label="Контакты">
            ≡
          </a>
        </div>
      </header>

      <section className="mHero">
        <div className="mBadge">Автомобиль под выкуп</div>
        <h1>
          Без банка<br />и <span>лишних</span><br />условий
        </h1>
        <p className="mHeroLead">
          Выберите автомобиль, посмотрите условия и оставьте заявку — менеджер
          свяжется в течение 15 минут.
        </p>

        <div className="mChoice">
          <p className="mChoiceTitle">Какой автомобиль нужен?</p>
          <div className="mChoiceGrid">
            {cars.slice(0, 4).map((car, index) => (
              <button
                type="button"
                key={car.name}
                className={
                  selectedIndex === index
                    ? "mChoiceBtn mChoiceBtnActive"
                    : "mChoiceBtn"
                }
                onClick={() => {
                  setSelectedIndex(index);
                  document.getElementById("auto")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {car.short}
              </button>
            ))}
          </div>
        </div>

        <div className="mHeroStats">
          <div className="mHeroStat"><b>99%</b><span>Одобрение<br />заявок</span></div>
          <div className="mHeroStat"><b>15</b><span>Минут<br />на решение</span></div>
          <div className="mHeroStat"><b>1 день</b><span>Выдача<br />авто</span></div>
        </div>
      </section>

      <section className="mSection" id="auto">
        <p className="mKicker">Мини-конфигуратор</p>
        <h2>Выберите авто и сразу посмотрите условия</h2>
        <p className="mSectionText">
          Переключайте модели. Цена, взнос и срок меняются под выбранный автомобиль.
        </p>

        <div className="mMiniCars" aria-label="Выбор автомобиля">
          {cars.map((car, index) => (
            <button
              type="button"
              key={car.name}
              className={selectedIndex === index ? "mMiniCar mMiniCarActive" : "mMiniCar"}
              onClick={() => setSelectedIndex(index)}
            >
              {car.short}
            </button>
          ))}
        </div>

        <article className="mCarShell">
          <div className="mCarTop">
            <img src={selectedCar.img} alt={selectedCar.name} />
            <button type="button" className="mArrow mArrowLeft" onClick={() => goCar(-1)} aria-label="Предыдущее авто">‹</button>
            <button type="button" className="mArrow mArrowRight" onClick={() => goCar(1)} aria-label="Следующее авто">›</button>
            <div className="mTag">{selectedCar.tag}</div>
            <div className="mDots">
              {cars.map((car, index) => (
                <span key={car.name} className={index === selectedIndex ? "mDot mDotActive" : "mDot"} />
              ))}
            </div>
          </div>

          <div className="mCarInfo">
            <div className="mCarNameRow">
              <div>
                <h3 className="mCarName">{selectedCar.name}</h3>
                <div className="mCarSub">{selectedCar.year} • {selectedCar.gearbox} • {selectedCar.type}</div>
              </div>
              <div className="mTermPill">{selectedCar.term}</div>
            </div>

            <div className="mPrice">от <b>{selectedCar.price}</b> / сутки</div>
            <div className="mMonth">{selectedCar.month}</div>

            <div className="mFacts">
              <div className="mFact"><div className="mFactIcon">₽</div><div><strong>{selectedCar.upfront}</strong><span>первоначальный взнос</span></div></div>
              <div className="mFact"><div className="mFactIcon">⏱</div><div><strong>15 минут</strong><span>среднее время решения</span></div></div>
              <div className="mFact"><div className="mFactIcon">🎁</div><div><strong>ОСАГО + КАСКО</strong><span>в подарок на первый год</span></div></div>
            </div>

            <button type="button" className="mPrimary" onClick={() => openLead(selectedIndex)}>
              Получить условия по {selectedCar.short}
            </button>
          </div>
        </article>
      </section>

      <section className="mSection mSectionTight">
        <p className="mKicker">Преимущества</p>
        <h2>Почему выбирают Телепарк</h2>
        <div className="mWhyGrid">
          <div className="mWhyCard"><div className="mWhyIcon">🛡</div><strong>Без банка</strong><span>без участия банка и скрытых условий</span></div>
          <div className="mWhyCard"><div className="mWhyIcon">⚡</div><strong>15 минут</strong><span>быстрое решение по заявке</span></div>
          <div className="mWhyCard"><div className="mWhyIcon">🎁</div><strong>ОСАГО</strong><span>КАСКО и ОСАГО на первый год</span></div>
          <div className="mWhyCard"><div className="mWhyIcon">🚘</div><strong>Авто сегодня</strong><span>выдача в день обращения</span></div>
          <div className="mWhyCard"><div className="mWhyIcon">📄</div><strong>Договор</strong><span>все условия фиксируются заранее</span></div>
          <div className="mWhyCard"><div className="mWhyIcon">💳</div><strong>Без скрытых</strong><span>понятный платёж и прозрачные условия</span></div>
        </div>
      </section>

      <section className="mSection">
        <p className="mKicker">Видео</p>
        <h2>Как проходит выдача автомобиля</h2>
        <p className="mSectionText">Короткое видео помогает понять, как всё выглядит вживую.</p>
        <div className="mVideoMain">
          <div className="mVideoWrap">
            <video src={`/videos/${selectedCar.video}`} controls playsInline preload="metadata" />
            <div className="mPlayBadge">▶</div>
          </div>
          <div className="mVideoInfo">
            <strong>Выдача и отзыв клиента</strong>
            <span>Реальные автомобили, реальные условия и понятный процесс оформления.</span>
          </div>
        </div>
      </section>

      <section className="mSection">
        <p className="mKicker">Отзывы</p>
        <h2>Клиенты уже забрали автомобили</h2>
        <div className="mReviews">
          {reviews.map((review) => (
            <article className="mReview" key={review.video}>
              <video src={`/videos/${review.video}`} controls playsInline preload="metadata" />
              <div className="mReviewBody">
                <div className="mStars">★★★★★</div>
                <strong>{review.name} • {review.car}</strong>
                <p>{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mSection">
        <p className="mKicker">Как это работает</p>
        <h2>3 простых шага</h2>
        <div className="mSteps">
          <div className="mStep"><div className="mStepNum">1</div><div><strong>Выбираете авто</strong><span>Нажмите на модель и посмотрите условия.</span></div></div>
          <div className="mStep"><div className="mStepNum">2</div><div><strong>Оставляете заявку</strong><span>Менеджер связывается и подтверждает детали.</span></div></div>
          <div className="mStep"><div className="mStepNum">3</div><div><strong>Получаете автомобиль</strong><span>Подписываем договор и выдаём авто.</span></div></div>
        </div>
      </section>

      <section className="mSection">
        <p className="mKicker">Вопросы</p>
        <h2>Часто задаваемые вопросы</h2>
        <div className="mFaq">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mSection" id="contacts">
        <p className="mKicker">Контакты</p>
        <h2>Свяжитесь с нами</h2>
        <div className="mContacts">
          <a className="mContact" href={PHONE_LINK}>
            <div className="mContactIcon">☎</div><div><strong>Позвонить</strong><span>+7 (901) 371-15-84</span></div><div className="mContactGo">›</div>
          </a>
          <a className="mContact" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
            <div className="mContactIcon"><img src="/icons/telegram.png" alt="" /></div><div><strong>Написать в Telegram</strong><span>@teleparkgdel</span></div><div className="mContactGo">›</div>
          </a>
          <a className="mContact" href={MAX_LINK} target="_blank" rel="noreferrer">
            <div className="mContactIcon"><img src="/icons/max.png" alt="" /></div><div><strong>Написать в MAX</strong><span>Перейти в MAX</span></div><div className="mContactGo">›</div>
          </a>
          <div className="mContact">
            <div className="mContactIcon">📍</div><div><strong>Адрес офиса</strong><span>Санкт-Петербург, пр-т Обуховской Обороны, 271А</span></div><div className="mContactGo">•</div>
          </div>
          <div className="mContact">
            <div className="mContactIcon">🕘</div><div><strong>Работаем ежедневно</strong><span>Менеджер ответит и подберёт вариант</span></div><div className="mContactGo">•</div>
          </div>
        </div>

        <div className="mQuestionBox">
          <strong>Остались вопросы?</strong>
          <p>Оставьте заявку — мы перезвоним и подберём лучший вариант.</p>
          <button type="button" className="mPrimary" onClick={() => openLead()}>
            Оставить заявку
          </button>
        </div>
      </section>

      <footer className="mFooter">
        <div className="mFooterBrand">
          <img src="/icon.png" alt="" />
          <strong>ТЕЛЕ<span>ПАРК</span></strong>
        </div>
        © 2026 Телепарк — аренда авто под выкуп
      </footer>

      <div className="mFixedCta">
        <button type="button" onClick={() => openLead()}>
          Получить предложение
        </button>
      </div>

      {leadModalOpen && (
        <div className="leadModalOverlay" onClick={() => setLeadModalOpen(false)}>
          <div className="leadModal" onClick={(e) => e.stopPropagation()}>
            <div className="leadModalTop">
              <div>
                <h2>Оставить заявку</h2>
                <p>Мы свяжемся с вами в течение 15 минут и подберём лучший вариант.</p>
              </div>
              <button type="button" className="leadModalClose" onClick={() => setLeadModalOpen(false)}>×</button>
            </div>

            <div className="leadSelected">
              <img src={selectedCar.img} alt="" />
              <div><strong>{selectedCar.name}</strong><span>{selectedCar.price} / сутки</span></div>
            </div>

            <form
              className="leadForm"
              onSubmit={async (e) => {
                e.preventDefault();
                const digits = phone.replace(/\D/g, "");
                if (digits.length !== 11) {
                  alert("Введите полный номер телефона");
                  return;
                }

                const form = e.currentTarget;
                const formData = new FormData(form);
                formData.append("request", requestId);
                formData.append("selectedCar", selectedCar.name);
                formData.append("price", selectedCar.price);
                formData.append("term", selectedCar.term);
                formData.append("upfront", selectedCar.upfront);

                await fetch(FORM_ENDPOINT, {
                  method: "POST",
                  body: formData,
                  mode: "no-cors",
                });

                const name = String(formData.get("name") || "Спасибо");
                window.location.href = `/thanks?name=${encodeURIComponent(name)}&car=${encodeURIComponent(selectedCar.name)}&request=${encodeURIComponent(requestId)}`;
              }}
            >
              <input className="leadInput" name="name" placeholder="Ваше имя" required />
              <div className="leadPhone">
                <span>RU</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  minLength={18}
                  maxLength={18}
                  placeholder="+7 (999) 999-99-99"
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                />
              </div>
              <select
                className="leadSelect"
                name="car"
                value={selectedCar.name}
                onChange={(e) => {
                  const nextIndex = cars.findIndex((car) => car.name === e.target.value);
                  if (nextIndex >= 0) setSelectedIndex(nextIndex);
                }}
                required
              >
                {cars.map((car) => <option key={car.name}>{car.name}</option>)}
              </select>
              <textarea className="leadComment" name="comment" placeholder="Комментарий (необязательно)" />
              <button type="submit" className="leadSubmit">✈ Отправить заявку</button>
              <div className="leadPolicy">
                Нажимая кнопку, вы соглашаетесь с <a href="/privacy">политикой конфиденциальности</a> и <a href="/consent">обработкой персональных данных</a>.
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
