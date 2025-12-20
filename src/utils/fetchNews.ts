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

export async function getNews(): Promise<NewsItem[]> {
    const parser = new XMLParser({
        ignoreAttributes: false
    });
    let allNews: NewsItem[] = [];

    for (const feed of feeds) {
        try {
            const res = await fetch(feed.url);
            if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
            const xml = await res.text();
            const jsonObj = parser.parse(xml);

            // Handle different RSS versions slightly if needed, but usually rss.channel.item
            let items = jsonObj.rss?.channel?.item || jsonObj.feed?.entry || [];
            if (!Array.isArray(items)) items = [items];

            const newsItems = items.slice(0, 10).map((item: any) => ({
                title: item.title,
                link: item.link, // Sometimes link is an object in Atom
                date: new Date(item.pubDate || item.updated),
                source: feed.source,
                // Simple regex to strip HTML tags for preview
                description: (item.description || item.summary || '').toString().replace(/<[^>]*>/g, '').slice(0, 200) + '...'
            }));

            allNews.push(...newsItems);
        } catch (e) {
            console.error(`Error fetching ${feed.url}:`, e);
        }
    }

    // Sort by date descending
    return allNews.sort((a, b) => b.date.getTime() - a.date.getTime());
}
