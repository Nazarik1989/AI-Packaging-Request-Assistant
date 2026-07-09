"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function DemoQrCode() {
  const [offerUrl, setOfferUrl] = useState(() =>
    configuredUrl ? `${trimTrailingSlash(configuredUrl)}/qr` : "/qr",
  );

  useEffect(() => {
    if (configuredUrl) {
      setOfferUrl(`${trimTrailingSlash(configuredUrl)}/qr`);
      return;
    }

    setOfferUrl(`${window.location.origin}/qr`);
  }, []);

  return (
    <div className="mb-6 rounded-lg border border-graphite-100 bg-white p-6">
      <div className="mx-auto flex min-h-[268px] w-full max-w-[268px] items-center justify-center rounded-lg bg-white p-6">
        <QRCodeSVG
          bgColor="#ffffff"
          fgColor="#131820"
          includeMargin
          level="M"
          size={220}
          value={offerUrl}
        />
      </div>
      <p className="mt-4 text-center text-sm font-medium text-graphite-700">
        Сканируйте, чтобы открыть страницу предложения
      </p>
    </div>
  );
}

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}
