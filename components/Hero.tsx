import { ArrowRight, BadgeCheck, Bot, Boxes, QrCode } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-6">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link className="font-semibold text-graphite-900" href="/">
            AI-упаковщик заявки
          </Link>
          <div className="flex gap-2">
            <Link
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-graphite-700 hover:bg-white"
              href="/demo"
            >
              Демо
            </Link>
            <Link
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-graphite-700 hover:bg-white"
              href="/qr"
            >
              QR
            </Link>
          </div>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-lg border border-graphite-100 bg-white px-3 py-2 text-sm font-medium text-graphite-700 shadow-sm">
              <BadgeCheck size={16} className="shrink-0 text-signal-600" />
              <span>Демо-пилот • Без внутренних данных • Без интеграций</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-graphite-900 sm:text-5xl lg:text-6xl">
              AI-упаковщик заявки
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite-700">
              Демо-агент, который помогает клиенту сформулировать запрос на гибкую упаковку
              и превращает его в понятную карточку для менеджера.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-graphite-500">
              Демо AI-пилота для производственной компании гибкой упаковки. Прототип от
              сотрудника завода, не использует внутренние данные и не подключен к корпоративным
              системам.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-graphite-900 px-5 py-3 font-semibold text-white transition hover:bg-graphite-700"
                href="/demo"
              >
                Открыть демо
                <ArrowRight size={18} />
              </Link>
              <Link
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-graphite-300 bg-white px-5 py-3 font-semibold text-graphite-900 transition hover:border-signal-500"
                href="/qr"
              >
                Посмотреть QR-оффер
                <QrCode size={18} />
              </Link>
            </div>
          </div>

          <div className="panel rounded-lg p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-signal-600">карточка заявки</p>
                <p className="text-xs text-graphite-500">демонстрационные данные</p>
              </div>
              <span className="rounded-lg bg-blue-50 p-2 text-signal-600">
                <Bot size={22} />
              </span>
            </div>
            <div className="rounded-lg bg-graphite-900 p-4 text-white">
              <div className="mb-4 grid grid-cols-3 gap-2">
                {["продукт", "тираж", "печать"].map((item) => (
                  <div className="rounded-md bg-white/10 p-3 text-xs text-blue-100" key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="h-3 w-5/6 rounded bg-white/70" />
                <div className="h-3 w-3/4 rounded bg-white/35" />
                <div className="h-3 w-4/5 rounded bg-white/25" />
              </div>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-graphite-100 bg-white p-4">
                <Boxes className="mb-3 text-violet-500" size={22} />
                <p className="text-sm font-semibold text-graphite-900">Из хаоса</p>
                <p className="text-sm text-graphite-500">короткий запрос клиента</p>
              </div>
              <div className="rounded-lg border border-graphite-100 bg-white p-4">
                <BadgeCheck className="mb-3 text-signal-600" size={22} />
                <p className="text-sm font-semibold text-graphite-900">В структуру</p>
                <p className="text-sm text-graphite-500">готовая карточка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
