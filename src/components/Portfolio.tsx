import Image from "next/image";
import { fetchInstagramPosts, type InstagramPost } from "@/lib/instagram";

const CLD_IMG = "https://res.cloudinary.com/zlsmzpdg/image/upload/q_auto,f_auto";
const CLD_VID = "https://res.cloudinary.com/zlsmzpdg/video/upload/q_auto";

type MediaItem =
  | { type: "image"; src: string }
  | { type: "video"; id: string };

const MEDIA: MediaItem[] = [
  // Local editorial photo
  { type: "image", src: "/images/port-2.jpg" },
  // Cloudinary images
  { type: "image", src: `${CLD_IMG}/v1786428091/Black_and_White_Minimalist_Fashion_Model_Comp_Card_-_2_ii1qxx.png` },
  { type: "image", src: `${CLD_IMG}/v1786428086/IMG_1537_eymjxe.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428080/IMG_6978_r5d2lt.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428075/19864146-6EB5-4AB0-BA94-9D72AC2274C3_ynijoz.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428075/8FC48DE3-FE91-41CD-BBA5-A718FB32AFCA_lwknhk.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428074/FE920BE9-C448-4B51-87B0-F45A7FD0B963_vcwgde.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428074/8B6D53E5-BB2C-481D-A82C-D8A041072737_bteqro.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428069/IMG_1738_gyryai.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428066/F01768C9-B3C3-4DF8-8662-63E6C9309381_czmcnp.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428065/544C8738-00CD-4EB0-B9DB-C766019B0E5A_sabtvu.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428063/B19B9376-FB37-42A7-98DD-5943FFCD9D27_bthnnp.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428061/CD7B60BD-F8B5-444D-AF07-FBF5CCEAB0E6_mofzzx.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428059/45b1fd93-a866-4126-98a6-d434bd803c15_b76htj.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428059/d7283f44-d7db-4e31-b184-238080fe6f11_qv4gyz.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428047/IMG_0408_pirgdn.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428043/4350e05c-ca14-423f-b245-442ba247938f_e8yed5.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428042/IMG_6346_ltckeh.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428042/E13C1BDE-29E5-4370-ABDE-41D25D49984B_lhlexv.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428042/5CF06567-B9DD-4815-AB40-ED167D509346_a5ytt0.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428037/7a7ebba3-53d5-4e99-b105-7d7377a66e65_ncrzap.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428031/1043E21B-4A60-4EDF-B807-F68626E23FE9_u13seg.jpg` },
  { type: "image", src: `${CLD_IMG}/v1786428030/e2c8758c-44c9-4dce-a5b1-64d7f6bd2730_kyvrph.jpg` },
  // Videos
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {instaPosts.map((p) => <InstaCard key={p.id} post={p} />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {MEDIA.map((item, i) =>
              item.type === "image" ? (
                <div key={i} className="group relative overflow-hidden bg-[#161616] aspect-[3/4]">
                  <Image
                    src={item.src}
                    alt="Portfolio"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
              ) : (
                <div key={i} className="group relative overflow-hidden bg-[#161616] aspect-[3/4]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={`${CLD_VID}/${item.id}.mp4`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
              )
            )}
          </div>
        )}

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
