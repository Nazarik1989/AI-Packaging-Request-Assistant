import { LockKeyhole, LogIn } from "lucide-react";

type AccessPageProps = {
  searchParams?: {
    error?: string;
    next?: string;
  };
};

export default function AccessPage({ searchParams }: AccessPageProps) {
  const hasError = searchParams?.error === "1";
  const next = searchParams?.next || "/";

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <section className="panel w-full max-w-md rounded-lg p-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-graphite-900 text-white">
            <LockKeyhole size={22} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal-600">
              Демо-доступ
            </p>
            <h1 className="text-2xl font-semibold text-graphite-900">
              Введите код доступа
            </h1>
          </div>
        </div>
        <p className="mb-5 text-sm leading-6 text-graphite-600">
          Прототип открыт для просмотра по ссылке и коду. Код можно получить у автора демо.
        </p>
        <form className="space-y-4" method="GET">
          <input name="next" type="hidden" value={next} />
          <input
            className="focus-ring w-full rounded-lg border border-graphite-300 bg-white px-4 py-4 text-graphite-900"
            name="code"
            placeholder="Код доступа"
            type="password"
          />
          {hasError ? (
            <p className="text-sm font-medium text-red-600">
              Код не подошел. Проверьте символы и попробуйте еще раз.
            </p>
          ) : null}
          <button
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-graphite-900 px-5 py-3 font-semibold text-white hover:bg-graphite-700"
            type="submit"
          >
            Открыть демо
            <LogIn size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}
