"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import {
  X as XIcon,
  Globe as GlobeIcon,
} from "lucide-react";
import { CreateAgentRightAside, CreateAgentTabsHeader } from "./create-agent/HeaderAndAside";
import DocumentsTab from "./create-agent/tabs/DocumentsTab";
import TextTab from "./create-agent/tabs/TextTab";
import QATab from "./create-agent/tabs/QATab";
import WebsitesTab from "./create-agent/tabs/WebsitesTab";

interface CreateAgentModalProps {
  open: boolean;
  onClose: () => void;
}

const NavItem = ({
  active,
  iconSrc,
  iconNode,
  label,
  onClick,
}: {
  active?: boolean;
  iconSrc?: string;
  iconNode?: React.ReactNode;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-md select-none relative ${
        active ? "text-black" : "text-[#171717]"
      } hover:bg-neutral-100/60`}
    >
      {iconSrc ? (
        <img src={iconSrc} alt={label} className="w-[19px] h-[19px]" />
      ) : (
        iconNode || null
      )}
      <span className="text-[13.6px] font-medium leading-[20px]">{label}</span>
      {active && (
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full bg-[#171717]" />
      )}
    </button>
  );
};

export const CreateAgentModal: React.FC<CreateAgentModalProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState<'documents' | 'text' | 'qa' | 'websites'>("documents");
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handler);
    }
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(245,245,245,0.5)] backdrop-blur-[2px] animate-fade-in-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center px-3 py-2">
        {/* Scale wrapper with arbitrary value (edit the number, e.g. .8, .9, 1.0) */}
        <div className="">
          <div className="relative w-[1049px] max-w-[96vw] h-[min(571px,95vh)] max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-[inset_0_0_0_1px_#E5E5E5,0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] flex flex-col animate-scale-in">
            {/* Top navigation bar */}
            <CreateAgentTabsHeader tab={tab} setTab={setTab} onClose={onClose} />

            {/* Content */}
            <div className="flex-1 min-h-0 overflow-y-auto grid grid-cols-[minmax(0,701px)_348px] max-[1000px]:grid-cols-1">
              {/* Left column */}
              <div className="flex flex-col items-center gap-4 py-2 min-h-0 pr-2">
                {tab === 'documents' && <DocumentsTab />}
                {tab === 'text' && <TextTab />}
                {tab === 'qa' && <QATab />}
                {tab === 'websites' && <WebsitesTab />}
              </div>

              {/* Right column (Knowledge Source) */}
              <CreateAgentRightAside />
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CreateAgentModal;
