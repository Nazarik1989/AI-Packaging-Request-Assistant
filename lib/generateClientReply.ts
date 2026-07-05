import type { ApplicationForm } from "@/types/application";

export function generateClientReply(form: ApplicationForm): string {
  const product = form.product || "ваш продукт";
  const packageType =
    form.packageType && form.packageType !== "Пока не знаю"
      ? form.packageType.toLowerCase()
      : "подходящий формат упаковки";
  const printLine =
    form.printNeed === "Да"
      ? "Также уточним параметры печати, количество цветов и готовность макета."
      : form.printNeed === "Нет"
        ? "На первом этапе рассмотрим решение без печати."
        : "Отдельно подскажем, нужна ли печать на первом этапе.";
  const storageLine = form.storage
    ? `Учтем условия хранения: ${form.storage.toLowerCase()}.`
    : "Уточним условия хранения и транспортировки.";
  const volumeLine = form.volume
    ? `Ориентир по тиражу: ${form.volume}.`
    : "Попросим указать ориентировочный тираж.";

  return [
    "Здравствуйте! Спасибо за запрос.",
    `Чтобы подготовить консультацию и предварительный расчет, проверим параметры упаковки для продукта: ${product}.`,
    `Предварительное направление: ${packageType}. ${storageLine} ${volumeLine}`,
    printLine,
    "После уточнения деталей менеджер сможет быстрее предложить подходящий материал, формат и следующий шаг.",
  ].join(" ");
}
