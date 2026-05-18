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
          .headerTrust {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 24px;
}

.headerInfo {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.headerInfo span,
.headerInfo a {
  color: rgba(255,255,255,.88);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.headerInfo a {
  transition: .2s;
}

.headerInfo a:hover {
  color: #60a5fa;
}

.headerMini {
  color: rgba(255,255,255,.55);
  font-size: 12px;
  font-weight: 500;
}
          .headerTrust {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 24px;
}
.headerTrust {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 24px;
}

.headerInfo {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.headerInfo span,
.headerInfo a {
  color: rgba(255,255,255,.88);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.headerInfo a {
  transition: .2s;
}

.headerInfo a:hover {
  color: #60a5fa;
}

.headerMini {
  color: rgba(255,255,255,.55);
  font-size: 12px;
  font-weight: 500;
}

.headerInfo {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.headerInfo span,
.headerInfo a {
  color: rgba(255,255,255,.88);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.headerInfo a {
  transition: .2s;
}

.headerInfo a:hover {
  color: #60a5fa;
}

.headerMini {
  color: rgba(255,255,255,.55);
  font-size: 12px;
  font-weight: 500;
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
        .phoneTop {
  color: rgba(255,255,255,.92);
  font-weight: 900;
  font-size: 15px;
  white-space: nowrap;
  transition: .2s;
}

.phoneTop:hover {
  color: #60a5fa;
}

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
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  padding: 15px 22px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 14px;
  border: none;
  transition: .2s;
  white-space: nowrap;
  box-shadow: 0 14px 34px rgba(37,99,235,.35);
}

.call:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(37,99,235,.45);
}
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

        /* ===== АВТОМОБИЛИ ===== */

.premiumCarsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 46px;
}

.premiumCarCard {
  position: relative;
  overflow: hidden;
  border-radius: 36px;
  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.08),
      rgba(255,255,255,.035)
    );
  border: 1px solid rgba(255,255,255,.12);
  box-shadow: 0 24px 70px rgba(0,0,0,.35);
  transition: .3s;
}

.premiumCarCard:hover {
  transform: translateY(-8px);
  border-color: rgba(96,165,250,.45);
}

.carTag {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;
  padding: 12px 18px;
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
  height: 320px;
  object-fit: cover;
  display: block;
}

.premiumCarBody {
  padding: 34px;
}

.carYear {
  display: inline-flex;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(96,165,250,.12);
  color: #bfdbfe;
  font-size: 13px;
  font-weight: 900;
  margin-bottom: 18px;
}

.premiumCarBody h3 {
  font-size: 42px;
  line-height: .95;
  margin: 0 0 18px;
  font-weight: 900;
}

.premiumPrice {
  color: #60a5fa;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 26px;
}

.carList {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  gap: 14px;
}

.carList li {
  position: relative;
  padding-left: 24px;
  color: rgba(255,255,255,.82);
  font-size: 16px;
  line-height: 1.6;
}

.carList li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;

  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: #60a5fa;
  box-shadow: 0 0 12px rgba(96,165,250,.6);
}

.premiumCarBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 68px;
  border-radius: 22px;
  background: linear-gradient(135deg,#2563eb,#3b82f6);
  color: white;
  font-size: 18px;
  font-weight: 900;
  transition: .25s;
}

.premiumCarBtn:hover {
  transform: translateY(-4px);
}

.answerTime {
  margin-top: 12px;
  text-align: center;
  color: rgba(255,255,255,.5);
  font-size: 13px;
}

.premiumCalc {
  margin-top: 44px;
  padding: 48px;
  border-radius: 36px;
  background:
    linear-gradient(
      135deg,
      rgba(37,99,235,.18),
      rgba(255,255,255,.04)
    );
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
  font-size: 50px;
  line-height: 1;
  color: #60a5fa;
}

.premiumCalc p {
  color: rgba(255,255,255,.72);
  font-size: 18px;
  line-height: 1.7;
  max-width: 760px;
}

.premiumCalc .premiumCarBtn {
  margin-top: 24px;
  max-width: 340px;
}

/* МОБИЛКА */

@media (max-width: 900px) {

  .headerTrust {
  display: flex;
  order: 3;
  grid-column: 1 / -1;
  width: 100%;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255,255,255,.1);
}

.headerInfo {
  justify-content: flex-start;
  gap: 8px 12px;
}

.headerInfo span,
.headerInfo a {
  font-size: 11px;
}

.headerMini {
  font-size: 10px;
  text-align: left;
}

  .links {
    display: none;
  }

  .heroContent {
    padding-top: 130px;
  }

  h1 {
    font-size: 52px;
  }

  .hero p {
    font-size: 18px;
  }

  .actions .call {
    display: none;
  }

  .benefitGrid {
    grid-template-columns: 1fr;
  }

  .sectionTop h2 {
    font-size: 38px;
  }

  .benefitCard {
    min-height: auto;
  }

  .premiumCarsGrid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .premiumCarImg {
    height: 240px;
  }

  .premiumCarBody {
    padding: 24px;
  }

  .premiumCarBody h3 {
    font-size: 32px;
  }

  .premiumPrice {
    font-size: 28px;
  }

  .carList li {
    font-size: 15px;
  }

  .premiumCalc {
    padding: 28px 22px;
  }

  .premiumCalc strong {
    font-size: 34px;
  }

  .contactBox {
    grid-template-columns: 1fr;
    padding: 40px 24px;
    gap: 30px;
  }
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

 .header .actions {
  display: none;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 18px;
}

.brand {
  width: 100%;
}

.headerTrust {
  display: flex;
  width: 100%;
  margin: 0;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,.1);
  align-items: flex-start;
  text-align: left;
}

