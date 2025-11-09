"use client";

// Intercepting route to render Create Framework as overlay above the current page
// so the background (current dashboard page) stays visible.

import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import type { Route } from "next";

export default function FrameworkNewInterceptPage() {
  const router = useRouter();
  const params = useParams<{ workspaceId: string }>();
  const ws = params?.workspaceId ?? "framework";
  const search = useSearchParams();
  const rawFrom = search?.get("from");
  const from = rawFrom ? decodeURIComponent(rawFrom) : null;

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const onClose = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    if (from && from.startsWith(`/dashboard/${ws}/`)) {
      router.replace(from as unknown as Route);
      return;
    }
    router.push(`/dashboard/${ws}/agents`);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const canCreate = name.trim().length > 0 && url.trim().length > 0;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(245,245,245,0.5)] backdrop-blur-[2px] animate-fade-in-200"
        onClick={onClose}
      />

      {/* Centered modal */}
      <div className="absolute inset-0 flex items-center justify-center px-4 py-4">
        <div className="relative w-[448px] max-w-[96vw] rounded-[16px] bg-white overflow-hidden shadow-[inset_0_0_0_1px_#E5E5E5,0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] animate-scale-in">
          {/* Header */}
          <div className="flex flex-col items-center justify-center px-[64px] pt-[32px] pb-[18px]">
            <div className="text-center">
              <img src="/icons/actions/Symbolcreateframework.svg" alt="Kirichat Symbol" className="w-10 h-10 mx-auto" />
              <div className="mt-[10px] font-semibold text-[16.7px] leading-[28px] text-black" style={{ fontFamily: 'Urbanist, Inter, Helvetica, Arial, sans-serif' }}>Create Framework</div>
              <div className="mt-1 text-[13.2px] leading-[20px] text-[#737373]">Choose a name that represents your framework within Kirichat.</div>
            </div>
          </div>
          <div className="border-t border-[#E5E5E5]" />

          {/* Form */}
          <div className="px-[64px] py-[32px] bg-[#FAFAFA] rounded-b-[16px]">
            <div className="flex flex-col gap-2">
              <label className="text-[13.3px] font-medium text-[#404040]">Framework name</label>
              <div className="rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <input
                  type="text"
                  placeholder="Name of your framework"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-9 rounded-[6px] border border-[#D4D4D4] bg-white px-[13px] text-[12.7px] text-[#0A0A0A] placeholder:text-[#A3A3A3] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-[13.3px] font-medium text-[#404040]">Framework URL</label>
              <div className="rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                <input
                  type="text"
                  placeholder="Name of your URL"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full h-9 rounded-[6px] border border-[#D4D4D4] bg-white px-[13px] text-[12.7px] text-[#0A0A0A] placeholder:text-[#A3A3A3] outline-none"
                />
              </div>
            </div>

            {/* Button */}
            <div className="pt-6">
              <button
                disabled={!canCreate}
                className={`w-full h-[40px] rounded-[6px] border ${canCreate ? 'border-[#316AFE] bg-[#316AFE] text-[#FAFAFA]' : 'border-[#E5E5E5] bg-[#F5F5F5] text-[#A3A3A3]'} `}
                style={canCreate ? { boxShadow: 'inset 0px 2px 8px 0px rgba(255, 255, 255, 0.56), inset -2px -2px 12px 0px rgba(255, 255, 255, 0.56)' } : undefined}
                onClick={() => onClose()}
              >
                <span className="text-[12.8px] leading-[20px]">Create Framework</span>
              </button>
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-[15px] top-[16px] p-2 rounded-full hover:bg-black/5"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5l10 10M15 5L5 15" stroke="#737373" strokeWidth="1.6667" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
