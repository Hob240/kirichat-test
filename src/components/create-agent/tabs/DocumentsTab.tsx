"use client";

import React from "react";

export const DocumentsTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 w-full max-w-[680px] px-6">
      <div className="flex items-center justify-between py-0 pl-[25px] pr-0">
        <div className="flex flex-col gap-1 w-[416px] max-w-full">
          <div className="flex items-center gap-2">
            <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#0B0B0B]">
              Documents
            </h3>
          </div>
          <p className="text-[14px] text-[#6D6D6D] leading-[20px]">
            Add your documents files here, to train your AI you can upload
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[6.96px] border border-[#E0E2E7] bg-white text-[#171717]"
          style={{ width: 119, height: 31, boxShadow: "0px 3.48px 3.48px 0px rgba(0,0,0,0.25), inset 0px -6.96px 1.74px 0px rgba(240,241,243,1)", padding: "0px 2.61px" }}
        >
          {/* Left info icon (16x16) */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[8.7px]">
            <circle cx="12" cy="12" r="10.333" stroke="#A3A3A3" strokeWidth="1.333" />
            <path d="M12 7.333v.001" stroke="#A3A3A3" strokeWidth="1.333" strokeLinecap="round" />
            <path d="M12 10.667v6" stroke="#A3A3A3" strokeWidth="1.333" strokeLinecap="round" />
          </svg>
          <span className="text-[12.18px] font-medium leading-[17.4px]">Learn More</span>
          {/* Right chevron (15.19x15.19) */}
          <svg width="15.19" height="15.19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[8.7px]">
            <path d="M8 10l4 4 4-4" stroke="#A3A3A3" strokeWidth="1.265" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Drag & drop upload area */}
      <div className="mx-auto mt-2 w-full max-w-[633px] border border-dashed border-[#1849D6] rounded-[8px] p-6 min-h-[220px] flex flex-col items-center justify-center gap-3 bg-white">
        <img src="/icons/figma/icon-backup.svg" alt="" className="w-10 h-10" />
        <div className="text-[17px]">
          <span className="text-[#0B0B0B]">Drag your file(s) or </span>
          <span className="font-semibold text-[#316AFE]">browse</span>
        </div>
        <div className="text-[17px] text-[#6D6D6D]">Max 40 MB files are allowed</div>
      </div>

      {/* Small note */}
      <div className="w-full max-w-[633px]">
        <div className="mt-4 px-2 text-[14px] text-[#6D6D6D]">
          Only support .pdf, .txt and .doc and docx files
        </div>
      </div>

      {/* Divider with label */}
      <div className="w-full max-w-[633px] flex items-center justify-center gap-3 my-2">
        <div className="h-[1px] bg-[#E7E7E7] flex-1" />
        <div className="text-[12px] text-[#6D6D6D]">FILE</div>
        <div className="h-[1px] bg-[#E7E7E7] flex-1" />
      </div>

      {/* New card design from Figma */}
      <div className="w-full max-w-[503px] flex flex-col gap-3">
        <div className="bg-[var(--bgcolor\/light,#ffffff)] border border-[var(--strokecolor\/lightgrey,#e7e7e7)] border-solid box-border content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative rounded-[var(--radi\/lg,12px)]">
          <div className="content-stretch flex flex-col gap-[8px] h-[63px] items-center justify-center relative shrink-0 w-[462.4px]">
            <div className="content-stretch flex items-center relative shrink-0" data-name="row">
              <div className="relative shrink-0 size-[36px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="/icons/figma/figma-card-image1.png" />
              </div>
              <div className="content-stretch flex gap-[170px] items-center relative shrink-0">
                <div className="box-border content-stretch flex flex-col items-start justify-center pb-[4px] pt-0 px-0 relative shrink-0 w-[215px]">
                  <div className="box-border content-stretch flex flex-col gap-[6px] h-[29px] items-center justify-center mb-[-4px] relative shrink-0 w-full">
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <div className="box-border content-stretch flex items-center justify-between p-[10px] relative shrink-0 w-[163px]">
                        <p className="font-[family-name:var(--fontfamilies\/secondary,'Inter:Semi_Bold',sans-serif)] font-[var(--fontweights\/semibold,normal)] font-semibold leading-[var(--lineheights\/sm,18px)] relative shrink-0 text-[color:var(--textcolor\/default,#0b0b0b)] text-[length:var(--fontsize\/xsm,12px)] tracking-[var(--letterspacing\/md,0px)]">
                          kirichat business.pdf
                        </p>
                        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]">
                          <div className="flex-none rotate-[90deg]">
                            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative size-[16px]" data-name="SVG">
                              <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative shrink-0">
                                <div className="flex-none h-full rotate-[180deg]">
                                  <div className="h-full relative w-[16px]" data-name="variant=91">
                                    <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                                      <div className="absolute inset-[-16.67%_-8.33%]">
                                        <img alt="" className="block max-w-none size-full" src="/icons/figma/figma-card-vector.svg" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex gap-[10px] h-[14px] items-center justify-center mb-[-4px] p-[10px] relative shrink-0">
                    <p className="font-[family-name:var(--fontfamilies\/secondary,'Inter:Regular',sans-serif)] font-[var(--fontweights\/regular,normal)] font-normal leading-[var(--lineheights\/xsm,16px)] relative shrink-0 text-[color:var(--textcolor\/secdefault,#6d6d6d)] text-[length:var(--fontsize\/xsm,12px)] tracking-[var(--letterspacing\/md,0px)]">
                      50KB
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] h-[38px] items-start relative shrink-0 w-[41px]">
                  <div className="bg-white border-[1.2px] border-neutral-200 border-solid box-border content-stretch flex h-[26.4px] items-center justify-center px-[11.1px] py-[1.5px] relative rounded-[7.2px] shrink-0 w-full" data-name="Component 12">
                    <div className="relative shrink-0 size-[19.2px]" data-name="Component 1">
                      <div className="absolute inset-[47.22%_15.28%]" data-name="Group">
                        <div className="absolute inset-[-75.02%_-6%]">
                          <img alt="" className="block max-w-none size-full" src="/icons/figma/figma-card-image2.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--spacing\/sm,8px)] items-center relative shrink-0" data-name="progress: linear">
              <div className="h-[8px] relative shrink-0 w-[429.4px]" data-name="progress: linear">
                <div className="absolute bottom-0 left-[0.15%] overflow-clip right-[0.15%] rounded-[100px] top-0" data-name="master/ linear">
                  <div className="absolute bg-[var(--bgcolor\/lightgrey,#fafafa)] inset-0 rounded-[var(--spacing\/xxxl,40px)]" data-name="bg" />
                </div>
                <div className="absolute bottom-0 left-[0.15%] overflow-clip right-[40.03%] rounded-[100px] top-0" data-name="master/ linear">
                  <div className="absolute bg-[var(--bgcolor\/primary,#1849d6)] inset-0 rounded-[var(--spacing\/xxxl,40px)]" data-name="bg" />
                </div>
              </div>
              <p className="font-[family-name:var(--fontfamilies\/secondary,'Inter:Regular',sans-serif)] font-[var(--fontweights\/regular,normal)] font-normal leading-[var(--lineheights\/xsm,16px)] relative shrink-0 text-[color:var(--textcolor\/secdefault,#6d6d6d)] text-[length:var(--fontsize\/xsm,12px)] text-right tracking-[var(--letterspacing\/md,0px)]">
                60%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
