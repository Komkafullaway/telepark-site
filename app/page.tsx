const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";
const PHONE_LINK = "tel:+79013711584";
const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwXgg5KBMb6DWffFsGH5r1NJngX0yV18CM_T_Fuu-7vc8RQ8g45uVQ47w3EU6sefgaJ/exec";

export default function Home() {
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
          background: linear-gradient(
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

        .card {
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 28px;
          overflow: hidden;
          animation: fadeUp .7s ease both;
          transition: .25s;
        }

        .card:hover { transform: translateY(-6px); border-color: rgba(96,165,250,.35); }

        .benefits {
          position: relative;
          padding: 110px 20px;
          overflow: hidden;
        }

        .benefits::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(4,8,20,.90), rgba(4,8,20,.95)),
            url("/images/hero-bg.jpg");
          background-size: cover;
          background-position: center;
          z-index: -2;
        }

        .sectionTop {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 56px;
        }

        .sectionBadge {
          display: inline-block;
          color: #60a5fa;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .sectionTop h2 {
          font-size: 58px;
          line-height: 1;
          margin: 0 0 22px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .sectionTop p {
          color: rgba(255,255,255,.72);
          font-size: 20px;
          line-height: 1.6;
          max-width: 760px;
          margin: auto;
        }

        .benefitGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .benefitCard {
          position: relative;
          min-height: 260px;
          padding: 34px;
          border-radius: 30px;
          background: linear-gradient(180deg, rgba(255,255,255,.09), rgba(255,255,255,.035));
          border: 1px solid rgba(255,255,255,.1);
          overflow: hidden;
          transition: .25s;
          backdrop-filter: blur(14px);
        }

        .benefitCard:hover {
          transform: translateY(-8px);
          border-color: rgba(96,165,250,.45);
          box-shadow: 0 20px 60px rgba(0,0,0,.35);
        }

        .benefitNumber {
          color: #60a5fa;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 1px;
          margin-bottom: 42px;
        }

        .benefitCard h3 {
          font-size: 30px;
          line-height: 1.05;
          margin: 0 0 16px;
          font-weight: 900;
        }

        .benefitCard p {
          color: rgba(255,255,255,.68);
          font-size: 17px;
          line-height: 1.55;
        }

        .premiumCarsGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          margin-top: 46px;
        }

        .premiumCarCard {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.035));
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 24px 70px rgba(0,0,0,.35);
          transition: .3s;
        }

        .premiumCarCard:hover {
          transform: translateY(-10px);
          border-color: rgba(96,165,250,.45);
          box-shadow: 0 35px 80px rgba(0,0,0,.45);
        }

        .carTag {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 3;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(4,8,20,.78);
          border: 1px solid rgba(255,255,255,.16);
          backdrop-filter: blur(14px);
          font-size: 13px;
          font-weight: 900;
          color: white;
        }

        .premiumCarImg {
          width: 100%;
          height: 290px;
          object-fit: cover;
          display: block;
        }

        .premiumCarBody {
          padding: 30px;
        }

        .carYear {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(96,165,250,.12);
          color: #bfdbfe;
          font-size: 13px;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .premiumCarBody h3 {
          font-size: 34px;
          line-height: 1.05;
          margin: 0 0 10px;
          font-weight: 900;
        }

        .premiumPrice {
          color: #60a5fa;
          font-size: 30px;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .premiumCarBody p {
          color: rgba(255,255,255,.68);
          font-size: 17px;
          line-height: 1.65;
          min-height: 82px;
        }

        .miniBenefits {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin: 24px 0;
        }

        .miniBenefits span {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(96,165,250,.12);
          color: #bfdbfe;
          font-size: 13px;
          font-weight: 800;
        }

        .premiumCarBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 62px;
          border-radius: 18px;
          text-decoration: none;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          font-size: 17px;
          font-weight: 900;
          box-shadow: 0 16px 40px rgba(37,99,235,.32);
          transition: .25s;
        }

        .premiumCarBtn:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 50px rgba(37,99,235,.42);
        }

        .premiumCalc {
          margin-top: 42px;
          padding: 44px;
          border-radius: 34px;
          background: linear-gradient(135deg, rgba(37,99,235,.18), rgba(255,255,255,.04));
          border: 1px solid rgba(255,255,255,.12);
        }

        .premiumCalc span {
          color: #60a5fa;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .premiumCalc strong {
          display: block;
          margin-top: 14px;
          margin-bottom: 16px;
          font-size: 48px;
          line-height: 1;
          color: #60a5fa;
        }

        .premiumCalc p {
          color: rgba(255,255,255,.72);
          font-size: 18px;
          line-height: 1.7;
          max-width: 700px;
        }

        .premiumCalc .premiumCarBtn {
          margin-top: 24px;
          max-width: 320px;
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

        .form select option {
          background: #08111f;
          color: white;
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

        @media (max-width: 1100px) {
          .premiumCarsGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .links { display: none; }
          .heroContent { padding-top: 130px; }
          h1 { font-size: 52px; }
          .hero p { font-size: 18px; }
          .actions .call { display: none; }
          .benefitGrid { grid-template-columns: 1fr; }
          .sectionTop h2 { font-size: 38px; }
          .benefitCard { min-height: auto; }
          .contactBox {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          body { overflow-x: hidden; }
          .header { position: sticky; }
          .nav { padding: 10px 14px; }
          .logo { width: 44px; height: 44px; }
          .brand-title { font-size: 18px; }
          .brand-sub { font-size: 10px; }
          .actions { gap: 6px; }
          .iconBtn { width: 42px; height: 42px; }
          .hero { min-height: 92vh; background-position: center; }
          .heroOverlay { background: linear-gradient(to bottom, rgba(4,8,20,.78), rgba(4,8,20,.9)); }
          .heroContent { padding: 110px 18px 50px; }
          h1 { font-size: 42px; line-height: 1; letter-spacing: -1px; }
          .hero p { font-size: 16px; line-height: 1.6; }
          .btns { flex-direction: column; }
          .btn { width: 100%; text-align: center; }
          section { padding: 52px 0; }
          .container { padding: 0 16px; }
          h2 { font-size: 34px; line-height: 1.05; }
          .benefits { padding: 70px 16px; }
          .sectionTop h2 { font-size: 34px; line-height: 1.08; }
          .sectionTop p { font-size: 16px; }
          .benefitCard { padding: 28px 22px; }
          .benefitCard h3 { font-size: 26px; }
          .benefitCard p { font-size: 16px; }
          .premiumCarsGrid { grid-template-columns: 1fr; gap: 22px; }
          .premiumCarImg { height: 240px; }
          .premiumCarBody { padding: 22px; }
          .premiumCarBody h3 { font-size: 28px; }
          .premiumPrice { font-size: 24px; }
          .premiumCalc { padding: 28px 22px; }
          .premiumCalc strong { font-size: 34px; }
          .premiumCalc .premiumCarBtn { max-width: 100%; }
          .contactBox {
            margin-top: 30px;
            padding: 28px 18px;
            border-radius: 28px;
            grid-template-columns: 1fr;
            gap: 24px;
            background-position: center;
          }
          .contactBox h2 { font-size: 36px; line-height: 1.05; }
          .contactBox p { font-size: 16px; line-height: 1.5; }
          .form input,
          .form textarea,
          .form select {
            padding: 17px 18px;
            font-size: 16px;
            border-radius: 18px;
          }
          .form textarea { min-height: 110px; }
          .formLink { height: 62px; font-size: 17px; border-radius: 18px; }
          .floating { right: 14px; bottom: 14px; gap: 8px; }
          .floating .iconBtn { width: 46px; height: 46px; }
          footer { padding: 26px 16px 90px; font-size: 13px; }
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
              <a href="#contact">Заявка</a>
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
              <span className="sectionBadge">ПОЧЕМУ ВЫБИРАЮТ ТЕЛЕПАРК</span>

              <h2>
                Условия, с которыми
                <br />
                удобно начать
              </h2>

              <p>
                Без лишней бюрократии: подберём автомобиль, рассчитаем платёж
                и согласуем условия под вашу задачу.
              </p>
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

        <section id="cars">
          <div className="container">
            <div className="sectionTop">
              <span className="sectionBadge">АВТОМОБИЛИ В НАЛИЧИИ</span>

              <h2>
                Авто можно забрать
                <br />
                уже сегодня
              </h2>

              <p>
                Подберём автомобиль под вашу задачу: работа, такси, доставка,
                семья или личные поездки.
              </p>
            </div>

            <div className="premiumCarsGrid">
              {[
                ["Geely Coolray", "2022 год", "/images/cars/col.jpg", "Комфортный городской кроссовер для семьи, работы и ежедневных поездок.", "2 950 ₽/сутки", "Популярный выбор"],
                ["Kia Rio", "2022 год", "/images/cars/rio.jpg", "Экономичный автомобиль для такси, доставки и личного использования.", "2 950 ₽/сутки", "Для работы"],
                ["Hyundai Solaris", "2021 год", "/images/solaris/solaris.jpg", "Надёжный и экономичный автомобиль для работы, такси и ежедневных поездок.", "2 500 ₽/сутки", "Экономичный"],
                ["Hongqi H5", "2023 год", "/images/cars/hon.jpg", "Премиальный бизнес-седан для комфортных поездок и статуса.", "4 950 ₽/сутки", "Premium"],
              ].map(([name, year, img, text, price, tag]) => (
                <div className="premiumCarCard" key={name}>
                  <div className="carTag">{tag}</div>

                  <img src={img} className="premiumCarImg" alt={name} />

                  <div className="premiumCarBody">
                    <div className="carYear">{year}</div>
                    <h3>{name}</h3>
                    <div className="premiumPrice">{price}</div>
                    <p>{text}</p>

                    <div className="miniBenefits">
                      <span>0 ₽ взнос</span>
                      <span>Решение сразу</span>
                    </div>

                    <a href="#contact" className="premiumCarBtn">
                      Забрать сегодня
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="premiumCalc">
              <span>СТАРТ УЖЕ СЕГОДНЯ</span>
              <strong>от 2 500 ₽/сутки</strong>
              <p>
                Без первоначального взноса. Подберём автомобиль и быстро согласуем
                условия под вашу задачу.
              </p>
              <a href="#contact" className="premiumCarBtn">
                Подобрать авто
              </a>
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

              <form className="form" action={FORM_ENDPOINT} method="POST">
                <input name="name" placeholder="Ваше имя" required />
                <input name="phone" placeholder="Телефон" required />

                <select name="car" required>
                  <option value="">Какой автомобиль интересует?</option>
                  <option>Geely Coolray</option>
<option>Kia Rio</option>
<option>Hyundai Solaris</option>
<option>Hongqi H5</option>
                </select>

                <textarea name="comment" placeholder="Комментарий" />

                <button type="submit" className="formLink">
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