const TELEGRAM_LINK = "https://t.me/teleparkgdel";
const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKruk9OJpcGonTJy_oV88aEq84lB67ECiRtZ5w0t2uVTA5_LP4";
const PHONE_LINK = "tel:+79013711584";

const plans: Record<string, any> = {
  "Geely Coolray": {
    name: "Geely Coolray",
    day: "2 950 ₽",
    week: "20 650 ₽",
    twoWeeks: "41 300 ₽",
    month: "88 500 ₽",
    term: "18 месяцев",
  },

  "Kia Rio": {
    name: "Kia Rio",
    day: "2 950 ₽",
    week: "20 650 ₽",
    twoWeeks: "41 300 ₽",
    month: "88 500 ₽",
    term: "16 месяцев",
  },

  "Hyundai Solaris": {
    name: "Hyundai Solaris",
    day: "2 500 ₽",
    week: "17 500 ₽",
    twoWeeks: "35 000 ₽",
    month: "75 000 ₽",
    term: "16 месяцев",
  },

  "Hongqi H5": {
    name: "Hongqi H5",
    day: "4 950 ₽",
    week: "34 650 ₽",
    twoWeeks: "69 300 ₽",
    month: "148 500 ₽",
    term: "24 месяца",
  },
};

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{
    car?: string;
    name?: string;
    request?: string;
  }>;
})  {
  const params = await searchParams;

const selectedCar = params?.car || "Hyundai Solaris";
const clientName = params?.name || "";
const requestId = params?.request || "TP-" + Date.now().toString().slice(-6);

const plan = plans[selectedCar] || plans["Hyundai Solaris"];
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; background: #040814; color: white; }
        a { color: inherit; text-decoration: none; }

        .page {
          min-height: 100vh;
          background-image:
            linear-gradient(rgba(4,8,20,.88), rgba(4,8,20,.92)),
            url('/images/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .card {
          width: 100%;
          max-width: 1050px;
          border-radius: 38px;
          padding: 46px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.16);
          backdrop-filter: blur(18px);
          box-shadow: 0 40px 120px rgba(0,0,0,.5);
        }

        .check {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          background: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 44px;
          box-shadow: 0 0 55px rgba(34,197,94,.45);
          margin-bottom: 24px;
        }

        h1 {
          font-size: 62px;
          line-height: .95;
          margin: 0;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .lead {
          margin-top: 20px;
          font-size: 21px;
          line-height: 1.6;
          color: rgba(255,255,255,.78);
          max-width: 760px;
        }

        .plan {
          margin-top: 34px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
        }

        .box {
          border-radius: 28px;
          padding: 30px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.12);
        }

        .box small {
          color: #60a5fa;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .carName {
          font-size: 38px;
          font-weight: 900;
          margin: 12px 0;
        }

        .day {
          font-size: 48px;
          font-weight: 900;
          color: #60a5fa;
        }

        .payments {
          display: grid;
          gap: 14px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 18px;
          border-radius: 18px;
          background: rgba(255,255,255,.07);
        }

        .row span {
          color: rgba(255,255,255,.68);
        }

        .row strong {
          font-size: 20px;
        }

        .note {
          margin-top: 22px;
          color: rgba(255,255,255,.62);
          line-height: 1.6;
          font-size: 15px;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .btn {
          padding: 16px 24px;
          border-radius: 18px;
          font-weight: 900;
          transition: .2s;
        }

        .btn:hover { transform: translateY(-2px); }
        .tg { background: #0ea5e9; }
        .max { background: #7c3aed; }
        .call { background: #16a34a; }
        .dark { background: rgba(255,255,255,.10); border: 1px solid rgba(255,255,255,.14); }

        @media (max-width: 850px) {
          .card { padding: 28px; border-radius: 28px; }
          h1 { font-size: 42px; }
          .lead { font-size: 17px; }
          .plan { grid-template-columns: 1fr; }
          .carName { font-size: 30px; }
          .day { font-size: 36px; }
          .actions { flex-direction: column; }
          .btn { text-align: center; }
        }
      `}</style>

      <main className="page">
        <section className="card">
          <div className="check">✓</div>

          <h1>
            Заявка
            <br />
            принята
          </h1>

          <p className="lead">
  {clientName ? `${clientName}, ваша заявка принята.` : "Ваша заявка принята."}
  <br />
  Номер заявки: <b>{requestId}</b>
  <br />
  Менеджер Телепарк свяжется с вами в ближайшее время.
  Ниже — предварительный график платежей по выбранному автомобилю.
</p>

          <div className="plan">
            <div className="box">
              <small>ПРЕДВАРИТЕЛЬНЫЙ РАСЧЁТ</small>
              <div className="carName">{plan.name}</div>
              <div className="day">{plan.day}/сутки</div>
              <p className="note">
                Срок выкупа: <b>{plan.term}</b>
                <br />
                Стартовые условия подбираются индивидуально. Возможны варианты
                от 0 ₽ на старте.
              </p>
            </div>

            <div className="box payments">
              <div className="row">
                <span>Еженедельно</span>
                <strong>{plan.week}</strong>
              </div>

              <div className="row">
                <span>Каждые 2 недели</span>
                <strong>{plan.twoWeeks}</strong>
              </div>

              <div className="row">
                <span>Ежемесячно</span>
                <strong>{plan.month}</strong>
              </div>

              <div className="note">
                Это примерный график. Финальные условия менеджер рассчитает
                персонально под автомобиль, срок и формат оплаты.
              </div>
            </div>
          </div>

          <div className="actions">
            <a className="btn tg" href={TELEGRAM_LINK} target="_blank">
              Написать в Telegram
            </a>

            <a className="btn max" href={MAX_LINK} target="_blank">
              Написать в MAX
            </a>

            <a className="btn call" href={PHONE_LINK}>
              Позвонить
            </a>

            <a className="btn dark" href="/#cars">
              Смотреть автомобили
            </a>
          </div>
        </section>
      </main>
    </>
  );
}