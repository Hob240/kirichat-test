import { Topbar } from "@/components/Topbar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Topbar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
