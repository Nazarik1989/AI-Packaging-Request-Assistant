import type { ApplicationForm } from "@/types/application";

export function generateManagerNotes(form: ApplicationForm): string[] {
  const notes = new Set<string>();

  if (!form.product) notes.add("уточнить продукт, вес единицы и формат фасовки");
  if (!form.industry || form.industry === "Другое") {
    notes.add("зафиксировать отрасль и требования рынка к упаковке");
  }
  if (!form.packageType || form.packageType === "Пока не знаю") {
    notes.add("подобрать формат упаковки под продукт и оборудование клиента");
  }
  if (form.storage === "Заморозка") {
    notes.add("уточнить температурный режим хранения и транспортировки");
  }
  if (form.storage === "Влажная среда") {
    notes.add("проверить требования к барьерности и стойкости материала");
  }
  if (form.printNeed === "Да") {
    notes.add("уточнить количество цветов, наличие макета и требования к дизайну");
  }
  if (form.printNeed === "Пока не знаю") {
    notes.add("объяснить варианты с печатью и без печати для тестовой партии");
  }
  if (form.layoutStatus === "Нет") {
    notes.add("предложить помощь с подготовкой макета");
  }
  if (form.layoutStatus === "В разработке") {
    notes.add("узнать срок готовности макета и технические требования дизайнера");
  }
  if (!form.volume || isSmallVolume(form.volume)) {
    notes.add("уточнить минимальную партию и экономически целесообразный тираж");
  }
  if (!form.contactValue) notes.add("запросить рабочий телефон или email для связи");

  notes.add("проверить сроки запуска и приоритет: тест, расчет или серийная поставка");

  return Array.from(notes);
}

function isSmallVolume(value: string) {
  const number = Number.parseInt(value.replace(/\D/g, ""), 10);
  return !Number.isFinite(number) || number < 1000;
}
