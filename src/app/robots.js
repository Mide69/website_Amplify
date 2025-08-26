export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/_next/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: [
      'https://www.tektribe.org.uk/sitemap.xml',
      'https://www.tektribe.com.ng/sitemap.xml',
    ],
    host: 'https://www.tektribe.org.uk',
  }
}