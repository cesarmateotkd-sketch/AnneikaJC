const VIDEO_URL =
  "https://res.cloudinary.com/zlsmzpdg/video/upload/q_auto/copy_04ECC168-4B41-4C18-B6E0-651A7B69CFBB_yowu1z.mp4";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Full-bleed background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={`${BASE}/images/hero.jpg`}
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Gradient overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/60 via-transparent to-transparent" />
      </div>

      {/* Text — bottom-left anchored */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
        <div className="max-w-xl fade-up">
          <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.4em] uppercase text-[#c4622d] mb-5">
            Model &bull; Coach &bull; Creative
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-7xl md:text-9xl font-light leading-[0.9] text-[#f0ebe0] mb-8">
            Anneika
            <br />
            <em className="italic text-[#c4622d]">JC</em>
          </h1>
          <p className="font-[family-name:var(--font-jost)] text-xs tracking-[0.25em] uppercase text-[#8a8478] mb-10">
            Fashion &bull; Editorial &bull; Runway &bull; Commercial
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase bg-[#c4622d] text-white px-8 py-3.5 hover:bg-[#e07840] transition-colors duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#coaching"
              className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase border border-[rgba(240,235,224,0.3)] text-[#f0ebe0] px-8 py-3.5 hover:border-[#c4622d] hover:text-[#c4622d] transition-all duration-300"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-3">
        <span className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.3em] uppercase text-[#8a8478] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-[#8a8478] to-transparent" />
      </div>
    </section>
  );
}
