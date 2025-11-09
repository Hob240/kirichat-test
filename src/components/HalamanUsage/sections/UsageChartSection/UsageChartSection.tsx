'use client';
import { AgentsDropdown } from "../../../../components/AgentsDropdown";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";

const DAYS = 31;
const SIDE_PAD = 8; // symmetric left/right padding (reduced for more label space)
const CHART_HEIGHT = 232; // total height for plot area (includes top/bottom pad to keep bar height)
const CHART_TOP_PAD = 16;
const CHART_BOTTOM_PAD = 16;
const GRID_LINE_POS = ["0%", "25%", "50%", "75%", "100%"]; // include top and bottom
const BAR_SLOT_PX = 36; // bar slot width in px (+50%)

function getMonthLabel(baseDate?: Date): string {
  const d = baseDate ?? new Date();
  return d.toLocaleDateString("en-US", { month: "short" });
}

// Evenly distribute 31 days across the width and label odd days only (1,3,...,31).
function getOddDayLabels(baseDate?: Date): string[] {
  const month = getMonthLabel(baseDate);
  const labels: string[] = [];
  for (let day = 1; day <= DAYS; day++) {
    if (day % 2 === 1) labels.push(`${month} ${day}`);
    else labels.push("");
  }
  return labels;
}

// Deterministic sample values [0..100]
function getSampleValues(n: number): number[] {
  const vals: number[] = [];
  for (let i = 0; i < n; i++) {
    const v = 50 + 40 * Math.sin((i / n) * Math.PI * 2) + 10 * Math.sin((i / 5) * Math.PI * 2);
    vals.push(Math.max(0, Math.min(100, Math.round(v))));
  }
  return vals;
}

