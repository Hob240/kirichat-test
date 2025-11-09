"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Tooltip } from "./ui/tooltip";

interface SidebarSeparatorProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const SidebarSeparator = ({ isCollapsed, onToggle }: SidebarSeparatorProps): JSX.Element => {
  // Hover is handled purely with CSS group-hover to avoid sticky states

  const handleClick = () => {
    onToggle();
  };

  return (
    <div
      className="flex w-5 h-full items-center justify-center relative group cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-[3px] h-[25px] bg-[#d9d9d9] rounded-[33554400px] transition-opacity duration-200 opacity-100 group-hover:opacity-0" />

      <Tooltip content={isCollapsed ? "Expand" : "Collapse"}>
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 scale-75 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">

          {isCollapsed ? (
            <ChevronRightIcon className="w-[22px] h-[22px] text-[#d9d9d9]" strokeWidth={3} />
          ) : (
            <ChevronLeftIcon className="w-[22px] h-[22px] text-[#d9d9d9]" strokeWidth={3} />
          )}
        </div>
      </Tooltip>
    </div>
  );
};
