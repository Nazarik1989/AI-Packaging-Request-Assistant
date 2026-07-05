"use client";

import { LockKeyhole, LogIn } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const response = await fetch("/api/access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    setIsLoading(false);

    if (!response.ok) {
      setError("Код не подошел. Проверьте символы и попробуйте еще раз.");
      return;
    }

    router.push(searchParams.get("next") || "/");
    router.refresh();
  }

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
        <form className="space-y-4" onSubmit={submit}>
          <input
            className="focus-ring w-full rounded-lg border border-graphite-300 bg-white px-4 py-4 text-graphite-900"
            onChange={(event) => setCode(event.target.value)}
            placeholder="Код доступа"
            type="password"
            value={code}
          />
          {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
          <button
            className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-lg bg-graphite-900 px-5 py-3 font-semibold text-white hover:bg-graphite-700 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!code.trim() || isLoading}
            type="submit"
          >
            {isLoading ? "Проверяем..." : "Открыть демо"}
            <LogIn size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}
