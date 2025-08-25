export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: [
      'https://www.tektribe.org.uk/sitemap.xml',
      'https://www.tektribe.com.ng/sitemap.xml',
    ],
  }
}