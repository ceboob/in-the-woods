import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Phone, User, Mail } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" className="px-6 md:px-12 py-16 bg-secondary">
      <div ref={ref} className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2">
            <User className="w-5 h-5 text-forest" strokeWidth={1.5} />
            <p className="font-serif text-lg font-medium">Gospodarz: Maciej</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+48722765101" className="btn-primary inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> 722 765 101
            </a>
            <a href="mailto:tutinthewood@gmail.com" className="btn-outline inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> tutinthewood@gmail.com
            </a>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Konne 109/1, 16-030 Supraśl</p>
      </div>
    </section>
  );
};

export default ContactSection;
