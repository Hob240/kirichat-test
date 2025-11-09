"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface DateRangeDropdownProps {
  initialRange?: string;
  onChange?: (label: string, from?: Date, to?: Date) => void;
  className?: string;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function startOfDay(d: Date): Date {
  const nd = new Date(d);
  nd.setHours(0, 0, 0, 0);
  return nd;
}

function isSameDay(a?: Date, b?: Date): boolean {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function addMonths(d: Date, delta: number): Date {
  const nd = new Date(d);
  nd.setMonth(nd.getMonth() + delta);
  return nd;
}

// Monday-first month matrix (6 rows x 7 cols = 42 days)
function getMonthMatrix(view: Date): Date[] {
  const firstOfMonth = new Date(view.getFullYear(), view.getMonth(), 1);
  const firstDay = firstOfMonth.getDay(); // 0=Sun..6=Sat
  // Shift so Monday=0..Sunday=6
  const mondayIndex = (firstDay + 6) % 7;
  const start = new Date(firstOfMonth);
  start.setDate(firstOfMonth.getDate() - mondayIndex);

  const days: Date[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}

export const DateRangeDropdown = ({ initialRange, onChange, className }: DateRangeDropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // default label
  const defaultLabel = useMemo(() => {
    if (initialRange) return initialRange;
    const today = startOfDay(new Date());
    const from = new Date(today);
    from.setDate(from.getDate() - 30);
    return `${formatDate(from)} - ${formatDate(today)}`;
  }, [initialRange]);

  const [label, setLabel] = useState(defaultLabel);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  // range state
  const today = startOfDay(new Date());
  const initialTo = today;
  const initialFrom = (() => {
    const d = new Date(today);
    d.setDate(d.getDate() - 30);
    return startOfDay(d);
  })();

  const [start, setStart] = useState<Date | undefined>(initialFrom);
  const [end, setEnd] = useState<Date | undefined>(initialTo);

  // calendar view month
  const [viewDate, setViewDate] = useState<Date>(initialTo);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  type Preset = {
    key: string;
    title: string;
    compute: () => { from: Date; to: Date; label: string };
  };

  const presets: Preset[] = [
    {
      key: "today",
      title: "Today",
      compute: () => {
        const to = startOfDay(new Date());
        const from = startOfDay(new Date());
        return { from, to, label: `${formatDate(from)} - ${formatDate(to)}` };
      },
    },
    {
      key: "yesterday",
      title: "Yesterday",
      compute: () => {
        const to = startOfDay(new Date());
        to.setDate(to.getDate() - 1);
        const from = new Date(to);
        return { from, to, label: `${formatDate(from)} - ${formatDate(to)}` };
      },
    },
    {
      key: "lastWeek",
      title: "Last week",
      compute: () => {
        const to = startOfDay(new Date());
        const from = startOfDay(new Date());
        from.setDate(from.getDate() - 6);
        return { from, to, label: `${formatDate(from)} - ${formatDate(to)}` };
      },
    },
    {
      key: "lastMonth",
      title: "Last month",
      compute: () => {
        const now = new Date();
        const from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const to = new Date(now.getFullYear(), now.getMonth(), 0);
        return { from: startOfDay(from), to: startOfDay(to), label: `${formatDate(from)} - ${formatDate(to)}` };
      },
    },
  ];

  const monthMatrix = useMemo(() => getMonthMatrix(viewDate), [viewDate]);

  // determine initial selected preset based on initial label
  useEffect(() => {
    try {
      const match = presets.find((p) => p.compute().label === defaultLabel);
      setSelectedPreset(match ? match.key : null);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPickDay = (d: Date) => {
    const dd = startOfDay(d);
    if (!start || (start && end)) {
      setStart(dd);
      setEnd(undefined);
      return;
    }
    // have start only
    if (dd < start) {
      setEnd(start);
      setStart(dd);
      const lbl = `${formatDate(dd)} - ${formatDate(start)}`;
      setLabel(lbl);
      setSelectedPreset(null);
      onChange?.(lbl, dd, start);
      setOpen(false);
    } else {
      setEnd(dd);
      const lbl = `${formatDate(start)} - ${formatDate(dd)}`;
      setLabel(lbl);
      setSelectedPreset(null);
      onChange?.(lbl, start, dd);
      setOpen(false);
    }
  };

  const isInRange = (d: Date) => {
    if (!start || !end) return false;
    const t = startOfDay(d).getTime();
    return t >= start.getTime() && t <= end.getTime();
  };

  const isOtherMonth = (d: Date) => d.getMonth() !== viewDate.getMonth();

  const monthLabel = useMemo(
    () =>
      viewDate.toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      }),
    [viewDate]
  );

  const weekdayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  // palette from Figma data
  const blue20 = "#D9ECFF";
  const blueSolid = "#3B82F6";
  const textPrimary = "#3D4350"; // match Topbar text
  const textSecondary = "#5A5D6C"; // match Topbar secondary
  const textAccent = "#316AFE"; // match Topbar accent/check

  return (
    <div className={"relative " + (className ?? "")} ref={containerRef}>
      <Button
        type="button"
        variant="outline"
        className="h-10 px-4 py-2 bg-[#FFFFFF] rounded-[8px] border border-[#E0E2E7] gap-2 hover:bg-[#FFFFFF] shadow-[0_2px_4px_0_rgba(0,0,0,0.08)] [box-shadow:inset_0_-8px_2px_0_rgba(0,0,0,0.04)]"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.33333 15C8.49815 15 8.65927 14.9511 8.79631 14.8596C8.93335 14.768 9.04016 14.6378 9.10323 14.4856C9.16631 14.3333 9.18281 14.1657 9.15065 14.0041C9.1185 13.8424 9.03913 13.694 8.92259 13.5774C8.80604 13.4609 8.65756 13.3815 8.49591 13.3493C8.33426 13.3172 8.1667 13.3337 8.01443 13.3968C7.86216 13.4598 7.73201 13.5666 7.64044 13.7037C7.54887 13.8407 7.5 14.0018 7.5 14.1667C7.5 14.3877 7.5878 14.5996 7.74408 14.7559C7.90036 14.9122 8.11232 15 8.33333 15ZM12.5 15C12.6648 15 12.8259 14.9511 12.963 14.8596C13.1 14.768 13.2068 14.6378 13.2699 14.4856C13.333 14.3333 13.3495 14.1657 13.3173 14.0041C13.2852 13.8424 13.2058 13.694 13.0893 13.5774C12.9727 13.4609 12.8242 13.3815 12.6626 13.3493C12.5009 13.3172 12.3334 13.3337 12.1811 13.3968C12.0288 13.4598 11.8987 13.5666 11.8071 13.7037C11.7155 13.8407 11.6667 14.0018 11.6667 14.1667C11.6667 14.3877 11.7545 14.5996 11.9107 14.7559C12.067 14.9122 12.279 15 12.5 15ZM12.5 11.6667C12.6648 11.6667 12.8259 11.6178 12.963 11.5262C13.1 11.4347 13.2068 11.3045 13.2699 11.1522C13.333 11 13.3495 10.8324 13.3173 10.6708C13.2852 10.5091 13.2058 10.3606 13.0893 10.2441C12.9727 10.1275 12.8242 10.0482 12.6626 10.016C12.5009 9.98386 12.3334 10.0004 12.1811 10.0634C12.0288 10.1265 11.8987 10.2333 11.8071 10.3704C11.7155 10.5074 11.6667 10.6685 11.6667 10.8333C11.6667 11.0543 11.7545 11.2663 11.9107 11.4226C12.067 11.5789 12.279 11.6667 12.5 11.6667ZM8.33333 11.6667C8.49815 11.6667 8.65927 11.6178 8.79631 11.5262C8.93335 11.4347 9.04016 11.3045 9.10323 11.1522C9.16631 11 9.18281 10.8324 9.15065 10.6708C9.1185 10.5091 9.03913 10.3606 8.92259 10.2441C8.80604 10.1275 8.65756 10.0482 8.49591 10.016C8.33426 9.98386 8.1667 10.0004 8.01443 10.0634C7.86216 10.1265 7.73201 10.2333 7.64044 10.3704C7.54887 10.5074 7.5 10.6685 7.5 10.8333C7.5 11.0543 7.5878 11.2663 7.74408 11.4226C7.90036 11.5789 8.11232 11.6667 8.33333 11.6667ZM14.1667 1.66667H13.3333V0.833333C13.3333 0.61232 13.2455 0.400358 13.0893 0.244078C12.933 0.0877973 12.721 0 12.5 0C12.279 0 12.067 0.0877973 11.9107 0.244078C11.7545 0.400358 11.6667 0.61232 11.6667 0.833333V1.66667H5V0.833333C5 0.61232 4.9122 0.400358 4.75592 0.244078C4.59964 0.0877973 4.38768 0 4.16667 0C3.94565 0 3.73369 0.0877973 3.57741 0.244078C3.42113 0.400358 3.33333 0.61232 3.33333 0.833333V1.66667H2.5C1.83696 1.66667 1.20107 1.93006 0.732233 2.3989C0.263392 2.86774 0 3.50363 0 4.16667V15.8333C0 16.4964 0.263392 17.1323 0.732233 17.6011C1.20107 18.0699 1.83696 18.3333 2.5 18.3333H14.1667C14.8297 18.3333 15.4656 18.0699 15.9344 17.6011C16.4033 17.1323 16.6667 16.4964 16.6667 15.8333V4.16667C16.6667 3.50363 16.4033 2.86774 15.9344 2.3989C15.4656 1.93006 14.8297 1.66667 14.1667 1.66667ZM15 15.8333C15 16.0543 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1667 16.6667H2.5C2.27899 16.6667 2.06702 16.5789 1.91074 16.4226C1.75446 16.2663 1.66667 16.0543 1.66667 15.8333V8.33333H15V15.8333ZM15 6.66667H1.66667V4.16667C1.66667 3.94565 1.75446 3.73369 1.91074 3.57741C2.06702 3.42113 2.27899 3.33333 2.5 3.33333H3.33333V4.16667C3.33333 4.38768 3.42113 4.59964 3.57741 4.75592C3.73369 4.9122 3.94565 5 4.16667 5C4.38768 5 4.59964 4.9122 4.75592 4.75592C4.9122 4.59964 5 4.38768 5 4.16667V3.33333H11.6667V4.16667C11.6667 4.38768 11.7545 4.59964 11.9107 4.75592C12.067 4.9122 12.279 5 12.5 5C12.721 5 12.933 4.9122 13.0893 4.75592C13.2455 4.59964 13.3333 4.38768 13.3333 4.16667V3.33333H14.1667C14.3877 3.33333 14.5996 3.42113 14.7559 3.57741C14.9122 3.73369 15 3.94565 15 4.16667V6.66667Z" fill="#1B1D23"/>
        </svg>
        <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#1B1D23] text-[14px] leading-[20px] tracking-[0.3px] whitespace-nowrap">
          {label}
        </span>
        <ChevronDown className="w-4 h-4 opacity-70" />
      </Button>

      <div
        role="dialog"
        className={`absolute right-0 top-[44px] z-50 bg-white rounded-[8px] border border-[#E4E4E4] border-[1.5px] shadow-[0_3.38px_5.06px_-0.84px_rgba(0,0,0,0.2)] p-0 transform-gpu origin-top-right transition-all ${open ? 'opacity-100 ease-out duration-300' : 'opacity-0 ease-in duration-200 pointer-events-none invisible'}`}
        style={{ transform: `scale(${open ? 0.84 : 0.798})` }}
        aria-hidden={!open}
      >
        <div className="flex">
            {/* Left presets column (width ~115px) */}
            <div className="flex flex-col gap-[2px] p-4 pr-6 w-[150px]">
              {presets.map((p) => {
                const { label: computedLabel } = p.compute();
                const isActive = selectedPreset ? selectedPreset === p.key : (computedLabel === label);
                return (
                  <button
                    key={p.key}
                    className={`group flex items-center justify-start gap-3 h-10 w-full px-3 rounded-[8px] transition-colors ${isActive ? "bg-[#F7F8F9]" : "hover:bg-[#F7F8F9]"}`}
                    onClick={() => {
                      const { from, to, label: lbl } = p.compute();
                      setLabel(lbl);
                      setStart(from);
                      setEnd(to);
                      setViewDate(to);
                      setSelectedPreset(p.key);
                      onChange?.(lbl, from, to);
                      setOpen(false);
                    }}
                  >
                    <span className="[font-family:'Inter',Helvetica] text-[16px] font-medium leading-5 whitespace-nowrap" style={{ color: textPrimary }}>
                      {p.title}
                    </span>
                    <span className={`ml-auto w-4 h-4 flex items-center justify-center flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      <Check className="w-4 h-4" style={{ color: '#316AFE' }} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right calendar (width 284px) */}
            <div className="w-[260px] p-4 pt-4">
              {/* Header */}
              <div className="flex items-center gap-4 pl-2 pr-2 mb-3">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[16px] leading-5" style={{ color: textPrimary }}>
                  {monthLabel}
                </span>
                <div className="ml-auto flex items-center gap-1">
                  <button
                    className="w-8 h-8 rounded-full hover:bg-[#F7F8F9] flex items-center justify-center"
                    onClick={() => setViewDate((d) => addMonths(d, -1))}
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-4 h-4" style={{ color: textPrimary }} />
                  </button>
                  <button
                    className="w-8 h-8 rounded-full hover:bg-[#F7F8F9] flex items-center justify-center"
                    onClick={() => setViewDate((d) => addMonths(d, 1))}
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-4 h-4" style={{ color: textPrimary }} />
                  </button>
                </div>
              </div>

              {/* Weekday labels */}
              <div className="grid grid-cols-7 mb-1">
                {weekdayLabels.map((w) => (
                  <div key={w} className="flex items-center justify-center py-2">
                    <span className="[font-family:'Inter',Helvetica] text-[16px] leading-5 font-normal" style={{ color: textSecondary }}>
                      {w}
                    </span>
                  </div>
                ))}
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7 gap-y-1">
                {monthMatrix.map((d, idx) => {
                  const other = isOtherMonth(d);
                  const startDay = isSameDay(d, start);
                  const endDay = isSameDay(d, end);
                  const inRange = isInRange(d);
                  const isWeekend = d.getDay() === 0 || d.getDay() === 6; // Sun or Sat
                  const isToday = isSameDay(d, today);

                  let textColor = textPrimary;
                  if (other) textColor = "rgba(24,30,48,0.32)"; // disabled
                  else if (isWeekend && !inRange && !startDay && !endDay) textColor = textSecondary;
                  else if (isToday && !inRange && !startDay && !endDay) textColor = textAccent;

                  const rangeBg = inRange ? blue20 : "transparent";
                  const outerRadiusClass = startDay && endDay
                    ? "rounded-[18px]"
                    : startDay
                    ? "rounded-l-[18px]"
                    : endDay
                    ? "rounded-r-[18px]"
                    : inRange
                    ? ""
                    : "rounded-[18px]";

                  const innerBg = startDay || endDay ? blueSolid : "transparent";
                  const innerTextColor = startDay || endDay ? "#FFFFFF" : textColor;

                  return (
                    <div key={idx} className={`p-1 flex items-center justify-center ${outerRadiusClass}`} style={{ backgroundColor: rangeBg }}>
                      <button
                        className="w-[28px] h-[28px] rounded-[14px] flex items-center justify-center hover:bg-[#F7F8F9]"
                        style={{ backgroundColor: innerBg }}
                        onClick={() => onPickDay(d)}
                      >
                        <span className="[font-family:'Inter',Helvetica] text-[16px] leading-5" style={{ color: innerTextColor }}>
                          {d.getDate()}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
