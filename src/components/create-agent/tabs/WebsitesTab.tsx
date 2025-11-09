"use client";

import React from "react";
import { Button } from "../../ui/button";

export const WebsitesTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[680px] px-6">
      <div className="flex items-center justify-between py-0 pl-[25px] pr-0">
        <div className="flex flex-col gap-1 w-[416px] max-w-full">
          <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#0B0B0B]">Websites</h3>
          <p className="text-[14px] text-[#6D6D6D] leading-[20px]">Add website URLs to crawl as knowledge.</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[633px] flex gap-2">
        <input className="flex-1 rounded-md border border-[#E5E5E5] px-3 py-2 text-[14px] outline-none focus:ring-1 focus:ring-[#316AFE]" placeholder="https://example.com" />
        <Button className="h-9 rounded-md bg-[#316AFE] text-white hover:bg-[#2557d9]">Add</Button>
      </div>
    </div>
  );
};

export default WebsitesTab;
