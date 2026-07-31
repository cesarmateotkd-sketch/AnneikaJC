export default function About() {
  const stats = [
    ["Experience", "10+ Years"],
    ["Specialties", "Editorial, Runway, Commercial"],
    ["Height", "5′ 10″"],
    ["Bust / Waist / Hips", "32″ / 24″ / 34″"],
    ["Dress Size", "US 2 — EU 34"],
    ["Shoe", "US 9 — EU 40"],
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
            Anneika JC is a professional model with over ten years of experience
            across fashion editorial, runway, and commercial work. Her portfolio
            spans magazine spreads, brand campaigns, and live runway productions
            across the US and internationally.
          </p>
          <p className="font-[family-name:var(--font-jost)] text-sm font-light text-[#8a8478] leading-relaxed mb-10">
            Beyond the lens, she brings that same expertise into the studio as a
            modeling coach — helping emerging talent build confidence, refine
            their technique, and navigate the industry with clarity.
          </p>
          <a
            href="#coaching"
            className="inline-block font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#c4622d] border-b border-[#c4622d] pb-0.5 hover:text-[#e07840] hover:border-[#e07840] transition-colors"
          >
            Explore Coaching →
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
