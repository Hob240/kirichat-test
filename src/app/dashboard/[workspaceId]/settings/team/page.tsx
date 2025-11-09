"use client";

export default function SettingsTeamPage() {
  const pendingInvites = [
    { email: "john.doe@example.com", invited: "Nov 10, 2025", status: "Pending" },
    { email: "jane.team@example.com", invited: "Nov 8, 2025", status: "Pending" },
  ];

  return (
    <>
      {/* Header aligned to 1024px container */}
      
      <div className="flex-1 p-5">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-[1024px] flex flex-col gap-6">
            {/* Card: Team Members */}
            <div className="bg-white border border-[#DEDEDE] rounded-[15.12px] shadow-[0px_1.08px_2.16px_-1.08px_rgba(0,0,0,0.1),0px_1.08px_3.24px_rgba(0,0,0,0.1)]">
              <div className="p-6">
                <div className="text-[#0A0A0A] [font-family:'Inter',Helvetica] font-semibold text-[18px] leading-[1.56]">Team Members</div>
                <div className="mt-1.5 text-[#737373] [font-family:'Inter',Helvetica] text-[14px] leading-[1.43]">Manage your organization's members and their roles.</div>
              </div>

              <div className="px-6 pb-6">
                <div className="overflow-x-auto overflow-y-auto">
                  <div className="min-w-[625px] w-full">
                    {/* Header */}
                    <div className="flex items-stretch border-b border-[#DEDEDE]">
                      <div className="w-[241.92px] px-[8.64px] pt-[10.53px] pb-[11.07px]">
                        <div className="[font-family:'Inter',Helvetica] text-[#737373] text-[14px] font-medium leading-[1.43]">Email</div>
                      </div>
                      <div className="w-[102.01px] px-[8.64px] pt-[10.53px] pb-[11.07px]">
                        <div className="[font-family:'Inter',Helvetica] text-[#737373] text-[14px] font-medium leading-[1.43]">Role</div>
                      </div>
                      <div className="w-[166.2px] px-[8.64px] pt-[10.53px] pb-[11.07px]">
                        <div className="[font-family:'Inter',Helvetica] text-[#737373] text-[14px] font-medium leading-[1.43]">Joined</div>
                      </div>
                      <div className="w-[115.05px] px-[8.64px] pt-[10.53px] pb-[11.07px] ml-auto text-right">
                        <div className="text-right" style={{ fontFamily: "Geist, Inter, Helvetica, Arial, sans-serif" }}>
                          <span className="text-[#737373] text-[14px] font-medium leading-[1.43]">Actions</span>
                        </div>
                      </div>
                    </div>

                    {/* Body: single row based on design */}
                    <div className="flex items-stretch">
                      <div className="w-[241.92px] px-[8.64px] py-[8.64px]">
                        <div className="[font-family:'Inter',Helvetica] text-[#0A0A0A] text-[14px] leading-[1.43]">nersaview8business@gmail.com</div>
                      </div>
                      <div className="w-[102.01px] px-[8.64px] py-[8.64px]">
                        <div className="[font-family:'Inter',Helvetica] text-[#0A0A0A] text-[14px] leading-[1.43]">Owner</div>
                      </div>
                      <div className="w-[166.2px] px-[8.64px] py-[8.64px]">
                        <div className="[font-family:'Inter',Helvetica] text-[#0A0A0A] text-[14px] leading-[1.43]">Nov 3, 2025</div>
                      </div>
                      <div className="w-[115.05px] px-[8.64px] pt-[12.42px] pb-[9.72px] ml-auto text-right">
                        <div className="text-right" style={{ fontFamily: "Geist, Inter, Helvetica, Arial, sans-serif" }}>
                          <span className="text-[#737373] text-[14px] leading-[1.33]">-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Invite New Member */}
            <div className="bg-white border border-[#DEDEDE] rounded-[15.12px] shadow-[0px_1.08px_2.16px_-1.08px_rgba(0,0,0,0.1),0px_1.08px_3.24px_rgba(0,0,0,0.1)]">
              <div className="p-6">
                <div className="text-[#0A0A0A] [font-family:'Inter',Helvetica] font-semibold text-[18px] leading-[1.56]">Invite New Member</div>
                <div className="mt-1.5 text-[#737373] [font-family:'Inter',Helvetica] text-[14px] leading-[1.43]">Enter the email address of the user you want to invite.</div>
              </div>

              <div className="px-6 pb-6">
                <div className="w-full flex">
                  <div className="flex-1 pr-[8.64px]">
                    <div className="h-9">
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className="w-full h-9 rounded-[8.64px] border border-[#E5E5E5] bg-white px-[14px] text-[14px] text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[#316AFE]/20 shadow-[0px_1.08px_2.16px_rgba(0,0,0,0.05)]"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="h-9 inline-flex items-center justify-center px-[17px] rounded-[13px] border border-[#316AFE] bg-[#316AFE] text-[#FAFAFA]"
                      style={{
                        fontFamily: "Geist, Inter, Helvetica, Arial, sans-serif",
                        boxShadow: "inset 0px 2px 8px 0px rgba(255, 255, 255, 0.56), inset -2px -2px 12px 0px rgba(255, 255, 255, 0.56)"
                      }}
                    >
                      <span className="text-[14px] font-semibold leading-[1.43]">Send Invite</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Pending Invitations */}
            <div className="bg-white border border-[#DEDEDE] rounded-[15.12px] shadow-[0px_1.08px_2.16px_-1.08px_rgba(0,0,0,0.1),0px_1.08px_3.24px_rgba(0,0,0,0.1)]">
              <div className="p-6">
                <div className="text-[#0A0A0A] [font-family:'Inter',Helvetica] font-semibold text-[18px] leading-[1.56]">Pending Invitations</div>
                <div className="mt-1.5 text-[#737373] [font-family:'Inter',Helvetica] text-[14px] leading-[1.43]">These users have been invited but haven't accepted yet.</div>
              </div>
              <div className="px-6 pb-6">
                {pendingInvites.length === 0 ? (
                  <div className="flex items-center justify-center">
                    <div className="text-center text-[#737373] [font-family:'Inter',Helvetica] text-[14px] leading-[1.43]">No pending invitations.</div>
                  </div>
                ) : (
                  <div className="overflow-x-auto overflow-y-auto">
                    <div className="min-w-[625px] w-full">
                      <div className="flex items-stretch border-b border-[#DEDEDE]">
                        <div className="w-[241.92px] px-[8.64px] pt-[10.53px] pb-[11.07px]">
                          <div className="[font-family:'Inter',Helvetica] text-[#737373] text-[14px] font-medium leading-[1.43]">Email</div>
                        </div>
                        <div className="w-[166.2px] px-[8.64px] pt-[10.53px] pb-[11.07px]">
                          <div className="[font-family:'Inter',Helvetica] text-[#737373] text-[14px] font-medium leading-[1.43]">Invited</div>
                        </div>
                        <div className="w-[102.01px] px-[8.64px] pt-[10.53px] pb-[11.07px]">
                          <div className="[font-family:'Inter',Helvetica] text-[#737373] text-[14px] font-medium leading-[1.43]">Status</div>
                        </div>
                        <div className="w-[115.05px] px-[8.64px] pt-[10.53px] pb-[11.07px] ml-auto text-right">
                          <div className="text-right" style={{ fontFamily: "Geist, Inter, Helvetica, Arial, sans-serif" }}>
                            <span className="text-[#737373] text-[14px] font-medium leading-[1.43]">Actions</span>
                          </div>
                        </div>
                      </div>
                      {pendingInvites.map((inv, idx) => (
                        <div key={idx} className="flex items-stretch">
                          <div className="w-[241.92px] px-[8.64px] py-[8.64px]">
                            <div className="[font-family:'Inter',Helvetica] text-[#0A0A0A] text-[14px] leading-[1.43]">{inv.email}</div>
                          </div>
                          <div className="w-[166.2px] px-[8.64px] py-[8.64px]">
                            <div className="[font-family:'Inter',Helvetica] text-[#0A0A0A] text-[14px] leading-[1.43]">{inv.invited}</div>
                          </div>
                          <div className="w-[102.01px] px-[8.64px] py-[8.64px]">
                            <div className="[font-family:'Inter',Helvetica] text-[#0A0A0A] text-[14px] leading-[1.43]">{inv.status}</div>
                          </div>
                          <div className="w-[115.05px] px-[8.64px] pt-[12.42px] pb-[9.72px] ml-auto text-right">
                            <div className="flex gap-3 justify-end [font-family:'Inter',Helvetica] text-[14px]">
                              <button className="text-[#316AFE] hover:underline">Resend</button>
                              <button className="text-[#737373] hover:underline">Cancel</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
