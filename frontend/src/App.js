import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;