"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useState, useRef, useEffect } from "react";
import { Search, Check } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function useClickOutside<T extends HTMLElement>(onOutside: () => void) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) onOutside();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onOutside]);
  return ref;
}

function FrameworkMenu({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div ref={ref} className="relative z-50 flex items-center gap-2">
      <div className="flex items-center w-auto max-w-[196px] h-[31.05px] px-3 bg-white rounded-[10px] border border-[#e0e2e7] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <span className="[font-family:'Inter',Helvetica] font-semibold text-[#3D4350] text-[12.8px] leading-[19.2px] tracking-[0.16px] block max-w-full truncate">
          {label}
        </span>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-[17px] w-[17px] p-0.5 rounded-lg hover:bg-[#F7F8F9] focus:outline-none"
        aria-label="Open framework menu"
      >
        <img className="w-[14px] h-[14px]" alt="Component" src="/icons/topbar/component-1.svg" />
      </button>
      <div
        className={`absolute right-0 top-full mt-2 w-[218px] overflow-hidden bg-white rounded-[8px] border-[#E4E4E4] border-[1.5px] shadow-[0_3.38px_5.06px_-0.84px_rgba(0,0,0,0.2)] p-[10px] z-50 transform-gpu origin-top-right transition-all ${open ? 'opacity-100 scale-100 ease-out duration-300' : 'opacity-0 scale-95 ease-in duration-300 pointer-events-none invisible'}`}
        aria-hidden={!open}
      >
        {/* Search bar */}
        <div className="w-full">
          <div className="flex items-center gap-[6.1875px] px-[12.375px] py-[6.1875px] rounded-[8px] bg-white">
            <Search className="w-[15.47px] h-[15.47px] text-[#5A5D6C]" strokeWidth={1.75} />
            <input
              type="text"
              placeholder="Search Framework..."
              className="flex-1 bg-transparent outline-none [font-family:'Inter',Helvetica] text-[10.83px] leading-[1.43em] text-[#5A5D6C] placeholder-[#5A5D6C]"
            />
          </div>
          <div className="mt-[6.1875px] border-b border-[#E4E2E4]" />
        </div>

        {/* Framework list */}
        <div className="flex flex-col w-full mt-2">
          <button className="group flex items-center justify-between w-full px-[9px] py-[7px] rounded-[6px] hover:bg-[#F7F8F9]">
            <span className="[font-family:'Inter',Helvetica] font-medium text-[12.8px] text-[#3D4350] group-hover:text-[#1b1d23]">Kirichat</span>
            <Check className="w-[16px] h-[16px] text-[#316AFE]" strokeWidth={2} />
          </button>
          <button className="group flex items-center justify-between w-full px-[9px] py-[7px] rounded-[6px] hover:bg-[#F7F8F9]">
            <span className="[font-family:'Inter',Helvetica] font-medium text-[12.8px] text-[#3D4350] group-hover:text-[#1b1d23]">Alex Framework</span>
          </button>
          <button className="group flex items-center justify-between w-full px-[9px] py-[7px] rounded-[6px] hover:bg-[#F7F8F9]">
            <span className="[font-family:'Inter',Helvetica] font-medium text-[12.8px] text-[#3D4350] group-hover:text-[#1b1d23]">Aldi framework</span>
          </button>
        </div>

        {/* Create framework */}
        <div className="w-full flex justify-center mt-2">
          <button
            className="group flex items-center gap-2 px-[10px] py-[10px] rounded-[6px] hover:bg-[#F7F8F9] [font-family:'Inter',Helvetica] font-medium text-[12.7px] text-[#3D4350]"
            onClick={() => {
              const seg = (pathname || '').split('/');
              const wid = seg[2] || 'framework';
              setOpen(false);
              router.push(`/dashboard/${wid}/framework-new?from=${encodeURIComponent(pathname || '/')}`);
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3D4350] group-hover:text-[#1b1d23]">
              <path d="M5.77783 0.666626V10.8888" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.666748 5.77771H10.889" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="group-hover:text-[#1b1d23]">Create new framework</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export const Topbar = (): JSX.Element => {
  const [avatarSrc, setAvatarSrc] = useState("/images/userprofile.png?v=1");
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useClickOutside<HTMLDivElement>(() => setProfileOpen(false));
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="relative z-50 overflow-visible flex items-center justify-between w-full h-[60px] px-4 py-2 bg-white border-b border-[#e0e2e7]">
      <div className="flex items-center gap-[42px]">
        <div className="flex items-center gap-3">
          <img
            className="w-[30px] h-[30px]"
            alt="Symbol kirichat"
            src="/icons/topbar/symbol-kirichat.svg"
          />
          <div className="[font-family:'Urbanist',Helvetica] font-bold text-[#1b1d23] text-[27px] tracking-[-0.27px] leading-[40px] whitespace-nowrap">
            Kirichat
          </div>
          <Badge
            variant="outline"
            className="h-6 px-1.5 py-0.5 bg-white rounded-lg border-[#e0e2e7] shadow-innere-shadow-gray-large"
          >
            <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#3d4350] text-sm tracking-[0.17px]">
              Pro
            </span>
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {(() => {
            const name = "Kirichat Framework Nama";
            const truncated = name.length > 19 ? name.slice(0, 19) + "..." : name;
            return <FrameworkMenu label={truncated} />;
          })()}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img className="w-auto h-[34.5px]" alt="Button group" src="/icons/topbar/button-group.svg" />
        <div ref={profileRef} className="relative z-50">
          <button
            type="button"
            onClick={() => setProfileOpen((v) => !v)}
            className="rounded-full focus:outline-none"
            aria-label="Open profile menu"
          >
            <Avatar className="w-[34.5px] h-[34.5px]">
              <AvatarImage
                className="object-cover"
                src={avatarSrc}
                alt="User avatar"
                onError={() => setAvatarSrc("/images/ellipse-2082.png?v=3")}
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </button>
          <div
            className={`absolute right-0 top-full mt-2 w-[238px] overflow-hidden bg-white rounded-[8px] border-[#E4E4E4] border-[1.5px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-[7px] z-50 transform-gpu origin-top-right transition-all ${profileOpen ? 'opacity-100 scale-100 ease-out duration-300' : 'opacity-0 scale-95 ease-in duration-300 pointer-events-none invisible'}`}
            aria-hidden={!profileOpen}
          >
            <div className="flex flex-col items-center">
              {/* Header: Avatar + Name + Free badge (stacked) */}
              <div className="flex items-center w-full mb-[3px]">
                <Avatar className="w-[31.99px] h-[31.99px]">
                  <AvatarImage
                    className="object-cover"
                    src={avatarSrc}
                    alt="User avatar"
                    onError={() => setAvatarSrc("/images/ellipse-2082.png?v=3")}
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="ml-[7px] flex flex-col">
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[13.1px] leading-[1.53em] text-[#171717]">
                    Anton Knalpot
                  </div>
                  <span className="mt-[3px] inline-flex items-center justify-center px-[5.90625px] py-[1.96875px] rounded-[3.9375px] bg-[#DDEEFF] [font-family:'Inter',Helvetica] font-medium text-[9.8px] leading-[1.43em] text-[#316AFE] w-fit">
                    Free
                  </span>
                </div>
              </div>
              <div className="w-full mt-[4px] mb-[4px] border-t-[1.25px] border-t-[#E5E5E5]" />

              {/* Main list */}
              <div className="flex flex-col gap-0 w-[218px]">
                <button
                  className="group flex items-center gap-[10px] px-[10px] py-[7px] rounded-[6px] hover:bg-[#F7F8F9] text-[#3D4350] [font-family:'Inter',Helvetica] text-[12.8px]"
                  onClick={() => {
                    router.push('/user-settings');
                    setProfileOpen(false);
                  }}
                >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#5A5D6C] group-hover:text-[#1b1d23]">
                <path d="M6.25 1.5625C7.10938 1.5625 7.8125 2.26562 7.8125 3.125C7.8125 3.98438 7.10938 4.6875 6.25 4.6875C5.39062 4.6875 4.6875 3.98438 4.6875 3.125C4.6875 2.26562 5.39062 1.5625 6.25 1.5625ZM6.25 9.375C8.35938 9.375 10.7812 10.3828 10.9375 10.9375H1.5625C1.74219 10.375 4.14844 9.375 6.25 9.375ZM6.25 0C4.52344 0 3.125 1.39844 3.125 3.125C3.125 4.85156 4.52344 6.25 6.25 6.25C7.97656 6.25 9.375 4.85156 9.375 3.125C9.375 1.39844 7.97656 0 6.25 0ZM6.25 7.8125C4.16406 7.8125 0 8.85937 0 10.9375V12.5H12.5V10.9375C12.5 8.85937 8.33594 7.8125 6.25 7.8125Z" fill="currentColor"/>
                </svg>
                <span className="group-hover:text-[#1b1d23]">Accounts settings</span>
                </button>
                <button
                  className="group flex items-center gap-[10px] px-[10px] py-[7px] rounded-[6px] hover:bg-[#F7F8F9] text-[#3D4350] [font-family:'Inter',Helvetica] text-[12.8px]"
                  onClick={() => {
                    const seg = (pathname || '').split('/');
                    const wid = seg[2] || 'framework';
                    router.push(`/dashboard/${wid}/agents`);
                    setProfileOpen(false);
                  }}
                >
                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#5A5D6C] group-hover:text-[#1b1d23]">
                    <path d="M14.8437 5.46783H11.7656C11.7112 5.46044 11.656 5.46044 11.6016 5.46783H11.4687C11.4279 5.49113 11.3888 5.51724 11.3516 5.54596C11.3081 5.57468 11.2663 5.60599 11.2266 5.63971C11.2005 5.67165 11.177 5.70561 11.1562 5.74127C11.1205 5.79048 11.0891 5.84277 11.0625 5.89752L9.8125 9.34283L6.55469 0.514707C6.49995 0.363886 6.4001 0.233577 6.26871 0.141489C6.13732 0.0494009 5.98076 0 5.82031 0C5.65986 0 5.50331 0.0494009 5.37192 0.141489C5.24053 0.233577 5.14068 0.363886 5.08594 0.514707L3.28125 5.46783H0.78125C0.57405 5.46783 0.375336 5.55014 0.228823 5.69665C0.08231 5.84317 0 6.04188 0 6.24908C0 6.45628 0.08231 6.655 0.228823 6.80151C0.375336 6.94802 0.57405 7.03033 0.78125 7.03033H3.84375H4.02344H4.14062C4.18503 7.00895 4.22695 6.98275 4.26562 6.95221C4.30913 6.92348 4.35087 6.89218 4.39062 6.85846L4.46094 6.75689C4.49817 6.70865 4.52964 6.65621 4.55469 6.60064L5.82031 3.06158L9.07031 11.9835C9.1249 12.1344 9.22469 12.265 9.35609 12.3572C9.48749 12.4495 9.64413 12.499 9.80469 12.4991C9.96524 12.499 10.1219 12.4495 10.2533 12.3572C10.3847 12.265 10.4845 12.1344 10.5391 11.9835L12.3359 7.03033H14.8437C15.0509 7.03033 15.2497 6.94802 15.3962 6.80151C15.5427 6.655 15.625 6.45628 15.625 6.24908C15.625 6.04188 15.5427 5.84317 15.3962 5.69665C15.2497 5.55014 15.0509 5.46783 14.8437 5.46783Z" fill="currentColor"/>
                  </svg>
                  <span className="group-hover:text-[#1b1d23]">Main dashboard</span>
                </button>
                <button className="group flex items-center gap-[10px] px-[10px] py-[7px] rounded-[6px] hover:bg-[#F7F8F9] text-[#3D4350] [font-family:'Inter',Helvetica] text-[12.8px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#5A5D6C] group-hover:text-[#1b1d23]">
                <path d="M7.03125 12.5H8.59375V10.9375H7.03125V12.5ZM7.8125 0C3.5 0 0 3.5 0 7.8125C0 12.125 3.5 15.625 7.8125 15.625C12.125 15.625 15.625 12.125 15.625 7.8125C15.625 3.5 12.125 0 7.8125 0ZM7.8125 14.0625C4.36719 14.0625 1.5625 11.2578 1.5625 7.8125C1.5625 4.36719 4.36719 1.5625 7.8125 1.5625C11.2578 1.5625 14.0625 4.36719 14.0625 7.8125C14.0625 11.2578 11.2578 14.0625 7.8125 14.0625ZM7.8125 3.125C6.08594 3.125 4.6875 4.52344 4.6875 6.25H6.25C6.25 5.39063 6.95313 4.6875 7.8125 4.6875C8.67188 4.6875 9.375 5.39063 9.375 6.25C9.375 7.8125 7.03125 7.61719 7.03125 10.1563H8.59375C8.59375 8.39844 10.9375 8.20313 10.9375 6.25C10.9375 4.52344 9.53906 3.125 7.8125 3.125Z" fill="currentColor"/>
                </svg>
                <span className="group-hover:text-[#1b1d23]">Help center</span>
                </button>
                <button
                  className="group w-full flex justify-center px-[10px] py-[7px] rounded-[6px] hover:bg-[#F7F8F9]"
                  onClick={() => {
                    const seg = (pathname || '').split('/');
                    const wid = seg[2] || 'framework';
                    router.push(`/dashboard/${wid}/framework-new?from=${encodeURIComponent(pathname || '/')}`);
                    setProfileOpen(false);
                  }}
                >
                  <span className="inline-flex items-center gap-[8px]">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#5A5D6C] group-hover:text-[#1b1d23]">
                    <path d="M12.5 0H1.5625C0.703125 0 0 0.703125 0 1.5625V12.5C0 13.3594 0.703125 14.0625 1.5625 14.0625H12.5C13.3594 14.0625 14.0625 13.3594 14.0625 12.5V1.5625C14.0625 0.703125 13.3594 0 12.5 0ZM12.5 6.25H7.8125V1.5625H12.5V6.25ZM6.25 1.5625V6.25H1.5625V1.5625H6.25ZM1.5625 7.8125H6.25V12.5H1.5625V7.8125ZM7.8125 12.5V7.8125H12.5V12.5H7.8125Z" fill="currentColor"/>
                    </svg>
                    <span className="[font-family:'Inter',Helvetica] text-[12.8px] leading-[1.5748em] text-[#3D4350] text-center group-hover:text-[#1b1d23]">Create new / join framework</span>
                  </span>
                </button>
              </div>

              {/* Sign out section */}
              <div className="w-full mt-[7px] pt-[7px] border-t-[1.25px] border-t-[#E5E5E5] flex justify-center">
                <button className="flex items-center gap-[10px] px-[10px] py-[7px] rounded-[6px] hover:bg-[#F7F8F9] [font-family:'Inter',Helvetica] text-[12.8px] w-[218px]">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.53906 9.83594L6.64062 10.9375L10.5469 7.03125L6.64062 3.125L5.53906 4.22656L7.55469 6.25H0V7.8125H7.55469L5.53906 9.83594ZM12.5 0H1.5625C0.695312 0 0 0.703125 0 1.5625V4.6875H1.5625V1.5625H12.5V12.5H1.5625V9.375H0V12.5C0 13.3594 0.695312 14.0625 1.5625 14.0625H12.5C13.3594 14.0625 14.0625 13.3594 14.0625 12.5V1.5625C14.0625 0.703125 13.3594 0 12.5 0Z" fill="#F42424"/>
                  </svg>
                  <span className="text-[#F42424]">Sign out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