.headerInfo {
  display: grid;
  gap: 6px;
}

.headerInfo span,
.headerInfo a {
  font-size: 13px;
  line-height: 1.25;
}

.headerMini {
  font-size: 11px;
  line-height: 1.35;
}
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
          .reviewsVideo {
  padding: 90px 0;
}

.videoGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.videoCard {
  overflow: hidden;
  border-radius: 30px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.1);
  transition: .3s;
}

.videoCard:hover {
  transform: translateY(-6px);
  border-color: rgba(96,165,250,.4);
}

.videoCard video {
  width: 100%;
  height: 520px;
  object-fit: cover;
  display: block;
}

.videoInfo {
  padding: 22px;
}

.videoInfo strong {
  display: block;
  font-size: 22px;
  margin-bottom: 8px;
  font-weight: 900;
}

.videoInfo span {
  color: rgba(255,255,255,.65);
  font-size: 15px;
}

.videoGrid {
  grid-template-columns: 1fr;
}

  .videoCard video {
    height: 500px;
  }
}
  .stepsSection {
  padding: 110px 0;
  background:
    linear-gradient(
      180deg,
      #07101d 0%,
      #0b1526 100%
    );
}

.stepsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 50px;
}

.stepCard {
  padding: 36px;
  border-radius: 34px;
  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.06),
      rgba(255,255,255,.03)
    );
  border: 1px solid rgba(255,255,255,.08);
}

.stepNumber {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2563eb;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 22px;
}

.stepCard h3 {
  font-size: 28px;
  margin-bottom: 14px;
}

.stepCard p {
  color: rgba(255,255,255,.72);
  line-height: 1.7;
}

