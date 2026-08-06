const VIDEO_URL =
  "https://res.cloudinary.com/zlsmzpdg/video/upload/q_auto/copy_04ECC168-4B41-4C18-B6E0-651A7B69CFBB_yowu1z.mp4";

export default function Showreel() {
  return (
    <section
      id="showreel"
      className="py-32 px-6 md:px-10 border-t border-[rgba(240,235,224,0.08)]"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.4em] uppercase text-[#c4622d] mb-16">
          03 — Showreel
        </p>

        <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-end mb-14">
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-[#f0ebe0] leading-[0.95]">
            On Camera,
            <br />
            <em className="italic text-[#c4622d]">In Motion</em>
          </h2>
          <p className="font-[family-name:var(--font-jost)] text-sm font-light text-[#8a8478] leading-relaxed">
            Ten years of runway, editorial, and commercial work — distilled.
            Watch the full reel below.
          </p>
        </div>

        {/* Video player */}
        <div className="relative w-full bg-[#080808] border border-[rgba(240,235,224,0.06)]">
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full max-h-[80vh] object-contain block"
            style={{ aspectRatio: "auto" }}
          >
            <source src={VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        <p className="mt-5 font-[family-name:var(--font-jost)] text-[9px] tracking-[0.3em] uppercase text-[#8a8478] text-right">
          Full length reel &bull; 2025
        </p>
      </div>
    </section>
  );
}
