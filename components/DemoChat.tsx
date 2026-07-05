"use client";

import { ArrowLeft, ArrowRight, Bot, Send, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ResultCard } from "@/components/ResultCard";
import {
  emptyApplication,
  type ApplicationForm,
} from "@/types/application";

type Question = {
  key: keyof ApplicationForm;
  title: string;
  helper: string;
  type: "text" | "options";
  placeholder?: string;
  options?: string[];
};

const questions: Question[] = [
  {
    key: "product",
    title: "Что нужно упаковать?",
    helper: "Например: замороженная рыба, снеки, корм, косметика.",
    type: "text",
    placeholder: "нужна упаковка для замороженной рыбы",
  },
  {
    key: "industry",
    title: "Какая отрасль?",
    helper: "Это помогает понять требования к материалу и хранению.",
    type: "options",
    options: [
      "Замороженные продукты",
      "Корма для животных",
      "Маркетплейсы и доставка",
      "Молочная продукция",
      "Соусы и снеки",
      "Косметика и гигиена",
      "Медицина",
      "Промышленные товары",
      "Другое",
    ],
  },
  {
    key: "packageType",
    title: "Какой тип упаковки нужен?",
    helper: "Если не знаете, агент отметит это для менеджера.",
    type: "options",
    options: [
      "Пакет",
      "Пленка в рулоне",
      "Термоусадочная пленка",
      "Дой-пак",
      "Флоупак",
      "Трехшовный пакет",
      "Пока не знаю",
    ],
  },
  {
    key: "printNeed",
    title: "Нужна ли печать?",
    helper: "Печать влияет на подготовку макета и уточнение цветов.",
    type: "options",
    options: ["Да", "Нет", "Пока не знаю"],
  },
  {
    key: "volume",
    title: "Какой примерный тираж?",
    helper: "Можно указать диапазон или тестовую партию.",
    type: "text",
    placeholder: "например: 10 000 шт. или 500 кг пленки",
  },
  {
    key: "storage",
    title: "Какие условия хранения?",
    helper: "Это помогает оценить требования к прочности и барьерности.",
    type: "options",
    options: [
      "Комнатная температура",
      "Заморозка",
      "Влажная среда",
      "Долгое хранение",
      "Нужна высокая прочность",
      "Другое",
    ],
  },
  {
    key: "layoutStatus",
    title: "Есть ли макет?",
    helper: "Макет можно приложить позже, здесь фиксируем статус.",
    type: "options",
    options: ["Да", "Нет", "В разработке"],
  },
  {
    key: "contactName",
    title: "Как к вам обращаться?",
    helper: "Демо-поле, данные остаются только в браузере.",
    type: "text",
    placeholder: "Имя",
  },
  {
    key: "contactValue",
    title: "Телефон или email",
    helper: "Контакт нужен менеджеру для обратной связи.",
    type: "text",
    placeholder: "+7 или email",
  },
];

export function DemoChat() {
  const [form, setForm] = useState<ApplicationForm>(emptyApplication);
  const [step, setStep] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const current = questions[step];
  const progress = useMemo(() => Math.round((step / questions.length) * 100), [step]);

  useEffect(() => {
    const stored = window.localStorage.getItem("ai-packaging-demo");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as { form: ApplicationForm; step: number; done: boolean };
      setForm(parsed.form);
      setStep(Math.min(parsed.step, questions.length - 1));
      setIsComplete(parsed.done);
    } catch {
      window.localStorage.removeItem("ai-packaging-demo");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "ai-packaging-demo",
      JSON.stringify({ form, step, done: isComplete }),
    );
  }, [form, step, isComplete]);

  function answer(value: string) {
    const nextForm = { ...form, [current.key]: value } as ApplicationForm;
    setForm(nextForm);
    setTextValue("");

    if (step === questions.length - 1) {
      setIsComplete(true);
      return;
    }

    setStep((value) => value + 1);
  }

  function goBack() {
    setIsComplete(false);
    setStep((value) => Math.max(0, value - 1));
  }

  function restart() {
    setForm(emptyApplication);
    setStep(0);
    setTextValue("");
    setIsComplete(false);
    window.localStorage.removeItem("ai-packaging-demo");
  }

  if (isComplete) {
    return <ResultCard form={form} onRestart={restart} />;
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[0.86fr_1fr]">
      <aside className="panel rounded-lg p-5">
        <div className="mb-5 flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-graphite-900 text-white">
            <Bot size={22} />
          </span>
          <div>
            <p className="mb-2 font-semibold text-graphite-900">Демо AI-агент</p>
            <p className="text-sm leading-6 text-graphite-600">
              Здравствуйте. Я демо AI-агент по сбору заявки на гибкую упаковку. Помогу собрать
              параметры, чтобы менеджер быстрее подготовил консультацию или расчет.
            </p>
          </div>
        </div>
        <div className="mb-5 h-2 rounded-full bg-graphite-100">
          <div className="h-2 rounded-full bg-signal-600" style={{ width: `${progress}%` }} />
        </div>
        <div className="grid gap-2">
          {questions.map((question, index) => (
            <div
              className={`rounded-md px-3 py-2 text-sm ${
                index === step
                  ? "bg-blue-50 font-semibold text-signal-600"
                  : index < step
                    ? "bg-white text-graphite-700"
                    : "bg-graphite-50 text-graphite-500"
              }`}
              key={question.key}
            >
              {index + 1}. {question.title}
            </div>
          ))}
        </div>
      </aside>

      <div className="panel rounded-lg p-5">
        <div className="mb-6 rounded-lg bg-graphite-900 p-5 text-white">
          <div className="mb-3 flex items-center gap-2 text-blue-100">
            <Sparkles size={18} />
            <span className="text-sm font-medium">Вопрос {step + 1} из {questions.length}</span>
          </div>
          <h1 className="text-2xl font-semibold">{current.title}</h1>
          <p className="mt-2 text-sm leading-6 text-graphite-100">{current.helper}</p>
        </div>

        {current.type === "options" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {current.options?.map((option) => (
              <button
                className="focus-ring min-h-14 rounded-lg border border-graphite-100 bg-white px-4 py-3 text-left font-medium text-graphite-800 transition hover:border-signal-500 hover:bg-blue-50"
                key={option}
                onClick={() => answer(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              answer(textValue.trim());
            }}
          >
            <input
              className="focus-ring w-full rounded-lg border border-graphite-300 bg-white px-4 py-4 text-graphite-900"
              onChange={(event) => setTextValue(event.target.value)}
              placeholder={current.placeholder}
              value={textValue}
            />
            <button
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-signal-600 px-5 py-3 font-semibold text-white hover:bg-signal-500 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!textValue.trim()}
              type="submit"
            >
              Ответить
              <Send size={18} />
            </button>
          </form>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-graphite-300 bg-white px-4 py-3 font-semibold text-graphite-900 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={step === 0}
            onClick={goBack}
            type="button"
          >
            <ArrowLeft size={18} />
            Назад
          </button>
          <button
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-graphite-300 bg-white px-4 py-3 font-semibold text-graphite-900"
            onClick={() => setIsComplete(true)}
            type="button"
          >
            Показать результат
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
