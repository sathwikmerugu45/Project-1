import { Shield, Award, Globe, CheckCircle } from 'lucide-react';

const CertificationBadges = ({ variant = 'default', size = 'medium' }) => {
  const certifications = [
    {
      id: 'en1176',
      name: 'EN 1176',
      fullName: 'European Safety Standards',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'European playground equipment safety standards'
    },
    {
      id: 'astm',
      name: 'ASTM',
      fullName: 'ASTM International',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'American Society for Testing and Materials'
    },
    {
      id: 'cpsc',
      name: 'CPSC',
      fullName: 'Consumer Product Safety',
      icon: CheckCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      description: 'US Consumer Product Safety Commission'
    },
    {
      id: 'iso',
      name: 'ISO 9001',
      fullName: 'Quality Management',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'International quality management standards'
    }
  ];

  const sizeClasses = {
    small: {
      container: 'gap-2',
      badge: 'px-2 py-1',
      icon: 'w-3 h-3',
      text: 'text-xs'
    },
    medium: {
      container: 'gap-3',
      badge: 'px-3 py-2',
      icon: 'w-4 h-4',
      text: 'text-sm'
    },
    large: {
      container: 'gap-4',
      badge: 'px-4 py-3',
      icon: 'w-5 h-5',
      text: 'text-base'
    }
  };

  const currentSize = sizeClasses[size as keyof typeof sizeClasses];

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center ${currentSize.container}`}>
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className={`flex items-center space-x-2 ${cert.bgColor} ${currentSize.badge} rounded-full`}
          >
            <cert.icon className={`${currentSize.icon} ${cert.color}`} />
            <span className={`${currentSize.text} font-medium ${cert.color}`}>
              {cert.name}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white p-4 rounded-lg shadow-md border border-neutral-200 text-center group hover:shadow-lg transition-shadow duration-200"
          >
            <div className={`w-12 h-12 ${cert.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
              <cert.icon className={`w-6 h-6 ${cert.color}`} />
            </div>
            <h4 className="font-semibold text-neutral-900 mb-1">{cert.name}</h4>
            <p className="text-xs text-neutral-600 mb-2">{cert.fullName}</p>
            <p className="text-xs text-neutral-500">{cert.description}</p>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-wrap items-center ${currentSize.container}`}>
      {certifications.map((cert) => (
        <div
          key={cert.id}
          className={`flex items-center space-x-2 bg-white/10 backdrop-blur-md ${currentSize.badge} rounded-full`}
        >
          <cert.icon className={`${currentSize.icon} ${cert.color}`} />
          <span className={`${currentSize.text} font-medium text-white`}>
            {cert.name} Certified
          </span>
        </div>
      ))}
    </div>
  );
};

export default CertificationBadges;