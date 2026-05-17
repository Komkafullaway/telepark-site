const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";
const PHONE_LINK = "tel:+79013711584";

export default function ThanksPage() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; background: #040814; color: white; }
        a { color: inherit; text-decoration: none; }

        .page {
          min-height: 100vh;
          background-image: url('/images/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(4,8,20,.94),
            rgba(4,8,20,.65),
            rgba(4,8,20,.9)
          );
        }

        .card {
          position: relative;
          z-index: 2;
          max-width: 900px;
          width: 100%;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(255,255,255,.09);
          backdrop-filter: blur(18px);
          border-radius: 36px;
          padding: 48px;
          box-shadow: 0 40px 100px rgba(0,0,0,.45);
          animation: fadeUp .7s ease both;
        }

        .check {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          background: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 46px;
          margin-bottom: 26px;
          box-shadow: 0 0 50px rgba(34,197,94,.5);
          animation: pop .6s ease both;
        }

        h1 {
          font-size: 64px;
          line-height: .95;
          margin: 0;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .lead {
          margin-top: 22px;
          font-size: 22px;
          line-height: 1.6;
          color: rgba(255,255,255,.82);
          max-width: 740px;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 34px;
        }

        .step {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.08);
          border-radius: 22px;
          padding: 18px;
        }

        .step strong {
          display: block;
          color: #60a5fa;
          font-size: 22px;
          margin-bottom: 8px;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .btn {
          padding: 16px 24px;
          border-radius: 18px;
          font-weight: 900;
          transition: .2s;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .primary { background: #2563eb; }
        .tg { background: #0ea5e9; }
        .max { background: #7c3aed; }
        .call { background: #16a34a; }
        .dark { border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.08); }

        .small {
          margin-top: 24px;
          color: rgba(255,255,255,.58);
          font-size: 15px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pop {
          from { transform: scale(.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 800px) {
          .card { padding: 30px; border-radius: 28px; }
          h1 { font-size: 44px; }
          .lead { font-size: 18px; }
          .steps { grid-template-columns: 1fr; }
        }
      `}</style>

      <main className="page">
        <div className="overlay" />

        <section className="card">
          <div className="check">✓</div>

          <h1>
            Заявка
            <br />
            принята
          </h1>

          <p className="lead">
            Менеджер Телепарк свяжется с вами в течение 10–15 минут и подберёт
            лучший вариант автомобиля под выкуп.
          </p>

          <div className="steps">
            <div className="step">
              <strong>01</strong>
              Свяжемся с вами
            </div>
            <div className="step">
              <strong>02</strong>
              Уточним задачу
            </div>
            <div className="step">
              <strong>03</strong>
              Подберём авто
            </div>
            <div className="step">
              <strong>04</strong>
              Согласуем условия
            </div>
          </div>

          <div className="actions">
            <a className="btn tg" href={TELEGRAM_LINK} target="_blank">
              Telegram
            </a>

            <a className="btn max" href={MAX_LINK} target="_blank">
              MAX
            </a>

            <a className="btn call" href={PHONE_LINK}>
              Позвонить
            </a>

            <a className="btn dark" href="/#cars">
              Смотреть автомобили
            </a>
          </div>

          <div className="small">
            Обычно отвечаем быстро. Если вопрос срочный — напишите нам в
            Telegram или MAX.
          </div>
        </section>
      </main>
    </>
  );
}