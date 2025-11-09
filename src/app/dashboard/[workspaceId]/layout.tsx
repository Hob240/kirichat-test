"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo, useRef, useState, useEffect } from "react";
import { Topbar } from "@/components/Topbar";
import { Sidebar } from "@/components/Sidebar";
import { SidebarSeparator } from "@/components/SidebarSeparator";

export default function DashboardLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isManualMode, setIsManualMode] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Figure out current active item based on pathname
  const activeItem = useMemo(() => {
    if (pathname?.includes("/agents")) return "Agents";
    if (pathname?.includes("/usage")) return "Usage";
    if (pathname?.includes("/chat-log")) return "Chat Log";
    if (pathname?.includes("/settings/general")) return "Settings";
    if (pathname?.includes("/settings/team")) return "Team";
    if (pathname?.includes("/settings/billings")) return "Billings";
    if (pathname?.includes("/settings/plan")) return "Plan";
    if (pathname?.includes("/settings/api-keys")) return "API Keys";
    return "Agents";
  }, [pathname]);

  const handleMouseEnter = () => {
    if (isManualMode) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsCollapsed(false);
  };

  const handleMouseLeave = () => {
    if (isManualMode) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsCollapsed(true);
  };

  const handleToggle = () => {
    if (isManualMode && !isCollapsed) {
      setIsManualMode(false);
      setIsCollapsed(true);
    } else {
      setIsManualMode(true);
      setIsCollapsed(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <Topbar />
      <div className="flex flex-1 min-h-0 relative overflow-x-hidden">
        <div className="fixed left-0 top-[64px] bottom-0 flex z-10">
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Sidebar isCollapsed={isCollapsed} />
          </div>
          <SidebarSeparator isCollapsed={isCollapsed} onToggle={handleToggle} />
        </div>

        <main className={`flex flex-col flex-1 transition-all duration-300 ${isManualMode && !isCollapsed ? 'pl-[230px]' : 'pl-[60px]'}`}>
          <div className="w-full max-w-screen-2xl mx-auto px-[clamp(24px,3.5vw,72px)] min-h-full flex flex-col">
            {children}
          </div>
        </main>
      </div>
      {modal}
    </div>
  );
}