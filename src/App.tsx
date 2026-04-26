import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductInfo } from './components/ProductInfo';
import { PromoSection } from './components/PromoSection';
import { OrderBuilder } from './components/OrderBuilder';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <ProductInfo />
        <PromoSection />
        <OrderBuilder />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
