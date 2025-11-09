"use client";

export default function ChatLogPage() {
  return (
    <>
      <div className="flex flex-col py-5 bg-white">
        <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-[22px] tracking-[0] leading-[29.7px]">
          Chat Log
        </h1>
        <p className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-[15.4px] tracking-[0.26px] leading-[22px]">
          View and search conversation histories
        </p>
      </div>
      <div className="flex-1 p-5">
        <div className="text-[#3d4350] [font-family:'Inter',Helvetica]">This is a placeholder for Chat Log content.</div>
      </div>
    </>
  );
}
