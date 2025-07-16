import BrandVideo from '../components/home/BrandVideo';
import Features from '../components/home/Features';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

const Company = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Our Company
              <span className="block text-gradient">Story</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Discover our journey, values, and commitment to creating exceptional playground experiences 
              that bring communities together and inspire children worldwide.
            </p>
          </div>
        </div>
      </section>

      <BrandVideo />
      <Features />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Company;