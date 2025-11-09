"use client";

import { ChevronDownIcon, SettingsIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const navigationItems = [
  { icon: "/icons/sidebar/agents-icon.svg", label: "Agents", isCustomIcon: true },
  { icon: "/icons/sidebar/usage-icon.svg", label: "Usage", isCustomIcon: true },
  { icon: "/icons/sidebar/chat-log-icon.svg", label: "Chat Log", isCustomIcon: true },
  {
    icon: SettingsIcon,
    label: "Framework Settings",
    hasSubmenu: true,
  },
];

const submenuItems = [
  { label: "Settings", active: false },
  { label: "Team", active: false },
  { label: "Billings", active: false },
  { label: "Plan", active: false },
  { label: "API Keys", active: false },
];

interface SidebarProps {
  isCollapsed: boolean;
  // Optional legacy props for backward compatibility during migration
  activeItem?: string;
  onNavigate?: (label: string) => void;
}

export const Sidebar = ({ isCollapsed, activeItem, onNavigate }: SidebarProps): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSubIndex, setActiveSubIndex] = useState(-1);
  const [isSubmenuAnimating, setIsSubmenuAnimating] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const [submenuHeight, setSubmenuHeight] = useState(0);

  // Extract workspaceId from current pathname: /dashboard/[id]/...
  const workspaceId = useMemo(() => {
    const seg = (pathname || "").split("/");
    // ["", "dashboard", "[workspaceId]", ...]
    return seg[2] || "framework";
  }, [pathname]);

  const pathFor = (label: string): string | null => {
    switch (label) {
      case "Agents":
        return `/dashboard/${workspaceId}/agents`;
      case "Usage":
        return `/dashboard/${workspaceId}/usage`;
      case "Chat Log":
        return `/dashboard/${workspaceId}/chat-log`;
      case "Settings":
        return `/dashboard/${workspaceId}/settings/general`;
      case "Team":
        return `/dashboard/${workspaceId}/settings/team`;
      case "Billings":
        return `/dashboard/${workspaceId}/settings/billings`;
      case "Plan":
        return `/dashboard/${workspaceId}/settings/plan`;
      case "API Keys":
        return `/dashboard/${workspaceId}/settings/api-keys`;
      default:
        return null;
    }
  };

  const computedActiveItem = useMemo(() => {
    if (!pathname) return "Agents";
    if (pathname.includes("/agents")) return "Agents";
    if (pathname.includes("/usage")) return "Usage";
    if (pathname.includes("/chat-log")) return "Chat Log";
    if (pathname.includes("/settings/")) return "Framework Settings";
    return "Agents";
  }, [pathname]);

  const computedActiveSubIndex = useMemo(() => {
    if (!pathname) return -1;
    if (pathname.includes("/settings/general")) return 0;
    if (pathname.includes("/settings/team")) return 1;
    if (pathname.includes("/settings/billings")) return 2;
    if (pathname.includes("/settings/plan")) return 3;
    if (pathname.includes("/settings/api-keys")) return 4;
    return -1;
  }, [pathname]);

  const effectiveActiveItem = activeItem ?? computedActiveItem;

  // Smooth open/close submenu
  const toggleSettings = () => {
    if (isSettingsOpen) {
      const el = submenuRef.current;
      if (el) setSubmenuHeight(el.scrollHeight);
      setIsSubmenuAnimating(true);
      requestAnimationFrame(() => setIsSettingsOpen(false));
    } else {
      setIsSettingsOpen(true);
    }
  };

  useEffect(() => {
    const el = submenuRef.current;
    if (isSettingsOpen) {
      if (el) requestAnimationFrame(() => setSubmenuHeight(el.scrollHeight));
      setIsSubmenuAnimating(false);
    } else {
      setIsSubmenuAnimating(true);
      setSubmenuHeight(0);
      const t = setTimeout(() => setIsSubmenuAnimating(false), 500);
      return () => clearTimeout(t);
    }
  }, [isSettingsOpen]);

  // Keep submenu open and selection in sync with URL when not controlled by props
  useEffect(() => {
    if (typeof activeItem === "undefined" && typeof onNavigate === "undefined") {
      const isSettings = computedActiveItem === "Framework Settings";
      setIsSettingsOpen(isSettings);
      setActiveSubIndex(computedActiveSubIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, computedActiveItem, computedActiveSubIndex]);

  const go = (label: string) => {
    if (onNavigate) {
      setActiveSubIndex(-1);
      onNavigate(label);
      return;
    }
    const href = pathFor(label);
    if (href) router.push(href);
  };

  const navigationItemsWithActiveIndex = useMemo(() => navigationItems, []);
  const activeIndex = navigationItemsWithActiveIndex.findIndex((i) => i.label === effectiveActiveItem || (i.hasSubmenu && computedActiveItem === "Framework Settings"));

  return (
    <aside
      className={`flex flex-col h-full bg-white border-r border-[#e0e2e7] transition-[width] duration-300 ease-in-out overflow-hidden relative ${
        isCollapsed ? "w-[60px]" : "w-[230px]"
      }`}
    >
      <div className="py-4">
        <nav className="flex flex-col gap-2">
          <div className="relative flex flex-col gap-1 mx-3">
            {activeIndex >= 0 && activeSubIndex < 0 && (
              <div
                className="absolute left-0 right-0 h-[36px] rounded-[8px] bg-white border border-[#E0E2E7] shadow-[0_2px_4px_0_rgba(0,0,0,0.08)] [box-shadow:inset_0_-8px_2px_0_rgba(0,0,0,0.04)] z-0 pointer-events-none"
                style={{
                  transform: `translateY(${activeIndex * 40}px)`,
                  transition: 'transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                  left: isCollapsed ? '0px' : 0,
                  right: isCollapsed ? 'auto' : 0,
                  width: isCollapsed ? '41px' : undefined
                }}
              />
            )}
            {navigationItems.map((item, index) => (
              <div key={index}>
                <div className="relative h-[36px] group" style={{ zIndex: 3 }}>
                  <div
                    className="absolute left-3 top-0 h-[36px] flex items-center z-10"
                    onClick={() => {
                      if (isCollapsed) {
                        if ((navigationItems[index] as any).hasSubmenu) {
                          toggleSettings();
                        } else {
                          setActiveSubIndex(-1);
                          go(navigationItems[index].label);
                        }
                      }
                    }}
                  >
                    {item.isCustomIcon ? (
                      <img
                        src={item.icon as string}
                        alt=""
                        className={`w-[17px] h-[17px] transition ${
                          (item.label === effectiveActiveItem || (item.hasSubmenu && computedActiveItem === "Framework Settings"))
                            ? 'brightness-0 saturate-100'
                            : 'opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-0'
                        }`}
                      />
                    ) : (
                      (() => {
                        const IconComponent = item.icon as any;
                        return (
                          <IconComponent
                            className={`w-[17px] h-[17px] ${
                              (item.label === effectiveActiveItem || (item.hasSubmenu && computedActiveItem === "Framework Settings"))
                                ? 'text-[#1b1d23]'
                                : 'text-[#3d4350] group-hover:text-[#1b1d23]'
                            }`}
                          />
                        );
                      })()
                    )}
                  </div>

                  {!isCollapsed && (
                    <Button
                      variant="ghost"
                      className={`group absolute left-0 top-0 w-full h-[36px] rounded-[10px] justify-start pl-[38px] pr-3 py-1 ${(item.label === effectiveActiveItem || (item.hasSubmenu && computedActiveItem === "Framework Settings")) ? 'hover:bg-transparent' : 'hover:bg-[#F7F8F9]'} focus-visible:ring-0 focus:outline-none bg-transparent border-none shadow-none transition-colors`}
                      style={{ zIndex: 2 }}
                      onClick={() => {
                        if (item.hasSubmenu) {
                          toggleSettings();
                        } else {
                          setActiveSubIndex(-1);
                          go(item.label);
                        }
                      }}
                    >
                      <span
                        className={`flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-[14px] tracking-[0] leading-5 whitespace-nowrap transition-colors duration-200 ${
                          (item.label === effectiveActiveItem || (item.hasSubmenu && computedActiveItem === "Framework Settings")) ? "text-[#1b1d23]" : "text-[#3d4350] group-hover:text-[#1b1d23]"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.hasSubmenu && (
                        <ChevronDownIcon
                          className={`w-[16px] h-[16px] transition-transform duration-200 ${
                            isSettingsOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Button>
                  )}
                </div>

                {item.hasSubmenu && !isCollapsed && (isSettingsOpen || isSubmenuAnimating) && (
                  <div
                    className="overflow-hidden duration-500 ease-in-out"
                    style={{
                      height: isSettingsOpen ? submenuHeight : 0,
                      opacity: isSettingsOpen ? 1 : 0,
                      transform: isSettingsOpen ? 'translateY(0)' : 'translateY(-4px)',
                      transition: 'height 500ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 500ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                  >
                    <div ref={submenuRef} className="relative pt-1 pl-[37px] pr-2">
                      {/* Gray vertical track */}
                      <div className="absolute left-[18px] top-1 bottom-1 w-[2px] bg-[#d9d9d9] rounded-full pointer-events-none" />

                      {/* Black active indicator aligned to items */}
                      {(activeSubIndex >= 0 || computedActiveSubIndex >= 0) && (
                        <div
                          className="absolute left-[18px] rounded-full pointer-events-none"
                          aria-hidden
                          style={{
                            width: '2px',
                            height: '30px',
                            backgroundColor: '#1b1d23',
                            top: '4px',
                            transform: `translateY(${(activeSubIndex >= 0 ? activeSubIndex : computedActiveSubIndex) * 32}px)`,
                            transition: 'transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                            willChange: 'transform',
                            zIndex: 3,
                          }}
                        />
                      )}

                      <div className="relative flex flex-col gap-[2px]">
                        {(activeSubIndex >= 0 || computedActiveSubIndex >= 0) && (
                          <div
                            className="absolute left-0 right-0 h-[30px] rounded-[8px] bg-white border border-[#E0E2E7] shadow-[0_2px_4px_0_rgba(0,0,0,0.08)] [box-shadow:inset_0_-8px_2px_0_rgba(0,0,0,0.04)] z-[1] pointer-events-none"
                            style={{
                              transform: `translateY(${(activeSubIndex >= 0 ? activeSubIndex : computedActiveSubIndex) * 32}px)`,
                              transition: 'transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                            }}
                          />
                        )}

                        {submenuItems.map((subitem, subindex) => (
                          <Button
                            key={subindex}
                            variant="ghost"
                            className={`group w-full h-[30px] justify-start px-2.5 rounded-lg ${activeSubIndex === subindex ? 'hover:bg-transparent' : 'hover:bg-[#F7F8F9]'} focus-visible:ring-0 focus:outline-none bg-transparent border-none shadow-none transition-colors`}
                            style={{ zIndex: 2 }}
                            onClick={() => {
                              if (activeSubIndex === -1) {
                                setActiveSubIndex(0);
                                setTimeout(() => {
                                  setActiveSubIndex(subindex);
                                  go(subitem.label);
                                }, 20);
                              } else {
                                setActiveSubIndex(subindex);
                                go(subitem.label);
                              }
                            }}
                          >
                            <span className={`[font-family:'Inter',Helvetica] font-medium text-[14px] tracking-[0.17px] leading-5 transition-colors duration-200 ${activeSubIndex === subindex ? 'text-[#1b1d23]' : 'text-[#3d4350] group-hover:text-[#1b1d23]'}`}>
                              {subitem.label}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};
