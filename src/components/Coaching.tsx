const tiers = [
  {
    name: "Single Session",
    tagline: "One-on-one, focused",
    options: [
      { label: "60 min", price: "$175" },
      { label: "90 min", price: "$250" },
    ],
    includes: [
      "Runway technique & turns",
      "Posing for print & editorial",
      "On-camera movement",
      "Personalised feedback",
    ],
    cta: "Book a Session",
    highlight: false,
  },
  {
    name: "Starter Pack",
    tagline: "4 sessions · Save $50",
    options: [{ label: "4 × 90 min sessions", price: "$650" }],
    includes: [
      "Everything in Single Session",
      "Commercial & high-fashion posing",
      "Body mechanics & presence",
      "Agency submission tips",
      "Between-session support",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Transform Pack",
    tagline: "8 sessions · Save $200",
    options: [{ label: "8 × 90 min sessions", price: "$1,200" }],
    includes: [
      "Everything in Starter Pack",
      "Portfolio review & direction",
      "Mock casting / audition prep",
      "Grooming & brand identity",
      "Industry rate guidance",
      "Priority scheduling",
    ],
    cta: "Book Now",
    highlight: false,
  },
  {
    name: "Elite Program",
    tagline: "12 sessions · Full transformation",
    options: [{ label: "12 × 90 min + on-set coaching", price: "$1,800" }],
    includes: [
      "Everything in Transform Pack",
      "On-set / photoshoot coaching",
      "Agency outreach strategy",
      "Digital presence review",
      "Unlimited WhatsApp support",
      "Certificate of completion",
    ],
    cta: "Apply Now",
    highlight: false,
  },
];

const included = [
  "Runway walk & turns",
  "Print & editorial posing",
  "Commercial posing",
  "On-camera movement",
  "Confidence & presence",
  "Industry knowledge",
  "Portfolio guidance",
  "Casting prep",
];

export default function Coaching() {
  return (
    <section id="coaching" className="py-32 px-6 md:px-10 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.4em] uppercase text-[#c4622d] mb-16">
          04 — Coaching
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#f0ebe0] leading-tight">
              Learn from
              <br />
              <em className="italic text-[#c4622d]">the Inside</em>
            </h2>
          </div>
          <div>
            <p className="font-[family-name:var(--font-jost)] text-sm font-light text-[#8a8478] leading-relaxed">
              Ten years in the industry means knowing exactly what agencies look
              for, what photographers need, and how to carry yourself in any room.
              Sessions are 100% private, customised to your goals, and available
              in-person or online.
            </p>
          </div>
        </div>

        {/* What's covered strip */}
        <div className="border-y border-[rgba(240,235,224,0.08)] py-8 mb-16 overflow-x-auto">
          <div className="flex gap-8 md:gap-12 min-w-max md:min-w-0 flex-wrap">
            {included.map((item) => (
              <span key={item} className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.25em] uppercase text-[#8a8478] whitespace-nowrap">
                <span className="text-[#c4622d] mr-2">✦</span>{item}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-7 border transition-all duration-300 group hover:border-[#c4622d] ${
                tier.highlight
                  ? "border-[#c4622d] bg-[#c4622d]/8"
                  : "border-[rgba(240,235,224,0.1)] bg-[#111]"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 font-[family-name:var(--font-jost)] text-[9px] tracking-[0.3em] uppercase bg-[#c4622d] text-white px-3 py-1">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <p className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.3em] uppercase text-[#8a8478] mb-2">
                  {tier.tagline}
                </p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#f0ebe0] font-light">
                  {tier.name}
                </h3>
              </div>

              {/* Price(s) */}
              <div className="mb-6 space-y-2">
                {tier.options.map((opt) => (
                  <div key={opt.label} className="flex items-baseline justify-between">
                    <span className="font-[family-name:var(--font-jost)] text-[10px] text-[#8a8478]">
                      {opt.label}
                    </span>
                    <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#f0ebe0]">
                      {opt.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(240,235,224,0.08)] mb-6" />

              {/* Includes */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="text-[#c4622d] text-xs mt-0.5">✦</span>
                    <span className="font-[family-name:var(--font-jost)] text-[11px] text-[#8a8478] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase py-3.5 transition-all duration-300 ${
                  tier.highlight
                    ? "bg-[#c4622d] text-white hover:bg-[#e07840]"
                    : "border border-[rgba(240,235,224,0.2)] text-[#f0ebe0] group-hover:border-[#c4622d] group-hover:text-[#c4622d]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-center font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] text-[#8a8478]">
          All sessions available in-person or via video call &bull; Custom packages available on request
        </p>
      </div>
    </section>
  );
}
