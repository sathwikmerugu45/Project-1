import { useState } from 'react';
import { Certification, CertificationDocument } from '../../types/certification';
import { Download, ExternalLink, CheckCircle, AlertCircle, Calendar, MapPin } from 'lucide-react';

interface CertificationDisplayProps {
  certifications: Certification[];
  documents?: CertificationDocument[];
  className?: string;
}

const CertificationDisplay = ({ certifications, documents = [], className = '' }: CertificationDisplayProps) => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  if (!certifications || certifications.length === 0) {
    return (
      <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Certifications</h3>
        <p className="text-gray-500">No certifications available</p>
      </div>
    );
  }

  const handleDownload = (url: string, _filename: string) => {
    // In a real application, this would handle the download
    window.open(url, '_blank');
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const isExpiringSoon = (date: Date) => {
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);
    return date <= sixMonthsFromNow;
  };

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Safety Certifications</h3>

        {/* Certification Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedCertification?.id === cert.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedCertification(cert)}
            >
              {/* Certification Logo */}
              <div className="aspect-square w-full mb-3 flex items-center justify-center bg-white rounded-lg border border-gray-100">
                <img
                  src={cert.logoUrl}
                  alt={`${cert.standard} certification logo`}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>

              {/* Certification Info */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {cert.standard}
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  {cert.certificationNumber}
                </p>

                {/* Status Indicator */}
                <div className="flex items-center justify-center">
                  {cert.isValid ? (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="text-xs">Valid</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-red-600">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span className="text-xs">Expired</span>
                    </div>
                  )}
                </div>

                {/* Expiring Soon Warning */}
                {cert.isValid && isExpiringSoon(cert.validUntil) && (
                  <div className="mt-2 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    Expires Soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Certification Details */}
        {selectedCertification && (
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Certification Details */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {selectedCertification.standard} Certification Details
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Certification Number</label>
                    <p className="text-gray-900">{selectedCertification.certificationNumber}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Issuing Body</label>
                    <p className="text-gray-900">{selectedCertification.issuingBody}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <div>
                      <label className="text-sm font-medium text-gray-700">Valid Until</label>
                      <p className={`${
                        selectedCertification.isValid 
                          ? isExpiringSoon(selectedCertification.validUntil)
                            ? 'text-amber-600'
                            : 'text-green-600'
                          : 'text-red-600'
                      }`}>
                        {formatDate(selectedCertification.validUntil)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-1" />
                    <div>
                      <label className="text-sm font-medium text-gray-700">Valid Regions</label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedCertification.regions.map((region) => (
                          <span
                            key={region}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Description</label>
                    <p className="text-gray-600 text-sm">{selectedCertification.description}</p>
                  </div>
                </div>

                {/* Download Certificate */}
                {selectedCertification.documentUrl && (
                  <div className="mt-6">
                    <button
                      onClick={() => handleDownload(selectedCertification.documentUrl!, `${selectedCertification.standard}-certificate.pdf`)}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </button>
                  </div>
                )}
              </div>

              {/* Related Documents */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Related Documents</h4>
                
                {documents.length > 0 ? (
                  <div className="space-y-3">
                    {documents
                      .filter(doc => doc.id.includes(selectedCertification.standard.toLowerCase()) || 
                                   doc.type === 'certificate')
                      .map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">{doc.name}</h5>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-sm text-gray-500 capitalize">
                              {doc.type.replace('_', ' ')}
                            </span>
                            <span className="text-sm text-gray-500">{doc.fileSize}</span>
                            <span className="text-sm text-gray-500">
                              Updated {formatDate(doc.lastUpdated)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => handleDownload(doc.url, doc.name)}
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => window.open(doc.url, '_blank')}
                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">
                    No additional documents available for this certification.
                  </p>
                )}

                {/* General Documents */}
                <div className="mt-6">
                  <h5 className="font-medium text-gray-900 mb-3">General Compliance Documents</h5>
                  <div className="space-y-2">
                    <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Installation Guidelines</span>
                        <Download className="w-4 h-4 text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Complete installation requirements and procedures</p>
                    </button>
                    
                    <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Safety Inspection Checklist</span>
                        <Download className="w-4 h-4 text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Regular maintenance and safety inspection guide</p>
                    </button>
                    
                    <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Warranty Information</span>
                        <Download className="w-4 h-4 text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Product warranty terms and conditions</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certification Summary */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Certification Summary</h4>
            <p className="text-sm text-blue-800">
              This product meets {certifications.filter(c => c.isValid).length} of {certifications.length} 
              {' '}safety standards and is certified for use in{' '}
              {[...new Set(certifications.flatMap(c => c.regions))].join(', ')}.
              All certifications are regularly updated to ensure compliance with the latest safety requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationDisplay;