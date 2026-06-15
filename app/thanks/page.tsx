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
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #020711;
        }

        .thanksPage {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  place-items: center;
  color: white;
  font-family: Arial, sans-serif;

  background:
    linear-gradient(
      rgba(2,7,17,.82),
      rgba(2,7,17,.92)
    ),
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
  background: rgba(5,12,28,.78);
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 40px 120px rgba(0,0,0,.55);
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
  font-size: 26px;
  font-weight: 950;
  letter-spacing: 1px;
}

.brand span {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: 4px;
  color: rgba(255,255,255,.6);
}

.status {
  padding: 12px 18px;
  border-radius: 999px;
  background: rgba(37,99,235,.16);
  border: 1px solid rgba(59,130,246,.35);
  color: #8bb6ff;
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
  color: #2f7cff;
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
  background: rgba(255,255,255,.045);
  border: 1px solid rgba(255,255,255,.10);
}

.requestBox small {
  display: block;
  margin-bottom: 8px;
  color: rgba(255,255,255,.55);
}

.requestNumber {
  font-size: 34px;
  color: #2f7cff;
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
  background: rgba(37,99,235,.22);
  border: 1px solid rgba(59,130,246,.35);
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
  border: 1px solid rgba(255,255,255,.12);
  transition: .2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btnPrimary {
  background: linear-gradient(135deg,#0b5cff,#2f7cff);
  box-shadow: 0 18px 42px rgba(37,99,235,.32);
}

.btnMax {
  background: linear-gradient(
    135deg,
    #2563eb 0%,
    #4f46e5 35%,
    #7c3aed 70%,
    #9333ea 100%
  );
  border: 1px solid rgba(168,85,247,.35);
  box-shadow: 0 18px 42px rgba(124,58,237,.28);
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
  color: #2f7cff;
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
            ТЕЛЕПАРК
            <span>АВТО ПОД ВЫКУП</span>
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