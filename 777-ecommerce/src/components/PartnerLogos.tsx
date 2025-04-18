import React from 'react';
import Image from 'next/image'; // Assuming using next/image for optimization

interface PartnerLogosProps {
  logos: { src: string; alt: string }[];
}

const PartnerLogos: React.FC<PartnerLogosProps> = ({ logos }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-4"> {/* Added padding */}
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-24 h-12 relative opacity-75 hover:opacity-100 transition-opacity duration-200" // Added relative and opacity
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill // Use fill for better responsiveness with parent div
            style={{ objectFit: 'contain' }} // Use style prop for objectFit
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerLogos;