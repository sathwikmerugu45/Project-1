import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'Natural Play', path: '/products/natural-play' },
    { name: 'Inclusive Design', path: '/products/inclusive-design' },
    { name: 'Fitness Equipment', path: '/products/fitness-equipment' },
    { name: 'Playground Systems', path: '/products/playground-systems' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Safety Standards', path: '/resources' },
    { name: 'Installation Guides', path: '/resources' },
    { name: 'Maintenance Tips', path: '/resources' },
    { name: 'Design Inspiration', path: '/resources' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">PP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PlaygroundPro</h3>
                <p className="text-neutral-400 text-sm">Creating Joy Through Play</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Leading the industry in innovative, safe, and inclusive playground equipment. 
              Creating spaces where children can learn, grow, and play together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">123 Innovation Drive</p>
                  <p className="text-neutral-300">Playground City, PC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-neutral-300">1-800-PLAYGROUND</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-neutral-300">info@playgroundpro.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-neutral-400">
              <span>© 2024 PlaygroundPro. All rights reserved.</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <span>Certified by:</span>
              <span className="px-3 py-1 bg-neutral-800 rounded-full">EN 1176</span>
              <span className="px-3 py-1 bg-neutral-800 rounded-full">ASTM</span>
              <span className="px-3 py-1 bg-neutral-800 rounded-full">CPSC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;