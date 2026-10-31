export interface LandingPageFaq {
  question: string;
  answer: string;
}

export const createLandingPageSchemas = (_path: string, faqs: LandingPageFaq[]) => [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  },
];
