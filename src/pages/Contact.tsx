import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const projectTypes = [
    'Community Park',
    'School Playground',
    'Daycare Center',
    'Housing Development',
    'Municipal Project',
    'Other'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    'Over $500,000'
  ];

  const timelines = [
    'Within 3 months',
    '3-6 months',
    '6-12 months',
    'More than 1 year',
    'Just exploring options'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Let's Create Something
              <span className="block text-gradient">Amazing Together</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Ready to transform your space into an engaging playground experience? 
              Our experts are here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Get Your Free Consultation
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Fill out the form below and our playground experts will contact you within 24 hours 
                  to discuss your project requirements and provide a customized solution.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800">Thank you! We'll be in touch within 24 hours.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="School, City, Company, etc."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements, space constraints, age groups, special needs, or any other details that would help us provide the best solution..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center text-lg py-4"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send My Request
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-900">Phone</p>
                        <p className="text-neutral-600">1-800-PLAYGROUND</p>
                        <p className="text-sm text-neutral-500">Mon-Fri 8AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-900">Email</p>
                        <p className="text-neutral-600">info@playgroundpro.com</p>
                        <p className="text-sm text-neutral-500">Response within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-900">Address</p>
                        <p className="text-neutral-600">123 Innovation Drive</p>
                        <p className="text-neutral-600">Playground City, PC 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-neutral-900">Business Hours</p>
                        <p className="text-neutral-600">Monday - Friday: 8AM - 6PM</p>
                        <p className="text-neutral-600">Saturday: 9AM - 4PM</p>
                        <p className="text-neutral-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                    What to Expect
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 text-sm font-semibold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">Initial Consultation</p>
                        <p className="text-sm text-neutral-600">We'll discuss your needs, budget, and timeline</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 text-sm font-semibold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">Site Assessment</p>
                        <p className="text-sm text-neutral-600">Our team will evaluate your space and requirements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 text-sm font-semibold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">Custom Proposal</p>
                        <p className="text-sm text-neutral-600">Detailed design and quote tailored to your project</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 text-sm font-semibold">4</span>
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">Installation</p>
                        <p className="text-sm text-neutral-600">Professional installation and project completion</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="card p-6 bg-accent-50 border-accent-200">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    Emergency Support
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">
                    For urgent safety concerns with existing equipment:
                  </p>
                  <p className="font-semibold text-accent-700">1-800-EMERGENCY</p>
                  <p className="text-xs text-neutral-500">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-neutral-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              Visit Our Showroom
            </h3>
            <p className="text-neutral-600">
              123 Innovation Drive, Playground City, PC 12345
            </p>
            <p className="text-sm text-neutral-500 mt-2">
              Interactive map would be integrated here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;