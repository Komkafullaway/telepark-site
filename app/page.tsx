const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
      <path d="M9.8 15.6 9.4 20c.6 0 .9-.3 1.2-.6l2.9-2.8 6 4.4c1.1.6 1.9.3 2.2-1L25.6 2c.4-1.5-.5-2.1-1.6-1.7L1.7 8.9C.2 9.5.2 10.4 1.5 10.8l5.7 1.8L20.5 4.3c.6-.4 1.2-.2.7.3L9.8 15.6Z" />
    </svg>
  );
}

function MaxIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-7 w-7">
      <rect width="64" height="64" rx="18" fill="white" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontSize="22"
        fontWeight="900"
        fill="#6D28D9"
        fontFamily="Arial, sans-serif"
      >
        MAX
      </text>
    </svg>
  );
}

export default function Home() {
  const cars = [
    {
      name: "Geely Coolray",
      image: "/images/cars/col.jpg",
      text: "Современный городской кроссовер для семьи, работы и ежедневных поездок.",
    },
    {
      name: "Kia Rio",
      image: "/images/cars/rio.jpg",
      text: "Экономичный автомобиль для такси, доставки и личного использования.",
    },
    {
      name: "Hongqi H5",
      image: "/images/cars/hon.jpg",
      text: "Премиальный седан для комфортных поездок, бизнеса и семьи.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#040814] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040814]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-black">
              T
            </div>
            <div>
              <div className="text-2xl font-black">Телепарк</div>
              <div className="text-xs text-white/40">Аренда авто под выкуп</div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="#conditions">Условия</a>
            <a href="#cars">Авто</a>
            <a href="#steps">Как работает</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 transition hover:scale-110"
            >
              <TelegramIcon />
            </a>

            <a
              href={MAX_LINK}
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 transition hover:scale-110"
            >
              <MaxIcon />
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Авто сегодня — выкуп постепенно
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Аренда авто
            <br />
            под выкуп
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
            Телепарк подберёт автомобиль под вашу задачу: такси, доставка,
            семья или личные поездки. Прозрачный договор, понятные платежи и
            возможность досрочного выкупа.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-500"
            >
              Получить подбор авто
            </a>

            <a
              href="#cars"
              className="rounded-2xl border border-white/10 px-8 py-4 font-bold text-white/80 transition hover:bg-white/10"
            >
              Смотреть автомобили
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
          <img
            src="/images/cars/col.jpg"
            alt="Телепарк"
            className="h-[500px] w-full object-cover"
          />
        </div>
      </section>

      <section id="conditions" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Условия аренды</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            ["0%", "без первоначального взноса"],
            ["16–24 мес.", "срок выкупа"],
            ["Сразу", "рассмотрение"],
            ["21+", "возраст водителя"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="text-3xl font-black text-blue-400">{title}</div>
              <div className="mt-3 text-white/50">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="cars" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-5xl font-black">Автомобили в наличии</h2>
        <p className="mt-4 text-lg text-white/50">
          Подберём автомобиль под ваши задачи и бюджет.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:-translate-y-2"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="text-3xl font-black">{car.name}</h3>
                <p className="mt-4 text-white/60">{car.text}</p>

                <a
                  href="#contact"
                  className="mt-7 inline-block rounded-2xl bg-blue-600 px-6 py-4 font-bold transition hover:bg-blue-500"
                >
                  Оставить заявку
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="steps" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Как это работает</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            ["01", "Оставляете заявку"],
            ["02", "Подбираем авто"],
            ["03", "Согласовываем условия"],
            ["04", "Вы садитесь за руль"],
          ].map(([num, text]) => (
            <div
              key={num}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="text-sm text-blue-400">{num}</div>
              <div className="mt-4 text-2xl font-black">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2.5rem] bg-white p-8 text-black md:grid-cols-2 md:p-14">
          <div>
            <h2 className="text-5xl font-black">Оставьте заявку</h2>
            <p className="mt-5 text-lg text-black/60">
              Мы свяжемся с вами и подберём автомобиль под ваши задачи и бюджет.
            </p>
          </div>

          <form className="grid gap-4">
            <input className="rounded-2xl border p-5" placeholder="Ваше имя" />
            <input className="rounded-2xl border p-5" placeholder="Телефон" />
            <select className="rounded-2xl border p-5">
              <option>Цель использования</option>
              <option>Такси</option>
              <option>Доставка</option>
              <option>Личные поездки</option>
              <option>Семья</option>
            </select>
            <textarea className="rounded-2xl border p-5" placeholder="Комментарий" />
            <button className="rounded-2xl bg-blue-600 p-5 font-bold text-white hover:bg-blue-500">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">FAQ</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            ["Можно ли выкупить досрочно?", "Да, досрочный выкуп возможен."],
            ["Какие документы нужны?", "Паспорт и водительское удостоверение."],
            ["Можно ли выбрать модель?", "Да, подберём авто под ваш бюджет."],
            ["Кому подходит?", "Для такси, доставки, семьи и личных поездок."],
          ].map(([q, a]) => (
            <div
              key={q}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-black">{q}</h3>
              <p className="mt-3 text-white/60">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 shadow-2xl transition hover:scale-110"
        >
          <TelegramIcon />
        </a>

        <a
          href={MAX_LINK}
          target="_blank"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 shadow-2xl transition hover:scale-110"
        >
          <MaxIcon />
        </a>
      </div>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-white/40">
        © 2026 Телепарк — аренда авто под выкуп
      </footer>
    </main>
  );
}