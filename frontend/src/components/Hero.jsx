import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const handleQuoteRequest = () => {
    window.open('https://www.icligo.com/forms/pt/contact-us/book-your-trip?utm_source=LHw8s4N4', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <Button 
              onClick={handleQuoteRequest}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{t('hero.stats.experience')}</p>
                  <p className="text-white/80">Viajando pelo mundo</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{t('hero.stats.countries')}</p>
                  <p className="text-white/80">Em todos os continentes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{t('hero.stats.revenue')}</p>
                  <p className="text-white/80">Com clientes satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;