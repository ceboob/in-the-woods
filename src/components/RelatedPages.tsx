import { Link, useLocation } from 'react-router-dom';

const allPages = [
  {
    path: '/noclegi-suprasl',
    label: 'Noclegi Supraśl',
    desc: 'Prywatny dom na wynajem blisko Supraśla',
  },
  {
    path: '/domek-suprasl',
    label: 'Domek Supraśl',
    desc: 'Dom na wyłączność w\u00a0Puszczy Knyszyńskiej',
  },
  {
    path: '/domek-z-jacuzzi-podlasie',
    label: 'Domek z\u00a0jacuzzi',
    desc: 'Balia z\u00a0hydromasażem (jacuzzi)',
  },
  { path: '/dom-w-lesie-suprasl', label: 'Dom w\u00a0lesie', desc: 'Cisza, sarny i\u00a0kominek' },
  { path: '/weekend-suprasl', label: 'Weekend Supraśl', desc: 'Plan od piątku do niedzieli' },
  {
    path: '/wieczor-panienski-suprasl',
    label: 'Wieczór panieński',
    desc: 'Balia, ognisko i\u00a0zero sąsiadów',
  },
  {
    path: '/wieczor-kawalerski-suprasl',
    label: 'Wieczór kawalerski',
    desc: 'Grill, ognisko i\u00a0balia dla ekipy',
  },
  {
    path: '/sylwester-podlasie',
    label: 'Sylwester w\u00a0lesie',
    desc: 'Kominek i\u00a0balia o\u00a0północy',
  },
  {
    path: '/domek-z-psem-podlasie',
    label: 'Domek z\u00a0psem',
    desc: 'Pies gratis, ogrodzony ogród',
  },
  {
    path: '/atrakcje-suprasl',
    label: 'Atrakcje Supraśla',
    desc: 'Co zobaczyć w\u00a0Supraślu i\u00a0okolicy',
  },
  {
    path: '/puszcza-knyszynska-nocleg',
    label: 'Puszcza Knyszyńska',
    desc: 'Dom z\u00a0bali przy szlakach',
  },
  { path: '/blog', label: 'Blog', desc: 'Przewodnik po Supraślu i\u00a0Podlasiu' },
  { path: '/informator', label: 'Informator gościa', desc: 'Praktyczne informacje dla gości' },
  { path: '/dom', label: 'Dom In The Woods', desc: 'Szczegółowy opis domu' },
  { path: '/galeria', label: 'Galeria zdjęć', desc: 'Pełna galeria wnętrz i\u00a0okolicy' },
  { path: '/dokumenty', label: 'Dokumenty', desc: 'Przewodnik, umowa, instrukcja' },
];

const RelatedPages = () => {
  const { pathname } = useLocation();
  const related = allPages.filter((p) => p.path !== pathname);

  return (
    <nav aria-label="Powiązane strony" className="mt-16 pt-12 border-t border-border">
      <h2 className="font-heading text-2xl font-light text-foreground mb-6 text-center">
        Zobacz również
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {related.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="group p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200"
          >
            <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
              {page.label}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{page.desc}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default RelatedPages;
