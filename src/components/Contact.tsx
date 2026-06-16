export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-neutral-900 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-[family-name:var(--font-jost)] text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">
          Contact
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-light mb-6 leading-tight">
          Let&apos;s Work
          <br />
          <em>Together</em>
        </h2>
        <p className="font-[family-name:var(--font-jost)] text-sm text-neutral-400 leading-relaxed mb-10">
          Available for fashion editorials, lookbooks, campaigns, runway, and commercial work.
          Get in touch to discuss your project.
        </p>

        <a
          href="mailto:hello@anneikajc.com"
          className="inline-block font-[family-name:var(--font-jost)] text-xs tracking-[0.25em] uppercase border border-white text-white px-10 py-3 hover:bg-white hover:text-neutral-900 transition-all duration-300"
        >
          Get in Touch
        </a>

        <div className="mt-16 pt-10 border-t border-neutral-800 flex justify-center gap-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-jost)] text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="font-[family-name:var(--font-jost)] text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-10 font-[family-name:var(--font-jost)] text-xs text-neutral-600">
          © {new Date().getFullYear()} Anneika JC. All rights reserved.
        </p>
      </div>
    </section>
  );
}
