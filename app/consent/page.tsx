export default function ConsentPage() {
  return (
    <main className="consentPage">
      <div className="consentCard">
        <a className="back" href="/">
          ← На главную
        </a>

        <h1>Согласие на обработку персональных данных</h1>

        <p className="lead">
          Настоящим пользователь сайта https://tpark.ru свободно, своей волей
          и в своём интересе выражает согласие ООО «Телепарк» на обработку
          своих персональных данных.
        </p>

        <section>
          <h2>1. Перечень персональных данных</h2>

          <p>
            Пользователь предоставляет следующие персональные данные:
          </p>

          <ul>
            <li>имя;</li>
            <li>номер телефона;</li>
            <li>информация о выбранном автомобиле;</li>
            <li>комментарии, указанные в заявке.</li>
          </ul>
        </section>

        <section>
          <h2>2. Цель обработки данных</h2>

          <p>
            Обработка персональных данных осуществляется для:
          </p>

          <ul>
            <li>обработки заявки пользователя;</li>
            <li>обратной связи;</li>
            <li>подбора автомобиля;</li>
            <li>расчёта условий аренды с выкупом;</li>
            <li>предоставления консультации.</li>
          </ul>
        </section>

        <section>
          <h2>3. Действия с персональными данными</h2>

          <p>
            Пользователь предоставляет согласие на сбор, запись,
            систематизацию, хранение, уточнение, использование,
            обезличивание, блокирование и удаление персональных данных.
          </p>
        </section>

        <section>
          <h2>4. Срок действия согласия</h2>

          <p>
            Согласие действует до момента его отзыва пользователем путём
            направления письменного уведомления на адрес электронной почты:
            info@tpark.ru
          </p>
        </section>

        <section>
          <h2>5. Реквизиты оператора</h2>

          <p>
            ООО «Телепарк»
            <br />
            ИНН: 7811810344
            <br />
            КПП: 781101001
            <br />
            ОГРН: 1257800078964
            <br />
            <br />
            192012, Санкт-Петербург,
            <br />
            пр-т Обуховской Обороны, 271А,
            <br />
            помещение 7-Н
            <br />
            <br />
            Телефон: +7 (901) 371-15-84
            <br />
            Email: info@tpark.ru
          </p>
        </section>
      </div>

      <style>{`
        .consentPage {
          min-height: 100vh;
          padding: 70px 20px;
          background:
            radial-gradient(circle at 15% 10%, rgba(200,255,47,.10), transparent 30%),
            linear-gradient(180deg,#050607,#090b0d);
          color: white;
          font-family: Arial,sans-serif;
        }

        .consentCard {
          max-width: 980px;
          margin: 0 auto;
          padding: 46px;
          border-radius: 30px;
          background: rgba(10,14,16,.88);
          border: 1px solid rgba(200,255,47,.16);
          box-shadow: 0 30px 100px rgba(0,0,0,.55);
        }

        .back {
          color: #c8ff2f;
          text-decoration: none;
          font-weight: 800;
        }

        h1 {
          margin: 30px 0 20px;
          font-size: 52px;
        }

        .lead {
          color: rgba(255,255,255,.72);
          line-height: 1.7;
          margin-bottom: 40px;
        }

        section {
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        h2 {
          color: #c8ff2f;
          margin-bottom: 12px;
        }

        p, li {
          color: rgba(255,255,255,.78);
          line-height: 1.8;
        }

        ul {
          padding-left: 20px;
        }

        @media (max-width:768px) {
          .consentCard {
            padding: 28px 20px;
          }

          h1 {
            font-size: 34px;
          }
        }
      `}</style>
    </main>
  );
}