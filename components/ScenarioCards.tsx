import { BookOpenCheck, FileText, Lightbulb, MessagesSquare } from "lucide-react";

const scenarios = [
  {
    title: "Заявки клиентов",
    text: "Сбор первичных параметров до звонка менеджера.",
    icon: MessagesSquare,
  },
  {
    title: "Обучение новых сотрудников",
    text: "Тренажер вопросов и типовых уточнений по упаковке.",
    icon: BookOpenCheck,
  },
  {
    title: "Производственные идеи",
    text: "Структурирование замечаний и предложений с линии.",
    icon: Lightbulb,
  },
  {
    title: "Инструкции и контент",
    text: "Памятки, чек-листы и внутренние материалы без секретных данных.",
    icon: FileText,
  },
];

export function ScenarioCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-signal-600">
          4 сценария развития
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-graphite-900">
          Прототип можно развивать постепенно
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {scenarios.map(({ title, text, icon: Icon }) => (
          <article className="panel rounded-lg p-5" key={title}>
            <Icon className="mb-4 text-signal-600" size={24} />
            <h3 className="mb-2 font-semibold text-graphite-900">{title}</h3>
            <p className="text-sm leading-6 text-graphite-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
