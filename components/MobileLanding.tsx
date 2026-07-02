"use client";

import Image from "next/image";

import MobileHero from "./mobile/MobileHero";

import MobileFaq from "./mobile/MobileFaq";

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


      <header className="tmHeader">
        <a className="tmBrand" href="#top">
          <Image src="/icon.png" alt="Телепарк" width={44} height={44} />
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

 <Image
  className="tmHeroImg"
  src="/New/TenetSPB.webp"
  alt="Автомобиль Tenet для выкупа в Санкт-Петербурге"
  fill
  priority
  fetchPriority="high"
  sizes="(max-width: 480px) 100vw, 480px"
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
            <Image
              className="tmCarMainImg"
              src={selectedCar.img}
              alt={selectedCar.name}
              fill
              sizes="(max-width: 768px) 100vw, 440px"
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

<MobileFaq />

      
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
          <a
  className="tmContact"
  href={PHONE_LINK}
  onClick={() => window.ym?.(110291694, "reachGoal", "phone_click")}
>
            <div className="tmContactIcon"><PhoneCallIcon /></div>
            <div><strong>Позвонить</strong><span>+7 (901) 371-15-84</span></div>
            <div className="tmContactArrow"><ChevronIcon /></div>
          </a>
          <a
  className="tmContact"
  href={TELEGRAM_LINK}
  target="_blank"
  rel="noreferrer"
  onClick={() => window.ym?.(110291694, "reachGoal", "telegram_click")}
>
            <div className="tmContactIcon"><Image src="/icons/telegram.png" alt="" width={34} height={34} /></div>
            <div><strong>Telegram</strong><span>@teleparkgdel</span></div>
            <div className="tmContactArrow"><ChevronIcon /></div>
          </a>
          <a
  className="tmContact"
  href={MAX_LINK}
  target="_blank"
  rel="noreferrer"
  onClick={() => window.ym?.(110291694, "reachGoal", "max_click")}
>
            <div className="tmContactIcon"><Image src="/icons/max.png" alt="" width={34} height={34} /></div>
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
              <Image src={selectedCar.img} alt={selectedCar.name} width={132} height={118} />
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
                  <Image src="/icons/telegram.png" alt="" width={32} height={32} />
                  <div><strong>Telegram</strong><span>Написать</span></div>
                </a>
                <a className="tmFastLink" href={MAX_LINK} target="_blank" rel="noreferrer">
                  <Image src="/icons/max.png" alt="" width={32} height={32} />
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
