import React from 'react';
import type { Metadata } from "next"; // Import Metadata type

// SEO Metadata for the Reseller/Partner Page
export const metadata: Metadata = {
  title: "Become a Reseller Partner | 777 F&F Ltd",
  description: "Partner with 777 F&F Ltd and unlock exclusive reseller pricing, higher profit margins, priority support, and marketing resources. Apply to become a reseller today!",
};

const ResellerPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800 dark:text-gray-200"> {/* Increased vertical padding, added text color for dark mode */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">Become a Reseller Partner</h1> {/* Larger heading, dark mode text color */}

      {/* Apply to Become a Reseller Form Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Apply Now</h2> {/* Styled heading */}
        {/* Reseller Application Form */}
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"> {/* Added dark mode background, rounded-lg, shadow-md, border */}
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Reseller Application</h3> {/* Increased bottom margin, dark mode text color */}
          <form>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Company Name</label> {/* Dark mode text color */}
              <input type="text" id="companyName" className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" /> {/* Styled input */}
            </div>
            <div className="mb-4">
              <label htmlFor="contactPerson" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Contact Person</label> {/* Dark mode text color */}
              <input type="text" id="contactPerson" className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" /> {/* Styled input */}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email</label> {/* Dark mode text color */}
              <input type="email" id="email" className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" /> {/* Styled input */}
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Phone</label> {/* Dark mode text color */}
              <input type="tel" id="phone" className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" /> {/* Styled input */}
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 w-full">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Reseller Perks Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Reseller Perks</h2> {/* Styled heading */}
        {/* Reseller Perks List */}
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 text-lg text-center w-fit mx-auto"> {/* Added dark mode text color, increased space and font size */}
          <li>Access to exclusive reseller pricing.</li>
          <li>Higher profit margins compared to basic membership.</li>
          <li>Priority support.</li>
          <li>Marketing materials and support.</li>
          <li>Opportunity to earn additional bonuses.</li>
        </ul>
      </section>

      {/* Lead Magnet Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Download Our Wholesale Success Guide</h2> {/* Styled heading */}
        {/* Lead Magnet Link/Button */}
        <div className="text-center">
          <a href="#" className="bg-secondary text-primary px-8 py-4 rounded-md font-semibold text-lg inline-block hover:bg-yellow-400 transition-colors duration-200">
            Download Guide
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResellerPage;