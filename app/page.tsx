import { ArrowRight, ClipboardCheck, Factory, MessageSquareText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SafetyBlock } from "@/components/SafetyBlock";
import { ScenarioCards } from "@/components/ScenarioCards";

const vagueRequests = [
  "Нужны пакеты с печатью. Цена?",
  "Нужна пленка для заморозки.",
  "Хотим упаковку для маркетплейса.",
];

const managerQuestions = [
  "продукт",
  "отрасль",
  "формат упаковки",
  "тираж",
  "печать",
  "условия хранения",
  "требования к материалу",
  "наличие макета",
  "сроки",
];

const solutionItems = [
  "отрасль",
  "продукт",
  "тип упаковки",
  "тираж",
  "печать",
  "требования",
  "риски и уточнения",
  "черновик ответа клиенту",
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 md:grid-cols-[1fr_0.9fr]">
        <div className="panel rounded-lg p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-graphite-900 text-white">
              <MessageSquareText size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-signal-600">
                Проблема
              </p>
              <h2 className="text-2xl font-semibold text-graphite-900">
                Первичный запрос часто слишком размыт
              </h2>
            </div>
          </div>
          <div className="grid gap-3">
            {vagueRequests.map((request) => (
              <div
                className="rounded-lg border border-graphite-100 bg-graphite-50 px-4 py-3 text-graphite-700"
                key={request}
              >
                “{request}”
              </div>
            ))}
          </div>
        </div>

        <div className="panel rounded-lg p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-signal-600 shadow-sm">
              <ClipboardCheck size={20} />
            </span>
            <h2 className="text-xl font-semibold text-graphite-900">
              Что приходится уточнять менеджеру
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {managerQuestions.map((item) => (
              <span
                className="rounded-md border border-graphite-100 bg-white px-3 py-2 text-sm text-graphite-700"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite-900 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.8fr_1fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
              Решение
            </p>
            <h2 className="mb-4 text-3xl font-semibold">
              AI-агент собирает структуру до передачи менеджеру
            </h2>
            <p className="text-graphite-100">
              Агент задает уточняющие вопросы, показывает готовность заявки и формирует карточку
              для менеджера без доступа к внутренним системам.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {solutionItems.map((item) => (
              <div className="rounded-lg border border-white/10 bg-white/10 p-4" key={item}>
                <Factory className="mb-3 text-blue-200" size={20} />
                <span className="text-sm text-graphite-50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScenarioCards />
      <SafetyBlock />

      <section className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-12 sm:flex-row">
        <Link
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-signal-600 px-5 py-3 font-semibold text-white transition hover:bg-signal-500"
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
          <ShieldCheck size={18} />
        </Link>
      </section>
    </main>
  );
}
