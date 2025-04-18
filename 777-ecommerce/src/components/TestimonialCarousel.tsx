import React, { useState, useRef } from 'react'; // Import useState and useRef

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  earnings?: string; // Optional field for actual earnings
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Basic structure - Carousel functionality to be added later
  return (
    <div className="w-full overflow-hidden relative">
      {/* This div will be the carousel track */}
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Basic sliding effect
      >
        {testimonials.map(testimonial => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4" // Adjust width for responsiveness
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md italic text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-between"> {/* Added h-full and flex-col */}
              <p className="mb-4 before:content-['\201C'] after:content-['\201D']">{testimonial.quote}</p>
              <div> {/* Wrapper for author and earnings */}
                <p className="font-semibold text-right text-gray-800 dark:text-white">- {testimonial.author}</p>
                {testimonial.earnings && (
                  <p className="text-sm text-green-600 dark:text-green-400 text-right mt-1">Earnings: {testimonial.earnings}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevTestimonial}
          className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-full p-2 shadow-md ml-4 hover:bg-opacity-75 dark:hover:bg-opacity-75 disabled:opacity-50"
          disabled={currentIndex === 0}
          aria-label="Previous testimonial"
        >
          <
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextTestimonial}
          className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 rounded-full p-2 shadow-md mr-4 hover:bg-opacity-75 dark:hover:bg-opacity-75 disabled:opacity-50"
          disabled={currentIndex === testimonials.length - 1}
          aria-label="Next testimonial"
        >
          >
        </button>
      </div>

      {/* Pagination Dots Placeholder - To be implemented later */}
      <div className="text-center mt-4 text-gray-600 dark:text-gray-400">[Pagination Dots Placeholder]</div>
    </div>
  );
};

export default TestimonialCarousel;