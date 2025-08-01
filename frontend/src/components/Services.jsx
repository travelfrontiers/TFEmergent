import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Plane, Users, Package, Compass } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const serviceIcons = [
    <Compass className="w-8 h-8 text-orange-600" />,
    <Users className="w-8 h-8 text-orange-600" />,
    <Package className="w-8 h-8 text-orange-600" />,
    <Plane className="w-8 h-8 text-orange-600" />
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t('services.items').map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                  {serviceIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pronto para a sua próxima aventura?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Cada viagem é única. Deixe-nos criar uma experiência inesquecível apenas para si.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Começar Agora
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-semibold border border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg transition-all duration-200"
              >
                Ver Testemunhos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;