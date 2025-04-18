import React from 'react';
import type { Metadata } from "next"; // Import Metadata type

// SEO Metadata for the Investor Page
export const metadata: Metadata = {
  title: "Investor Relations | 777 F&F Ltd",
  description: "Explore investment opportunities with 777 F&F Ltd and learn about our profitable profit-sharing model and performance.",
};

const InvestorPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800 dark:text-gray-200"> {/* Increased vertical padding, added text color for dark mode */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">Investor Relations</h1> {/* Larger heading, dark mode text color */}

      {/* Investment Overview Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Investment Overview</h2> {/* Styled heading */}
        {/* Investment Overview Content */}
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-center"> {/* Added dark mode text color, leading-relaxed */}
          <p className="mb-4">
            777 F&F Ltd offers a compelling investment opportunity in the rapidly growing wholesale distribution market,
            backed by a unique and profitable profit-sharing model.
          </p>
          <p>
            We are seeking strategic investors to accelerate our expansion and enhance our technological infrastructure.
          </p>
        </div>
      </section>

      {/* Performance Model Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Performance Model</h2> {/* Styled heading */}
        {/* Performance Model Content */}
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-center"> {/* Added dark mode text color, leading-relaxed */}
          <p className="mb-4">
            Our performance model is driven by strong product margins and a scalable distribution network.
          </p>
          <p>
            The profit-sharing mechanism ensures alignment of interests between the company and its partners,
            contributing to sustainable growth and profitability.
          </p>
          <p className="mt-4">[Placeholder for key financial highlights or charts]</p>
        </div>
      </section>

      {/* Contact Button Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-8 text-primary dark:text-primary-light">Get in Touch</h2> {/* Styled heading */}
        {/* Contact Button */}
        <a href="/contact" className="bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg inline-block hover:bg-primary-light transition-colors duration-200"> {/* Added inline-block and transition */}
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default InvestorPage;