import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Parks & Recreation Director',
      organization: 'City of Portland',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'PlaygroundPro exceeded our expectations in every way. The installation was seamless, and the community response has been overwhelmingly positive. Children of all abilities can play together safely.',
      rating: 5,
      project: 'Riverside Community Park'
    },
    {
      name: 'Michael Chen',
      title: 'Principal',
      organization: 'Sunshine Elementary School',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The educational play elements have transformed our playground into an outdoor classroom. Students are more engaged during recess, and we\'ve seen improved social interaction.',
      rating: 5,
      project: 'School Playground Renovation'
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Community Center Manager',
      organization: 'Denver Recreation',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The inclusive design features have made our playground truly accessible to all children. The quality and attention to detail in every component is exceptional.',
      rating: 5,
      project: 'Harmony Inclusive Playground'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the communities, schools, and organizations 
            that have transformed their spaces with PlaygroundPro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card p-8 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-primary-600">
                    {testimonial.organization}
                  </div>
                </div>
              </div>

              {/* Project */}
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <div className="text-sm text-neutral-500">
                  Project: <span className="text-neutral-700 font-medium">{testimonial.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-neutral-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
              Trusted by Leading Organizations
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-lg font-semibold text-neutral-700">City of Portland</div>
              <div className="text-sm text-neutral-500">Parks & Recreation</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-neutral-700">Austin ISD</div>
              <div className="text-sm text-neutral-500">School District</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-neutral-700">Denver Recreation</div>
              <div className="text-sm text-neutral-500">Community Centers</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-neutral-700">YMCA</div>
              <div className="text-sm text-neutral-500">National Organization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;