import { Link } from 'react-router-dom';
import { Dog, TreePine, Snail, Home, Sparkles, Wifi, Flame, Bath } from 'lucide-react';

const badges = [
  { icon: Dog, label: 'Pet friendly', href: '/blog/podlasie-z-psem' },
  { icon: TreePine, label: 'Nature retreat', href: '/dom-w-lesie-suprasl' },
  { icon: Snail, label: 'Slow travel', href: '/blog/cyfrowy-detoks-las' },
  { icon: Home, label: 'Dom na wyłączność', href: '/noclegi-suprasl' },
  { icon: Bath, label: 'Balia / Jacuzzi', href: '/domek-z-jacuzzi-podlasie' },
  { icon: Flame, label: 'Kominek', href: '#dom' },
  { icon: Sparkles, label: 'Ruska bania', href: '#jacuzzi' },
  { icon: Wifi, label: 'Workation ready', href: '/blog/workation-podlasie' },
];

const BadgesBar = () => (
  <div className="px-6 md:px-12 py-8 bg-secondary border-y border-border overflow-x-auto">
    <div className="flex items-center justify-center gap-4 md:gap-6 min-w-max mx-auto">
      {badges.map((b, i) =>
        b.href.startsWith('#') ? (
          <button
            key={i}
            onClick={() => document.querySelector(b.href)?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <b.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span className="text-xs tracking-wider uppercase whitespace-nowrap">{b.label}</span>
          </button>
        ) : (
          <Link
            key={i}
            to={b.href}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <b.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span className="text-xs tracking-wider uppercase whitespace-nowrap">{b.label}</span>
          </Link>
        ),
      )}
    </div>
  </div>
);

export default BadgesBar;
