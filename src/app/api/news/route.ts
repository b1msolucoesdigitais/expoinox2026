import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function GET() {
  try {
    const response = await fetch('https://maisvip.com.br/categoria/expoinox/feed/gn', {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      cdataPropName: "content"
    });
    const jsonObj = parser.parse(xmlData);

    const items = jsonObj.rss.channel.item.map((item: any) => {
      let imageUrl = '/placeholder-news.jpg';

      // Extract image from content:encoded
      // The parser puts CDATA content into a property named 'content' (or whatever cdataPropName is set to)
      // But fast-xml-parser behavior with CDATA can be tricky depending on config.
      // Let's check how it parses 'content:encoded'. Usually it's just a string if not configured otherwise.
      // Based on previous debug, it was just a string.

      const contentEncoded = item['content:encoded'];
      if (contentEncoded) {
        // fast-xml-parser with cdataPropName puts content in a property
        const htmlContent = typeof contentEncoded === 'string' ? contentEncoded : contentEncoded.content;

        if (htmlContent) {
          const imgMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch) {
            imageUrl = imgMatch[1];
          }
        }
      }

      const descriptionContent = typeof item.description === 'string' ? item.description : item.description?.content;

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        image: imageUrl,
        description: descriptionContent?.replace(/<[^>]*>/g, '').slice(0, 150) + '...',
      };
    });

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}
