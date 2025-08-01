import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Plane, Users, Package, Compass } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const serviceImages = [
    'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHx0cmF2ZWwlMjBwbGFubmluZ3xlbnwwfHx8fDE3NTQwODQyNjJ8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1536607961765-592e80bcc19e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwxfHxncm91cCUyMHRyYXZlbHxlbnwwfHx8fDE3NTQwODQyNzB8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHx0cmF2ZWwlMjBwbGFubmluZ3xlbnwwfHx8fDE3NTQwODQyNjJ8MA&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQyMTd8MHwxfHNlYXJjaHwzfHxncm91cCUyMHRyYXZlbHxlbnwwfHx8fDE3NTQwODQyNzB8MA&ixlib=rb-4.1.0&q=85'
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:transform hover:scale-105 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={serviceImages[index]}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
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
              {t('services.cta.title')}
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://www.icligo.com/forms/pt/contact-us/book-your-trip?utm_source=LHw8s4N4', '_blank')}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {t('services.cta.button')}
              </button>
              <button 
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-semibold border border-gray-300 hover:border-gray-400 shadow-md hover:shadow-lg transition-all duration-200"
              >
                {t('services.cta.testimonials')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;