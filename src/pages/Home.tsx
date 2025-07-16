import Hero from '../components/home/Hero';
import BrandVideo from '../components/home/BrandVideo';
import QuoteEstimator from '../components/home/QuoteEstimator';
import Features from '../components/home/Features';
import Portfolio from '../components/home/Portfolio';
import MiniCaseStudies from '../components/home/MiniCaseStudies';
import ResourceToolkit from '../components/home/ResourceToolkit';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandVideo />
      <QuoteEstimator />
      <Features />
      <Portfolio />
      <MiniCaseStudies />
      <ResourceToolkit />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;