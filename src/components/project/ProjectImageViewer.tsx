import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Tag } from 'lucide-react';
import { ProjectImage, EquipmentTag } from '../../types/project';

interface ProjectImageViewerProps {
  images: ProjectImage[];
  currentIndex: number;
  onClose: () => void;
  onImageChange: (index: number) => void;
}

const ProjectImageViewer: React.FC<ProjectImageViewerProps> = ({
  images,
  currentIndex,
  onClose,
  onImageChange
}) => {
  const [zoom, setZoom] = useState(1);
  const [showTags, setShowTags] = useState(true);
  const [selectedTag, setSelectedTag] = useState<EquipmentTag | null>(null);

  const currentImage = images[currentIndex];

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  const handleTagClick = (tag: EquipmentTag) => {
    setSelectedTag(selectedTag?.id === tag.id ? null : tag);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      {/* Header Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">
            {currentIndex + 1} of {images.length}
          </span>
          {currentImage.equipmentTags && currentImage.equipmentTags.length > 0 && (
            <button
              onClick={() => setShowTags(!showTags)}
              className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-colors ${
                showTags 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Tag className="w-4 h-4" />
              <span className="text-sm">Tags</span>
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {currentImage.isZoomable && (
            <>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
                disabled={zoom <= 0.5}
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-white text-sm min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
                disabled={zoom >= 3}
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </>
          )}
          <button
            onClick={onClose}
            className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative max-w-full max-h-full overflow-hidden">
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain transition-transform duration-200"
          style={{ transform: `scale(${zoom})` }}
        />

        {/* Equipment Tags */}
        {showTags && currentImage.equipmentTags && (
          <>
            {currentImage.equipmentTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagClick(tag)}
                className="absolute w-6 h-6 bg-primary-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xs font-bold hover:bg-primary-700 transition-colors transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${tag.x}%`,
                  top: `${tag.y}%`,
                  transform: `translate(-50%, -50%) scale(${1/zoom})`
                }}
              >
                <Tag className="w-3 h-3" />
              </button>
            ))}

            {/* Tag Tooltip */}
            {selectedTag && (
              <div
                className="absolute bg-white rounded-lg shadow-lg p-3 min-w-[200px] z-20"
                style={{
                  left: `${selectedTag.x}%`,
                  top: `${selectedTag.y}%`,
                  transform: `translate(-50%, -120%) scale(${1/zoom})`
                }}
              >
                <h4 className="font-semibold text-neutral-900 mb-1">
                  {selectedTag.name}
                </h4>
                {selectedTag.productId && (
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View Product Details →
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => onImageChange(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image Caption */}
      {currentImage.caption && (
        <div className="absolute bottom-16 left-4 right-4 text-center">
          <p className="text-white bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 max-w-2xl mx-auto">
            {currentImage.caption}
          </p>
        </div>
      )}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => onImageChange(currentIndex > 0 ? currentIndex - 1 : images.length - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => onImageChange(currentIndex < images.length - 1 ? currentIndex + 1 : 0)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectImageViewer;