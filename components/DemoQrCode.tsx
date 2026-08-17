const demoUrl = "https://ai-packager.naz-ai-lab.ru/demo";

export function DemoQrCode() {
  return (
    <div className="mb-6 rounded-lg border border-graphite-100 bg-white p-6">
      <div className="qr-code-surface mx-auto flex min-h-[268px] w-full max-w-[268px] items-center justify-center rounded-lg bg-white p-6">
        <img
          alt={`QR-код: открыть ${demoUrl}`}
          className="qr-code-static"
          decoding="sync"
          height={220}
          src="/qr-demo.png"
          width={220}
        />
      </div>
      <p className="mt-4 text-center text-sm font-medium text-graphite-700">
        Сканируйте, чтобы открыть страницу предложения
      </p>
    </div>
  );
}
