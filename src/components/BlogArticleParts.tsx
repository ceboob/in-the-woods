import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface BlogFigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
}

export const BlogFigure = ({ src, alt, width, height, caption, className = '' }: BlogFigureProps) => (
  <figure className={`my-8 ${className}`}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className="w-full h-auto rounded-lg shadow-md"
    />
    {caption && <figcaption className="text-sm text-muted-foreground mt-2">{caption}</figcaption>}
  </figure>
);

interface BlogInlineCtaProps {
  title: string;
  text: string;
}

export const BlogInlineCta = ({ title, text }: BlogInlineCtaProps) => (
  <aside className="not-prose my-10 rounded-lg border border-border bg-card p-6">
    <p className="font-heading text-xl font-light text-foreground mb-2">{title}</p>
    <p className="text-foreground/80 leading-relaxed mb-4">{text}</p>
    <div className="flex flex-col sm:flex-row gap-3">
      <Link to="/#rezerwacja" className="btn-primary text-xs py-2.5 px-6 text-center">
        Sprawdź wolne terminy
      </Link>
      <a
        href="tel:+48722765101"
        className="inline-flex items-center justify-center gap-2 text-sm text-foreground hover:text-primary"
      >
        <Phone className="w-4 h-4" /> +48 722 765 101
      </a>
    </div>
  </aside>
);
