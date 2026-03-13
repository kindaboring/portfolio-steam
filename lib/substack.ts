export interface SubstackArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

export async function getSubstackArticles(
  substackUrl: string
): Promise<SubstackArticle[]> {
  try {
    const feedUrl = `${substackUrl.replace(/\/$/, "")}/feed`;
    const response = await fetch(feedUrl, { next: { revalidate: 3600 } });
    if (!response.ok) return [];

    const xml = await response.text();
    const items: SubstackArticle[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null && items.length < 4) {
      const item = match[1];

      const title =
        (
          item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) ||
          item.match(/<title>(.*?)<\/title>/)
        )?.[1]?.trim() || "";

      const link =
        item.match(/<link>(.*?)<\/link>/)?.[1]?.trim() ||
        item.match(/<link[^>]*href="([^"]+)"/)?.[1]?.trim() ||
        "";

      const pubDate =
        item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1]?.trim() || "";

      const descRaw =
        (
          item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) ||
          item.match(/<description>([\s\S]*?)<\/description>/)
        )?.[1] || "";

      const description =
        stripHtml(descRaw).slice(0, 180) + (descRaw.length > 180 ? "…" : "");

      if (title) items.push({ title, link, pubDate, description });
    }

    return items;
  } catch {
    return [];
  }
}