function FixedChart({ from, to }: { from?: Date; to?: Date }): JSX.Element {
  const usableHeight = CHART_HEIGHT - CHART_TOP_PAD - CHART_BOTTOM_PAD;

  // Selection state via bar click (optional). External date range (from/to) takes precedence.
  const [start, setStart] = useState<number | null>(null);
  const [end, setEnd] = useState<number | null>(null);

  const fullValues = useMemo(() => getSampleValues(DAYS), []);
  const baseMonthDate = useMemo(() => to ?? from ?? new Date(), [from, to]);
  const fullLabels = useMemo(() => getOddDayLabels(baseMonthDate), [baseMonthDate]);

  // Translate external date range to index range in current chart month
  const dateRange = useMemo(() => {
    if (!from || !to) return null;
    const base = baseMonthDate;
    const chartYear = base.getFullYear();
    const chartMonth = base.getMonth();
    const chartStart = new Date(chartYear, chartMonth, 1);
    const chartEnd = new Date(chartYear, chartMonth + 1, 0); // last day of month

    const a = from < to ? from : to;
    const b = from < to ? to : from;

    if (b < chartStart || a > chartEnd) return null; // no overlap

    const startDay = a.getMonth() === chartMonth && a.getFullYear() === chartYear ? a.getDate() : 1;
    const endDay = b.getMonth() === chartMonth && b.getFullYear() === chartYear ? b.getDate() : chartEnd.getDate();

    const s = Math.max(0, Math.min(DAYS - 1, startDay - 1));
    const e = Math.max(0, Math.min(DAYS - 1, endDay - 1));
    if (e < s) return null;
    return [s, e] as const;
  }, [from, to, baseMonthDate]);

  const clickRange = useMemo(() => {
    if (start != null && end != null) {
      const s = Math.min(start, end);
      const e = Math.max(start, end);
      return [s, e] as const;
    }
    return null;
  }, [start, end]);

  const displayRange = dateRange ?? clickRange;

  // Cross-month support: when the selected range spans multiple months/years,
  // build a continuous date array from 'from' to 'to' and render that sequence.
  const crossMonthData = useMemo(() => {
    if (!from || !to) return null;
    const a = from < to ? from : to;
    const b = from < to ? to : from;
    const spansMonth = a.getFullYear() !== b.getFullYear() || a.getMonth() !== b.getMonth();
    if (!spansMonth) return null;
    const dates: Date[] = [];
    const cur = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    while (cur <= b) {
      dates.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    const vals = getSampleValues(dates.length);
    const labels = dates.map((d) =>
      d.getDate() === 1 || d.getDate() % 2 === 1
        ? `${d.toLocaleString('en-US', { month: 'short' })} ${d.getDate()}`
        : ''
    );
    return { dates, vals, labels } as const;
  }, [from, to]);

  const isCrossMonth = !!crossMonthData;
  const monthDates = useMemo(
    () => Array.from({ length: DAYS }, (_, i) => new Date(baseMonthDate.getFullYear(), baseMonthDate.getMonth(), i + 1)),
    [baseMonthDate]
  );
  const values = isCrossMonth ? crossMonthData!.vals : fullValues;
  const labels = isCrossMonth ? crossMonthData!.labels : fullLabels;
  const datesArray = isCrossMonth ? crossMonthData!.dates : monthDates;

  const inRange = (i: number) => {
    if (isCrossMonth) return true; // entire array is the selection range
    if (!displayRange) return true;
    const [s, e] = displayRange;
    return i >= s && i <= e;
  };

  const onBarClick = (globalIdx: number) => {
    if (dateRange) return; // ignore clicks when external date range is active
    if (start == null) {
      setStart(globalIdx);
    } else if (end == null) {
      setEnd(globalIdx);
    } else {
      // restart selection from this bar
      setStart(globalIdx);
      setEnd(null);
    }
  };

  const isPendingSingle = !dateRange && start != null && end == null;

  // Floating tooltip state (portal)
  const [hover, setHover] = useState<{ idx: number; x: number; y: number } | null>(null);
  const onHoverMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setHover({ idx, x: r.left + r.width / 2, y: r.top });
  };
  const onHoverLeave = () => setHover(null);

  // Responsive: grid columns auto-fit; no forced min-width to avoid horizontal scroll

  return (
    <div className="w-full">
      <div className="w-full overflow-x-hidden pb-6" style={{ overflowY: "visible" }}>
        <div style={{ width: '100%' }}>
          {/* Plot area */}
          <div
            className="relative w-full"
            style={{ height: CHART_HEIGHT, overflow: "visible" }}
            onDoubleClick={() => { setStart(null); setEnd(null); }}
          >
        
        {/* Bars + grid lines layer within padded area */}
        <div
          className="absolute left-0 right-0"
          style={{ top: CHART_TOP_PAD, bottom: CHART_BOTTOM_PAD, overflow: "visible" }}
        >
          {/* Grid lines shifted together with bars */}
          {GRID_LINE_POS.map((pos, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-px bg-[#e0e2e7]"
              style={{ top: pos, left: SIDE_PAD, right: SIDE_PAD }}
            />
          ))}

          <div
            className="grid items-end h-full"
            style={{ gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))`, columnGap: 8, paddingLeft: SIDE_PAD, paddingRight: SIDE_PAD }}
          >
            {values.map((val, idx) => {
              const baseH = Math.round((val / 100) * usableHeight);
              const h = baseH; // tampilkan semua bar
              const dimmed = !!displayRange && !inRange(idx); // bar di luar pilihan dipudarkan
              const globalIdx = idx; // 0-based index in full range
              const isStart = isPendingSingle && start === globalIdx;
              const tooltipDate = datesArray[globalIdx] ?? new Date(baseMonthDate.getFullYear(), baseMonthDate.getMonth(), globalIdx + 1);
              const dateStr = `${tooltipDate.getDate()} ${tooltipDate.toLocaleString("en-US", { month: "short" })} ${tooltipDate.getFullYear()}`;
              return (
                <div
                  key={idx}
                  className="relative flex items-end justify-center h-full cursor-pointer group"
                  onClick={() => onBarClick(globalIdx)}
                  title={`Day ${globalIdx + 1}`}
                  aria-label={`Select day ${globalIdx + 1}`}
                >
                  <div
                    className="relative w-[80%] rounded-t-[6px] rounded-b-none"
                    onMouseEnter={(e) => onHoverMove(e, globalIdx)}
                    onMouseMove={(e) => onHoverMove(e, globalIdx)}
                    onMouseLeave={onHoverLeave}
                    style={{
                      height: h,
                      background: "linear-gradient(180deg, #3B82F6 0%, #3B82F6 65%, rgba(59,130,246,0.15) 100%)",
                      opacity: dimmed ? 0.35 : 1,
                      boxShadow: isStart
                        ? "0px 0px 0px 2px rgba(59,130,246,0.45) inset, 0px 3px 15px rgba(124, 141, 181, 0.12)"
                        : "0px 3px 15px rgba(124, 141, 181, 0.12)",
                    }}
                  >
                    {h > 0 && (
                      <>
                        <div
                          className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                          style={{
                            width: 12,
                            height: 12,
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            background: "#347AE2",
                            border: "1.5px solid #FFFFFF",
                            boxShadow: "0px 3px 15px rgba(124, 141, 181, 0.12)",
                            zIndex: 3,
                            pointerEvents: "none",
                          }}
                        />
                        <div className="hidden" />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {hover && typeof window !== "undefined" && createPortal(
        (() => {
          const vw = window.innerWidth;
          const left = Math.max(12, Math.min(vw - 12, hover.x));
          const tipDate = datesArray[hover.idx] ?? new Date(baseMonthDate.getFullYear(), baseMonthDate.getMonth(), hover.idx + 1);
          const tipDateStr = `${tipDate.getDate()} ${tipDate.toLocaleString("en-US", { month: "short" })} ${tipDate.getFullYear()}`;
          const tipVal = values[hover.idx];
          return (
            <div style={{ position: 'fixed', left, top: hover.y, transform: 'translate(-50%, calc(-100% - 8px))', zIndex: 1000 }} className="pointer-events-none">
              <div className="relative flex flex-col items-center rounded-xl bg-white border border-[#E6ECF1]" style={{ padding: 11.52, boxShadow: '0px 3px 15px rgba(124, 141, 181, 0.12)' }}>
                <div className="[font-family:'Inter',Helvetica] text-[11.52px] font-semibold leading-[1.5em] text-[#7C8DB5] whitespace-nowrap">{tipDateStr}</div>
                <div className="[font-family:'Inter',Helvetica] text-[15.36px] font-semibold leading-[1.5em] text-[#000000] whitespace-nowrap">{tipVal}</div>
                <div className="absolute left-1/2 top-full -translate-x-1/2">
                  <div style={{ position:'absolute', left:'50%', transform:'translateX(-50%)', width:0, height:0, borderLeft:'5.76px solid transparent', borderRight:'5.76px solid transparent', borderTop:'4.8px solid #E6ECF1' }} />
                  <div style={{ position:'absolute', left:'50%', transform:'translate(-50%, -1px)', width:0, height:0, borderLeft:'5.2px solid transparent', borderRight:'5.2px solid transparent', borderTop:'4px solid #FFFFFF' }} />
                </div>
              </div>
            </div>
          );
        })(),
        document.body
      )}

      {/* X axis labels (fixed to current data domain) */}
      <div
        className="grid text-[#84919a] [font-family:'Inter',Helvetica] text-xs font-medium mt-2"
        style={{ gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))`, columnGap: 8, paddingLeft: SIDE_PAD, paddingRight: SIDE_PAD }}
      >
        {labels.map((label, idx) => (
          <div key={idx} className="text-center whitespace-nowrap tracking-tight leading-none">
            {label}
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}

export const UsageChartSection = ({ from, to }: { from?: Date; to?: Date }): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 w-full px-8 py-6">
      <div className="flex flex-col items-start gap-6 w-full">
        <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[19.68px] tracking-[0] leading-[26.24px] ml-[1%]">
          Usage points history
        </h2>

        <div className="[box-sizing:border-box] flex flex-col items-start p-6 gap-6 w-full bg-[#FDFDFD] border border-[#E6ECF1] shadow-[8px_8px_20px_rgba(80,136,183,0.15)] rounded-2xl scale-[0.98] origin-top">
          <FixedChart from={from} to={to} />
        </div>

        <div className="flex items-center justify-between w-[98%] mx-auto">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[19.68px] tracking-[0] leading-[26.24px] ml-[1%]">
            Usage per agent
          </h2>

          <AgentsDropdown initialLabel="Kirichat Agent" items={["Kirichat Agent"]} />
        </div>

        <div className="[box-sizing:border-box] flex flex-col items-start p-6 gap-6 w-full bg-[#FDFDFD] border border-[#E6ECF1] shadow-[8px_8px_20px_rgba(80,136,183,0.15)] rounded-2xl scale-[0.98] origin-top">
          <FixedChart from={from} to={to} />
        </div>
      </div>
    </section>
  );
};