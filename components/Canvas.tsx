import React from 'react';
import { Slide, DesignConfig } from '../types';
import { DataBackground } from './DataBackground';

interface CanvasProps {
  slide: Slide;
  design: DesignConfig;
  canvasRef: React.RefObject<HTMLDivElement>;
}

const Canvas: React.FC<CanvasProps> = ({ slide, design, canvasRef }) => {
  return (
    <div className="slide-wrapper">
      {/* CSS Injection */}
      <style>{design.customCss}</style>

      {/* Main Slide Area */}
      <div
        ref={canvasRef}
        id="main-slide"
        className="slide-container"
        style={{
          background: slide.bgGradient || 'black',
        }}
      >
        {/* Decorative Overlay */}
        <div className="slide-decorative-overlay" />

        {/* Data Background Effect */}
        <DataBackground design={design} />

        {/* New Header Section */}
        <div className="poster-header" dir="rtl">
          <div className="poster-header-right">
            <div className="poster-logo-icon">
              <img 
                src="/logos/alinvestor white.svg" 
                alt="Logo" 
                className="poster-logo-image" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = design.logoUrl;
                }}
              />
            </div>
            <div className="poster-brand-container">
              <span className="poster-brand-main" style={{ color: design.primaryColor }}>
                منصة المستثمر
              </span>
              <span className="poster-brand-sub" style={{ color: design.textColor, opacity: 0.6 }}>
                في رحلة لتطوير الاقتصاد العربي
              </span>
            </div>
          </div>

          <div className="poster-header-left">
            <div 
              className="poster-investor-name" 
              style={{ color: design.textColor, opacity: 0.8 }}
            >
              {slide.category || 'توعوي'}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="slide-content">
          {slide.image && (
            <div className="slide-image-container">
              <img src={slide.image} className="w-full h-full object-cover" />
            </div>
          )}

          <h2
            className="question-text"
            style={{
              fontSize: `${design.fontSize}px`,
              color: design.textColor,
              textShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            {slide.question}
          </h2>

          <div
            className="recommendation-text"
            style={{ color: design.primaryColor }}
          >
            {slide.recommendation}
          </div>
        </div>

        {/* Modern Footer */}
        <div 
          className="slide-footer"
          style={{ borderTopColor: `${design.textColor}1a` }}
        >
          <div className="slide-footer-brand">
            <span 
              className="slide-footer-right" 
              style={{ color: design.textColor }}
            >
              منصة المستثمر الاقتصادية
            </span>
            <div 
              className="slide-footer-dot" 
              style={{ backgroundColor: design.primaryColor }}
            />
          </div>

          <div className="slide-footer-left" style={{ color: design.textColor }}>
            al-investor.com
          </div>
        </div>

        {/* Dynamic Accents */}
        <div
          className="slide-accent-top"
          style={{ backgroundColor: design.primaryColor }}
        />
        <div
          className="slide-accent-bottom"
          style={{ backgroundColor: design.primaryColor }}
        />
      </div>

      {/* Decorative Glow behind the card */}
      <div className="slide-glow" />
    </div>
  );
};

export default Canvas;
