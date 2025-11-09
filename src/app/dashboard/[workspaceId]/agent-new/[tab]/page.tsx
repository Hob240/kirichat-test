"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { CreateAgentRightAside, CreateAgentTabsHeader } from "@/components/create-agent/HeaderAndAside";
import DocumentsTab from "@/components/create-agent/tabs/DocumentsTab";
import TextTab from "@/components/create-agent/tabs/TextTab";
import QATab from "@/components/create-agent/tabs/QATab";
import WebsitesTab from "@/components/create-agent/tabs/WebsitesTab";

type TabKey = "documents" | "text" | "qa" | "websites";
const isValidTab = (t: string): t is TabKey => ["documents", "text", "qa", "websites"].includes(t as TabKey);

export default function CreateAgentTabPage() {
  const params = useParams<{ workspaceId: string; tab: string }>();
  const router = useRouter();
  const ws = params?.workspaceId ?? "framework";
  const tabParam = typeof params?.tab === "string" ? params.tab : "documents";
  const tab: TabKey = isValidTab(tabParam) ? (tabParam as TabKey) : "documents";

  const handleClose = () => router.push(`/dashboard/${ws}/agents`);
  const handleSetTab = (t: TabKey) => router.replace(`/dashboard/${ws}/agent-new/${t}`);

  // Escape to close (like original modal)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop with blur and fade-in (same as modal) */}
      <div
        className="absolute inset-0 bg-[rgba(245,245,245,0.5)] backdrop-blur-[2px] animate-fade-in-200"
        onClick={handleClose}
      />

      {/* Centered modal container with original size and scale-in animation */}
      <div className="absolute inset-0 flex items-center justify-center px-3 py-2">
        <div className="relative w-[1049px] max-w-[96vw] h-[min(571px,95vh)] max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-[inset_0_0_0_1px_#E5E5E5,0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col animate-scale-in">
          {/* Top navigation bar */}
          <CreateAgentTabsHeader tab={tab} setTab={handleSetTab} onClose={handleClose} />

          {/* Content: left main + right aside */}
          <div className="flex-1 min-h-0 overflow-hidden grid grid-cols-[minmax(0,701px)_348px] max-[1000px]:grid-cols-1">
            {/* Left column (scrollable) */}
            <div className="flex flex-col items-center gap-4 py-2 min-h-0 pr-2 overflow-y-auto overflow-x-hidden no-scrollbar">
              {tab === "documents" && <DocumentsTab />}
              {tab === "text" && <TextTab />}
              {tab === "qa" && <QATab />}
              {tab === "websites" && <WebsitesTab />}
            </div>

            {/* Right column (Knowledge Source) */}
            <CreateAgentRightAside />
          </div>
        </div>
      </div>
    </div>
  );
}
