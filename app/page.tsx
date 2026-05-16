const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";

export default function Home() {
  const cars = [
    ["Geely Coolray", "/images/cars/col.jpg", "Современный городской кроссовер для семьи и работы."],
    ["Kia Rio", "/images/cars/rio.jpg", "Экономичный автомобиль для такси, доставки и личных поездок."],
    ["Hongqi H5", "/images/cars/hon.jpg", "Премиальный седан для комфортных поездок и бизнеса."],
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #040814; color: white; font-family: Arial, sans-serif; }
        a { color: inherit; text-decoration: none; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .header { position: sticky; top: 0; z-index: 50; background: rgba(4,8,20,.92); border-bottom: 1px solid rgba(255,255,255,.1); backdrop-filter: blur(12px); }
        .nav { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; max-width: 1200px; margin: auto; }
        .brand { display: flex; align-items: center; gap: 14px; }
        .logo { width: 54px; height: 54px; border-radius: 50%; object-fit: cover; background: white; padding: 3px; }
        .brand-title { font-size: 24px; font-weight: 900; }
        .brand-sub { font-size: 12px; color: rgba(255,255,255,.45); }
        .links { display: flex; gap: 28px; color: rgba(255,255,255,.65); font-size: 14px; }
        .icons { display: flex; gap: 12px; }
        .iconBtn { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; }
        .tg { background: #0ea5e9; }
        .max { background: #7c3aed; }
        .hero { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; padding: 90px 24px; max-width: 1200px; margin: auto; }
        .badge { display: inline-block; padding: 10px 16px; border-radius: 999px; background: rgba(37,99,235,.15); border: 1px solid rgba(59,130,246,.3); color: #93c5fd; margin-bottom: 24px; }
        h1 { font-size: 72px; line-height: .95; margin: 0; font-weight: 900; }
        .hero p { color: rgba(255,255,255,.65); font-size: 18px; line-height: 1.7; max-width: 560px; }
        .btns { display: flex; gap: 16px; margin-top: 32px; flex-wrap: wrap; }
        .btn { padding: 16px 28px; border-radius: 16px; font-weight: 800; display: inline-block; }
        .primary { background: #2563eb; }
        .secondary { border: 1px solid rgba(255,255,255,.15); }
        .heroImg { width: 100%; height: 500px; object-fit: cover; border-radius: 32px; border: 1px solid rgba(255,255,255,.1); }
        section { padding: 70px 0; }
        h2 { font-size: 44px; margin: 0 0 12px; font-weight: 900; }
        .muted { color: rgba(255,255,255,.55); font-size: 18px; }
        .grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 36px; }
        .grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 42px; }
        .card { background: rgba(255,255,255,.035); border: 1px solid rgba(255,255,255,.1); border-radius: 28px; overflow: hidden; }
        .condition { padding: 28px; }
        .condition strong { color: #60a5fa; font-size: 34px; display: block; margin-bottom: 10px; }
        .carImg { width: 100%; height: 280px; object-fit: cover; }
        .carBody { padding: 28px; }
        .carBody h3 { font-size: 30px; margin: 0 0 16px; }
        .carBody p { color: rgba(255,255,255,.6); line-height: 1.6; }
        .floating { position: fixed; right: 24px; bottom: 24px; display: flex; flex-direction: column; gap: 12px; z-index: 100; }
        footer { padding: 36px; text-align: center; color: rgba(255,255,255,.45); border-top: 1px solid rgba(255,255,255,.1); }
        @media (max-width: 900px) {
          .hero, .grid3, .grid4 { grid-template-columns: 1fr; }
          .links { display: none; }
          h1 { font-size: 48px; }
        }
      `}</style>

      <main>
        <header className="header">
          <div className="nav">
            <div className="brand">
              <img src="/logo/telepark-logo.jpg" className="logo" alt="Телепарк" />
              <div>
                <div className="brand-title">Телепарк</div>
                <div className="brand-sub">Аренда авто под выкуп</div>
              </div>
            </div>

            <nav className="links">
              <a href="#conditions">Условия</a>
              <a href="#cars">Авто</a>
              <a href="#steps">Как работает</a>
            </nav>

            <div className="icons">
              <a className="iconBtn tg" href={TELEGRAM_LINK} target="_blank">TG</a>
              <a className="iconBtn max" href={MAX_LINK} target="_blank">MAX</a>
            </div>
          </div>
        </header>

        <div className="hero">
          <div>
            <div className="badge">Авто сегодня — выкуп постепенно</div>
            <h1>Аренда авто<br />под выкуп</h1>
            <p>
              Телепарк подберёт автомобиль под вашу задачу: такси, доставка,
              семья или личные поездки. Прозрачный договор, понятные платежи
              и возможность досрочного выкупа.
            </p>
            <div className="btns">
              <a href="#contact" className="btn primary">Получить подбор авто</a>
              <a href="#cars" className="btn secondary">Смотреть автомобили</a>
            </div>
          </div>

          <img src="/images/cars/col.jpg" className="heroImg" alt="Авто" />
        </div>

        <section id="conditions">
          <div className="container">
            <h2>Условия аренды</h2>
            <div className="grid4">
              {[
                ["0%", "без первоначального взноса"],
                ["16–24 мес.", "срок выкупа"],
                ["Сразу", "рассмотрение"],
                ["21+", "возраст водителя"],
              ].map(([a, b]) => (
                <div className="card condition" key={a}>
                  <strong>{a}</strong>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cars">
          <div className="container">
            <h2>Автомобили в наличии</h2>
            <p className="muted">Подберём автомобиль под ваши задачи и бюджет.</p>

            <div className="grid3">
              {cars.map(([name, img, text]) => (
                <div className="card" key={name}>
                  <img src={img} className="carImg" alt={name} />
                  <div className="carBody">
                    <h3>{name}</h3>
                    <p>{text}</p>
                    <a href="#contact" className="btn primary">Оставить заявку</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="steps">
          <div className="container">
            <h2>Как это работает</h2>
            <div className="grid4">
              {["Оставляете заявку", "Подбираем авто", "Согласовываем условия", "Вы садитесь за руль"].map((s, i) => (
                <div className="card condition" key={s}>
                  <strong>0{i + 1}</strong>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Оставьте заявку</h2>
            <p className="muted">Напишите нам в Telegram или MAX — подберём автомобиль под вас.</p>
          </div>
        </section>

        <div className="floating">
          <a className="iconBtn tg" href={TELEGRAM_LINK} target="_blank">TG</a>
          <a className="iconBtn max" href={MAX_LINK} target="_blank">MAX</a>
        </div>

        <footer>© 2026 Телепарк — аренда авто под выкуп</footer>
      </main>
    </>
  );
}