import { Dog, TreePine, Snail, Home, Sparkles, Wifi } from 'lucide-react';

const badges = [
  { icon: Dog, label: 'Pet friendly' },
  { icon: TreePine, label: 'Nature retreat' },
  { icon: Snail, label: 'Slow travel' },
  { icon: Home, label: 'Private house' },
  { icon: Sparkles, label: 'Jacuzzi' },
  { icon: Wifi, label: 'Workation ready' },
];

const BadgesBar = () => (
  <div className="px-6 md:px-12 py-8 bg-secondary border-y border-border overflow-x-auto">
    <div className="flex items-center justify-center gap-4 md:gap-8 min-w-max mx-auto">
      {badges.map((b, i) => (
        <div key={i} className="flex items-center gap-2 text-muted-foreground">
          <b.icon className="w-4 h-4 text-forest" strokeWidth={1.5} />
          <span className="text-xs tracking-wider uppercase whitespace-nowrap">{b.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default BadgesBar;
