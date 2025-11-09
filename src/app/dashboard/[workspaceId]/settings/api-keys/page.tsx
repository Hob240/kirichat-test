"use client";

export default function SettingsApiKeysPage() {
  const maskedKey = '49dd********************************************************0f83';
  return (
    <>
      
      <div className="flex-1 p-5">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-[1024px] flex flex-col gap-6">
            {/* Card: API Keys Table */}
            <div className="bg-white border border-[#DEDEDE] rounded-[14px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.1)]">
              <div className="p-6">
                <div className="text-[#0A0A0A] text-[18px] leading-[1.56]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontWeight: 600 }}>API Keys</div>
                <div className="mt-1.5 text-[#737373] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                  Manage your API keys to integrate with the Promptwatch API.
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="overflow-x-auto overflow-y-auto">
                  <div className="min-w-[974px] w-full">
                    {/* Header row */}
                    <div className="flex items-stretch border-b border-[#DEDEDE]">
                      <div className="w-[60.14px] px-2 pt-[9.75px] pb-[10.25px]">
                        <div className="text-[#737373] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Name</div>
                      </div>
                      <div className="w-[90.53px] px-2 pt-[9.75px] pb-[10.25px]">
                        <div className="text-[#737373] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Project</div>
                      </div>
                      <div className="w-[632.5px] px-2 pt-[9.75px] pb-[10.25px]">
                        <div className="text-[#737373] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>API Key</div>
                      </div>
                      <div className="w-[118.22px] px-2 pt-[9.75px] pb-[10.25px]">
                        <div className="text-[#737373] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Created</div>
                      </div>
                      <div className="w-[72.61px] px-2 pt-[9.75px] pb-[10.25px] ml-auto text-right">
                        <div className="text-[#737373] text-[14px] leading-[1.43] text-right" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Actions</div>
                      </div>
                    </div>

                    {/* Body row sample */}
                    <div className="flex items-stretch">
                      <div className="w-[60.14px] px-2 py-[16.25px]">
                        <div className="text-[#0A0A0A] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>fraw</div>
                      </div>
                      <div className="w-[90.53px] px-2 py-[16.25px]">
                        <div className="text-[#0A0A0A] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}>kirichat llc</div>
                      </div>
                      <div className="w-[632.5px] px-2 py-0 flex items-center gap-2">
                        <div className="text-[#0A0A0A] text-[14px] leading-[1.43]" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                          {maskedKey}
                        </div>
                        {/* Show button */}
                        <button className="w-6 h-6 inline-flex items-center justify-center rounded-full hover:bg-[#F5F5F5]" aria-label="Show API key">
                          {/* Eye icon */}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.333 8s2.667-4 6.667-4 6.667 4 6.667 4-2.667 4-6.667 4S1.333 8 1.333 8Z" stroke="#6A7282" strokeWidth="1.333"/>
                            <circle cx="8" cy="8" r="2" stroke="#6A7282" strokeWidth="1.333"/>
                          </svg>
                        </button>
                        {/* Copy button */}
                        <button className="w-6 h-6 inline-flex items-center justify-center rounded-full hover:bg-[#F5F5F5]" aria-label="Copy API key">
                          {/* Copy icon */}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="5" width="8" height="8" rx="1.333" stroke="#6A7282" strokeWidth="1.333"/>
                            <rect x="3" y="3" width="8" height="8" rx="1.333" stroke="#6A7282" strokeWidth="1.333" opacity="0.7"/>
                          </svg>
                        </button>
                      </div>
                      <div className="w-[118.22px] px-2 py-[16.25px]">
                        <div className="text-[#0A0A0A] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}>4 minutes ago</div>
                      </div>
                      <div className="w-[72.61px] px-2 py-2 ml-auto text-right">
                        <button className="w-6 h-6 inline-flex items-center justify-center rounded-full hover:bg-[#F5F5F5]" aria-label="More actions">
                          {/* Dots vertical */}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="3.5" r="1" fill="#6A7282"/>
                            <circle cx="8" cy="8" r="1" fill="#6A7282"/>
                            <circle cx="8" cy="12.5" r="1" fill="#6A7282"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Create New API Key */}
            <div className="bg-white border border-[#DEDEDE] rounded-[14px] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.1)]">
              <div className="p-6">
                <div className="text-[#0A0A0A] text-[18px] leading-[1.56]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 600 }}>Create New API Key</div>
                <div className="mt-1.5 text-[#737373] text-[14px] leading-[1.43]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
                  Create an API key for one of your projects to start using the Promptwatch API.
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Name</label>
                    <div className="h-9">
                      <input
                        type="text"
                        placeholder="e.g., Production API Key"
                        className="w-full h-9 rounded-[8px] border border-[#E5E5E5] bg-white px-[13px] text-[14px] text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#316AFE]/20 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                        style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}
                      />
                    </div>
                  </div>

                  {/* Framework */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px]" style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 500 }}>Framework</label>
                    <div className="h-9">
                      <button
                        className="w-full h-9 inline-flex items-center justify-between rounded-[8px] border border-[#E5E5E5] bg-white px-[13px] text-[14px] text-[#737373] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                        style={{ fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif', fontWeight: 400 }}
                      >
                        <span>Select a framework</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                          <path d="M4 6l4 4 4-4" stroke="#737373" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Button */}
                  <div>
                    <button
                      className="w-full h-9 inline-flex items-center justify-center rounded-[13px] border border-[#316AFE] bg-[#316AFE] text-[#FAFAFA]"
                      style={{
                        fontFamily: 'Geist, Inter, Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                        boxShadow: 'inset 0px 2px 8px 0px rgba(255, 255, 255, 0.56), inset -2px -2px 12px 0px rgba(255, 255, 255, 0.56)'
                      }}
                    >
                      <span className="text-[14px] leading-[1.43]">Create API Key</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
