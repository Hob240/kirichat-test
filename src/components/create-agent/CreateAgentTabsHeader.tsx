"use client";

import React, { useEffect, useRef, useState } from "react";
import { X as XIcon, Globe as GlobeIcon } from "lucide-react";

const NavItem = ({
  active,
  iconSrc,
  iconNode,
  label,
  onClick,
  btnRef,
}: {
  active?: boolean;
  iconSrc?: string;
  iconNode?: React.ReactNode;
  label: string;
  onClick?: () => void;
  btnRef?: (el: HTMLButtonElement | null) => void;
}) => {
  return (
    <button
      type="button"
      ref={btnRef}
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md select-none relative ${
        active ? "text-black" : "text-[#171717]"
      } hover:bg-neutral-100/60`}
    >
      <span className="nav-item-content inline-flex items-center gap-2">
        {iconSrc ? (
          <img src={iconSrc} alt={label} className="w-[19px] h-[19px]" />
        ) : (
          iconNode || null
        )}
        <span className="text-[13.6px] font-medium leading-[20px]">{label}</span>
      </span>
    </button>
  );
};

export const CreateAgentTabsHeader: React.FC<{
  tab: "documents" | "text" | "qa" | "websites";
  setTab: (t: "documents" | "text" | "qa" | "websites") => void;
  onClose: () => void;
}> = ({ tab, setTab, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<
    Record<"documents" | "text" | "qa" | "websites", HTMLButtonElement | null>
  >({
    documents: null,
    text: null,
    qa: null,
    websites: null,
  });
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const updateIndicator = () => {
    const c = wrapperRef.current;
    const b = btnRefs.current[tab];
    if (c && b) {
      const wrapper = b.querySelector('.nav-item-content') as HTMLElement | null;
      const left = b.offsetLeft + (wrapper?.offsetLeft ?? 0);
      const width = wrapper?.offsetWidth ?? b.offsetWidth;
      const biasLeft = 4; // shift slightly right to align with icon visual bounds
      const biasRight = 0;
      setIndicatorLeft(left + biasLeft);
      setIndicatorWidth(Math.max(0, width - biasLeft - biasRight));
    }
  };

  useEffect(() => {
    updateIndicator();
  }, []);

  useEffect(() => {
    updateIndicator();
    setYOffset(-6);
    const raf = requestAnimationFrame(() => setYOffset(0));
    return () => cancelAnimationFrame(raf);
  }, [tab]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="h-[61px] grid grid-cols-[1fr_auto_1fr] items-center border-b border-[#E0E2E7] px-4">
      <div />
      <div ref={wrapperRef} className="relative flex items-center justify-center">
        <div ref={containerRef} className="flex items-center gap-6 justify-center pb-3">
          <NavItem
            active={tab === "documents"}
            iconSrc="/icons/figma/icon-documents.svg"
            label="Documents"
            onClick={() => setTab("documents")}
            btnRef={(el) => (btnRefs.current.documents = el)}
          />
          <NavItem
            active={tab === "text"}
            iconSrc="/icons/figma/icon-text.svg"
            label="Text"
            onClick={() => setTab("text")}
            btnRef={(el) => (btnRefs.current.text = el)}
          />
          <NavItem
            active={tab === "qa"}
            iconSrc="/icons/figma/icon-qa.svg"
            label="Q&A"
            onClick={() => setTab("qa")}
            btnRef={(el) => (btnRefs.current.qa = el)}
          />
          <NavItem
            active={tab === "websites"}
            iconNode={
              <div className="w-[20px] h-[20px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                <GlobeIcon className="w-[14px] h-[14px] text-[#525252]" />
              </div>
            }
            label="Websites"
            onClick={() => setTab("websites")}
            btnRef={(el) => (btnRefs.current.websites = el)}
          />
        </div>
        <span
          className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-[#171717]"
          style={{
            left: indicatorLeft,
            width: indicatorWidth,
            transform: `translateY(${yOffset}px)`,
            transition:
              "left 400ms cubic-bezier(0.2, 0.8, 0.2, 1), width 400ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="p-2 rounded-md hover:bg-neutral-100 text-neutral-600"
          onClick={onClose}
          aria-label="Close"
        >
          <XIcon className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default CreateAgentTabsHeader;
