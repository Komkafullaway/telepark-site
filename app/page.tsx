'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Car, Clock, CreditCard, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

const cars = [
  { name: 'Kia Rio', price: 'от 2 300 ₽/день', tag: 'для такси и города' },
  { name: 'Hyundai Solaris', price: 'от 2 500 ₽/день', tag: 'экономичный вариант' },
  { name: 'Volkswagen Polo', price: 'от 2 700 ₽/день', tag: 'комфорт каждый день' },
];

const steps = [
  'Оставляете заявку',
  'Подбираем автомобиль',
  'Фиксируем условия',
  'Вы получаете ключи',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-blue-500 shadow-glow"><Car size={20} /></span>
            AutoВыкуп
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#terms" className="hover:text-white">Условия</a>
            <a href="#cars" className="hover:text-white">Авто</a>
            <a href="#steps" className="hover:text-white">Как работает</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-blue-100">
            Заявка
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
            <Sparkles size={16} /> Авто сегодня — выкуп по графику
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Аренда авто под выкуп без сложных банковских процедур
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Подберём автомобиль под вашу задачу: такси, доставка, семья или личные поездки. Понятный договор, прозрачные платежи и возможность досрочного выкупа.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-500 px-7 py-4 font-bold shadow-glow transition hover:bg-blue-400">
              Получить подбор <ArrowRight className="transition group-hover:translate-x-1" size={20} />
            </a>
            <a href="https://wa.me/79990000000" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-7 py-4 font-bold text-slate-100 transition hover:bg-white/10">
              <MessageCircle size={20} /> Написать в WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
            <div className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-blue-900 to-slate-950 p-6">
              <div className="flex justify-between text-sm text-slate-300">
                <span>Premium mobility</span>
                <span>2026</span>
              </div>
              <div className="mt-24 rounded-3xl bg-white/10 p-5 backdrop-blur-lg">
                <p className="text-sm text-blue-100">Пример платежа</p>
                <p className="mt-1 text-4xl font-black">от 2 300 ₽/день</p>
                <p className="mt-3 text-sm text-slate-300">Точные условия зависят от авто, срока и первого взноса.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="terms" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['от 1 дня', 'рассмотрение заявки', Clock],
            ['от 10%', 'первый взнос', CreditCard],
            ['12–36 мес.', 'срок выкупа', BadgeCheck],
            ['18+', 'возраст водителя', ShieldCheck],
          ].map(([title, text, Icon]) => (
            <div key={String(title)} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              {/* @ts-ignore */}
              <Icon className="mb-5 text-blue-300" size={28} />
              <div className="text-3xl font-black">{String(title)}</div>
              <div className="mt-2 text-slate-400">{String(text)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="cars" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-bold text-blue-300">Автомобили</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Популярные варианты</h2>
          </div>
          <p className="max-w-xl text-slate-400">Добавьте сюда реальные автомобили, фото, пробег, год и условия выкупа.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {cars.map((car) => (
            <div key={car.name} className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
              <div className="grid aspect-video place-items-center rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-blue-950">
                <Car className="text-blue-200" size={72} />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black">{car.name}</h3>
                  <p className="mt-1 text-slate-400">{car.tag}</p>
                </div>
                <span className="rounded-full bg-blue-500/15 px-3 py-1 text-sm text-blue-200">в наличии</span>
              </div>
              <p className="mt-5 text-2xl font-black text-blue-200">{car.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="steps" className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">Как это работает</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-8 text-5xl font-black text-white/15">0{index + 1}</div>
              <h3 className="text-xl font-bold">{step}</h3>
              <p className="mt-3 text-slate-400">Менеджер сопровождает вас на каждом этапе оформления.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-blue-500/10 p-6 backdrop-blur-xl md:grid-cols-2 md:p-10">
          <div>
            <p className="font-bold text-blue-200">Заявка</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Получите подбор автомобиля</h2>
            <p className="mt-5 text-lg text-slate-300">Оставьте контакты — мы уточним бюджет, цель использования и предложим подходящие варианты.</p>
          </div>
          <form className="grid gap-4 rounded-[1.5rem] bg-white p-5 text-slate-950">
            <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-blue-500" placeholder="Ваше имя" />
            <input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-blue-500" placeholder="Телефон" />
            <select className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-blue-500">
              <option>Для чего нужен автомобиль?</option>
              <option>Такси</option>
              <option>Доставка</option>
              <option>Личные поездки</option>
              <option>Семья</option>
            </select>
            <textarea className="min-h-28 rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-blue-500" placeholder="Марка, бюджет или комментарий" />
            <button className="rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-blue-600">Отправить заявку</button>
          </form>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-20">
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">FAQ</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ['Можно ли выкупить досрочно?', 'Да, досрочный выкуп можно прописать в договоре.'],
            ['Какие документы нужны?', 'Обычно паспорт, водительское удостоверение и контактные данные.'],
            ['Можно выбрать конкретную модель?', 'Да, можно подобрать авто под бюджет и задачу.'],
            ['Куда приходят заявки?', 'Форму можно подключить к Telegram, WhatsApp, email или CRM.'],
          ].map(([q, a]) => (
            <div key={q} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold">{q}</h3>
              <p className="mt-3 text-slate-400">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © 2026 AutoВыкуп. Информация на сайте не является публичной офертой.
      </footer>
    </main>
  );
}
