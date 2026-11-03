import { Link, useLocation } from 'react-router-dom';

const guides = [
  { path: '/blog/suprasl-z-dziecmi', label: 'Supraśl z\u00a0dziećmi' },
  { path: '/blog/suprasl-zima', label: 'Supraśl zimą' },
  { path: '/blog/aktywny-wypoczynek-suprasl', label: 'Aktywny wypoczynek' },
  { path: '/blog/szlak-bioroznorodnosci-suprasl', label: 'Szlak Bioróżnorodności' },
  { path: '/blog/kraina-otwartych-okiennic', label: 'Kraina Otwartych Okiennic' },
  { path: '/blog/bialystok-i-okolice-co-zobaczyc', label: 'Białystok i\u00a0okolice' },
];

const GuideLinks = () => {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Przewodniki po okolicy" className="text-sm">
      <p className="mb-2 text-white/50">Przewodniki po okolicy</p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {guides
          .filter((guide) => guide.path !== pathname)
          .map((guide) => (
            <Link
              key={guide.path}
              to={guide.path}
              className="text-white/90 transition-colors hover:text-primary"
            >
              {guide.label}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default GuideLinks;
