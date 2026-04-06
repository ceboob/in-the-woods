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
    desc: 'Dom na wyłączność w Puszczy Knyszyńskiej',
  },
  {
    path: '/domek-z-jacuzzi-podlasie',
    label: 'Domek z jacuzzi',
    desc: 'Ruska bania i balia z gorącą wodą',
  },
  { path: '/dom-w-lesie-suprasl', label: 'Dom w lesie', desc: 'Slow travel w sercu Puszczy' },
  { path: '/weekend-suprasl', label: 'Weekend Supraśl', desc: 'Plan idealnego weekendu' },
  {
    path: '/wieczor-panienski-suprasl',
    label: 'Wieczór panieński',
    desc: 'Impreza w lesie z jacuzzi',
  },
  {
    path: '/atrakcje-suprasl',
    label: 'Atrakcje Supraśla',
    desc: 'Co zobaczyć w Supraślu i okolicy',
  },
  {
    path: '/puszcza-knyszynska-nocleg',
    label: 'Puszcza Knyszyńska',
    desc: 'Nocleg w sercu natury',
  },
  { path: '/blog', label: 'Blog', desc: 'Przewodnik po Supraślu i Podlasiu' },
  { path: '/informator', label: 'Informator gościa', desc: 'Praktyczne informacje dla gości' },
];

const RelatedPages = () => {
  const { pathname } = useLocation();
  const related = allPages.filter((p) => p.path !== pathname);

  return (
    <nav aria-label="Powiązane strony" className="mt-16 pt-12 border-t border-border">
      <h2 className="font-serif text-2xl font-light text-foreground mb-6 text-center">
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
