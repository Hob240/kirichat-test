"use client";

export default function SettingsBillingsPage() {
  return (
    <>
      
      <div className="flex-1 p-5">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-[1024px] bg-white border border-[#DEDEDE] rounded-[14px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.1)]">
            {/* Header */}
            <div className="p-6">
              <div className="flex flex-col">
                <div className="text-[#0A0A0A] text-[18px] leading-[1.56]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 600 }}>Billing Settings</div>
              </div>
              <div className="mt-1.5 flex flex-col">
                <div className="text-[#737373] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}>Manage your billing information and subscription.</div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              {/* Two columns */}
              <div className="flex flex-wrap gap-6">
                {/* Current Plan */}
                <div className="flex-1 min-w-[280px] flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {/* 16x16 icon (credit card-ish) */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3.333" width="12" height="9.333" rx="1.333" stroke="#6A7282" strokeWidth="1.333" />
                      <path d="M2 6.667H14" stroke="#6A7282" strokeWidth="1.333" />
                      <path d="M6 10H10" stroke="#6A7282" strokeWidth="1.333" strokeLinecap="round" />
                    </svg>
                    <div className="text-[#6A7282] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Current Plan</div>
                  </div>
                  <div className="text-[#0A0A0A] text-[18px] leading-[1.56]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 600 }}>No active plan</div>
                </div>

                {/* Next Billing Date */}
                <div className="flex-1 min-w-[280px] flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {/* 16x16 icon (calendar-ish) */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2.667" width="12" height="10.667" rx="1.333" stroke="#6A7282" strokeWidth="1.333" />
                      <path d="M2 6.667H14" stroke="#6A7282" strokeWidth="1.333" />
                      <path d="M5.333 2v2.667M10.667 2v2.667" stroke="#6A7282" strokeWidth="1.333" strokeLinecap="round" />
                    </svg>
                    <div className="text-[#6A7282] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Next Billing Date</div>
                  </div>
                  <div className="text-[#0A0A0A] text-[18px] leading-[1.56]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 600 }}>N/A</div>
                </div>
              </div>

              {/* Horizontal border + Status label */}
              <div className="pt-[9px] border-t border-t-[#F3F4F6] mt-4">
                <div className="flex items-center flex-wrap">
                  <div className="py-[2px] pr-2">
                    <div className="text-[#6A7282] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Status:</div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-2">
                <div className="pt-2">
                  <button
                    className="h-9 inline-flex items-center justify-center px-[17px] rounded-[13px] border border-[#316AFE] bg-[#316AFE] text-[#FAFAFA]"
                    style={{
                      fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif',
                      fontWeight: 600,
                      boxShadow: 'inset 0px 2px 8px 0px rgba(255, 255, 255, 0.56), inset -2px -2px 12px 0px rgba(255, 255, 255, 0.56)'
                    }}
                  >
                    <span className="text-[14px] leading-[1.43]">Manage subscription</span>
                  </button>
                </div>
                <div className="pt-2">
                  <button
                    className="h-9 inline-flex items-center justify-center px-[17px] rounded-[13px] border text-[#0A0A0A] bg-white"
                    style={{
                      fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif',
                      fontWeight: 600,
                      borderColor: 'rgba(209, 213, 220, 0.8)'
                    }}
                  >
                    <span className="text-[14px] leading-[1.43]">View invoices</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
