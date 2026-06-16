export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-[family-name:var(--font-jost)] text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">
            About
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-neutral-900 mb-8 leading-tight">
            The Face Behind
            <br />
            <em>the Frame</em>
          </h2>
          <p className="font-[family-name:var(--font-jost)] text-sm text-neutral-600 leading-relaxed mb-4">
            Anneika JC is a professional model based in [Location], working across fashion,
            editorial, and commercial projects. With a passion for storytelling through image,
            she brings authenticity and presence to every shoot.
          </p>
          <p className="font-[family-name:var(--font-jost)] text-sm text-neutral-600 leading-relaxed">
            Available for bookings worldwide. Represented by [Agency Name].
          </p>
        </div>

        <div className="space-y-6">
          {[
            ["Height", "5′ 10″"],
            ["Bust", "32″"],
            ["Waist", "24″"],
            ["Hips", "34″"],
            ["Dress Size", "US 2 / EU 34"],
            ["Shoe Size", "US 9 / EU 40"],
            ["Hair", "Black"],
            ["Eyes", "Brown"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between border-b border-neutral-200 pb-2"
            >
              <span className="font-[family-name:var(--font-jost)] text-xs tracking-widest uppercase text-neutral-400">
                {label}
              </span>
              <span className="font-[family-name:var(--font-cormorant)] text-lg text-neutral-800">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
