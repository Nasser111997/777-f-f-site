import React from 'react';
import type { Metadata } from "next"; // Import Metadata type

// SEO Metadata for the Membership Page
export const metadata: Metadata = {
  title: "Membership Options | 777 F&F Ltd",
  description: "Explore the membership tiers at 777 F&F Ltd and the benefits of joining our profit-sharing wholesale network. Sign up today!",
};

const MembershipPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800 dark:text-gray-200"> {/* Increased vertical padding, added text color for dark mode */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">Membership Options</h1> {/* Larger heading, dark mode text color */}

      {/* Membership Tiers Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Choose Your Tier</h2> {/* Styled heading */}
        {/* Tiers Comparison Table */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md overflow-x-auto"> {/* Added dark mode background, rounded-lg, shadow-md, overflow-x-auto for responsiveness */}
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Membership Tiers Comparison</h3> {/* Increased bottom margin, dark mode text color */}
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-md overflow-hidden text-gray-800 dark:text-gray-200"> {/* Added dark mode background and text color */}
            <thead>
              <tr>
                <th className="py-3 px-4 bg-gray-200 dark:bg-gray-600 text-left text-sm font-bold text-gray-700 dark:text-gray-100 uppercase tracking-wider">Feature</th> {/* Styled table header */}
                <th className="py-3 px-4 bg-gray-200 dark:bg-gray-600 text-left text-sm font-bold text-gray-700 dark:text-gray-100 uppercase tracking-wider">Basic</th> {/* Styled table header */}
                <th className="py-3 px-4 bg-gray-200 dark:bg-gray-600 text-left text-sm font-bold text-gray-700 dark:text-gray-100 uppercase tracking-wider">Premium</th> {/* Styled table header */}
                <th className="py-3 px-4 bg-gray-200 dark:bg-gray-600 text-left text-sm font-bold text-gray-700 dark:text-gray-100 uppercase tracking-wider">Investor</th> {/* Styled table header */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Direct Profit Margin</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Up to 20%</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Up to 30%</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Up to 40%</td> {/* Styled table cell */}
              </tr>
              <tr>
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Bonus Return</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Up to 10%</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Up to 20%</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Up to 30%</td> {/* Styled table cell */}
              </tr>
              <tr>
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Exclusive Deals</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">No</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Yes</td> {/* Styled table cell */}
                <td className="border-t border-gray-200 dark:border-gray-600 py-3 px-4">Yes</td> {/* Styled table cell */}
              </tr>
              {/* Add more rows for other features */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits of Joining Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Benefits of Joining 777</h2> {/* Styled heading */}
        {/* Benefits List */}
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 text-lg text-center w-fit mx-auto"> {/* Added dark mode text color, increased space and font size */}
          <li>Access to a wide range of high-quality products.</li>
          <li>Earn significant profits through our unique model.</li>
          <li>Benefit from company growth and performance.</li>
          <li>Simple and transparent platform.</li>
          <li>Dedicated support for members.</li>
        </ul>
      </section>

      {/* Membership Sign-up Form Section */}
      <section className="mb-16"> {/* Increased bottom margin */}
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Become a Member</h2> {/* Styled heading */}
        {/* Sign-up Form */}
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"> {/* Added dark mode background, rounded-lg, shadow-md, border */}
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Sign Up</h3> {/* Increased bottom margin, dark mode text color */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name</label> {/* Dark mode text color */}
              <input type="text" id="name" className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" /> {/* Styled input */}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email</label> {/* Dark mode text color */}
              <input type="email" id="email" className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" /> {/* Styled input */}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Password</label> {/* Dark mode text color */}
              <input type="password" id="password" className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" /> {/* Styled input */}
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 w-full">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary dark:text-primary-light">Frequently Asked Questions</h2> {/* Styled heading */}
        {/* FAQ List */}
        <div className="text-gray-700 dark:text-gray-300 space-y-6"> {/* Added dark mode text color, increased space */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">What is the minimum order quantity?</h3> {/* Dark mode text color */}
            <p>The minimum order quantity varies by product. Please check the product details page for specific information.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">How is the 77% return calculated?</h3> {/* Dark mode text color */}
            <p>The return is a combination of direct profit margin on products (up to 40%) and a share of the company's overall performance (up to 30%).</p>
          </div>
          {/* Add more FAQ items */}
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;