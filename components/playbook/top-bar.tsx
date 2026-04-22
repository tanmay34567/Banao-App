import { Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="border-b border-[#ece9f6] bg-white px-4 py-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto flex max-w-[1520px] flex-wrap items-center justify-between gap-3 md:grid md:grid-cols-[auto_1fr_auto] md:gap-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-[8px] bg-[#efecee] text-sm font-semibold text-[#857e87]">
              B
            </div>
            <span className="text-base font-semibold text-[#252a3d]">Banao</span>
          </div>
        </div>

        <nav className="order-3 hidden items-center justify-center gap-8 text-sm font-medium text-[#8b90a2] md:order-none md:flex">
          <a href="#playbook" className="transition hover:text-[#252a3d]">
            Playbook
          </a>
          <a href="#pipeline" className="transition hover:text-[#252a3d]">
            Pipeline
          </a>
          <a href="#team" className="transition hover:text-[#252a3d]">
            Team
          </a>
          <a href="#library" className="transition hover:text-[#252a3d]">
            Library
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 min-w-[150px] items-center gap-2 rounded-full border border-[#ece9f6] bg-white px-3 text-sm text-[#8b90a2] shadow-sm sm:min-w-[220px]">
            <Search className="h-3.5 w-3.5" />
            <span className="flex-1 truncate">Search playbook</span>
            <span className="hidden rounded-md border border-[#ece9f6] px-1.5 py-0.5 text-[10px] font-semibold text-[#8f93a7] sm:inline-flex">
              ⌘K
            </span>
          </div>
          <div className="h-8 w-8 rounded-full bg-[linear-gradient(135deg,#6c63ff,#40c8c8)]" />
        </div>
      </div>
    </header>
  );
}
