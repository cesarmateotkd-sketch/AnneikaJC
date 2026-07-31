export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-10 border-t border-[rgba(240,235,224,0.08)]">
      <div className="max-w-7xl mx-auto">
        <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.4em] uppercase text-[#c4622d] mb-16">
          04 — Contact
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-end">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-[#f0ebe0] leading-[0.95] mb-10">
              Let&apos;s Work
              <br />
              <em className="italic text-[#c4622d]">Together</em>
            </h2>
            <p className="font-[family-name:var(--font-jost)] text-sm font-light text-[#8a8478] leading-relaxed mb-10 max-w-sm">
              Open for bookings — fashion editorials, lookbooks, campaigns, runway,
              and commercial work. Also accepting coaching inquiries for one-on-one
              and package sessions.
            </p>
            <a
              href="mailto:hello@anneikajc.com"
              className="inline-block font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase bg-[#c4622d] text-white px-10 py-4 hover:bg-[#e07840] transition-colors duration-300"
            >
              Send a Message
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.35em] uppercase text-[#8a8478] mb-2">
                Email
              </p>
              <a
                href="mailto:hello@anneikajc.com"
                className="font-[family-name:var(--font-cormorant)] text-2xl text-[#f0ebe0] hover:text-[#c4622d] transition-colors"
              >
                hello@anneikajc.com
              </a>
            </div>

            <div>
              <p className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.35em] uppercase text-[#8a8478] mb-2">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/annneika.jc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-cormorant)] text-2xl text-[#f0ebe0] hover:text-[#c4622d] transition-colors"
              >
                @annneika.jc
              </a>
            </div>

            <div>
              <p className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.35em] uppercase text-[#8a8478] mb-2">
                Availability
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#f0ebe0]">
                Open for Bookings
              </p>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-24 pt-8 border-t border-[rgba(240,235,224,0.08)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.2em] text-[#8a8478]">
            © {new Date().getFullYear()} Anneika JC. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-lg italic text-[#8a8478]">
            Model &bull; Coach &bull; Creative
          </p>
        </div>
      </div>
    </section>
  );
}
