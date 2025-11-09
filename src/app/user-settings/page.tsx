"use client";

export default function AccountPage() {
  return (
    <>
      <div className="flex-1 p-5">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-[1024px] bg-white border border-[#DEDEDE] rounded-[16.8px] shadow-[0px_1.2px_2.4px_-1.2px_rgba(0,0,0,0.1),0px_1.2px_3.6px_rgba(0,0,0,0.1)]">
            {/* Header */}
            <div className="p-6">
              <div className="text-[#0A0A0A]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: '1.56em' }}>User Settings</div>
              <div className="text-[#737373] mt-1" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '1.43em' }}>
                Update your personal information and notification preferences.
              </div>
            </div>

            {/* Form */}
            <div className="px-6 pb-6 flex flex-col gap-4">
              {/* First/Last Name */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* First Name */}
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[#0A0A0A]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '14px', fontWeight: 500 }}>First Name</label>
                  <input
                    type="text"
                    defaultValue="Hendra"
                    className="w-full h-9 rounded-[8px] border border-[#E5E5E5] bg-white px-[13px] text-[14px] text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#316AFE]/20 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                    style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}
                  />
                </div>
                {/* Last Name */}
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[#0A0A0A]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '14px', fontWeight: 500 }}>Last Name</label>
                  <input
                    type="text"
                    defaultValue="Saputra"
                    className="w-full h-9 rounded-[8px] border border-[#E5E5E5] bg-white px-[13px] text-[14px] text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#316AFE]/20 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                    style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}
                  />
                </div>
              </div>

              {/* Job Role */}
              <div className="flex flex-col gap-2">
                <label className="text-[#0A0A0A]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '14px', fontWeight: 500 }}>Job Role</label>
                <input
                  type="text"
                  defaultValue="marketing"
                  className="w-full h-9 rounded-[8px] border border-[#E5E5E5] bg-white px-[13px] text-[14px] text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#316AFE]/20 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                  style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}
                />
                <div className="text-[#737373]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: '1.43em' }}>Your position within the company.</div>
              </div>

              {/* Email Notifications */}
              <div className="flex flex-col gap-4 pt-2">
                <div className="text-[#0A0A0A]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '18px', fontWeight: 500 }}>Email Notifications</div>

                {/* Daily Reports */}
                <div className="flex items-center justify-between gap-4 rounded-[12px] border border-[#DEDEDE] px-4 py-2">
                  <div className="flex flex-col gap-[2.4px]">
                    <div className="text-[#0A0A0A]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em' }}>Daily Reports</div>
                    <div className="text-[#737373]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '14px', fontWeight: 400 }}>Receive daily summary reports via email.</div>
                  </div>
                  {/* Switch ON */}
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-[38.4px] h-[22.07px] rounded-full bg-[#155EEF] peer-checked:bg-[#155EEF] shadow-[0px_1.2px_2.4px_rgba(0,0,0,0.05)] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[3.6px] after:w-[19.2px] after:h-[19.2px] after:rounded-full after:bg-white peer-checked:after:right-[3.6px]" />
                  </label>
                </div>

                {/* Weekly Reports */}
                <div className="flex items-center justify-between gap-4 rounded-[12px] border border-[#DEDEDE] px-4 py-2">
                  <div className="flex flex-col gap-[2.4px]">
                    <div className="text-[#0A0A0A]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: '1.5em' }}>Weekly Reports</div>
                    <div className="text-[#737373]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontSize: '14px', fontWeight: 400 }}>Receive weekly summary reports via email.</div>
                  </div>
                  {/* Switch ON */}
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-[38.4px] h-[22.07px] rounded-full bg-[#155EEF] peer-checked:bg-[#155EEF] shadow-[0px_1.2px_2.4px_rgba(0,0,0,0.05)] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[3.6px] after:w-[19.2px] after:h-[19.2px] after:rounded-full after:bg-white peer-checked:after:right-[3.6px]" />
                  </label>
                </div>
              </div>
            </div>

            {/* Footer with border top */}
            <div className="border-t border-[#DEDEDE] px-6 pt-6 pb-6 flex justify-end items-center">
              <button
                className="h-9 inline-flex items-center justify-center px-[17px] rounded-[13px] border border-[#316AFE] bg-[#316AFE] text-[#FAFAFA]"
                style={{
                  fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  boxShadow: 'inset 0px 2px 8px 0px rgba(255, 255, 255, 0.56), inset -2px -2px 12px 0px rgba(255, 255, 255, 0.56)'
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