@media (max-width: 900px) {
  .stepsGrid {
    grid-template-columns: 1fr;
  }
}
      `}</style>

      <main>
        <header className="header">
  <div className="nav">

    <div className="brand">
      <img
        src="/logo/telepark-logo.jpg"
        className="logo"
        alt="Телепарк"
      />

      <div>
        <div className="brand-title">
          Телепарк
        </div>

        <div className="brand-sub">
          Авто под выкуп в СПб
        </div>
      </div>
    </div>

    <div className="headerTrust">
      <div className="headerInfo">
        <span>
          📍Санкт-Петербург, пр-т. Обуховской Обороны, 271 • м. Обухово
        </span>

        <a href={PHONE_LINK}>
          ☎ +7 901 371 1584
        </a>
      </div>
    </div>

    <div className="actions">
      <ContactIcons />

      <a className="call" href="#contact">
        Получить расчёт
      </a>
    </div>

  </div>
</header>
        

        <section className="hero">
  <div className="heroOverlay" />

  <div className="heroContent">
    <div className="badge">
      Авто сегодня • без кредита • от 0 ₽ взноса
    </div>

    <h1>
      Получите авто
      <br />
      под выкуп уже сегодня
    </h1>

    <p>
      Подберём автомобиль для такси, работы, семьи или личных поездок.
      Решение за 15 минут, выдача в день обращения — даже если банк отказал.
    </p>

    <div className="btns">
      <a href="#contact" className="btn primary">
        Оставить заявку
      </a>

      <a href="#cars" className="btn secondary">
        Авто в наличии
      </a>
    </div>

    <div className="heroTrust">
      <span>99% одобрения </span>
      <span>Официальный договор </span>
      <span>ОСАГО + КАСКО </span>
      <span>Без скрытых платежей </span>
    </div>
  </div>
</section>
<section className="stepsSection">
  <div className="container">

    <div className="sectionTop">
      <span className="sectionBadge">
        КАК ЭТО РАБОТАЕТ
      </span>

      <h2>
        Получить авто проще,
        <br />
        чем кажется
      </h2>

      <p>
        Без банка, долгих ожиданий
        и сложных схем.
      </p>
    </div>

    <div className="stepsGrid">

      <div className="stepCard">
        <div className="stepNumber">
          01
        </div>

        <h3>
          Оставьте заявку
        </h3>

        <p>
          Подберём автомобиль
          под вашу задачу:
          работа, такси,
          семья или личные поездки.
        </p>
      </div>

      <div className="stepCard">
        <div className="stepNumber">
          02
        </div>

        <h3>
          Получите решение
        </h3>

        <p>
          Обычно в течение
          15 минут.
          Без банка и долгих
          ожиданий.
        </p>
      </div>

      <div className="stepCard">
        <div className="stepNumber">
          03
        </div>

        <h3>
          Заберите авто
        </h3>

        <p>
          Большинство клиентов
          уезжают на автомобиле
          уже в день обращения.
        </p>
      </div>

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
  Подберём автомобиль для такси, работы,
  доставки или личного пользования.

  <br />
  <br />

  Решение за 15 минут. Часто выдаём авто
  в день обращения — даже если банк отказал.
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
        Выберите авто
        <br />
        и заберите уже сегодня
      </h2>

      <p>
        Реальные автомобили, понятный платёж и быстрый подбор условий под вашу задачу.
      </p>
    </div>

    <div className="premiumCarsGrid">
      {[
        {
          name: "Geely Coolray",
          year: "2022 • АКПП",
          img: "/images/cars/col.jpg",
          price: "2 950 ₽ / сутки",
          tag: "Популярный выбор",
          text: [
  " Полный выкуп через 18 месяцев",
  " Без первоначального взноса",
  " ОСАГО + КАСКО включены",
  " Без скрытых платежей",
  " Без ограничений по пробегу",
  " Высокий шанс одобрения",
],
          button: "Рассчитать платёж",
        },
        {
          name: "Kia Rio",
          year: "2022 • АКПП",
          img: "/images/cars/rio.jpg",
          price: "2 950 ₽ / сутки",
          tag: "Для такси и работы",
          text: [
  " Подходит для такси и доставки",
  " Без первоначального взноса",
  " Полный выкуп через 16 месяцев",
  " Без ограничений пробега",
  " Все расходы понятны заранее",
  " Одобрение даже после отказа банка",
],
          button: "Подобрать условия",
        },
        {
          name: "Hyundai Solaris",
          year: "2021 • АКПП",
          img: "/images/solaris/solaris.jpg",
          price: "2 500 ₽ / сутки",
          tag: "Самый выгодный",
          text: [
  " Самый выгодный платёж",
  " Без первоначального взноса",
  " Полный выкуп через 16 месяцев",
  " Для работы и личных поездок",
  " ОСАГО + КАСКО включены",
],
          button: "Рассчитать платёж",
        },
        {
          name: "Hongqi H5",
          year: "2023 • АКПП",
          img: "/images/cars/hon.jpg",
          price: "4 950 ₽ / сутки",
          tag: "Premium",
          text: [
  " Премиум-седан без кредита",
  " Без первого взноса",
  " Полный выкуп через 24 месяца",
  " Полная страховка включена",
  " Без залогов и депозитов",
],
          button: "Получить условия",
        },
      ].map((car) => (
        <div className="premiumCarCard" key={car.name}>
          <div className="carTag">{car.tag}</div>

          <img src={car.img} className="premiumCarImg" alt={car.name} />

          <div className="premiumCarBody">
            <div className="carYear">{car.year}</div>

            <h3>{car.name}</h3>

            <div className="premiumPrice">{car.price}</div>

            <ul className="carList">
              {car.text.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href="#contact" className="premiumCarBtn">
              {car.button}
            </a>

            <div className="answerTime">Ответ за 15 минут</div>
          </div>
        </div>
      ))}
    </div>


  </div>
</section>
        {/* ВИДЕО КЛИЕНТОВ */}
<section className="reviewsVideo">
  <div className="container">

    <div className="sectionTop">
      <span className="sectionBadge">
        РЕАЛЬНЫЕ КЛИЕНТЫ ТЕЛЕПАРК
      </span>

      <h2>
        Люди реально получают
        <br />
        автомобили в день обращения
      </h2>

      <p>
        Реальные выдачи автомобилей в Санкт-Петербурге.
        Без банка, скрытых условий и долгого ожидания.
      </p>
    </div>

    <div className="videoGrid">

      {/* Atlas */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Atlas1.MOV" />
        </video>

        <div className="videoInfo">
          <strong>Георгий • Geely Atlas Pro</strong>

          <p>
            «Нужен был автомобиль для семьи. Банк
            не одобрил кредит, здесь всё сделали
            быстро — вечером уже уехал на машине.»
          </p>

          <span>📍 Санкт-Петербург</span>
        </div>
      </div>

      {/* Coolray 1 */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Coolray1.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Александр • Geely Coolray</strong>

          <p>
            «Искал семейную машину без кредита.
            Всё прозрачно, быстро оформили —
            реально уехал в этот же день.»
          </p>

          <span>🚘 Забрал авто сегодня</span>
        </div>
      </div>

      {/* Coolray 2 */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Coolray2.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Игорь • Geely Coolray</strong>

          <p>
            «Понравилось, что без скрытых условий.
            Всё объяснили, платёж понятный —
            рекомендую.»
          </p>

          <span>🔥 Одобрение за 20 минут</span>
        </div>
      </div>

      {/* Coolray 3 */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Coolray3.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Дмитрий • Geely Coolray</strong>

          <p>
            «Долго искал вариант без банков.
            Здесь реально помогли — условия
            адекватные, машина супер.»
          </p>

          <span>👨‍👩‍👧 Для семьи</span>
        </div>
      </div>

      {/* Coolray 4 */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Coolray4.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Максим • Geely Coolray</strong>

          <p>
            «Оставил заявку утром, вечером уже
            оформляли документы. Всё быстро.»
          </p>

          <span>⚡ Авто в день обращения</span>
        </div>
      </div>

      {/* H5 */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/H51.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Роман • Hongqi H5</strong>

          <p>
            «Не хотел кредит. Подобрали H5,
            всё официально, машина очень радует.»
          </p>

          <span>✨ Premium сегмент</span>
        </div>
      </div>

      {/* Rio */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Rio1.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Артём • Kia Rio</strong>

          <p>
            «Нужна была машина для работы в такси.
            Всё быстро оформили, сразу начал
            работать.»
          </p>

          <span>🚕 Для такси</span>
        </div>
      </div>

      {/* Solaris 1 */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Solaris1.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Виктор • Hyundai Solaris</strong>

          <p>
            «Нужен был простой и надёжный авто.
            Одобрили быстро, забрал без проблем.»
          </p>

          <span>🔥 Самый выгодный платёж</span>
        </div>
      </div>

      {/* Solaris 2 */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Solaris2.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Сергей • Hyundai Solaris</strong>

          <p>
            «Приехал посмотреть — в итоге
            уехал на машине в этот же день.»
          </p>

          <span>⚡ Выдали сегодня</span>
        </div>
      </div>

      {/* Tiggo */}
      <div className="videoCard">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Tigo1.MP4" />
        </video>

        <div className="videoInfo">
          <strong>Олег • Chery Tiggo 7 Pro</strong>

          <p>
            «Хотел комфортный кроссовер без кредита.
            Всё объяснили, условия понятные.»
          </p>

          <span>💎 Комфортный кроссовер</span>
        </div>
      </div>

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