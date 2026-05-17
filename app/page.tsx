const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";
const PHONE_LINK = "tel:+79013711584";
const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwXgg5KBMb6DWffFsGH5r1NJngX0yV18CM_T_Fuu-7vc8RQ8g45uVQ47w3EU6sefgaJ/exec";

export default function Home() {
  const cars = [
    ["Geely Coolray", "/images/cars/col.jpg", "Современный городской кроссовер для семьи и работы.", "от 79 000 ₽/мес"],
    ["Kia Rio", "/images/cars/rio.jpg", "Экономичный автомобиль для такси, доставки и личных поездок.", "от 59 000 ₽/мес"],
    ["Hongqi H5", "/images/cars/hon.jpg", "Премиальный седан для комфортных поездок и бизнеса.", "от 99 000 ₽/мес"],
  ];

  const ContactIcons = () => (
    <>
      <a className="iconBtn" href={TELEGRAM_LINK} target="_blank">
        <img src="/icons/telegram.png" alt="Telegram" />
      </a>
      <a className="iconBtn" href={MAX_LINK} target="_blank">
        <img src="/icons/max.png" alt="MAX" />
      </a>
    </>
  );

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #040814; color: white; font-family: Arial, sans-serif; }
        a { color: inherit; text-decoration: none; }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(4,8,20,.58);
          border-bottom: 1px solid rgba(255,255,255,.12);
          backdrop-filter: blur(18px);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 24px;
          max-width: 1200px;
          margin: auto;
        }

        .brand { display: flex; align-items: center; gap: 14px; }

        .logo {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          object-fit: cover;
          background: white;
          padding: 3px;
        }

        .brand-title { font-size: 24px; font-weight: 900; }
        .brand-sub { font-size: 12px; color: rgba(255,255,255,.55); }

        .links {
          display: flex;
          gap: 28px;
          color: rgba(255,255,255,.76);
          font-size: 14px;
        }

        .actions { display: flex; gap: 10px; align-items: center; }

        .iconBtn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.16);
          transition: .25s;
          overflow: hidden;
        }

        .iconBtn:hover { transform: translateY(-2px) scale(1.08); }

        .iconBtn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .call {
          background: #16a34a;
          padding: 13px 18px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 14px;
          transition: .2s;
        }

        .call:hover { transform: translateY(-2px); background: #22c55e; }

        .hero {
          position: relative;
          min-height: 100vh;
          background-image: url('/images/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to right,
              rgba(4,8,20,.92) 5%,
              rgba(4,8,20,.62) 45%,
              rgba(4,8,20,.35) 100%
            );
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 130px 24px 80px;
        }

        .badge {
          display: inline-block;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(12px);
          color: #fff;
          margin-bottom: 28px;
        }

        h1 {
          font-size: 88px;
          line-height: .95;
          margin: 0;
          font-weight: 900;
          letter-spacing: -3px;
          max-width: 760px;
        }

        .hero p {
          color: rgba(255,255,255,.84);
          font-size: 22px;
          line-height: 1.7;
          max-width: 700px;
          margin-top: 26px;
        }

        .btns { display: flex; gap: 16px; margin-top: 34px; flex-wrap: wrap; }

        .btn {
          padding: 16px 28px;
          border-radius: 16px;
          font-weight: 800;
          display: inline-block;
          transition: .2s;
        }

        .btn:hover { transform: translateY(-2px); }
        .primary { background: #2563eb; }
        .secondary { border: 1px solid rgba(255,255,255,.22); background: rgba(255,255,255,.08); }

        section { padding: 80px 0; }

        h2 {
          font-size: 44px;
          margin: 0 0 12px;
          font-weight: 900;
        }

        .muted { color: rgba(255,255,255,.55); font-size: 18px; }

        .grid4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 36px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 42px;
        }

        .card {
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 28px;
          overflow: hidden;
          animation: fadeUp .7s ease both;
          transition: .25s;
        }

        .card:hover { transform: translateY(-6px); border-color: rgba(96,165,250,.35); }

        .condition { padding: 28px; }

        .condition strong {
          color: #60a5fa;
          font-size: 34px;
          display: block;
          margin-bottom: 10px;
        }

        .carImg {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }

        .carBody { padding: 28px; }

        .price {
          color: #60a5fa;
          font-size: 22px;
          font-weight: 900;
          margin: 12px 0;
        }

        .carBody h3 { font-size: 30px; margin: 0 0 10px; }
        .carBody p { color: rgba(255,255,255,.6); line-height: 1.6; }

        .calc {
          margin-top: 36px;
          padding: 32px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(37,99,235,.18), rgba(255,255,255,.04));
          border: 1px solid rgba(255,255,255,.1);
        }

        .calc strong {
          font-size: 34px;
          color: #60a5fa;
          display: block;
          margin-top: 10px;
        }

        .contactBox {
  position: relative;
  overflow: hidden;
  border-radius: 42px;
  padding: 70px;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 60px;
  margin-top: 40px;
  background-image:
    linear-gradient(rgba(4,8,20,.84), rgba(4,8,20,.9)),
    url("/images/form-bg.jpg");
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255,255,255,.14);
  box-shadow: 0 25px 80px rgba(0,0,0,.5);
}

.contactBox::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(59,130,246,.22), transparent 38%);
  pointer-events: none;
}

.contactBox > * {
  position: relative;
  z-index: 2;
}

.contactBox h2 {
  font-size: 68px;
  line-height: .95;
  margin: 0 0 18px;
  font-weight: 900;
  letter-spacing: -2px;
  color: white;
}

.contactBox h2::after {
  content: " и мы подберём лучший вариант";
  display: block;
  color: #3b82f6;
}

