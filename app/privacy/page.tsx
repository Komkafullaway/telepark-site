import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Телепарк",
  robots: {
    index: false,
    follow: false,
  },
};
export default function PrivacyPage() {
  return (
    <main className="privacyPage">
      <div className="privacyCard">
        <a className="back" href="/">← На главную</a>

        <div className="brand">
          <img src="/logo/teleparklogo3.png" alt="Телепарк" />
          <div>
            <div className="brandTitle">
              ТЕЛЕ<span>ПАРК</span>
            </div>
            <div className="brandSub">АВТО ПОД ВЫКУП</div>
          </div>
        </div>

        <h1>Политика конфиденциальности</h1>

        <p className="lead">
          Политика в отношении обработки персональных данных пользователей сайта
          ООО «Телепарк».
        </p>

        <section>
          <h2>1. Общие положения</h2>
          <p>
            Настоящая политика обработки персональных данных составлена в
            соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О
            персональных данных» и определяет порядок обработки персональных
            данных и меры по обеспечению их безопасности, предпринимаемые ООО
            «Телепарк».
          </p>
          <p>
            Настоящая политика применяется ко всей информации, которую ООО
            «Телепарк» может получить о посетителях сайта https://tpark.ru.
          </p>
        </section>

        <section>
          <h2>2. Какие персональные данные обрабатываются</h2>
          <p>
            При отправке заявки на сайте пользователь может предоставить:
            имя, номер телефона, выбранный автомобиль и комментарий к заявке.
          </p>
        </section>

        <section>
          <h2>3. Цели обработки персональных данных</h2>
          <p>
            Персональные данные используются для обработки заявок, связи с
            клиентом, подбора автомобиля, расчёта условий аренды с выкупом,
            консультирования и подготовки предложения по автомобилю.
          </p>
        </section>

        <section>
          <h2>4. Правовые основания обработки</h2>
          <p>
            Обработка персональных данных осуществляется с согласия пользователя,
            выраженного путём отправки формы заявки на сайте.
          </p>
        </section>

        <section>
          <h2>5. Порядок обработки и защиты данных</h2>
          <p>
            ООО «Телепарк» принимает необходимые организационные и технические
            меры для защиты персональных данных от неправомерного доступа,
            изменения, раскрытия или уничтожения.
          </p>
          <p>
            Персональные данные не передаются третьим лицам, за исключением
            случаев, предусмотренных законодательством Российской Федерации.
          </p>
        </section>

        <section>
          <h2>6. Права пользователя</h2>
          <p>
            Пользователь имеет право получить информацию об обработке своих
            персональных данных, потребовать уточнения, блокирования или удаления
            персональных данных, а также отозвать согласие на их обработку,
            направив обращение на электронную почту info@tpark.ru.
          </p>
        </section>

        <section>
          <h2>7. Реквизиты оператора персональных данных</h2>
          <p>
            Общество с ограниченной ответственностью «Телепарк»
            <br />
            ИНН: 7811810344
            <br />
            КПП: 781101001
            <br />
            ОГРН: 1257800078964
            <br />
            <br />
            Юридический адрес:
            <br />
            192012, г. Санкт-Петербург,
            <br />
            пр-т Обуховской Обороны, 271А,
            <br />
            помещение 7-Н
            <br />
            <br />
            Телефон: +7 (901) 371-15-84
            <br />
            Email: info@tpark.ru
            <br />
            Сайт: https://tpark.ru
          </p>
        </section>
      </div>

      <style>{`
        .privacyPage {
          min-height: 100vh;
          padding: 70px 20px;
          background:
            radial-gradient(circle at 15% 10%, rgba(200,255,47,.10), transparent 30%),
            linear-gradient(180deg, #050607, #090b0d);
          color: white;
          font-family: Arial, sans-serif;
        }

        .privacyCard {
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

        .brand {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 34px 0 42px;
        }

        .brand img {
          width: 68px;
          height: 68px;
          object-fit: contain;
        }

        .brandTitle {
          font-size: 34px;
          font-weight: 950;
          line-height: .9;
        }

        .brandTitle span {
          color: #c8ff2f;
          text-shadow:
            0 0 10px rgba(200,255,47,.45),
            0 0 28px rgba(200,255,47,.25);
        }

        .brandSub {
          margin-top: 8px;
          font-size: 12px;
          letter-spacing: 4px;
          color: rgba(255,255,255,.58);
        }

        h1 {
          margin: 0 0 20px;
          font-size: 52px;
          line-height: 1;
        }

        .lead {
          max-width: 760px;
          margin-bottom: 44px;
          color: rgba(255,255,255,.72);
          font-size: 19px;
          line-height: 1.6;
        }

        section {
          padding: 28px 0;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        h2 {
          margin: 0 0 12px;
          color: #c8ff2f;
          font-size: 24px;
        }

        p {
          margin: 0 0 14px;
          color: rgba(255,255,255,.76);
          font-size: 17px;
          line-height: 1.75;
        }

        @media (max-width: 768px) {
          .privacyPage {
            padding: 30px 14px;
          }

          .privacyCard {
            padding: 28px 20px;
            border-radius: 24px;
          }

          h1 {
            font-size: 34px;
          }

          .brandTitle {
            font-size: 28px;
          }

          .brand img {
            width: 58px;
            height: 58px;
          }
        }
      `}</style>
    </main>
  );
}