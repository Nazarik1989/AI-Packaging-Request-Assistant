"use client";

import { Clipboard, Download, RotateCcw } from "lucide-react";
import { generateClientReply } from "@/lib/generateClientReply";
import { generateManagerNotes } from "@/lib/generateManagerNotes";
import { scoreApplication } from "@/lib/leadScoring";
import type { ApplicationForm } from "@/types/application";

type ResultCardProps = {
  form: ApplicationForm;
  onRestart: () => void;
};

export function ResultCard({ form, onRestart }: ResultCardProps) {
  const readiness = scoreApplication(form);
  const notes = generateManagerNotes(form);
  const reply = generateClientReply(form);
  const text = buildPlainText(form, readiness.score, readiness.label, notes, reply);

  async function copyCard() {
    await navigator.clipboard.writeText(text);
  }

  function downloadText() {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "kartochka-zayavki.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
      <div className="panel rounded-lg p-5">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal-600">
              Результат
            </p>
            <h2 className="text-2xl font-semibold text-graphite-900">
              Карточка заявки для менеджера
            </h2>
          </div>
          <div className="min-w-36 rounded-lg bg-graphite-900 p-3 text-white">
            <p className="text-xs text-blue-100">готовность</p>
            <p className="text-2xl font-semibold">{readiness.score}%</p>
          </div>
        </div>

        <div className="mb-5 h-3 rounded-full bg-graphite-100">
          <div
            className="h-3 rounded-full bg-signal-600"
            style={{ width: `${readiness.score}%` }}
          />
        </div>
        <p className="mb-6 rounded-lg bg-blue-50 px-4 py-3 text-sm font-medium text-graphite-800">
          {readiness.label}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Продукт" value={form.product} />
          <Field label="Отрасль" value={form.industry} />
          <Field label="Предполагаемый тип упаковки" value={form.packageType} />
          <Field label="Тираж" value={form.volume} />
          <Field label="Печать" value={form.printNeed} />
          <Field label="Условия хранения" value={form.storage} />
          <Field label="Наличие макета" value={form.layoutStatus} />
          <Field
            label="Контакт"
            value={[form.contactName, form.contactValue].filter(Boolean).join(", ")}
          />
        </div>
      </div>

      <aside className="space-y-5">
        <div className="panel rounded-lg p-5">
          <h3 className="mb-3 font-semibold text-graphite-900">
            Что важно уточнить менеджеру
          </h3>
          <ul className="space-y-2 text-sm text-graphite-700">
            {notes.map((note) => (
              <li className="rounded-md bg-white px-3 py-2" key={note}>
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel rounded-lg p-5">
          <h3 className="mb-3 font-semibold text-graphite-900">
            Черновик ответа клиенту
          </h3>
          <p className="text-sm leading-6 text-graphite-700">{reply}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <button
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-graphite-900 px-4 py-3 font-semibold text-white hover:bg-graphite-700"
            onClick={copyCard}
            type="button"
          >
            <Clipboard size={18} />
            Скопировать карточку
          </button>
          <button
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-graphite-300 bg-white px-4 py-3 font-semibold text-graphite-900 hover:border-signal-500"
            onClick={downloadText}
            type="button"
          >
            <Download size={18} />
            Скачать как текст
          </button>
          <button
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-graphite-300 bg-white px-4 py-3 font-semibold text-graphite-900 hover:border-signal-500"
            onClick={onRestart}
            type="button"
          >
            <RotateCcw size={18} />
            Начать заново
          </button>
        </div>
      </aside>
    </section>
  );
}

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-lg border border-graphite-100 bg-white p-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-graphite-500">
        {label}
      </p>
      <p className="text-sm font-medium text-graphite-900">{value || "не указано"}</p>
    </div>
  );
}

function buildPlainText(
  form: ApplicationForm,
  score: number,
  label: string,
  notes: string[],
  reply: string,
) {
  return [
    "Карточка заявки для менеджера",
    "",
    `Продукт: ${form.product || "не указано"}`,
    `Отрасль: ${form.industry || "не указано"}`,
    `Тип упаковки: ${form.packageType || "не указано"}`,
    `Тираж: ${form.volume || "не указано"}`,
    `Печать: ${form.printNeed || "не указано"}`,
    `Условия хранения: ${form.storage || "не указано"}`,
    `Наличие макета: ${form.layoutStatus || "не указано"}`,
    `Контакт: ${[form.contactName, form.contactValue].filter(Boolean).join(", ") || "не указано"}`,
    "",
    `Оценка готовности: ${score}%`,
    label,
    "",
    "Что важно уточнить менеджеру:",
    ...notes.map((note) => `- ${note}`),
    "",
    "Черновик ответа клиенту:",
    reply,
  ].join("\n");
}
