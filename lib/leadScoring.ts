import type { ApplicationForm, ReadinessResult } from "@/types/application";

export function scoreApplication(form: ApplicationForm): ReadinessResult {
  const requiredValues = [
    form.product,
    form.industry,
    form.packageType,
    form.printNeed,
    form.volume,
    form.storage,
    form.layoutStatus,
    form.contactValue,
  ];

  const filled = requiredValues.filter(Boolean).length;
  const unknowns = [form.packageType, form.printNeed].filter(
    (value) => value === "Пока не знаю",
  ).length;

  let score = Math.round((filled / requiredValues.length) * 92);

  if (form.contactName) score += 3;
  if (form.storage === "Заморозка" || form.storage === "Влажная среда") score += 2;
  if (unknowns > 0) score -= unknowns * 14;
  if (form.layoutStatus === "Нет") score -= 5;
  if (!form.volume || isSmallVolume(form.volume)) score -= 6;

  score = Math.max(35, Math.min(95, score));

  if (score >= 78) {
    return {
      score,
      tone: "high",
      label: "Заявка достаточно полная для первичной консультации",
    };
  }

  if (score >= 58) {
    return {
      score,
      tone: "medium",
      label: "Нужно уточнить несколько ключевых параметров",
    };
  }

  return {
    score,
    tone: "low",
    label: "Заявка пока требует базового уточнения перед расчетом",
  };
}

function isSmallVolume(value: string) {
  const number = Number.parseInt(value.replace(/\D/g, ""), 10);
  return Number.isFinite(number) && number > 0 && number < 1000;
}
