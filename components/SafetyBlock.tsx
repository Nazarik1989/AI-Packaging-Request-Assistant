import { ShieldCheck } from "lucide-react";

export function SafetyBlock() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="panel flex flex-col gap-4 rounded-lg p-6 sm:flex-row sm:items-start">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-signal-600">
          <ShieldCheck size={22} />
        </span>
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-signal-600">
            Безопасность демо
          </p>
          <p className="text-graphite-700">
            Прототип работает только на тестовых данных. Он не подключен к внутренним системам,
            не использует коммерческую информацию, персональные данные сотрудников или клиентов.
          </p>
        </div>
      </div>
    </section>
  );
}
