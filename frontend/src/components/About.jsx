import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('about.description')}
            </p>
            
            {/* Achievement Icons */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{t('about.achievements.global')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{t('about.achievements.certified')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{t('about.achievements.passion')}</p>
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-center justify-center space-x-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <p className="text-gray-700">{t('about.achievements.trips')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">40+</div>
                  <p className="text-gray-700">Países Visitados</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
                  <p className="text-gray-700">Anos de Experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;