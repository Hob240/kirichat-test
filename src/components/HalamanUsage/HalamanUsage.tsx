'use client';
import { MainContentSection } from "./sections/MainContentSection";
import { UsageChartSection } from "./sections/UsageChartSection";
import { useState } from "react";

export const HalamanUsage = (): JSX.Element => {
  const [from, setFrom] = useState<Date | undefined>(undefined);
  const [to, setTo] = useState<Date | undefined>(undefined);

  return (
    <div className="flex-1 min-h-0 bg-[#ffffff]">
      <div className="flex flex-col w-full">
        <MainContentSection onDateRangeChange={(f, t) => { setFrom(f); setTo(t); }} />
        <UsageChartSection from={from} to={to} />
      </div>
    </div>
  );
};