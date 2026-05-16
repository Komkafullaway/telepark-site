export default function Home() {
  const cars = [
    {
      name: "Geely Coolray",
      image: "/images/Coolray/5460664486231478877.jpg",
      text: "Современный городской кроссовер для семьи, работы и ежедневных поездок.",
    },
    {
      name: "Kia Rio",
      image: "/images/Rio/5454074189628248559.jpg",
      text: "Экономичный автомобиль для такси, доставки и личного использования.",
    },
    {
      name: "Haval H5",
      image: "/images/H5/5467665794025067403.jpg",
      text: "Просторный внедорожник для семьи, поездок и уверенного движения.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-black">
              T
            </div>
            <span className="text-xl font-black">Телепарк</span>
          </div>

          <nav className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="#conditions">Условия</a>
            <a href="#cars">Авто</a>
            <a href="#steps">Как работает</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black"
          >
            Заявка
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
            Авто сегодня — выкуп постепенно
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Аренда авто под выкуп
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/65">
            Телепарк подберёт автомобиль под вашу задачу: такси, доставка,
            семья или личные поездки. Прозрачный договор, понятные платежи и
            возможность досрочного выкупа.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-blue-600 px-7 py-4 font-bold hover:bg-blue-500"
            >
              Получить подбор авто
            </a>

            <a
              href="#cars"
              className="rounded-2xl border border-white/15 px-7 py-4 font-bold text-white/80 hover:bg-white/10"
            >
              Смотреть автомобили
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
          <img
            src="/images/Coolray/5460664486231478877.jpg"
            alt="Автомобиль Телепарк"
            className="h-[430px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <section id="conditions" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Условия</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            ["от 10%", "первый взнос"],
            ["12–36 мес.", "срок выкупа"],
            ["от 1 дня", "рассмотрение"],
            ["18+", "возраст водителя"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-3xl font-black text-blue-400">{title}</div>
              <div className="mt-2 text-white/60">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="cars" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Автомобили в наличии</h2>
        <p className="mt-4 text-white/60">
          Подберём автомобиль под ваши задачи и бюджет.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-black">{car.name}</h3>
                <p className="mt-3 text-white/60">{car.text}</p>

                <a
                  href="#contact"
                  className="mt-6 inline-block rounded-2xl bg-blue-600 px-5 py-3 font-bold hover:bg-blue-500"
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
            ["03", "Фиксируем условия"],
            ["04", "Вы за рулём"],
          ].map(([num, text]) => (
            <div
              key={num}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-blue-400">{num}</div>
              <div className="mt-4 text-xl font-black">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 rounded-[2rem] bg-white p-8 text-black md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-4xl font-black">
              Оставьте заявку на подбор авто
            </h2>
            <p className="mt-4 text-black/60">
              Свяжемся с вами, уточним задачу и предложим подходящие варианты.
            </p>
          </div>

          <form className="grid gap-4">
            <input className="rounded-2xl border p-4" placeholder="Ваше имя" />
            <input className="rounded-2xl border p-4" placeholder="Телефон" />
            <select className="rounded-2xl border p-4">
              <option>Цель использования</option>
              <option>Такси</option>
              <option>Доставка</option>
              <option>Личные поездки</option>
              <option>Семья</option>
            </select>
            <textarea
              className="rounded-2xl border p-4"
              placeholder="Комментарий"
            />
            <button className="rounded-2xl bg-blue-600 p-4 font-bold text-white">
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
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-black">{q}</h3>
              <p className="mt-3 text-white/60">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/50">
        © 2026 Телепарк. Аренда авто под выкуп.
      </footer>
    </main>
  );
}