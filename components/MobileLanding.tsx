"use client";

import { useState } from "react";

const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";
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
    img: "/images/Tenet/TenetNew.png",
    heroImg: "/images/hero/HeroTenet2.png",
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
    img: "/images/cars/col.jpg",
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
    img: "/images/cars/rio.jpg",
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
    img: "/images/solaris/SolarisTOP.jpg",
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
    img: "/images/cars/hon.jpg",
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

  const selectedCar = cars[selectedIndex];

  const openLead = (carName = selectedCar.name) => {
    setSelectedCarName(carName);
    setLeadOpen(true);
  };

  const nextCar = () => setSelectedIndex((value) => (value + 1) % cars.length);
  const prevCar = () => setSelectedIndex((value) => (value - 1 + cars.length) % cars.length);
  const selectCar = (index: number) => setSelectedIndex(index);
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="tm" id="top">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800;900&display=swap');

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
        html, body {
          margin: 0;
          background: var(--tm-bg);
          color: #fff;
          font-family: Manrope, Arial, sans-serif;
          overflow-x: hidden;
        }
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
          min-height: 78svh;
          position: relative;
          overflow: hidden;
          padding: 104px 18px 28px;
          display: flex;
          align-items: flex-start;
          background:
            linear-gradient(180deg, rgba(5,6,7,0) 0%, rgba(5,6,7,.10) 44%, rgba(5,6,7,.64) 78%, #050607 100%),
            url('/images/HeroMobil.png');
          background-size: cover;
          background-position: center 16%;
          background-repeat: no-repeat;
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
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 34px 34px 0 0;
          box-shadow: inset 0 -80px 80px rgba(5,6,7,.88);
        }

        .tmCarPhoto::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(5,6,7,.42) 0%, rgba(5,6,7,.05) 36%, rgba(5,6,7,.94) 100%),
            radial-gradient(circle at 80% 72%, rgba(200,255,47,.22), transparent 42%);
          pointer-events: none;
        }

        .tmCarPhotoTop {
          position: absolute;
          left: 20px;
          right: 20px;
          top: 24px;
          z-index: 3;
        }
        .tmCarPhotoTop strong {
          display: block;
          font-size: clamp(36px, 11vw, 54px);
          line-height: .92;
          letter-spacing: -1.5px;
          font-weight: 950;
          text-transform: uppercase;
          text-shadow: 0 18px 38px rgba(0,0,0,.72);
        }
        .tmCarPhotoTop span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 8px 12px;
          border-radius: 999px;
          color: var(--tm-lime);
          background: rgba(5,6,7,.70);
          border: 1px solid rgba(200,255,47,.30);
          box-shadow: 0 0 28px rgba(200,255,47,.14);
          font-size: 10px;
          font-weight: 950;
          text-transform: uppercase;
        }
        .tmCarPhotoTop span::before { content: "✦"; }

        .tmArrow {
          position: absolute;
          z-index: 4;
          top: 48%;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(200,255,47,.28);
          background: rgba(5,6,7,.58);
          color: #fff;
          font-size: 30px;
          display: grid;
          place-items: center;
          box-shadow: 0 0 24px rgba(0,0,0,.45), 0 0 22px rgba(200,255,47,.10);
        }
        .tmArrowLeft { left: 14px; }
        .tmArrowRight { right: 14px; }

        .tmPrice {
          display: flex;
          align-items: end;
          gap: 6px;
        }
        .tmPrice small { color: rgba(255,255,255,.70); font-weight: 900; margin-bottom: 8px; }
        .tmPrice b { color: var(--tm-lime); font-size: 48px; line-height: .9; letter-spacing: -1.7px; font-weight: 950; text-shadow: 0 0 26px rgba(200,255,47,.46); }
        .tmPrice span { color: rgba(255,255,255,.84); margin-bottom: 8px; font-weight: 900; }

        .tmPriceOnPhoto {
          position: absolute;
          z-index: 3;
          left: 20px;
          right: 20px;
          bottom: 30px;
          padding: 16px 16px 18px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(10,14,16,.72), rgba(10,14,16,.40));
          border: 1px solid rgba(200,255,47,.18);
          backdrop-filter: blur(14px);
          box-shadow: 0 24px 60px rgba(0,0,0,.38);
        }

        .tmMonth { margin: 14px 2px 0; color: rgba(255,255,255,.66); font-size: 16px; font-weight: 900; }

        .tmCalcGrid {
          margin-top: 16px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .tmCalcRow {
          min-height: 122px;
          padding: 15px;
          border-radius: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background:
            radial-gradient(circle at 30% 18%, rgba(200,255,47,.10), transparent 38%),
            rgba(255,255,255,.035);
          border: 1px solid rgba(200,255,47,.13);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
        }
        .tmCalcIcon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          color: var(--tm-lime);
          background: rgba(200,255,47,.09);
          border: 1px solid rgba(200,255,47,.22);
          font-size: 23px;
          box-shadow: 0 0 26px rgba(200,255,47,.12);
        }
        .tmCalcRow strong { display: block; margin-top: 10px; font-size: 20px; line-height: 1.1; }
        .tmCalcRow span { display: block; margin-top: 5px; color: var(--tm-muted); font-size: 12px; line-height: 1.25; }

        .tmMiniFeatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 12px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(200,255,47,.12);
          background: rgba(255,255,255,.025);
        }
        .tmMiniFeatures div { padding: 15px 8px; text-align: center; border-right: 1px solid rgba(255,255,255,.06); }
        .tmMiniFeatures div:last-child { border-right: 0; }
        .tmMiniFeatures b { display: block; color: var(--tm-lime); margin-bottom: 8px; font-size: 18px; text-shadow: 0 0 18px rgba(200,255,47,.30); }
        .tmMiniFeatures span { color: rgba(255,255,255,.72); font-size: 10px; line-height: 1.35; font-weight: 850; }

        .tmThumbs {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 14px 2px 4px;
          scroll-snap-type: x mandatory;
        }
        .tmThumbs::-webkit-scrollbar { display: none; }
        .tmThumb {
          flex: 0 0 108px;
          min-height: 118px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.035);
          color: rgba(255,255,255,.76);
          overflow: hidden;
          scroll-snap-align: start;
          padding: 0;
        }
        .tmThumb.active {
          border-color: rgba(200,255,47,.72);
          color: var(--tm-lime);
          box-shadow: 0 0 26px rgba(200,255,47,.18);
        }
        .tmThumbPic {
          height: 74px;
          background-size: cover;
          background-position: center;
          filter: saturate(.96) contrast(1.05);
        }
        .tmThumb span {
          display: grid;
          place-items: center;
          min-height: 42px;
          font-size: 11px;
          font-weight: 950;
          text-transform: uppercase;
        }

        .tmBenefits { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .tmBenefit {
          min-height: 154px;
          padding: 18px 14px;
          border-radius: 22px;
          background:
            radial-gradient(circle at 35% 10%, rgba(200,255,47,.08), transparent 42%),
            linear-gradient(180deg, rgba(17,22,26,.86), rgba(9,12,14,.92));
          border: 1px solid rgba(200,255,47,.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
        }
        .tmBenefitIcon { width: 48px; height: 48px; border-radius: 16px; display: grid; place-items: center; color: var(--tm-lime); background: rgba(200,255,47,.08); border: 1px solid rgba(200,255,47,.20); font-size: 26px; margin-bottom: 18px; box-shadow: 0 0 24px rgba(200,255,47,.10); }
        .tmBenefit strong { display: block; font-size: 15px; line-height: 1.18; }
        .tmBenefit span { display: block; margin-top: 7px; color: rgba(255,255,255,.56); font-size: 11px; line-height: 1.35; }

        .tmReviews { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px; scroll-snap-type: x mandatory; }
        .tmReviews::-webkit-scrollbar { display: none; }
        .tmReview {
          flex: 0 0 86%;
          scroll-snap-align: center;
          padding: 12px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(17,22,26,.90), rgba(7,8,9,.96));
          border: 1px solid rgba(200,255,47,.12);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04);
        }
        .tmReview video { width: 100%; height: 360px; object-fit: cover; border-radius: 18px; background: #111; }
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

        .tmContacts { display: grid; gap: 12px; }
        .tmContact {
          min-height: 74px;
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 12px;
          align-items: center;
          padding: 14px;
          border-radius: 20px;
          background: rgba(17,22,26,.78);
          border: 1px solid rgba(200,255,47,.10);
        }
        .tmContactIcon { width: 50px; height: 50px; border-radius: 16px; display: grid; place-items: center; color: var(--tm-lime); background: rgba(200,255,47,.07); border: 1px solid rgba(200,255,47,.18); font-size: 23px; }
        .tmContactIcon img { width: 30px; height: 30px; object-fit: contain; }
        .tmContact strong { display: block; font-size: 16px; }
        .tmContact span { display: block; margin-top: 4px; color: rgba(255,255,255,.60); font-size: 13px; line-height: 1.35; }

        .tmBottomNav {
          position: fixed;
          left: 10px;
          right: 10px;
          bottom: max(10px, env(safe-area-inset-bottom));
          z-index: 999;
          padding: 10px;
          border-radius: 24px;
          background: rgba(8,11,13,.90);
          border: 1px solid rgba(200,255,47,.20);
          backdrop-filter: blur(20px);
          box-shadow: 0 22px 70px rgba(0,0,0,.62), 0 0 38px rgba(200,255,47,.10);
        }
        .tmNavRow { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 9px; }
        .tmNavRow button { display: grid; place-items: center; gap: 2px; min-height: 44px; border: 0; border-radius: 14px; background: transparent; color: rgba(255,255,255,.62); font-size: 10px; font-weight: 850; }
        .tmNavRow button.active { color: var(--tm-lime); background: rgba(200,255,47,.07); }
        .tmNavRow b { font-size: 18px; }
        .tmBottomNav .tmPrimary { min-height: 54px; border-radius: 16px; }

        .tmModalOverlay { position: fixed; inset: 0; z-index: 2000; display: grid; align-items: end; background: rgba(0,0,0,.72); backdrop-filter: blur(14px); }
        .tmModal { position: relative; max-height: 92vh; overflow-y: auto; padding: 30px 18px 22px; border-radius: 30px 30px 0 0; background: linear-gradient(180deg, rgba(17,22,26,.98), rgba(5,6,7,.99)); border: 1px solid rgba(200,255,47,.18); box-shadow: 0 -25px 90px rgba(0,0,0,.70); }
        .tmClose { position: absolute; right: 18px; top: 18px; width: 48px; height: 48px; border: 0; border-radius: 50%; background: rgba(255,255,255,.07); color: #fff; font-size: 34px; }
        .tmModal h2 { margin: 0; max-width: 280px; font-size: 42px; line-height: 1; letter-spacing: -1.5px; }
        .tmModal p { margin: 12px 0 20px; color: rgba(255,255,255,.66); line-height: 1.5; }
        .tmForm { display: grid; gap: 12px; }
        .tmField, .tmPhone, .tmForm select { width: 100%; min-height: 62px; border-radius: 17px; border: 1px solid rgba(200,255,47,.14); background: rgba(255,255,255,.045); color: #fff; padding: 0 18px; font-size: 16px; font-weight: 750; outline: none; }
        .tmPhone { display: flex; align-items: center; gap: 12px; }
        .tmPhone span { font-weight: 950; }
        .tmPhone input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: #fff; font-size: 16px; font-weight: 750; }
        .tmForm select option { background: #0b0f12; color: white; }
        .tmPolicy { margin-top: 3px !important; text-align: center; font-size: 12px; color: rgba(255,255,255,.50) !important; }
        .tmPolicy a { color: var(--tm-lime); font-weight: 850; }

        @media (max-width: 390px) {
          .tmHero { padding-left: 14px; padding-right: 14px; min-height: 76svh; }
          .tmCarPhoto { min-height: 400px; }
          .tmPrice b { font-size: 41px; }
          .tmCalcGrid { grid-template-columns: 1fr; }
          .tmReview video { height: 330px; }
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
          <a className="tmHeaderPhone" href={PHONE_LINK} aria-label="Позвонить">☎</a>
          <button className="tmHeaderCta" type="button" onClick={() => openLead()}>Заявка</button>
        </div>
      </header>

      <section className="tmHero">
        <div className="tmHeroTop">
          <div className="tmBadge">АВТОМОБИЛЬ ПОД ВЫКУП</div>
          <h1>БЕЗ БАНКА<br />И <span>ЛИШНИХ</span><br />УСЛОВИЙ</h1>
          <div className="tmBullets">
            <div><b>✓</b>Одобрение 99%</div>
            <div><b>✓</b>Решение за 15 минут</div>
            <div><b>✓</b>Авто сегодня</div>
          </div>
        </div>
      </section>

      <section className="tmSection" id="tmCars">
        <div className="tmKicker">Выбор автомобиля</div>
        <h2>Выберите авто и получите условия</h2>

        <div className="tmCarStage">
          <div className="tmCarPhoto" style={{ backgroundImage: `url(${selectedCar.img})` }}>
            <button className="tmArrow tmArrowLeft" type="button" onClick={prevCar}>‹</button>
            <button className="tmArrow tmArrowRight" type="button" onClick={nextCar}>›</button>

            <div className="tmCarPhotoTop">
              <strong>{selectedCar.name}</strong>
              <span>{selectedCar.badge}</span>
            </div>

            <div className="tmPrice tmPriceOnPhoto">
              <small>от</small>
              <b>{selectedCar.price}</b>
              <span>/ сутки</span>
            </div>
          </div>

          <div className="tmMonth">{selectedCar.month}</div>

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
        <h2>Почему выбирают ТЕЛЕПАРК</h2>
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
        <h2>Листайте отзывы</h2>
        <div className="tmReviews">
          {videos.map((video) => (
            <article className="tmReview" key={video[0]}>
              <video autoPlay muted loop playsInline preload="metadata" src={`/videos/${video[0]}`} />
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

      <section className="tmSection" id="tmContacts">
        <div className="tmKicker">Контакты</div>
        <h2>Свяжитесь с нами</h2>
        <div className="tmContacts">
          <a className="tmContact" href={PHONE_LINK}>
            <div className="tmContactIcon">☎</div>
            <div><strong>Позвонить</strong><span>+7 (901) 371-15-84</span></div>
          </a>
          <a className="tmContact" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">
            <div className="tmContactIcon"><img src="/icons/telegram.png" alt="" /></div>
            <div><strong>Telegram</strong><span>@teleparkgdel</span></div>
          </a>
          <a className="tmContact" href={MAX_LINK} target="_blank" rel="noreferrer">
            <div className="tmContactIcon"><img src="/icons/max.png" alt="" /></div>
            <div><strong>MAX</strong><span>Написать менеджеру</span></div>
          </a>
          <div className="tmContact">
            <div className="tmContactIcon">📍</div>
            <div><strong>Адрес офиса</strong><span>Санкт-Петербург, пр-т Обуховской Обороны, 271А, помещение 7-Н</span></div>
          </div>
          <div className="tmContact">
            <div className="tmContactIcon">🕘</div>
            <div><strong>Работаем ежедневно</strong><span>с 9:00 до 22:00</span></div>
          </div>
        </div>
      </section>

      <nav className="tmBottomNav">
        <div className="tmNavRow">
          <button type="button" className="active" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <b>⌂</b>
            <span>Главная</span>
          </button>
          <button type="button" onClick={() => scrollToId("tmCars")}>
            <b>🚘</b>
            <span>Авто</span>
          </button>
          <button type="button" onClick={() => scrollToId("tmReviews")}>
            <b>★</b>
            <span>Отзывы</span>
          </button>
          <button type="button" onClick={() => scrollToId("tmContacts")}>
            <b>☎</b>
            <span>Контакты</span>
          </button>
        </div>
        <button className="tmPrimary" type="button" onClick={() => openLead()}>Получить предложение</button>
      </nav>

      {leadOpen && (
        <div className="tmModalOverlay" onClick={() => setLeadOpen(false)}>
          <div className="tmModal" onClick={(event) => event.stopPropagation()}>
            <button className="tmClose" type="button" onClick={() => setLeadOpen(false)}>×</button>
            <h2>Оставить заявку</h2>
            <p>Мы свяжемся в течение 15 минут и подберём лучший вариант.</p>
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
              <button className="tmPrimary" type="submit">✈ Отправить заявку</button>
              <p className="tmPolicy">
                Нажимая кнопку, вы соглашаетесь с <a href="/privacy">политикой конфиденциальности</a> и <a href="/consent">обработкой данных</a>.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
