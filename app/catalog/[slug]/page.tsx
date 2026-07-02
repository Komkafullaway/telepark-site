import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "../../../data/cars";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);

  if (!car) {
    return {};
  }

  return {
    title: `${car.name} под выкуп в Санкт-Петербурге | Телепарк`,
    description: `${car.name} под выкуп в Санкт-Петербурге. ${car.price} в сутки, ${car.month}, срок ${car.term}. Официальный договор, быстрые условия, заявка онлайн.`,
  };
}

export default async function CarPage({ params }: Props) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);

  if (!car) {
    notFound();
  }

  const similarCars = cars.filter((item) => item.slug !== car.slug).slice(0, 3);

  return (
    <main className="tmCarV2">
      <section className="tmCarV2Hero">
        <Link className="tmCarV2Back" href="/catalog">
          ← В каталог
        </Link>

        <div className="tmCarV2Media">
          <Image
            src={car.heroImg ?? car.img}
            alt={`${car.name} под выкуп в Санкт-Петербурге`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 520px"
          />

          <div className="tmCarV2Overlay">
            <div className="tmCarV2Badge">{car.badge}</div>

            <h1>{car.name}</h1>

            <p>
              Автомобиль под выкуп<br />
              в Санкт-Петербурге
            </p>
          </div>
        </div>

        <div className="tmCarV2Offer">
          <div className="tmCarV2Price">
            <strong>{car.price}</strong>
            <span>/ сутки</span>
          </div>

          <p>{car.month}</p>

          <a className="tmCarV2Button" href="/#tmCars">
            Получить условия
            <b>›</b>
          </a>

          <small>Без скрытых платежей и комиссий</small>
        </div>

        <div className="tmCarV2Quick">
          <div>
            <b>🛡</b>
            <span>ОСАГО и КАСКО</span>
          </div>
          <div>
            <b>∞</b>
            <span>Без ограничений</span>
          </div>
          <div>
            <b>%</b>
            <span>Одобрение 99%</span>
          </div>
          <div>
            <b>🔑</b>
            <span>Авто станет вашим</span>
          </div>
        </div>
      </section>

      <section className="tmCarV2Section">
        <div className="tmKicker">Преимущества</div>
        <h2>Почему выбирают {car.name}</h2>

        <div className="tmCarV2List">
          {car.features.map((feature) => (
            <div key={feature}>
              <b>✓</b>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tmCarV2Section">
        <div className="tmKicker">Условия</div>
        <h2>Прозрачные условия выкупа</h2>
        <section className="tmCarV2Section">
  <div className="tmKicker">Платежи</div>
  <h2>Разбивка платежей</h2>

  <div className="tmCarV2Payments">
    <div>
      <span>1 день</span>
      <b>{car.price}</b>
    </div>
    <div>
      <span>7 дней</span>
      <b>{Number(car.price.replace(/\D/g, "")) * 7} ₽</b>
    </div>
    <div>
      <span>14 дней</span>
      <b>{Number(car.price.replace(/\D/g, "")) * 14} ₽</b>
    </div>
    <div>
      <span>30 дней</span>
      <b>{car.month.replace("≈ ", "")}</b>
    </div>
  </div>
</section>

        <div className="tmCarV2Conditions">
          <div>
            <span>Стоимость</span>
            <b>{car.price} / сутки</b>
          </div>
          <div>
            <span>Ежемесячно</span>
            <b>{car.month}</b>
          </div>
          <div>
            <span>Срок</span>
            <b>{car.term}</b>
          </div>
          <div>
            <span>Первый взнос</span>
            <b>{car.deposit}</b>
          </div>
        </div>
      </section>

      <section className="tmCarV2Section">
        <div className="tmKicker">Характеристики</div>
        <h2>Основная информация</h2>

        <div className="tmCarV2Specs">
          <div>
            <span>Год выпуска</span>
            <b>{car.year}</b>
          </div>
          <div>
            <span>Коробка</span>
            <b>{car.gearbox}</b>
          </div>
          <div>
            <span>Автомобиль</span>
            <b>{car.name}</b>
          </div>
          <div>
            <span>Период выкупа</span>
            <b>{car.term}</b>
          </div>
        </div>
      </section>

            <section className="tmCarV2Section">
        <div className="tmKicker">Похожие авто</div>
        <h2>Можно также рассмотреть</h2>

        <div className="tmCarV2Similar">
          {similarCars.map((item) => (
            <Link href={`/catalog/${item.slug}`} key={item.slug}>
              <Image src={item.img} alt={item.name} width={120} height={80} />
              <div>
                <strong>{item.name}</strong>
                <span>{item.year} · {item.gearbox}</span>
              </div>
              <b>{item.price}</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="tmCarV2Final">
        <h2>Готовы арендовать {car.name} под выкуп?</h2>
        <p>Оставьте заявку — рассчитаем персональные условия и свяжемся с вами.</p>

        <a className="tmCarV2Button" href="/#tmCars">
          Получить предложение
          <b>›</b>
        </a>
      </section>
    </main>
  );
}