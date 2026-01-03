import { XMLParser } from 'fast-xml-parser';

const feeds = [
    { url: 'https://www.punto-informatico.it/feed/', source: 'Punto Informatico' },
    { url: 'https://www.ilsoftware.it/feed/', source: 'Il Software' },
    { url: 'https://www.bleepingcomputer.com/feed/', source: 'BleepingComputer' },
    { url: 'https://feeds.arstechnica.com/arstechnica/index', source: 'Ars Technica' }
];

export interface NewsItem {
    title: string;
    link: string;
    date: Date;
    source: string;
    description: string;
}

export async function getNews(clientSide: boolean = false): Promise<NewsItem[]> {
    const parser = new XMLParser({
        ignoreAttributes: false
    });
    let allNews: NewsItem[] = [];

    const fetchPromises = feeds.map(async (feed) => {
        try {
            let xml = '';
            if (clientSide) {
                // Use a generic CORS proxy with cache busting
                const timestamp = new Date().getTime();
                const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feed.url + (feed.url.includes('?') ? '&' : '?') + '_t=' + timestamp)}`;
                const res = await fetch(proxyUrl);
                if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
                const data = await res.json();
                xml = data.contents;
            } else {
                const res = await fetch(feed.url);
                if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
                xml = await res.text();
            }

            if (!xml) return;

            const jsonObj = parser.parse(xml);

            // Handle different RSS versions
            let items = jsonObj.rss?.channel?.item || jsonObj.feed?.entry || [];
            if (!Array.isArray(items)) items = [items];

            const newsItems = items.slice(0, 10).map((item: any) => ({
                title: item.title,
                link: typeof item.link === 'string' ? item.link : item.link?.href || item.link,
                date: new Date(item.pubDate || item.updated),
                source: feed.source,
                // Simple regex to strip HTML tags for preview and decode entities
                description: (item.description || item.summary || '').toString()
                    .replace(/<[^>]*>/g, '')
                    .replace(/&nbsp;/g, ' ')
                    .replace(/&quot;/g, '"')
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .slice(0, 200) + '...'
            }));

            allNews.push(...newsItems);
        } catch (e) {
            console.error(`Error fetching ${feed.url}:`, e);
        }
    });

    await Promise.all(fetchPromises);

    // Sort by date descending
    return allNews.sort((a, b) => b.date.getTime() - a.date.getTime());
}
