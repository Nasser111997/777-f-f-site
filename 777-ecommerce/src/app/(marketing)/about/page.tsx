import React from 'react';
import type { Metadata } from "next"; // Import Metadata type

// SEO Metadata for the About Us Page
export const metadata: Metadata = {
  title: "About Us | 777 F&F Ltd",
  description: "Learn about 777 F&F Ltd, our revolutionary profit-sharing model, how it works, and the benefits of joining our wholesale distribution network.",
};

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800 dark:text-gray-200"> {/* Increased vertical padding, added text color for dark mode */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Us</h1> {/* Larger heading, dark mode text color */}

      {/* Who We Are Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">Who We Are</h2> {/* Styled heading */}
        <p className="leading-relaxed"> {/* Added leading-relaxed for better readability */}
          777 F&F Ltd is a UK-based smart distribution company revolutionizing the wholesale market. We are dedicated to creating a mutually beneficial ecosystem where our partners not only gain access to a wide range of products but also share in the company's growth and profitability.
        </p>
      </section>

      {/* The Opportunity Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">The Opportunity</h2> {/* Styled heading */}
        <p className="leading-relaxed"> {/* Added leading-relaxed */}
          We offer a unique opportunity for businesses to significantly increase their margins and revenue through our innovative profit-sharing model. By partnering with 777 F&F Ltd, you unlock the potential for returns far beyond traditional wholesale purchasing.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">How It Works</h2> {/* Styled heading */}
        <p className="mb-8 leading-relaxed"> {/* Increased bottom margin, added leading-relaxed */}
          Our model is simple and transparent. When you purchase products from our catalogue, you earn up to 40% profit directly from the product margin. Additionally, you receive up to 30% from the company’s overall performance and business rewards, bringing your total potential return up to 77% per purchase.
        </p>
        {/* Step-by-step ROI Example */}
        <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md"> {/* Added dark mode background, rounded-lg, shadow-md */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Step-by-Step ROI Example</h3> {/* Dark mode text color */}
          <div className="text-gray-700 dark:text-gray-300"> {/* Dark mode text color */}
            <p className="mb-2">Let's say you make a purchase with a Trade Price value of <strong>£1000</strong>.</p>
            <p className="mb-2">Assuming a 40% direct profit margin and 30% bonus return:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1"> {/* Added space-y-1 */}
              <li>Direct Profit: 40% of £1000 = <strong>£400</strong></li>
              <li>Bonus Return: 30% of £1000 = <strong>£300</strong></li>
            </ul>
            <p className="mt-4 text-lg font-bold">Total Potential Return: £400 + £300 = <span className="text-green-600 dark:text-green-400">£700</span></p> {/* Dark mode text color */}
            <p className="mt-2 text-sm italic">This is a simplified example. Actual returns may vary based on specific products and company performance.</p>
          </div>
        </div>
      </section>

      {/* Why 777 F&F Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">Why 777 F&F</h2> {/* Styled heading */}
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2"> {/* Added dark mode text color, increased space */}
          <li>Revolutionary profit-sharing model offering up to 77% return.</li>
          <li>Access to a wide and deep product catalogue.</li>
          <li>Transparent and clear financial model.</li>
          <li>Become part of a growing and profitable ecosystem.</li>
          <li>Dedicated support for our reseller partners.</li>
        </ul>
      </section>

      {/* Our Vision Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">Our Vision</h2> {/* Styled heading */}
        <p className="leading-relaxed"> {/* Added leading-relaxed */}
          Our vision is to become the leading smart distribution company globally, empowering businesses of all sizes to achieve unprecedented levels of profitability and growth through our innovative profit-sharing platform.
        </p>
      </section>

      {/* Get Involved Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">Get Involved</h2> {/* Styled heading */}
        <p className="leading-relaxed"> {/* Added leading-relaxed */}
          Ready to transform your business and start earning more? Explore our catalogue, learn more about our membership tiers, or apply to become a reseller partner today!
        </p>
      </section>

      {/* Timeline or Roadmap Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">Timeline / Roadmap</h2> {/* Styled heading */}
        {/* Timeline or Roadmap Placeholder - To be replaced with visual timeline */}
        <div className="text-gray-700 dark:text-gray-300">[Company timeline or future roadmap placeholder]</div> {/* Dark mode text color */}
      </section>

      {/* Optional Intro Video Panel */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">Intro Video</h2> {/* Styled heading */}
        {/* Intro Video Panel Placeholder - To be embedded */}
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-md text-gray-700 dark:text-gray-300"> {/* Added dark mode background and text color */}
          [Intro Video Embed Placeholder]
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;