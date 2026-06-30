export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ThanksPage({
  searchParams,
}: {
  searchParams?: Promise<{
    name?: string;
    car?: string;
    request?: string;
  }>;
}) {

  const params = await searchParams;

  const name = params?.name || "Спасибо";
  const car = params?.car || "автомобилю";
  const request = params?.request || "TP-" + Date.now().toString().slice(-6);

  return (
    <main className="thanksPage">
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #050607;
        }

        .thanksPage {
          min-height: 100vh;
          padding: 32px;
          display: grid;
          place-items: center;
          color: white;
          font-family: Arial, sans-serif;
          background:
            linear-gradient(rgba(5,6,7,.86), rgba(5,6,7,.94)),
            url('/images/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .card {
          width: 100%;
          max-width: 1120px;
          padding: 48px;
          border-radius: 34px;
          background: rgba(8,12,14,.88);
          border: 1px solid rgba(200,255,47,.12);
          box-shadow:
            0 40px 120px rgba(0,0,0,.55),
            0 0 40px rgba(200,255,47,.05);
          backdrop-filter: blur(20px);
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 44px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand img {
          width: 64px;
          height: 64px;
          object-fit: contain;
        }

        .brandTitle {
          font-size: 30px;
          font-weight: 950;
          line-height: .9;
        }

        .brand span {
          display: block;
          margin-top: 7px;
          font-size: 11px;
          letter-spacing: 4px;
          color: rgba(255,255,255,.58);
        }

        .status {
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(200,255,47,.10);
          border: 1px solid rgba(200,255,47,.25);
          color: #c8ff2f;
          font-weight: 900;
        }

        .grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 44px;
        }

        h1 {
          margin: 0;
          font-size: 52px;
          line-height: 1.05;
          letter-spacing: -1px;
        }

        h1 span {
          color: #c8ff2f;
        }

        .lead {
          margin: 24px 0 0;
          max-width: 650px;
          font-size: 19px;
          line-height: 1.65;
          color: rgba(255,255,255,.78);
        }

        .requestBox {
          margin-top: 28px;
          padding: 24px;
          border-radius: 22px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          background: rgba(200,255,47,.04);
          border: 1px solid rgba(200,255,47,.12);
        }

        .requestBox small {
          display: block;
          margin-bottom: 8px;
          color: rgba(255,255,255,.55);
        }

        .requestNumber {
          font-size: 34px;
          color: #c8ff2f;
          font-weight: 950;
        }

        .secure {
          margin-top: 18px;
          color: rgba(255,255,255,.65);
          font-size: 14px;
        }

        .stepsTitle {
          margin: 0 0 24px;
          font-size: 26px;
          font-weight: 950;
        }

        .steps {
          display: grid;
          gap: 20px;
        }

        .step {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 16px;
          align-items: start;
        }

        .stepIcon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(200,255,47,.10);
          border: 1px solid rgba(200,255,47,.25);
          color: #c8ff2f;
          font-weight: 950;
        }

        .step strong {
          display: block;
          margin-bottom: 5px;
        }

        .step span {
          color: rgba(255,255,255,.62);
          line-height: 1.45;
        }

        .divider {
          height: 1px;
          margin: 36px 0 24px;
          background: rgba(255,255,255,.10);
        }

        .fastTitle {
          font-size: 24px;
          font-weight: 950;
          margin-bottom: 8px;
        }

        .fastText {
          color: rgba(255,255,255,.68);
          margin-bottom: 20px;
        }

        .actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .btn {
          min-height: 64px;
          border-radius: 16px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          text-decoration: none;
          color: white;
          font-weight: 950;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(200,255,47,.14);
          transition: .2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btnPrimary {
          background: linear-gradient(135deg, #c8ff2f, #98df00);
          color: #050607;
          box-shadow: 0 18px 42px rgba(200,255,47,.22);
        }

        .btnMax {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(200,255,47,.18);
          color: white;
        }

        .btnIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .btnIcon img {
          width: 30px;
          height: 30px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .btnIcon span {
          font-size: 18px;
          font-weight: 700;
        }

        .back {
          margin-top: 24px;
          display: inline-flex;
          color: #c8ff2f;
          text-decoration: none;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .thanksPage {
            padding: 18px;
          }

          .card {
            padding: 26px 20px;
            border-radius: 26px;
          }

          .top {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 30px;
          }

          .brand img {
            width: 58px;
            height: 58px;
          }

          .brandTitle {
            font-size: 26px;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          h1 {
            font-size: 36px;
          }

          .lead {
            font-size: 16px;
          }

          .requestBox {
            grid-template-columns: 1fr;
          }

          .actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="card">
        <div className="top">
          <div className="brand">
            <img src="/logo/teleparklogo3.png" alt="Телепарк" />
            <div>
              <div className="brandTitle">ТЕЛЕПАРК</div>
              <span>АВТО ПОД ВЫКУП</span>
            </div>
          </div>

          <div className="status">✓ Заявка принята</div>
        </div>

        <div className="grid">
          <div>
            <h1>
              {name}, спасибо!
              <br />
              Ваша заявка <span>принята</span>
            </h1>

            <p className="lead">
              Мы получили вашу заявку по автомобилю: <b>{car}</b>. Менеджер
              Телепарк свяжется с вами в ближайшее время, проверит условия и
              рассчитает платёж.
            </p>

            <div className="requestBox">
              <div>
                <small>Номер вашей заявки</small>
                <div className="requestNumber">{request}</div>
              </div>

              <div>
                <small>Статус</small>
                <b>Передана менеджеру</b>
              </div>
            </div>

            <div className="secure">
              🛡 Ваши данные надёжно защищены и не передаются третьим лицам
            </div>
          </div>

          <div>
            <h2 className="stepsTitle">Что будет дальше?</h2>

            <div className="steps">
              <div className="step">
                <div className="stepIcon">1</div>
                <div>
                  <strong>Подтвердим ваши данные</strong>
                  <span>Свяжемся удобным для вас способом.</span>
                </div>
              </div>

              <div className="step">
                <div className="stepIcon">2</div>
                <div>
                  <strong>Рассчитаем условия</strong>
                  <span>Подберём оптимальные условия аренды с выкупом.</span>
                </div>
              </div>

              <div className="step">
                <div className="stepIcon">3</div>
                <div>
                  <strong>Подберём автомобиль</strong>
                  <span>Согласуем комплектацию и дату выдачи.</span>
                </div>
              </div>

              <div className="step">
                <div className="stepIcon">4</div>
                <div>
                  <strong>Пригласим на оформление</strong>
                  <span>Оформление и выдача автомобиля в Телепарк.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="fastTitle">Хотите быстрее?</div>
        <div className="fastText">
          Напишите или позвоните нам — номер заявки уже создан.
        </div>

        <div className="actions">
          <a
            className="btn btnPrimary btnIcon"
            href="https://t.me/teleparkgdel"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/telegram.png" alt="Telegram" />
            <span>Написать в Telegram</span>
          </a>

          <a
            className="btn btnMax btnIcon"
            href="https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/max.png" alt="MAX" />
            <span>Написать в MAX</span>
          </a>

          <a className="btn" href="tel:+79013711584">
            Позвонить +7 901 371 1584
          </a>
        </div>

        <a className="back" href="/">
          ← Вернуться на главную страницу
        </a>
      </section>
    </main>
  );
}