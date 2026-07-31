import Image from "next/image";
import { fetchInstagramPosts, type InstagramPost } from "@/lib/instagram";

const LOCAL_IMAGES = [
  { src: "/images/port-1.jpg", alt: "Editorial — red Mercedes" },
  { src: "/images/port-2.jpg", alt: "Fashion — garage editorial" },
  { src: "/images/port-3.jpg", alt: "Runway — live show" },
  { src: "/images/port-4.jpg", alt: "Creative — carnival costume" },
];

function InstaCard({ post }: { post: InstagramPost }) {
  const src = post.media_type === "VIDEO" ? post.thumbnail_url! : post.media_url;
  return (
    <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-[#161616] block aspect-[3/4]">
      <Image src={src} alt={post.caption?.slice(0, 60) ?? "Portfolio"} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
        <span className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.3em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View on Instagram</span>
      </div>
    </a>
  );
}

export default async function Portfolio() {
  const instaPosts = await fetchInstagramPosts();
  const hasInsta = instaPosts.length > 0;

  return (
    <section id="portfolio" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.4em] uppercase text-[#c4622d] mb-4">
              02 — Portfolio
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#f0ebe0] leading-tight">
              Selected<br /><em className="italic">Work</em>
            </h2>
          </div>
          {hasInsta && (
            <a
              href="https://www.instagram.com/annneika.jc"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase text-[#8a8478] hover:text-[#c4622d] transition-colors border-b border-[rgba(240,235,224,0.12)] pb-0.5"
            >
              @annneika.jc ↗
            </a>
          )}
        </div>

        {hasInsta ? (
          /* Instagram grid */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {instaPosts.map((p) => <InstaCard key={p.id} post={p} />)}
          </div>
        ) : (
          /* Static portfolio grid — irregular, editorial feel */
          <div className="grid grid-cols-2 md:grid-cols-12 gap-1 auto-rows-[280px] md:auto-rows-[340px]">
            {/* Large left - spans 7 cols, 2 rows */}
            <div className="group relative overflow-hidden bg-[#161616] col-span-2 md:col-span-7 md:row-span-2">
              <Image src={LOCAL_IMAGES[0].src} alt={LOCAL_IMAGES[0].alt} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 60vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Top right - 5 cols */}
            <div className="group relative overflow-hidden bg-[#161616] col-span-1 md:col-span-5">
              <Image src={LOCAL_IMAGES[1].src} alt={LOCAL_IMAGES[1].alt} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 50vw, 42vw" />
            </div>
            {/* Bottom right - 5 cols */}
            <div className="group relative overflow-hidden bg-[#161616] col-span-1 md:col-span-5">
              <Image src={LOCAL_IMAGES[2].src} alt={LOCAL_IMAGES[2].alt} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 50vw, 42vw" />
            </div>
            {/* Bottom full-width strip */}
            <div className="group relative overflow-hidden bg-[#161616] col-span-2 md:col-span-12 h-[200px] md:h-[260px]">
              <Image src={LOCAL_IMAGES[3].src} alt={LOCAL_IMAGES[3].alt} fill className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/70 via-transparent to-[#0c0c0c]/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl italic text-white/90 tracking-wider">Live Runway</p>
              </div>
            </div>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/annneika.jc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-jost)] text-[10px] tracking-[0.3em] uppercase border border-[rgba(240,235,224,0.2)] text-[#8a8478] px-10 py-3.5 hover:border-[#c4622d] hover:text-[#c4622d] transition-all duration-300 inline-block"
          >
            Follow @annneika.jc on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
