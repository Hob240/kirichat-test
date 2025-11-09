"use client";

import React from "react";

// Q&A tab implemented to match Figma node 288:1948 (upload v2 - step 2)
export const QATab: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[699px] max-w-full flex flex-col gap-5 pt-2">
        {/* Header section (title + description) */}
        <div className="w-full grid grid-cols-[416px_1fr] items-start px-[33px]">
          <div className="flex flex-col gap-[4px]">
            <h3 className="text-[18px] font-bold text-[#0B0B0B] leading-[26px]" style={{ letterSpacing: "-0.0111em" }}>Q&amp;A</h3>
            <p className="text-[14px] leading-[20px] text-[#6D6D6D]">Craft responses for key questions, ensuring your AI shares relevant info...</p>
          </div>
          <div />
        </div>

        {/* Divider with label Q&A */}
        <div className="mx-auto w-[633px] h-[18px] grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="w-full" style={{ height: "0.97px", background: "#E7E7E7" }} />
          <div className="text-[12px] leading-[18px] text-[#6D6D6D]">Q&amp;A</div>
          <div className="w-full" style={{ height: "0.97px", background: "#E7E7E7" }} />
        </div>

        {/* Main card: Add Q&A */}
        <div className="mx-auto w-[633px] rounded-[6px] border border-[#E7E7E7] bg-white p-[10px]">
          {/* Inner container */}
          <div className="mx-auto w-[586px] bg-white border border-[#E7E7E7] px-[1px] py-[20px]" style={{ borderRadius: "12.75px" }}>
            {/* Heading Add Q&A */}
            <div className="px-[10px]">
              <div className="text-[16px] font-bold leading-[24px] tracking-[-1.25%] text-[#0B0B0B]">Add Q&amp;A</div>
            </div>

            {/* Title field */}
            <div className="pt-[10px]">
              <div className="px-[13px] text-[14px] font-semibold text-[#6D6D6D]">Title</div>
              <div className="mt-[6px] mx-auto w-[562px]">
                <input
                  type="text"
                  placeholder="Ex: Pricing Info"
                  className="w-full h-[35px] rounded-[12px] border border-[#E7E7E7] bg-white px-4 text-[14px] text-[#6D6D6D] outline-none"
                />
              </div>
            </div>

            {/* Question field */}
            <div className="pt-[10px]">
              <div className="px-[13px] text-[14px] font-semibold text-[#6D6D6D]">Question</div>
              <div className="mt-[6px] mx-auto w-[562px]">
                <input
                  type="text"
                  placeholder="Ex: Pricing Info"
                  className="w-full h-[35px] rounded-[12px] border border-[#E7E7E7] bg-white px-4 text-[14px] text-[#6D6D6D] outline-none"
                />
              </div>
            </div>

            {/* + Add Question button (129x26) */}
            <div className="px-[13px] pt-[10px]">
              <button
                className="inline-flex items-center justify-center h-[26px] rounded-[12px] border text-[10px] font-semibold px-[17.25px]"
                style={{ borderColor: "#A3A3A3", borderWidth: 1.2 }}
              >
                + Add Question
              </button>
            </div>

            {/* Answer label */}
            <div className="flex flex-col gap-[6px] px-[13px] pt-[14px]">
              <div className="text-[14px] font-semibold text-[#6D6D6D]">Answer</div>
            </div>

            {/* Answer editor (based on Text editor spec) */}
            <div className="mx-auto w-[562px] rounded-[10px] border border-[#E5E5E5] overflow-hidden bg-white">
              {/* Toolbar */}
              <div className="h-[40px] bg-[#F7F7F7] border-b border-[#E6E6E6] flex items-center px-3 text-[#0B0B0B] text-[13px]">
                <div className="flex items-center gap-3">
                  <button className="font-bold">B</button>
                  <button className="italic">I</button>
                  <button className="underline">U</button>
                  <div className="mx-1 w-px h-4 bg-[#E5E5E5]" />
                  <button>H1</button>
                  <button>H2</button>
                  <button>H3</button>
                  <button>P</button>
                  <div className="mx-1 w-px h-4 bg-[#E5E5E5]" />
                  {/* Align icons */}
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#0B0B0B]"><path d="M4 7h12M4 12h8M4 17h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#0B0B0B]"><path d="M6 7h12M6 12h8M6 17h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#0B0B0B]"><path d="M4 7h12M8 12h8M4 17h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <div className="mx-1 w-px h-4 bg-[#E5E5E5]" />
                  {/* List icons */}
                  <svg width="18" height="18" viewBox="0 0 24 24"><circle cx="6" cy="7" r="1.2" fill="#0B0B0B"/><path d="M10 7h10" stroke="#0B0B0B" strokeWidth="1.5"/><circle cx="6" cy="12" r="1.2" fill="#0B0B0B"/><path d="M10 12h10" stroke="#0B0B0B" strokeWidth="1.5"/></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24"><text x="4" y="9" fontSize="8" fill="#0B0B0B">1.</text><path d="M10 7h10" stroke="#0B0B0B" strokeWidth="1.5"/><text x="4" y="14" fontSize="8" fill="#0B0B0B">2.</text><path d="M10 12h10" stroke="#0B0B0B" strokeWidth="1.5"/></svg>
                  <div className="mx-1 w-px h-4 bg-[#E5E5E5]" />
                  {/* Link icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24"><path d="M10 8h4M8.5 9.5l-1 1a3 3 0 0 0 0 4.2l.8.8a3 3 0 0 0 4.2 0l1-1M15.5 14.5l1-1a3 3 0 0 0 0-4.2l-.8-.8a3 3 0 0 0-4.2 0l-1 1" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              {/* Content area */}
              <div className="h-[280px] bg-white p-4 text-[12.5px] text-[#0A0A0A]">Ini Preview</div>
            </div>

            {/* Under editor buttons */}
            <div className="px-[13px] pt-[12px] flex items-center gap-[10px]">
              <button className="h-[28px] px-[11.5px] rounded-[6.75px] border border-[rgba(0,0,0,0.10)] text-[11.3px] text-[#0A0A0A] bg-white">Hide Preview</button>
              <button className="h-[28px] px-[11.5px] rounded-[6.75px] border border-[rgba(0,0,0,0.10)] text-[11.3px] text-[#0A0A0A] bg-white">Clear Content</button>
            </div>
          </div>

          {/* Bottom action (CTA) */}
          <div className="flex items-center justify-end pt-[10px]">
            <button
              className="h-[25px] rounded-[7.5px] border border-[#316AFE] bg-[#316AFE] text-white px-[14px]"
              style={{ boxShadow: "inset 0px 2px 8px rgba(255,255,255,0.56), inset -2px -2px 12px rgba(255,255,255,0.56)" }}
            >
              <span className="font-[600] text-[10.5px]" style={{ letterSpacing: "0.0215em", fontFamily: "Urbanist, sans-serif" }}>Add Text Snippet</span>
            </button>
          </div>
        </div>

        {/* Q&A Sources section (list) */}
        <div className="mx-auto w-[633px]">
          <div className="text-[16px] font-bold text-[#0B0B0B]">Q&amp;A Sources</div>

          <div className="mt-3 grid grid-cols-[1fr_auto] items-center">
            <label className="inline-flex items-center gap-3 text-[14px] text-[#0B0B0B]">
              <input type="checkbox" className="appearance-none size-[20px] rounded-[5px] border border-[#E5E5E5] bg-white shadow-[inset_0_-1.5px_0_1px_rgba(0,0,0,0.04)]" />
              <span className="select-none">Select all</span>
            </label>
            <div className="flex items-center gap-2 text-[16px] text-[#6D6D6D]">
              <span className="font-medium">Sort By:</span>
              <button className="inline-flex items-center gap-2 text-[#0B0B0B] font-semibold">
                Default
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10l4 4 4-4" stroke="#0B0B0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-2 h-px bg-[#E5E5E5] w-full" />

          <div className="mt-3 flex flex-col gap-4">
            {[
              { title: "kirichat business snippet 1", size: "50KB", tag: "New" },
              { title: "kirichat business snippet 1", size: "50KB", tag: "New" },
              { title: "kirichat business snippet 1", size: "50KB", tag: "New" },
            ].map((it, idx) => (
              <div key={idx} className="grid grid-cols-[24px_1fr] items-stretch gap-3">
                {/* Checkbox left */}
                <div className="flex items-center pt-2">
                  <input type="checkbox" className="appearance-none size-[20px] rounded-[5px] border border-[#E5E5E5] bg-white shadow-[inset_0_-1.5px_0_1px_rgba(0,0,0,0.04)]" />
                </div>
                {/* Card (reuse card spec 292:1088) */}
                <div className="w-[502px] rounded-[12px] bg-white border border-[#E7E7E7]" style={{ minHeight: 76, padding: 16 }}>
                  <div className="grid grid-cols-[1fr_48px]">
                    {/* Left row */}
                    <div className="flex items-center gap-[119px]">
                      {/* Left text block */}
                      <div className="flex flex-col" style={{ width: 311 }}>
                        <div className="flex items-center gap-[5px]">
                          <div className="text-[12px] font-semibold leading-[18px] text-[#0B0B0B] whitespace-nowrap">{it.title}</div>
                          {/* Chevron 16px */}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8l4 4-4 4" stroke="#C7CDD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {/* Pill New */}
                          <span className="inline-flex items-center justify-center rounded-[4px] bg-[#D1F3FA] text-[#0A4E5C] text-[10px] leading-[12px] h-[12px] px-2" style={{ fontFamily: 'Azeret Mono, monospace' }}>{it.tag}</span>
                        </div>
                        <div className="mt-[2px] text-[12px] leading-[16px] text-[#6D6D6D]">{it.size}</div>
                      </div>
                    </div>
                    {/* Right action */}
                    <div className="flex items-center justify-center" style={{ width: 48, height: 44, borderLeft: '1px solid #E5E7EB', paddingLeft: 1 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 7h6m-7 2h8l-1 10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2L7 9Zm2 0V6a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3" stroke="#0A0A0A" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QATab;
