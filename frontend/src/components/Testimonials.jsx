import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = t('testimonials.items');

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-orange-600" />
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-orange-600 font-medium">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full border-orange-200 hover:border-orange-300 hover:bg-orange-50"
              disabled={testimonials.length <= 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full border-orange-200 hover:border-orange-300 hover:bg-orange-50"
              disabled={testimonials.length <= 1}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
            <p className="text-gray-600">Viagens Planeadas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">40+</div>
            <p className="text-gray-600">Países Visitados</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
            <p className="text-gray-600">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;