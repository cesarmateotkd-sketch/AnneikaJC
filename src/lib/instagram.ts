export interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return [];
  }

  const fields = "id,media_type,media_url,thumbnail_url,permalink,caption,timestamp";
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${token}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 }, // re-fetch at most once per hour
  });

  if (!res.ok) {
    console.error("Instagram API error:", await res.text());
    return [];
  }

  const data = await res.json();
  return (data.data as InstagramPost[]).filter(
    (p) => p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM"
  );
}
