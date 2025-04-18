import React from 'react';
import type { Metadata } from "next"; // Import Metadata type

// SEO Metadata for the Contact Page
export const metadata: Metadata = {
  title: "Contact Us | 777 F&F Ltd",
  description: "Get in touch with 777 F&F Ltd. Find our contact details, address, or send us a message using our contact form.",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800 dark:text-gray-200"> {/* Increased vertical padding, added text color for dark mode */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact Us</h1> {/* Larger heading, dark mode text color */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap */}
        {/* Contact Information Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">Get in Touch</h2> {/* Styled heading */}
          <div className="text-gray-700 dark:text-gray-300 space-y-4"> {/* Added dark mode text color, increased space */}
            <p><strong>Email:</strong> info@777fandf.co.uk</p>
            <p><strong>Phone:</strong> +44 1234 567890</p>
            <p><strong>Address:</strong> [Your UK Address Here]</p>
          </div>

          {/* Google Maps Embed Placeholder - To be replaced with actual embed code */}
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-md text-gray-700 dark:text-gray-300 mt-8 shadow-md"> {/* Added dark mode background and text color, increased top margin, added shadow */}
            [Google Maps Embed Placeholder]
          </div>
        </section>

        {/* Quick Contact Form Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-light">Send Us a Message</h2> {/* Styled heading */}
          {/* Quick Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"> {/* Added dark mode background, rounded-lg, shadow-md, border */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Form</h3> {/* Increased bottom margin, dark mode text color */}
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
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message</label> {/* Dark mode text color */}
                <textarea id="message" rows={4} className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"></textarea> {/* Styled textarea */}
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;