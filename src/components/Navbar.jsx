import { Feather } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-rose-300 to-indigo-300 text-neutral-800 shadow ring-1 ring-black/5">
            <Feather size={18} />
          </span>
          <div className="leading-tight">
            <div className="text-lg sm:text-xl font-semibold tracking-wide">
              Catatan Klasik
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 italic">
              sastra • seni • renung
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#tulis" className="hover:underline underline-offset-4">Tulis</a>
          <a href="#karya" className="hover:underline underline-offset-4">Karya</a>
          <a href="#tentang" className="hover:underline underline-offset-4">Tentang</a>
        </nav>
      </div>
    </header>
  );
}
