import { useState } from 'react';
import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import { BlogFigure, BlogInlineCta } from '@/components/BlogArticleParts';

const RykowiskoJeleni = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const faqs = [
    {
      question: 'Kiedy najlepiej wybrać się na rykowisko?',
      answer:
        'Najintensywniejszy okres rykowiska przypada zazwyczaj od połowy września do początku października — najlepiej planować nocne nasłuchiwanie w\u00a0tych tygodniach.',
    },
    {
      question: 'Czy rykowisko jest bezpieczne do obserwacji?',
      answer:
        'Nie można zagwarantować bezpiecznej obserwacji dzikich zwierząt. Nie zbliżaj się do jeleni; pozostań na dozwolonej trasie i\u00a0stosuj się do oznakowania oraz zaleceń zarządcy terenu.',
    },
    {
      question: 'Czy można przywieźć psa?',
      answer:
        'Tak, w\u00a0In The Woods pies jedzie gratis. W\u00a0lesie trzymajcie go na smyczy, a\u00a0w\u00a0czasie rykowiska szczególnie: jelenie mają wtedy ważniejsze sprawy niż ucieczka przed psem.',
    },
  ];

  const relatedArticles = [
    { title: 'Szlak Bioróżnorodności Supraśl', slug: 'szlak-bioroznorodnosci-suprasl' },
    { title: 'Puszcza Knyszyńska – przewodnik', slug: 'puszcza-knyszynska-przewodnik' },
    { title: 'Noclegi Supraśl — In The Woods', slug: '/' },
  ];

  return (
    <BlogArticleLayout
      title="Rykowisko jeleni na Podlasiu – gdzie i&nbsp;kiedy je usłyszeć?"
      metaTitle="Rykowisko jeleni na Podlasiu – kiedy i&nbsp;jak słuchać?"
      metaDescription="Dowiedz się, kiedy zwykle odbywa się rykowisko jeleni i&nbsp;jak nasłuchiwać go odpowiedzialnie w&nbsp;okolicach Supraśla."
      slug="rykowisko-jeleni-puszcza-knyszynska"
      publishDate="2026-08-12"
      readTime="6&nbsp;min"
      keywords={[
        'rykowisko jeleni',
        'rykowisko jeleni na Podlasiu',
        'rykowisko w\u00a0Puszczy Knyszyńskiej',
        'kiedy jest rykowisko jeleni',
        'gdzie usłyszeć rykowisko jeleni',
        'obserwacja jeleni Supraśl',
        'jelenie Puszcza Knyszyńska',
        'Puszcza Knyszyńska',
        'Supraśl',
        'jesienne atrakcje Podlasie',
      ]}
      faqs={faqs}
      relatedArticles={relatedArticles}
      dateModified="2026-11-04"
    >
      <p>
        Na styku lata i&nbsp;jesieni, gdy dni stają się krótsze, a&nbsp;noce chłodniejsze,
        w&nbsp;podlaskich lasach rozpoczyna się jedno z&nbsp;najbardziej fascynujących zjawisk
        przyrodniczych – rykowisko jeleni. To wyjątkowy czas, by wsłuchać się w&nbsp;las
        i&nbsp;obserwować jego rytm, nie zbliżając się do zwierząt. Jeśli planujesz jesienny spacer,
        wybierz ogólnodostępną trasę i&nbsp;zachowaj ciszę.
      </p>

      <h2>Czym jest rykowisko jeleni i&nbsp;kiedy się odbywa?</h2>
      <p>
        Rykowisko to okres godowy, który zazwyczaj rozpoczyna się w&nbsp;połowie września
        i&nbsp;trwa do pierwszych dni października. To właśnie wtedy potężne samce (byki) rywalizują
        o&nbsp;względy samic (łań). Byki wydają donośne, głębokie ryki, które pełnią funkcję
        demonstracji siły – odstraszają rywali i&nbsp;wyzywają na pojedynek.
      </p>

      <p>
        Rykowisko można usłyszeć w&nbsp;terenie, ale jego przebieg i&nbsp;możliwość nasłuchiwania
        zależą od miejsca, pogody oraz zachowania zwierząt. Nie podchodź do jeleni ani nie próbuj
        ich nawoływać.
      </p>

      <h2>Nasłuchiwanie w&nbsp;okolicach Supraśla</h2>
      <p>
        Jeśli chcesz wybrać się na nasłuchiwanie z&nbsp;przewodnikiem, informacje o&nbsp;terminach
        i&nbsp;zasadach publikuje lokalny organizator. Pamiętaj, że spotkania z&nbsp;dzikimi
        zwierzętami nie da się zagwarantować — rykowisko najlepiej podziwiać bez pośpiechu
        i&nbsp;z&nbsp;bezpiecznej odległości.
      </p>

      <h2>Jak przygotować się na jesienne nasłuchiwanie?</h2>
      <ul>
        <li>
          <strong>Trzymaj się zasad:</strong> korzystaj z&nbsp;dozwolonych tras i&nbsp;respektuj
          oznaczenia w&nbsp;terenie.
        </li>
        <li>
          <strong>Ubierz się odpowiednio:</strong> dobierz odzież i&nbsp;obuwie do prognozy pogody
          oraz długości spaceru.
        </li>
        <li>
          <strong>Zachowaj dystans:</strong> nie podchodź do zwierząt, nie karm ich i&nbsp;nie
          próbuj ich nawoływać.
        </li>
        <li>
          <strong>Uszanuj teren:</strong> pozostań na dozwolonej trasie i&nbsp;nie zakłócaj spokoju
          dzikiej przyrody.
        </li>
      </ul>

      <BlogInlineCta
        title="Jesienne nasłuchiwanie z noclegiem w lesie"
        text="Dom na wyłączność w Konnych, 10 min od Supraśla — z kominkiem i ogrodzonym ogrodem. Sprawdź wolne terminy lub zadzwoń."
      />

      <p>W&nbsp;tym nagraniu usłyszysz rykowisko z&nbsp;okolic Puszczy Knyszyńskiej:</p>

      <div style={{ position: 'relative', paddingTop: '56.25%', marginBottom: '1rem' }}>
        {playVideo ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/OJxB-s1MeIw?autoplay=1"
            title="Rykowisko jeleni - Puszcza Knyszyńska"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlayVideo(true)}
            aria-label="Odtwórz nagranie: Rykowisko jeleni w Puszczy Knyszyńskiej"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
              padding: 0,
              cursor: 'pointer',
              background: '#111',
            }}
          >
            <img
              src="https://i.ytimg.com/vi/OJxB-s1MeIw/hqdefault.jpg"
              alt="Rykowisko jeleni w Puszczy Knyszyńskiej – miniatura nagrania"
              width={480}
              height={360}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
            />
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '3.5rem',
                color: '#fff',
              }}
            >
              ▶
            </span>
          </button>
        )}
      </div>

      <h2>Odpoczynek po spacerze</h2>
      <p>
        Po spacerze można odpocząć w&nbsp;domu i&nbsp;samodzielnie zdecydować, ile czasu spędzić bez
        ekranów. Wi-Fi jest dostępne; balię z&nbsp;hydromasażem (jacuzzi) można zamówić jako
        opcjonalny dodatek.
      </p>
      <p>
        Przy rezerwacji napisz, jeśli planujesz przyjazd z&nbsp;psem lub interesuje Cię balia —
        ustalimy dostępność i&nbsp;szczegóły pobytu.
      </p>

      <p>
        <Link to="/" className="btn-primary">
          Poznaj dom In The Woods
        </Link>{' '}
        i&nbsp;zaplanuj pobyt w&nbsp;swoim tempie.
      </p>
    </BlogArticleLayout>
  );
};

export default RykowiskoJeleni;
