const BOOKING_PROFILES = [
  {
    name: 'Airbnb',
    url: 'https://www.airbnb.pl/rooms/1165170256851279014?guests=1&adults=1&s=67&unique_share_id=cd1458aa-ed37-425b-8252-1fcae5ea10b2',
  },
  {
    name: 'Alohacamp',
    url: 'https://alohacamp.com/pl/property/dom-w-puszczy-z-ruska-bania-5875',
  },
  {
    name: 'Booking.com',
    url: 'https://alohacamp.com/pl/property/dom-w-puszczy-z-ruska-bania-5875',
  },
  {
    name: 'Doginclusive.pl',
    url: 'https://doginclusive.com/oferty/in-the-woods-',
  },
];

const SOCIAL_PROFILES = [
  { name: 'Facebook', url: 'https://www.facebook.com/krzemienna.chata/' },
  { name: 'Instagram', url: 'https://www.instagram.com/krzemienna_chata/' },
];

const ICAL_FEEDS = [
  {
    name: 'Booking.com iCal',
    url: 'https://ical.booking.com/v1/export?t=dc06b7fe-f118-4bb1-ae19-aec276a22c25',
  },
  {
    name: 'Alohacamp iCal',
    url: 'https://api.alohacamp.com/icals/export/1250b51685e4ba241b42b3006ed70ff2.c0ee7a60-5489-43cb-8c85-f5b0cdc09d74.ics',
  },
  {
    name: 'Airbnb iCal',
    url: 'https://www.airbnb.com/calendar/ical/1165170256851279014.ics?s=998eabbad764218a950536df0faee9d5&locale=pl',
  },
];

const BookingEcosystemSection = () => (
  <section className="section-padding bg-background border-y border-border/60">
    <div className="max-w-4xl mx-auto space-y-10">
      <header className="text-center space-y-3">
        <h2 className="section-title">Rezerwacja i oficjalne profile obiektu</h2>
        <p className="section-subtitle mx-auto">
          Ten blok zawiera bezpośrednie linki do kanałów rezerwacji i social mediów widoczne
          w kodzie HTML dla robotów Google oraz narzędzi SEO.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        <article className="card-premium bg-warm-white">
          <h3 className="font-heading text-xl mb-3">Kanały rezerwacyjne</h3>
          <ul className="space-y-2 text-sm">
            {BOOKING_PROFILES.map((profile) => (
              <li key={profile.url}>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4"
                >
                  Zarezerwuj przez {profile.name}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="card-premium bg-warm-white">
          <h3 className="font-heading text-xl mb-3">Synchronizacja kalendarzy iCal</h3>
          <ul className="space-y-2 text-sm">
            {ICAL_FEEDS.map((feed) => (
              <li key={feed.url}>
                <a
                  href={feed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 break-all"
                >
                  {feed.name}
                </a>
              </li>
            ))}
          </ul>
        </article>

        <article className="card-premium bg-warm-white">
          <h3 className="font-heading text-xl mb-3">Oficjalne social media</h3>
          <ul className="space-y-2 text-sm">
            {SOCIAL_PROFILES.map((profile) => (
              <li key={profile.url}>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4"
                >
                  {profile.name} — In The Woods
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  </section>
);

export default BookingEcosystemSection;
