export type Industry =
  | "Замороженные продукты"
  | "Корма для животных"
  | "Маркетплейсы и доставка"
  | "Молочная продукция"
  | "Соусы и снеки"
  | "Косметика и гигиена"
  | "Медицина"
  | "Промышленные товары"
  | "Другое";

export type PackageType =
  | "Пакет"
  | "Пленка в рулоне"
  | "Термоусадочная пленка"
  | "Дой-пак"
  | "Флоупак"
  | "Трехшовный пакет"
  | "Пока не знаю";

export type PrintNeed = "Да" | "Нет" | "Пока не знаю";
export type StorageCondition =
  | "Комнатная температура"
  | "Заморозка"
  | "Влажная среда"
  | "Долгое хранение"
  | "Нужна высокая прочность"
  | "Другое";
export type LayoutStatus = "Да" | "Нет" | "В разработке";

export type ApplicationForm = {
  product: string;
  industry: Industry | "";
  packageType: PackageType | "";
  printNeed: PrintNeed | "";
  volume: string;
  storage: StorageCondition | "";
  layoutStatus: LayoutStatus | "";
  contactName: string;
  contactValue: string;
};

export type ReadinessResult = {
  score: number;
  label: string;
  tone: "low" | "medium" | "high";
};

export const emptyApplication: ApplicationForm = {
  product: "",
  industry: "",
  packageType: "",
  printNeed: "",
  volume: "",
  storage: "",
  layoutStatus: "",
  contactName: "",
  contactValue: "",
};
