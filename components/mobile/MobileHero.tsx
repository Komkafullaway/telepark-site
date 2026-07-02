import Image from "next/image";

export default function MobileHero() {
  return (
    <section className="tmHero" id="top">
      <Image
        className="tmHeroImg"
        src="/New/TenetSPB.webp"
        alt="Автомобиль Tenet для выкупа в Санкт-Петербурге"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 480px) 100vw, 480px"
      />

      <div className="tmHeroTop">
        <div className="tmBadge">АВТОМОБИЛЬ ПОД ВЫКУП</div>

        <h1>
          АВТО
          <br />
          ПОД ВЫКУП
          <br />
          БЕЗ <span>БАНКА</span>
        </h1>

        <div className="tmBullets">
          <div><b>✓</b>Одобрение 99%</div>
          <div><b>✓</b>Решение за 15 минут</div>
          <div><b>✓</b>Авто сегодня</div>
        </div>

        <div className="tmHeroTrust">
          Уже передали клиентам <strong>более 50 автомобилей</strong> • Официальный
          договор • Выдача автомобиля <strong>в течение суток</strong>
        </div>
      </div>
    </section>
  );
}