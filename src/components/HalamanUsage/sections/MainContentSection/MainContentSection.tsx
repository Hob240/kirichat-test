'use client';
import { AgentsDropdown } from "../../../../components/AgentsDropdown";
import { Card, CardContent } from "../../../../components/ui/card";
import { DateRangeDropdown } from "../../../../components/DateRangeDropdown";

// Progress bar dengan tooltip yang mengikuti ujung kanan bar biru
const ProgressWithTooltip = ({ percent }: { percent: number }) => {
  const clamped = Math.max(0, Math.min(100, percent));
  const anchorStyle =
    clamped <= 5
      ? { left: '0%', transform: 'translateX(0%)' }
      : clamped >= 95
      ? { left: '100%', transform: 'translateX(-100%)' }
      : { left: `${clamped}%`, transform: 'translateX(-50%)' };
  return (
    <div className="w-full relative">
      {/* Track + Fill */}
      <div className="w-full h-[12px] bg-[#E6ECF1] rounded-[40px] overflow-hidden">
        <div
          className="h-full bg-[#3B82F6] rounded-[40px]"
          style={{ width: `${clamped}%` }}
        />
      </div>

      {/* Tooltip mengikuti ujung kanan bar biru */}
      <div
        className="absolute bottom-[calc(100%+10px)] left-0 flex justify-center"
        style={anchorStyle}
      >
        <div className="pointer-events-none flex flex-col items-center scale-[0.7] origin-bottom">
          <div className="flex flex-col items-center px-4 py-3 bg-white rounded-xl shadow-lg border border-[#e0e2e7]">
            <div className="[font-family:'Inter',Helvetica] font-bold text-[#1b1d23] text-base leading-none">
              {clamped}%
            </div>
          </div>
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
        </div>
      </div>
    </div>
  );
};

export const MainContentSection = ({ onDateRangeChange }: { onDateRangeChange?: (from?: Date, to?: Date) => void }): JSX.Element => {
  const usagePercent = 32;
  const agentsPercent = 32;

  return (
    <div className="flex flex-col w-full bg-[#ffffff] py-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col -ml-[calc(clamp(24px,3.5vw,72px)-12px)]">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[22px] tracking-[0] leading-[29.7px]">
            Usage
          </h1>
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[15.4px] tracking-[0.26px] leading-[22px]">
            Here you can see usage your agents
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 w-[98%] mx-auto">
          <AgentsDropdown initialLabel="All agents" />

          <DateRangeDropdown
            className=""
            initialRange="24 August 2025 - 24 September 2025"
            onChange={(_, f, t) => {
              onDateRangeChange?.(f, t);
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 w-[98%] mx-auto">
          {/* Card Usage Points */}
          <Card className="bg-[#FDFDFD] rounded-[16px] border border-[#E6ECF1] shadow-[8px_8px_20px_rgba(80,139,135,0.15)]">
            <CardContent className="p-6">
              <div className="flex flex-col gap-6">
                {/* Judul: Inter, Medium, size 24, line-height 32, color #201E1E */}
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#201E1E] text-[20.95px] leading-[28.8px] tracking-[0] -mb-3">
                  Usage points
                </h3>

                {/* Nilai utama + label kecil kanan */}
                <div className="flex items-end gap-3">
                  {/* Angka utama: Inter, Bold, 40px, color #201E1E */}
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#201E1E] text-[33.17px] leading-none">
                    100
                  </div>
                  {/* Tooltip menggantikan label persen statis */}
                  <div className="ml-auto [font-family:'Inter',Helvetica] font-light text-[#201E1E] text-[12px] leading-none mb-2">
                    100 / 3500
                  </div>
                </div>

                {/* Progress bar dengan tooltip dinamis */}
                <ProgressWithTooltip percent={usagePercent} />
              </div>
            </CardContent>
          </Card>

          {/* Card Agents Used */}
          <Card className="bg-[#FDFDFD] rounded-[16px] border border-[#E6ECF1] shadow-[8px_8px_20px_rgba(80,139,135,0.15)]">
            <CardContent className="p-6">
              <div className="flex flex-col gap-6">
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#201E1E] text-[20.95px] leading-[28.8px] tracking-[0]">
                  Agents used
                </h3>
                <div className="flex items-end gap-3">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#201E1E] text-[33.17px] leading-none">
                    1
                  </div>
                  <div className="ml-auto [font-family:'Inter',Helvetica] font-light text-[#201E1E] text-[12px] leading-none mb-2">
                    1 / 1
                  </div>
                </div>
                <ProgressWithTooltip percent={agentsPercent} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};