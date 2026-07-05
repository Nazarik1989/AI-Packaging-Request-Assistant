import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function QrPage() {
  return (
    <main className="flex min-h-screen items-center px-4 py-8">
      <section className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-signal-600">
            QR-оффер
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-graphite-900 sm:text-5xl">
            Я не стал описывать идею только текстом.
          </h1>
          <p className="mt-4 text-2xl font-semibold text-graphite-700">
            Я собрал ее в прототип.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite-700">
            Это демо AI-пилота, который показывает, как можно ускорить обработку первичных
            заявок на гибкую упаковку. Агент задает клиенту уточняющие вопросы и превращает
            разрозненный запрос в карточку для менеджера.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-graphite-900 px-5 py-3 font-semibold text-white hover:bg-graphite-700"
              href="/demo"
            >
              Открыть прототип
              <ArrowRight size={18} />
            </Link>
            <Link
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-graphite-300 bg-white px-5 py-3 font-semibold text-graphite-900 hover:border-signal-500"
              href="/"
            >
              Открыть описание
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>

        <aside className="panel rounded-lg p-6">
          <div className="mb-6 aspect-square rounded-lg border border-graphite-100 bg-white p-5">
            <div className="grid h-full grid-cols-5 grid-rows-5 gap-2">
              {Array.from({ length: 25 }).map((_, index) => (
                <div
                  className={`rounded-sm ${
                    [0, 1, 2, 5, 10, 12, 14, 18, 20, 21, 22, 24].includes(index)
                      ? "bg-graphite-900"
                      : [6, 8, 16, 23].includes(index)
                        ? "bg-signal-600"
                        : "bg-graphite-100"
                  }`}
                  key={index}
                />
              ))}
            </div>
          </div>
          <p className="mb-3 text-sm text-graphite-600">
            Автор: сотрудник завода, развивающийся в направлении AI-архитектуры и прикладных
            AI-агентов.
          </p>
          <p className="text-sm font-medium text-graphite-900">
            Прототип демонстрационный. Не использует внутренние данные.
          </p>
        </aside>
      </section>
    </main>
  );
}
