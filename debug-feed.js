const { XMLParser } = require('fast-xml-parser');

async function run() {
    try {
        const response = await fetch('https://maisvip.com.br/categoria/expoinox/feed/gn');
        const xmlData = await response.text();
        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "@_",
            cdataPropName: "content"
        });
        const jsonObj = parser.parse(xmlData);

        const item = jsonObj.rss.channel.item[0];
        console.log('Keys:', Object.keys(item));
        console.log('Full Item:', JSON.stringify(item, null, 2));
    } catch (error) {
        console.error(error);
    }
}

run();
