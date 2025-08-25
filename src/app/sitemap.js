export default function sitemap() {
  return [
    {
      url: 'https://www.tektribe.org.uk',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'en-GB': 'https://www.tektribe.org.uk',
          'en-NG': 'https://www.tektribe.com.ng',
        },
      },
    },
    {
      url: 'https://www.tektribe.org.uk/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.tektribe.org.uk/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.tektribe.org.uk/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.tektribe.org.uk/volunteer',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}