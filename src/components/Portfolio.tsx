import Image from "next/image";
import { fetchInstagramPosts, type InstagramPost } from "@/lib/instagram";

function PostCard({ post }: { post: InstagramPost }) {
  const imgSrc = post.media_type === "VIDEO" ? post.thumbnail_url! : post.media_url;

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square overflow-hidden bg-neutral-100"
    >
      <Image
        src={imgSrc}
        alt={post.caption?.slice(0, 80) ?? "Portfolio image"}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}

function PlaceholderGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-square bg-neutral-100 flex items-center justify-center">
          <p className="font-[family-name:var(--font-jost)] text-xs text-neutral-400 text-center px-4">
            Connect Instagram to display photos
          </p>
        </div>
      ))}
    </div>
  );
}

export default async function Portfolio() {
  const posts = await fetchInstagramPosts();
  const hasPosts = posts.length > 0;

  return (
    <section id="portfolio" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-[family-name:var(--font-jost)] text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">
            Portfolio
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-neutral-900 leading-tight">
            Latest Work
          </h2>
          <p className="mt-4 font-[family-name:var(--font-jost)] text-xs tracking-widest text-neutral-400 uppercase">
            via Instagram
          </p>
        </div>

        {hasPosts ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-jost)] text-xs tracking-[0.25em] uppercase border border-neutral-300 text-neutral-600 px-8 py-3 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
              >
                Follow on Instagram
              </a>
            </div>
          </>
        ) : (
          <PlaceholderGrid />
        )}
      </div>
    </section>
  );
}
