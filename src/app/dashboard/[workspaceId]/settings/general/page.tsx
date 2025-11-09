"use client";

export default function SettingsGeneralPage() {
  return (
    <>
      
      <div className="flex-1 p-5">
        <div className="w-full flex flex-col items-center gap-5">
          {/* Card: Framework Settings */}
          <div className="w-[1024px] bg-white border border-[#DEDEDE] rounded-[14px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.1)]">
            {/* Header */}
            <div className="p-6">
              <div className="text-[#0A0A0A] text-[18px] leading-[1.56]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 600 }}>Settings</div>
              <div className="mt-1.5 text-[#737373] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}>Manage your billing information and subscription.</div>
            </div>

            {/* Form area */}
            <div className="px-6 pb-6 flex flex-col gap-[22px]">
              {/* Framework name */}
              <div className="w-[733px] max-w-full flex flex-col gap-[9.6px]">
                <label className="text-[#737373]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '1.43em' }}>Framework name</label>
                <input
                  type="text"
                  defaultValue="Anton Kopling"
                  className="w-full h-9 rounded-[8px] border border-[#E5E5E5] bg-white px-[13px] text-[14px] text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#316AFE]/20 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                  style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}
                />
              </div>

              {/* Framework ID */}
              <div className="w-[624px] max-w-full flex flex-col gap-[9.6px]">
                <label className="text-[#737373]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '1.43em' }}>Framework ID</label>
                <div className="h-9 rounded-full border border-[#E5E5E5] px-4 flex items-center gap-2">
                  <div className="flex-1 text-[#0A0A0A]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontWeight: 700, fontSize: '14px', lineHeight: '1.43em', letterSpacing: '-0.7%' }}>4567-9995-3541</div>
                  <button className="w-[28px] h-[28px] inline-flex items-center justify-center rounded-full hover:bg-[#F5F5F5]" aria-label="Copy framework id">
                    {/* Copy icon */}
                    <svg width="14.52" height="14.52" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="5" width="8" height="8" rx="1.333" stroke="#6A7282" strokeWidth="1.333"/>
                      <rect x="3" y="3" width="8" height="8" rx="1.333" stroke="#6A7282" strokeWidth="1.333" opacity="0.7"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Save changes area */}
              <div className="w-full flex justify-end pt-0">
                <div className="pt-2">
                  <button
                    className="h-9 inline-flex items-center justify-center px-[17px] rounded-[13px] border border-[#316AFE] bg-[#316AFE] text-[#FAFAFA]"
                    style={{
                      fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif',
                      fontWeight: 600,
                      boxShadow: 'inset 0px 2px 8px 0px rgba(255, 255, 255, 0.56), inset -2px -2px 12px 0px rgba(255, 255, 255, 0.56)'
                    }}
                  >
                    <span className="text-[14px] leading-[1.43]">Save changes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone label */}
          <div className="w-[1024px] px-8">
            <div className="[font-family:'Inter',Helvetica] font-semibold uppercase text-[12px] leading-[1.33] text-[#FC0005] text-center">Danger Zone</div>
          </div>

          {/* Card: Delete framework */}
          <div className="w-[1024px] bg-white border border-[#DEDEDE] rounded-[16px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.1)]" style={{ padding: '26px 10px 10px 26px' }}>
            <div className="flex flex-col gap-[11.7px] w-[610px] max-w-full">
              <div className="[font-family:'Inter',Helvetica] font-semibold text-[#09090B]" style={{ fontSize: '19.12px', letterSpacing: '-2%' }}>Delete framework</div>
              <div className="[font-family:'Inter',Helvetica] text-[#5B5B5B]" style={{ fontSize: '14.87px', lineHeight: '1.43em' }}>
                After you delete your workspace, it can’t be restored. Make sure you really want to continue — all stored data and agents will be removed.
              </div>
            </div>
            <div className="w-full flex justify-end items-center gap-[10px] pr-[15px] pt-[5px] pb-[5px]">
              <button
                className="h-9 inline-flex items-center justify-center px-[17px] rounded-[13px] border text-white bg-[#F42424]"
                style={{
                  borderColor: '#F42424',
                  boxShadow: 'inset 0px 2px 8px 0px rgba(255, 255, 255, 0.56), inset -2px -2px 12px 0px rgba(255, 255, 255, 0.56)'
                }}
              >
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[14px] tracking-[2.14%]">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
