export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.2),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 relative">
        <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-300 bg-white/50 dark:bg-neutral-900/50 backdrop-blur">
          Modern • Classical
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl tracking-tight font-semibold leading-[1.1]">
          Menuliskan jejak rasa, kata, dan rupa
          <span className="block text-neutral-500 dark:text-neutral-300 italic font-normal">— blog personal bernapas sastra & seni</span>
        </h1>
        <p className="mt-6 max-w-2xl text-neutral-600 dark:text-neutral-300">
          Tempatku merawat puisi, esai pendek, dan catatan harian. Nada klasik, napas modern. Silakan singgah, baca perlahan.
        </p>
      </div>
    </section>
  );
}
