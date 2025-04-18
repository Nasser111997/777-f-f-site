import React from 'react';
import ProductCard from '@/components/ProductCard'; // Import ProductCard component
import type { Metadata } from "next"; // Import Metadata type

// SEO Metadata for the Product Catalogue Page
export const metadata: Metadata = {
  title: "Product Catalogue | 777 F&F Ltd",
  description: "Explore the wide range of wholesale products available from 777 F&F Ltd. Find electronics, snacks, personal care items, and more with our revolutionary profit-sharing model.",
};

// Dummy product data - Replace with actual data fetching later
const dummyProducts = [
  {
    id: '1',
    name: 'Example Product 1',
    imageUrl: '', // Placeholder for image URL
    tradePrice: 10.00,
    rrp: 20.00,
    profitPercentage: 50,
    bonusReturnPercentage: 30,
  },
  {
    id: '2',
    name: 'Example Product 2',
    imageUrl: '', // Placeholder for image URL
    tradePrice: 5.00,
    rrp: 12.00,
    profitPercentage: 58,
    bonusReturnPercentage: 30,
  },
  {
    id: '3',
    name: 'Example Product 3',
    imageUrl: '', // Placeholder for image URL
    tradePrice: 25.00,
    rrp: 50.00,
    profitPercentage: 50,
    bonusReturnPercentage: 30,
  },
];

const CataloguePage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-800 dark:text-gray-200"> {/* Increased vertical padding, added text color for dark mode */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">Product Catalogue</h1> {/* Larger heading, dark mode text color */}

      {/* Filter by Category Section */}
      <section className="mb-12"> {/* Increased bottom margin */}
        <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-primary-light">Filter by Category</h2> {/* Styled heading */}
        {/* Category Filter Placeholder - To be implemented */}
        <div className="text-gray-700 dark:text-gray-300">[Category Filter Placeholder]</div> {/* Dark mode text color */}
      </section>

      {/* Product List Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary dark:text-primary-light">Products</h2> {/* Increased bottom margin, styled heading */}
        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Render ProductCard components using dummy data */}
          {dummyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Pagination or Infinite Scroll Placeholder - To be implemented later */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">[Pagination or Infinite Scroll Placeholder]</div> {/* Increased top margin, dark mode text color */}
        {/* Quick View Modal Placeholder - To be implemented later */}
        <div>[Quick View Modal Placeholder]</div>
      </section>
    </div>
  );
};

export default CataloguePage;