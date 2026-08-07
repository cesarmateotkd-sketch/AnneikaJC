export default function About() {
  const stats = [
    ["Experience", "10+ Years"],
    ["Specialties", "Editorial, Runway, Commercial, UGC"],
    ["Height", "5′ 9″"],
    ["Bust", "34″"],
    ["Waist", "24″"],
    ["Hips", "35″"],
    ["Size", "Small"],
    ["Shoe", "US 7.5"],
    ["Hair", "Black"],
    ["Eyes", "Dark Brown"],
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section label */}
      <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.4em] uppercase text-[#c4622d] mb-16">
        01 — About
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#f0ebe0] leading-tight mb-8">
            A Decade of
            <br />
            <em className="italic text-[#c4622d]">Presence</em>
          </h2>
          <p className="font-[family-name:var(--font-jost)] text-sm font-light text-[#8a8478] leading-relaxed mb-5">
            Anneika JC is a professional model and creative director with over
            ten years in the industry. Her career spans fashion editorials,
            runway productions, commercial campaigns, and music video work —
            with features in <em className="text-[#f0ebe0]">Vogue</em> and{" "}
            <em className="text-[#f0ebe0]">Glamour</em> magazine.
          </p>
          <p className="font-[family-name:var(--font-jost)] text-sm font-light text-[#8a8478] leading-relaxed mb-5">
            She has worked with household names including{" "}
            <em className="text-[#f0ebe0]">Gold Bond</em> and{" "}
            <em className="text-[#f0ebe0]">Garnier</em>, and continues to
            deliver consistent UGC content for brands across beauty, fashion,
            and lifestyle.
          </p>
          <p className="font-[family-name:var(--font-jost)] text-sm font-light text-[#8a8478] leading-relaxed mb-10">
            Behind the scenes she operates as a creative director — bringing
            vision and precision to every project she touches.
          </p>
          <a
            href="#portfolio"
            className="inline-block font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#c4622d] border-b border-[#c4622d] pb-0.5 hover:text-[#e07840] hover:border-[#e07840] transition-colors"
          >
            View Portfolio →
          </a>
        </div>

        {/* Stats */}
        <div className="border-t border-[rgba(240,235,224,0.12)]">
          {stats.map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between items-baseline py-4 border-b border-[rgba(240,235,224,0.08)] group"
            >
              <span className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#8a8478] group-hover:text-[#c4622d] transition-colors">
                {label}
              </span>
              <span className="font-[family-name:var(--font-cormorant)] text-xl text-[#f0ebe0]">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
