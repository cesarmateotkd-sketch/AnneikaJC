import Image from "next/image";
import { fetchInstagramPosts, type InstagramPost } from "@/lib/instagram";

const CLOUD = "https://res.cloudinary.com/zlsmzpdg/video/upload/q_auto";

const MEDIA: ({ type: "image"; src: string; alt: string } | { type: "video"; id: string })[] = [
  { type: "image", src: "/images/port-2.jpg", alt: "Editorial — parking garage" },
  { type: "video", id: "copy_1F721C15-1897-4B0B-8EAD-9D70B68EA5C5_nittpb" },
  { type: "video", id: "copy_1211A507-6602-423E-8AF3-61E757AC6CF6_jpokmm" },
  { type: "video", id: "IMG_3332_hmoye4" },
  { type: "video", id: "IMG_2164_aow7rb" },
  { type: "video", id: "copy_04ECC168-4B41-4C18-B6E0-651A7B69CFBB_yowu1z" },
  { type: "video", id: "copy_6648DB58-1728-4C94-B606-337D4019A349_r93ltb" },
];

function InstaCard({ post }: { post: InstagramPost }) {
  const src = post.media_type === "VIDEO" ? post.thumbnail_url! : post.media_url;
  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden bg-[#161616] block aspect-[3/4]"
    >
      <Image
        src={src}
        alt={post.caption?.slice(0, 60) ?? "Portfolio"}
        fill
        sizes="(max-width:768px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
        <span className="font-[family-name:var(--font-jost)] text-[9px] tracking-[0.3em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View on Instagram
        </span>
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
          /* Mixed media grid — photo + videos */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {MEDIA.map((item, i) =>
              item.type === "image" ? (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-[#161616] aspect-[3/4]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ) : (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-[#161616] aspect-[3/4]"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={`${CLOUD}/${item.id}.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
              )
            )}
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
