import { useState } from 'react';
import { CustomizationOption} from '../../types/product';
import { Check, Palette, Ruler, Package, Plus } from 'lucide-react';

interface CustomizationOptionsProps {
  options: CustomizationOption[];
  onSelectionChange: (selections: Record<string, string>) => void;
  className?: string;
}

const CustomizationOptions = ({ options, onSelectionChange, className = '' }: CustomizationOptionsProps) => {
  const [selections, setSelections] = useState<Record<string, string>>({});

  const handleSelectionChange = (optionId: string, choiceId: string) => {
    const newSelections = { ...selections, [optionId]: choiceId };
    setSelections(newSelections);
    onSelectionChange(newSelections);
  };

  const getOptionIcon = (type: string) => {
    switch (type) {
      case 'color':
        return <Palette className="w-5 h-5" />;
      case 'size':
        return <Ruler className="w-5 h-5" />;
      case 'material':
        return <Package className="w-5 h-5" />;
      case 'accessory':
        return <Plus className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      color: 'Color Options',
      size: 'Size Variations',
      material: 'Material Choices',
      accessory: 'Add-on Accessories'
    };
    return labels[type] || type.charAt(0).toUpperCase() + type.slice(1);
  };

  const calculateTotalPriceModifier = () => {
    return Object.entries(selections).reduce((total, [optionId, choiceId]) => {
      const option = options.find(opt => opt.id === optionId);
      const choice = option?.options.find(ch => ch.id === choiceId);
      return total + (choice?.priceModifier || 0);
    }, 0);
  };

  if (!options || options.length === 0) {
    return null;
  }

  const totalPriceModifier = calculateTotalPriceModifier();

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Customization Options</h3>

        <div className="space-y-8">
          {options.map((option) => (
            <div key={option.id}>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  {getOptionIcon(option.type)}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {option.name}
                    {option.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-600">{getTypeLabel(option.type)}</p>
                </div>
              </div>

              {/* Color Options */}
              {option.type === 'color' && (
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {option.options.map((choice) => (
                    <button
                      key={choice.id}
                      onClick={() => handleSelectionChange(option.id, choice.id)}
                      className={`relative aspect-square rounded-lg border-2 overflow-hidden transition-all ${
                        selections[option.id] === choice.id
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      title={choice.name}
                    >
                      {choice.image ? (
                        <img
                          src={choice.image}
                          alt={choice.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div 
                          className="w-full h-full"
                          style={{ backgroundColor: choice.name.toLowerCase() }}
                        />
                      )}
                      
                      {selections[option.id] === choice.id && (
                        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                          <Check className="w-6 h-6 text-blue-600" />
                        </div>
                      )}
                      
                      {choice.priceModifier && choice.priceModifier !== 0 && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center">
                          {choice.priceModifier > 0 ? '+' : ''}{choice.priceModifier}%
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Other Options (Size, Material, Accessory) */}
              {option.type !== 'color' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {option.options.map((choice) => (
                    <button
                      key={choice.id}
                      onClick={() => handleSelectionChange(option.id, choice.id)}
                      className={`relative p-4 border-2 rounded-lg text-left transition-all ${
                        selections[option.id] === choice.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {selections[option.id] === choice.id && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}

                      {choice.image && (
                        <div className="aspect-video w-full mb-3 overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src={choice.image}
                            alt={choice.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      <h5 className="font-semibold text-gray-900 mb-1">{choice.name}</h5>
                      
                      {choice.description && (
                        <p className="text-sm text-gray-600 mb-2">{choice.description}</p>
                      )}

                      {choice.priceModifier && choice.priceModifier !== 0 && (
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                          <span className={`text-sm font-medium ${
                            choice.priceModifier > 0 ? 'text-red-600' : 'text-green-600'
                          }`}>
                            {choice.priceModifier > 0 ? '+' : ''}{choice.priceModifier}% price adjustment
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Selection Summary for this option */}
              {selections[option.id] && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Selected:</span>{' '}
                    {option.options.find(ch => ch.id === selections[option.id])?.name}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Customization Summary */}
        {Object.keys(selections).length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Customization Summary</h4>
            
            <div className="space-y-2 mb-4">
              {Object.entries(selections).map(([optionId, choiceId]) => {
                const option = options.find(opt => opt.id === optionId);
                const choice = option?.options.find(ch => ch.id === choiceId);
                
                return (
                  <div key={optionId} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">
                      <span className="font-medium">{option?.name}:</span> {choice?.name}
                    </span>
                    {choice?.priceModifier && choice.priceModifier !== 0 && (
                      <span className={`font-medium ${
                        choice.priceModifier > 0 ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {choice.priceModifier > 0 ? '+' : ''}{choice.priceModifier}%
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {totalPriceModifier !== 0 && (
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="font-semibold text-gray-900">Total Price Adjustment:</span>
                <span className={`text-lg font-bold ${
                  totalPriceModifier > 0 ? 'text-red-600' : 'text-green-600'
                }`}>
                  {totalPriceModifier > 0 ? '+' : ''}{totalPriceModifier}%
                </span>
              </div>
            )}

            {/* Required Options Check */}
            {options.some(opt => opt.required && !selections[opt.id]) && (
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <span className="font-medium">Required selections missing:</span>{' '}
                  {options
                    .filter(opt => opt.required && !selections[opt.id])
                    .map(opt => opt.name)
                    .join(', ')}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomizationOptions;