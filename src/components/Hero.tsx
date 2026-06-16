export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#fafaf8]"
    >
      <p className="font-[family-name:var(--font-jost)] text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">
        Model &amp; Creative
      </p>

      <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light tracking-wide text-neutral-900 leading-none">
        Anneika
        <br />
        <span className="italic font-light">JC</span>
      </h1>

      <p className="mt-8 font-[family-name:var(--font-jost)] text-sm tracking-widest text-neutral-500 uppercase">
        Fashion &bull; Editorial &bull; Commercial
      </p>

      <a
        href="#portfolio"
        className="mt-16 font-[family-name:var(--font-jost)] text-xs tracking-[0.25em] uppercase border border-neutral-300 text-neutral-600 px-8 py-3 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
      >
        View Portfolio
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-neutral-300" />
      </div>
    </section>
  );
}
