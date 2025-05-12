import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load page sections to improve initial load performance
const Hero = lazy(() => import('./components/Hero'));
const FeaturedThemes = lazy(() => import('./components/FeaturedThemes'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CallToAction = lazy(() => import('./components/CallToAction'));

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
          <FeaturedThemes />
          <Features />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <CallToAction />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;