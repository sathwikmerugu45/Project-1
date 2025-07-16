import ResourceToolkit from '../components/home/ResourceToolkit';

const Insights = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Industry
              <span className="block text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Access our comprehensive resource library, industry insights, and professional tools 
              to help you make informed decisions about playground equipment and design.
            </p>
          </div>
        </div>
      </section>

      <ResourceToolkit />
    </div>
  );
};

export default Insights;