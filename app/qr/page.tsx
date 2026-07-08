import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { DemoQrCode } from "@/components/DemoQrCode";

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
          <DemoQrCode />
          <p className="mb-3 text-sm leading-6 text-graphite-600">
            Автор: сотрудник завода, развивающийся в направлении AI-архитектуры и прикладных
            AI-агентов.
          </p>
          <p className="mb-3 text-sm leading-6 text-graphite-600">
            Собрано как инициатива по цифровой оптимизации рутинных процессов.
          </p>
          <p className="text-sm font-medium leading-6 text-graphite-900">
            Прототип демонстрационный: без внутренних данных и без подключения к системам
            компании.
          </p>
        </aside>
      </section>
    </main>
  );
}
