import Image from "next/image";
import { cars } from "../../data/cars";

export const metadata = {
  title: "Каталог автомобилей под выкуп в Санкт-Петербурге | Телепарк",
  description:
    "Каталог автомобилей Телепарк: аренда авто с выкупом в Санкт-Петербурге без банка, с понятными условиями и быстрым оформлением.",
};

export default function CatalogPage() {
  return (
    <main className="tm">
      <section className="tmSection">
        <div className="tmKicker">Каталог</div>
        <h1>Автомобили под выкуп в Санкт-Петербурге</h1>

        <div className="tmCatalogGrid">
          {cars.map((car) => (
            <article className="tmCatalogCard" key={car.name}>
              <Image
                src={car.img}
                alt={car.name}
                width={640}
                height={420}
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div>
                <h2>{car.name}</h2>
                <p>{car.year} · {car.gearbox}</p>
                <strong>{car.price} / сутки</strong>
                <span>{car.month}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}