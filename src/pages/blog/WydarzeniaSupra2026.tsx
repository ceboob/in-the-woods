import BlogArticleLayout from '@/components/BlogArticleLayout';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

const WydarzeniaSupra2026 = () => (
  <BlogArticleLayout
    title="Wydarzenia w Supraślu – kalendarz"
    metaTitle="Wydarzenia Supraśl – kalendarz"
    metaDescription="Kalendarz wydarzeń w Supraślu i okolicach — trwa aktualizacja. Sprawdź stronę wkrótce lub zapytaj nas o rekomendacje na dany weekend."
    slug="wydarzenia-suprasl-2026"
    publishDate="2026-03-30"
    readTime="1 min"
    keywords={[
      'wydarzenia Supraśl',
      'imprezy Supraśl',
      'kalendarz wydarzeń Supraśl',
      'co robić Supraśl',
    ]}
    faqs={[
      {
        question: 'Jakie są największe imprezy w Supraślu?',
        answer:
          'Terminarz wydarzeń zmienia się co roku. Aktualnie kalendarz jest w trakcie aktualizacji — sprawdź stronę wkrótce lub napisz do nas, a polecimy wydarzenia na najbliższy weekend.',
      },
      {
        question: 'Kiedy jest sezon turystyczny w Supraślu?',
        answer:
          'Sezon turystyczny zwykle przypada na miesiące od późnej wiosny do wczesnej jesieni, jednak Supraśl ma atrakcje przez cały rok — zapytaj nas o polecenia.',
      },
      {
        question: 'Czy wydarzenia w Supraślu są darmowe?',
        answer:
          'Wiele lokalnych wydarzeń jest bezpłatnych, część wymaga biletów. Najszybszą informację o bieżących opłatach uzyskasz kontaktując się bezpośrednio z organizatorami lub pytając nas.',
      },
      {
        question: 'Gdzie nocować podczas wydarzeń w Supraślu?',
        answer:
          'Polecamy rezerwować nocleg z wyprzedzeniem. Jeśli szukasz spokojnej bazy blisko atrakcji, zapraszamy do In The Woods — prywatny dom w lesie z jacuzzi. Napisz lub zadzwoń, pomożemy z rezerwacją.',
      },
    ]}
    relatedArticles={[
      { title: 'Co robić w Supraślu – kompletny przewodnik', slug: 'co-robic-suprasl' },
      { title: 'Weekend w Supraślu – plan pobytu na 2-3 dni', slug: 'weekend-suprasl-plan' },
      { title: 'Atrakcje Supraśla – uzdrowisko w Puszczy', slug: 'suprasl-atrakcje-uzdrowisko' },
      { title: 'Restauracje Supraśl – gdzie zjeść', slug: 'restauracje-suprasl' },
    ]}
  >
    <div className="bg-accent/40 border border-primary/30 rounded-xl p-6 my-8 not-prose text-center space-y-4">
      <p className="text-lg font-heading text-foreground">
        📅 Kalendarz wydarzeń w trakcie aktualizacji
      </p>
      <p className="text-foreground/70 max-w-2xl mx-auto">
        Kalendarz wydarzeń na najbliższe tygodnie jest w trakcie aktualizacji. Sprawdź ponownie wkrótce
        lub napisz do nas — chętnie doradzimy, co warto zobaczyć i które imprezy polecamy tego weekendu.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="https://www.suprasl.online" className="btn-primary inline-flex items-center gap-2">
          <Phone className="w-4 h-4" /> Skontaktuj się z nami
        </a>
      </div>
      <p className="text-xs text-muted-foreground">Odpowiadamy zwykle w kilka godzin · Rezerwacja bezpośrednia</p>
    </div>
  </BlogArticleLayout>
);

export default WydarzeniaSupra2026;
