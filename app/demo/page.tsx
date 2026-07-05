import Link from "next/link";
import { DemoChat } from "@/components/DemoChat";

export default function DemoPage() {
  return (
    <main className="min-h-screen px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link className="font-semibold text-graphite-900" href="/">
            AI-упаковщик заявки
          </Link>
          <Link
            className="focus-ring rounded-lg border border-graphite-300 bg-white px-4 py-2 text-sm font-semibold text-graphite-900 hover:border-signal-500"
            href="/qr"
          >
            QR-оффер
          </Link>
        </nav>

        <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-graphite-700">
          Это не замена менеджера. Агент не принимает коммерческие решения и не рассчитывает цену.
          Он только помогает собрать данные и подготовить заявку к обработке.
        </div>

        <DemoChat />
      </div>
    </main>
  );
}
