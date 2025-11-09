"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Check, ChevronDown, Search } from "lucide-react";

interface AgentsDropdownProps {
  initialLabel?: string;
  className?: string;
  onChange?: (value: string) => void;
  items?: string[];
}

// Data diambil dari Figma node: "Dropdown Topbar Kirichat Framework Menu"
// Items: All agents, Deleted agents, Aldi framework
const FIGMA_MENU_ITEMS = [
  "All agents",
  "Deleted agents",
  "Aldi framework",
] as const;

export const AgentsDropdown = ({ initialLabel = "All agents", className, onChange, items: itemsProp }: AgentsDropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string>(initialLabel);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [panelWidth, setPanelWidth] = useState<number | undefined>(undefined);
  const items = useMemo(() => (itemsProp && itemsProp.length ? itemsProp : FIGMA_MENU_ITEMS), [itemsProp]);
  const dropdownWidth = useMemo(() => (panelWidth ? Math.round(panelWidth * 2) : undefined), [panelWidth]);

  // close on outside click / ESC
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
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
  useEffect(() => {
    const update = () => {
      setPanelWidth(triggerRef.current ? triggerRef.current.offsetWidth : undefined);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => i.toLowerCase().includes(q));
  }, [search, items]);

  const textPrimary = "#1B1D23"; // from Figma fills for text

  return (
    <div className={("relative " + (className ?? ""))} ref={containerRef}>
      <Button
        ref={triggerRef}
        type="button"
        variant="outline"
        className="h-10 px-4 py-2 bg-[#FFFFFF] rounded-[8px] border border-[#E0E2E7] gap-2 hover:bg-[#FFFFFF] shadow-[0_2px_4px_0_rgba(0,0,0,0.08)] [box-shadow:inset_0_-8px_2px_0_rgba(0,0,0,0.04)]"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#1B1D23] text-[14px] leading-[20px] tracking-[0.3px] whitespace-nowrap">
          {selected}
        </span>
        <ChevronDown className="w-4 h-4 opacity-70" />
      </Button>

      {/* Popover dropdown */}
      <div
        role="listbox"
        className={`absolute right-0 top-[44px] z-50 bg-white rounded-[8px] border-[#E4E4E4] border-[1.5px] shadow-[0_3.38px_5.06px_-0.84px_rgba(0,0,0,0.2)] p-0 transform-gpu origin-top-right transition-all ${open ? 'opacity-100 ease-out duration-300' : 'opacity-0 ease-in duration-200 pointer-events-none invisible'}`}
        style={{ transform: `scale(${open ? 1 : 0.95})`, width: dropdownWidth }}
        aria-hidden={!open}
      >
        
        {/* Items */}
        <div className="flex flex-col items-stretch py-[6px]">
          {(() => {
            const systemKeys = new Set(["All agents", "Deleted agents"]);
            const systemItems = filtered.filter((i) => systemKeys.has(i));
            const userItems = filtered.filter((i) => !systemKeys.has(i));
            return (
              <>
                {systemItems.map((item) => {
                  const isActive = selected === item;
                  return (
                    <button
                      key={item}
                      className={`flex items-center justify-between w-full px-[16px] py-[8px] text-left hover:bg-[#F7F8F9] ${isActive ? 'bg-[#F7F8F9]' : ''}`}
                      onClick={() => {
                        setSelected(item);
                        onChange?.(item);
                        setOpen(false);
                      }}
                    >
                      <span
                        className="[font-family:'Urbanist',Helvetica] font-semibold text-[14px] leading-[20px] tracking-[0.3px] text-[#1B1D23] whitespace-nowrap"
                        style={{ color: textPrimary }}
                      >
                        {item}
                      </span>
                      <span className={`ml-auto w-[16px] h-[16px] flex items-center justify-center flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <Check className="w-[16px] h-[16px]" style={{ color: '#316AFE' }} />
                      </span>
                    </button>
                  );
                })}

                {userItems.length > 0 && (
                  <div className="my-1 mx-[8px] border-t border-[#E4E4E4]" />
                )}

                {userItems.map((item) => {
                  const isActive = selected === item;
                  return (
                    <button
                      key={item}
                      className={`flex items-center justify-between w-full px-[16px] py-[8px] text-left hover:bg-[#F7F8F9] ${isActive ? 'bg-[#F7F8F9]' : ''}`}
                      onClick={() => {
                        setSelected(item);
                        onChange?.(item);
                        setOpen(false);
                      }}
                    >
                      <span
                        className="[font-family:'Urbanist',Helvetica] font-semibold text-[14px] leading-[20px] tracking-[0.3px] text-[#1B1D23] whitespace-nowrap"
                        style={{ color: textPrimary }}
                      >
                        {item}
                      </span>
                      <span className={`ml-auto w-[16px] h-[16px] flex items-center justify-center flex-shrink-0 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <Check className="w-[16px] h-[16px]" style={{ color: '#316AFE' }} />
                      </span>
                    </button>
                  );
                })}
              </>
            );
          })()}

          {filtered.length === 0 && (
            <div className="px-3 py-2 text-xs text-[#8891A5]">No results</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentsDropdown;
