import {
    ourNewsSectionData,
    type IOurNewsSectionData,
} from "@/components/page-components/Home/OurNewsAndCareersSection/OurNewsBodySection/OurNewsListSection/data";

const NEWSDATA_LATEST = "https://newsdata.io/api/1/latest";

interface NewsDataArticle {
    article_id: string;
    title: string;
    link: string;
    description?: string | null;
    content?: string | null;
    image_url?: string | null;
    pubDate: string;
}

interface NewsDataLatestResponse {
    status: string;
    results?: NewsDataArticle[];
}

const fallbackImages = ourNewsSectionData.map((item) => item.image);

/**
 * Accepts either a raw key (`pub_…`) or a mistaken full dashboard/URL paste
 * (`https://newsdata.io/api/1/latest?apikey=pub_…`).
 */
function normalizeNewsdataApiKey(raw: string | undefined): string | undefined {
    if (!raw) return undefined;
    let v = raw.trim();
    if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
    ) {
        v = v.slice(1, -1).trim();
    }
    if (!v) return undefined;

    if (v.startsWith("http://") || v.startsWith("https://")) {
        try {
            const u = new URL(v);
            return (
                u.searchParams.get("apikey")?.trim() ||
                u.searchParams.get("api_key")?.trim() ||
                undefined
            );
        } catch {
            return undefined;
        }
    }

    return v;
}

function stripHtml(text: string): string {
    return text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function formatPubDate(pubDate: string): string {
    const d = new Date(pubDate);
    if (Number.isNaN(d.getTime())) return pubDate;
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

function excerpt(text: string, maxLen: number): string {
    const t = text.length > maxLen ? `${text.slice(0, maxLen).trim()}…` : text;
    return t;
}

function mapArticle(article: NewsDataArticle, index: number): IOurNewsSectionData {
    const fallback = fallbackImages[index % fallbackImages.length];
    const rawDesc =
        article.description?.trim() ||
        (article.content ? stripHtml(article.content) : "") ||
        "";
    const description = excerpt(rawDesc, 220);

    const remoteSrc = article.image_url?.trim();
    const src = remoteSrc && remoteSrc.startsWith("http") ? remoteSrc : fallback.src;

    return {
        id: article.article_id,
        image: {
            src,
            alt: article.title || fallback.alt,
            width: fallback.width,
            height: fallback.height,
        },
        title: article.title,
        description,
        date: formatPubDate(article.pubDate),
        link: article.link,
    };
}

/**
 * Fetches latest technology news from NewsData.io (server-only).
 * Set NEWSDATA_API_KEY in `.env.local`. Falls back to static content if unset or on error.
 * @see https://newsdata.io/documentation
 */
export async function fetchTechnologyNewsList(): Promise<IOurNewsSectionData[]> {
    const apiKey = normalizeNewsdataApiKey(process.env.NEWSDATA_API_KEY);
    if (!apiKey) {
        return ourNewsSectionData;
    }

    try {
        const url = new URL(NEWSDATA_LATEST);
        url.searchParams.set("apikey", apiKey);
        url.searchParams.set("category", "technology");
        url.searchParams.set("language", "en");
        url.searchParams.set("size", "6");

        const res = await fetch(url.toString(), {
            next: { revalidate: 120 },
            headers: { Accept: "application/json" },
        });

        if (!res.ok) {
            return ourNewsSectionData;
        }

        const json = (await res.json()) as NewsDataLatestResponse;
        if (json.status !== "success" || !json.results?.length) {
            return ourNewsSectionData;
        }

        return json.results.map(mapArticle);
    } catch {
        return ourNewsSectionData;
    }
}
