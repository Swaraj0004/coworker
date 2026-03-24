"use client";

import dynamic from "next/dynamic";

const LegacySpa = dynamic(() => import("./LegacySpa"), { ssr: false });

export default function ClientOnlySpa() {
  return <LegacySpa />;
}
