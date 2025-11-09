"use client";

import React from "react";
import { Button } from "../ui/button";

export const CreateAgentRightAside: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 p-2 border-l border-[#E5E5E5] min-h-0">
      <div className="w-full max-w-[324px]">
        <div className="px-6 py-1">
          <div className="text-[17px] font-bold tracking-[-0.02em] text-[#0B0B0B]">Knowledge Source</div>
        </div>

        <div className="mt-1 grid grid-cols-1 gap-[6px]">
          <div className="flex items-center justify-between border border-[#E5E5E5] rounded-[6px] px-[10px] py-2 bg-white">
            <div className="flex items-center gap-2">
              <img src="/icons/figma/badge-files.svg" alt="" className="w-[22px] h-[22px]" />
              <div className="text-[12px] font-semibold text-[#0B0B0B]">3 Files</div>
            </div>
            <div className="text-[12px] font-semibold text-[#0B0B0B]">12 KB</div>
          </div>

          <div className="flex items-center justify-between border border-[#E5E5E5] rounded-[6px] px-[10px] py-2 bg-white">
            <div className="flex items-center gap-2">
              <img src="/icons/figma/badge-text.svg" alt="" className="w-[22px] h-[22px]" />
              <div className="text-[12px] font-semibold text-[#0B0B0B]">7 Text File</div>
            </div>
            <div className="text-[12px] font-semibold text-[#0B0B0B]">33 KB</div>
          </div>

          <div className="flex items-center justify-between border border-[#E5E5E5] rounded-[6px] px-[10px] py-2 bg-white">
            <div className="flex items-center gap-2">
              <img src="/icons/figma/badge-links.svg" alt="" className="w-[22px] h-[22px]" />
              <div className="text-[12px] font-semibold text-[#0B0B0B]">2 Links</div>
            </div>
            <div className="text-[12px] font-semibold text-[#0B0B0B]">1 MB</div>
          </div>

          <div className="flex items-center justify-between border border-[#E5E5E5] rounded-[6px] px-[10px] py-2 bg-white">
            <div className="flex items-center gap-2">
              <img src="/icons/figma/badge-qa.svg" alt="" className="w-[22px] h-[22px]" />
              <div className="text-[12px] font-semibold text-[#0B0B0B]">5 Q&A</div>
            </div>
            <div className="text-[12px] font-semibold text-[#0B0B0B]">44 B</div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[324px] mt-auto">
        <div className="flex items-center justify-between border border-[#E5E5E5] rounded-[6px] px-[10px] py-[10px] bg-white">
          <div className="flex items-center gap-2">
            <img src="/icons/figma/badge-total.svg" alt="" className="w-[22px] h-[22px]" />
            <div className="text-[12px] font-semibold text-[#0B0B0B]">Total  Size</div>
          </div>
          <div className="text-[12px] font-semibold text-[#0B0B0B]">164 KB / 500 KB</div>
        </div>
      </div>

      <div className="w-full flex justify-end px-4 pb-4 pt-3">
        <Button className="h-8 px-4 rounded-[10px] border border-[#316AFE] bg-[#316AFE] hover:bg-[#2557d9] shadow-[inset_0_2px_8px_#ffffff8f,inset_-2px_-2px_12px_#ffffff8f] text-white text-[13px]">
          Train AI agent
        </Button>
      </div>
    </div>
  );
};

export default CreateAgentRightAside;
