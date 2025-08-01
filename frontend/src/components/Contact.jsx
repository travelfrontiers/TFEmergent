import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, Mail, Phone, MapPin, Plane } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const handleQuoteRequest = () => {
    window.open('https://www.icligo.com/forms/pt/contact-us/book-your-trip?utm_source=LHw8s4N4', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Call to Action */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900 mb-4">
                Pedir Orçamento Personalizado
              </CardTitle>
              <p className="text-lg text-gray-600">
                Clique no botão abaixo para ser redirecionado para o nosso formulário de pedido de orçamento especializado.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="w-12 h-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pronto para a aventura?</h3>
                <p className="text-gray-600 mb-6">
                  Preencha o nosso formulário detalhado e receberá uma proposta personalizada em 24-48h.
                </p>
              </div>
              
              <Button
                onClick={handleQuoteRequest}
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-4"
              >
                <div className="flex items-center justify-center space-x-3">
                  <ExternalLink className="w-6 h-6" />
                  <span>{t('contact.cta')}</span>
                </div>
              </Button>
              
              <p className="text-sm text-gray-500">
                Será redirecionado para um formulário seguro
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Porque Escolher a Travel Frontiers?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <p>Experiência real de viagem em +40 países</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <p>Planeamento 100% personalizado</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <p>Acompanhamento durante toda a viagem</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <p>Clientes 100% satisfeitos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Outras Formas de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@travelfrontiers.pt</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefone</p>
                      <p className="text-gray-600">+351 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Localização</p>
                      <p className="text-gray-600">Portugal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;