import React from 'react';
import TestimonialCarousel from '@/components/TestimonialCarousel'; // Import TestimonialCarousel component
import PartnerLogos from '@/components/PartnerLogos'; // Import PartnerLogos component
import AnimatedCounter from '@/components/AnimatedCounter'; // Import AnimatedCounter component
import type { Metadata } from "next"; // Import Metadata type

// SEO Metadata for the Homepage
export const metadata: Metadata = {
  title: "777 F&F Ltd | Wholesale E-commerce with Profit Sharing",
  description: "Buy, Earn, and Win with 777 F&F Ltd. A smart, profit-sharing distribution company offering up to 77% return on every wholesale purchase. Explore our catalogue and join now!",
};

// Dummy testimonial data - Replace with actual data fetching later
const dummyTestimonials = [
  {
    id: '1',
    quote: "Joining 777 F&F Ltd has significantly boosted my store's profitability! The returns are incredible and the process is so easy.",
    author: "Sarah K., Convenience Store Owner",
    earnings: "£5,000+ in extra profit last quarter",
  },
  {
    id: '2',
    quote: "The profit-sharing model is a game-changer. It's great to feel like a partner in their success, not just a customer.",
    author: "David L., Retail Manager",
    earnings: "Consistently high returns on every order",
  },
  {
    id: '3',
    quote: "Excellent product range and fantastic support. 777 F&F Ltd is a reliable partner for my business.",
    author: "Maria P., Online Reseller",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Buy. Earn. Win with 777 – Up to 77% Return on Every Purchase!</h1>
        {/* Animated ROI Counter */}
        <div className="text-2xl font-bold mb-8 text-secondary">
          Live ROI: £<AnimatedCounter endValue={1500000} duration={3000} prefix="" suffix="+" /> {/* Dummy end value */}
        </div>
        {/* Call-to-actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"> {/* Added flex-col for mobile, sm:flex-row for larger screens, space-y for mobile, sm:space-x for larger screens */}
          <a href="/catalogue" className="bg-secondary text-primary px-6 py-3 rounded-md font-semibold w-full sm:w-auto text-center hover:bg-yellow-400 transition-colors duration-200">Browse Catalogue</a> {/* Added w-full sm:w-auto and text-center */}
          <a href="/membership" className="bg-white text-primary px-6 py-3 rounded-md font-semibold w-full sm:w-auto text-center hover:bg-gray-200 transition-colors duration-200">Join Now</a> {/* Added w-full sm:w-auto and text-center */}
        </div>
      </section>

      {/* 77% Return System Breakdown Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How the 77% Return System Works</h2>
        {/* Visual Breakdown Placeholder - To be replaced with infographic/animation */}
        <div className="text-center text-lg text-gray-700">
          <p className="mb-4">At 777 F&F Ltd, our revolutionary profit-sharing model allows you to earn up to 77% return on every purchase.</p>
          <p className="mb-4">This is broken down into two parts:</p>
          <ul className="list-disc list-inside mx-auto w-fit text-left mb-8"> {/* Added mb-8 */}
            <li>Up to 40% profit earned directly from the product margin.</li>
            <li>An additional 30% from the company’s overall performance and business rewards.</li>
          </ul>
          {/* Visual representation */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 text-white font-bold text-lg"> {/* Added flex-col for mobile, sm:flex-row for larger screens, space-y for mobile, sm:space-x for larger screens */}
            <div className="bg-green-600 p-4 rounded-lg w-32 text-center"> {/* Increased width */}
              40% Direct Profit
            </div>
            <div className="text-4xl">+</div>
            <div className="bg-blue-600 p-4 rounded-lg w-32 text-center"> {/* Increased width */}
              30% Bonus Return
            </div>
            <div className="text-4xl">=</div>
            <div className="bg-secondary text-primary p-4 rounded-lg w-32 text-center"> {/* Increased width */}
              70% Total
            </div>
          </div>
           <p className="mt-8 text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed">This unique system ensures our clients benefit directly from both individual sales and the collective growth of 777 F&F Ltd.</p> {/* Increased top margin, added dark mode text color and leading-relaxed */}
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        {/* Testimonials Carousel */}
        <TestimonialCarousel testimonials={dummyTestimonials} />
      </section>

      {/* Partner Logos / Badges of Trust Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
        {/* Dummy Partner Logo Data - Replace with actual logo paths */}
        {/* Ensure actual logo files are placed in the public directory */}
        <PartnerLogos logos={[
          { src: '/next.svg', alt: 'Partner Logo 1' }, // Example using a default Next.js logo
          { src: '/vercel.svg', alt: 'Partner Logo 2' }, // Example using a default Vercel logo
          { src: '/file.svg', alt: 'Partner Logo 3' }, // Example using a default file icon
        ]} />
      </section>

      {/* Promotional Banner Section */}
      <section className="bg-secondary text-primary py-12 text-center">
        {/* Promotional Banner Placeholder - To be updated with seasonal deals */}
        <div className="text-2xl font-semibold">Limited Time Offer: Join Now and Get £100 Bonus Credit!</div>
      </section>
    </div>
  );
};

export default HomePage;