.contactBox p {
  color: rgba(255,255,255,.82);
  font-size: 22px;
  line-height: 1.6;
  max-width: 520px;
}

.contactBox p::after {
  content: " Ответим на вопросы и рассчитаем условия аренды с выкупом за несколько минут.";
  display: block;
  margin-top: 16px;
  color: rgba(255,255,255,.68);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form input,
.form textarea,
.form select {
  width: 100%;
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(255,255,255,.08);
  backdrop-filter: blur(14px);
  color: white;
  border-radius: 22px;
  padding: 22px 26px;
  font-size: 18px;
  outline: none;
  transition: .25s;
}

.form input::placeholder,
.form textarea::placeholder {
  color: rgba(255,255,255,.55);
}

.form select {
  color: white;
}

.form select option {
  background: #08111f;
  color: white;
}

.form input:focus,
.form textarea:focus,
.form select:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 4px rgba(59,130,246,.15);
}

.form textarea {
  min-height: 150px;
  resize: none;
}

.formLink {
  height: 74px;
  border: none;
  border-radius: 24px;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  transition: .25s;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  box-shadow: 0 15px 40px rgba(37,99,235,.35);
}

.formLink:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 55px rgba(37,99,235,.45);
}

@media (max-width: 980px) {
  .contactBox {
    grid-template-columns: 1fr;
    padding: 40px 24px;
    gap: 30px;
  }

  .contactBox h2 {
    font-size: 44px;
  }

  .contactBox p {
    font-size: 18px;
  }
}

        .floating {
          position: fixed;
          right: 24px;
          bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 100;
        }

        footer {
          padding: 36px;
          text-align: center;
          color: rgba(255,255,255,.45);
          border-top: 1px solid rgba(255,255,255,.1);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .heroContent { padding-top: 130px; }
          .grid3, .grid4, .contactBox { grid-template-columns: 1fr; }
          .links { display: none; }
          h1 { font-size: 52px; }
          .hero p { font-size: 18px; }
          .actions .call { display: none; }
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

            <div className="actions">
              <ContactIcons />
              <a className="call" href={PHONE_LINK}>Позвонить</a>
            </div>
          </div>
        </header>

        <section className="hero">
          <div className="heroOverlay" />
          <div className="heroContent">
            <div className="badge">Авто сегодня — выкуп постепенно</div>

            <h1>
              Аренда авто
              <br />
              под выкуп
            </h1>

            <p>
              Телепарк подберёт автомобиль под вашу задачу: такси, доставка,
              семья или личные поездки. Без первоначального взноса,
              прозрачный договор и возможность досрочного выкупа.
            </p>

            <div className="btns">
              <a href="#contact" className="btn primary">Получить подбор авто</a>
              <a href="#cars" className="btn secondary">Смотреть автомобили</a>
            </div>
          </div>
        </section>

        <section id="conditions" className="benefits">
  <div className="container">
    <div className="sectionTop">
      <span>ПОЧЕМУ ВЫБИРАЮТ ТЕЛЕПАРК</span>

      <h2>Простые условия — без скрытых сложностей</h2>

      <p>
        Подберём автомобиль под ваши задачи: работа, такси,
        доставка, семья или личное пользование.
      </p>
    </div>

    <div className="benefitGrid">
      <div className="benefitCard">
        <div className="benefitIcon">💳</div>
        <h3>Без взноса</h3>
        <p>Начните пользоваться автомобилем уже сегодня</p>
      </div>

      <div className="benefitCard">
        <div className="benefitIcon">⚡</div>
        <h3>Одобрение сразу</h3>
        <p>Быстрое рассмотрение заявки без долгих ожиданий</p>
      </div>

      <div className="benefitCard">
        <div className="benefitIcon">📅</div>
        <h3>16–24 месяца</h3>
        <p>Гибкий срок выкупа под ваш бюджет</p>
      </div>

      <div className="benefitCard">
        <div className="benefitIcon">🚗</div>
        <h3>Авто сегодня</h3>
        <p>Уезжайте на машине уже в день обращения</p>
      </div>
    </div>
  </div>
</section>

        <section id="cars">
          <div className="container">
            <h2>Автомобили в наличии</h2>
            <p className="muted">Подберём автомобиль под ваши задачи и бюджет.</p>

            <div className="grid3">
              {cars.map(([name, img, text, price]) => (
                <div className="card" key={name}>
                  <img src={img} className="carImg" alt={name} />
                  <div className="carBody">
                    <h3>{name}</h3>
                    <div className="price">{price}</div>
                    <p>{text}</p>
                    <a href="#contact" className="btn primary">Оставить заявку</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="calc">
              <div className="muted">Пример расчёта платежа</div>
              <strong>от 79 000 ₽/мес</strong>
              <p className="muted">Точный платёж зависит от автомобиля, срока и условий договора.</p>
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
            <div className="contactBox">
              <div>
                <h2>Оставьте заявку</h2>
                <p>Заполните форму или напишите нам в Telegram / MAX.</p>
              </div>

              <form
  className="form"
  action={FORM_ENDPOINT}
  method="POST"
>
  <input
    name="name"
    placeholder="Ваше имя"
    required
  />

  <input
    name="phone"
    placeholder="Телефон"
    required
  />

  <select
    name="car"
    required
  >
    <option value="">
      Какой автомобиль интересует?
    </option>

    <option>Geely Coolray</option>
    <option>Kia Rio</option>
    <option>Hongqi H5</option>
  </select>

  <textarea
    name="comment"
    placeholder="Комментарий"
  />

  <button
    type="submit"
    className="formLink"
  >
    Отправить заявку
  </button>
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