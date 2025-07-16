import Portfolio from '../components/home/Portfolio';
import MiniCaseStudies from '../components/home/MiniCaseStudies';
import QuoteEstimator from '../components/home/QuoteEstimator';
import CTA from '../components/home/CTA';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Playground
              <span className="block text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Comprehensive playground solutions from design to installation. Explore our portfolio, 
              case studies, and get instant quotes for your project.
            </p>
          </div>
        </div>
      </section>

      <Portfolio />
      <MiniCaseStudies />
      <QuoteEstimator />
      <CTA />
    </div>
  );
};

export default Solutions;