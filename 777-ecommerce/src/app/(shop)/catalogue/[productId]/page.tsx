import React, { useState } from 'react'; // Import useState
import type { Metadata } from "next"; // Import Metadata type

// SEO Metadata for the Product Detail Page
export const metadata: Metadata = {
  title: "Product Detail | 777 F&F Ltd", // Dynamic title could be added here later
  description: "View details of a specific wholesale product from 777 F&F Ltd and calculate your potential profit and bonus return.", // Dynamic description could be added
};

const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  // Dummy product data for calculation - Replace with actual data fetching later
  const dummyProduct = {
    id: '1', // Assuming productId will match a product ID
    name: 'Example Product Name',
    tradePrice: 15.00,
    rrp: 30.00,
    profitPercentage: 50,
    bonusReturnPercentage: 30,
  };

  const [orderAmount, setOrderAmount] = useState<number>(1); // State for input order amount

  // Calculate potential return
  const directProfit = (orderAmount * dummyProduct.tradePrice * (dummyProduct.profitPercentage / 100));
  const bonusReturn = (orderAmount * dummyProduct.tradePrice * (dummyProduct.bonusReturnPercentage / 100));
  const totalReturn = directProfit + bonusReturn;

  return (
    <div className="container mx-auto px-4 py-12 text-gray-800 dark:text-gray-200"> {/* Increased vertical padding, added text color for dark mode */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">Product Detail</h1> {/* Simplified heading, dark mode text color */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap */}
        {/* High-res Image Placeholder */}
        <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden shadow-md"> {/* Added dark mode background, rounded-md, overflow-hidden, shadow-md */}
          <div className="text-center text-gray-500 dark:text-gray-400">[High-res Image Placeholder]</div> {/* Dark mode text color */}
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Example Product Name</h2> {/* Dark mode text color */}
          <p className="text-xl mb-2 text-gray-700 dark:text-gray-300">Trade Price: <strong className="text-gray-900 dark:text-white">£{dummyProduct.tradePrice.toFixed(2)}</strong></p> {/* Dark mode text color */}
          <p className="text-xl mb-2 text-gray-700 dark:text-gray-300">RRP: £{dummyProduct.rrp.toFixed(2)}</p> {/* Dark mode text color */}
          <p className="text-xl mb-2 text-green-600 dark:text-green-400">Profit %: <strong className="text-green-700 dark:text-green-300">{dummyProduct.profitPercentage}%</strong></p> {/* Dark mode text color */}
          <p className="text-xl mb-4 text-blue-600 dark:text-blue-400">Bonus Return %: <strong className="text-blue-700 dark:text-blue-300">{dummyProduct.bonusReturnPercentage}%</strong></p> {/* Dark mode text color */}

          {/* Profit Calculator */}
          <div className="mb-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800"> {/* Increased padding, added border, rounded-lg, shadow-md, dark mode background and border */}
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Profit Calculator</h3> {/* Dark mode text color */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">Input order quantity to see your potential return:</p> {/* Dark mode text color */}

            {/* Input Field */}
            <div className="mb-4">
              <label htmlFor="orderAmount" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Order Quantity:</label> {/* Dark mode text color */}
              <input
                type="number"
                id="orderAmount"
                value={orderAmount}
                onChange={(e) => setOrderAmount(parseInt(e.target.value) || 0)}
                min="1"
                className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700" // Styled input
              />
            </div>

            {/* Calculated Results */}
            <div className="mt-4 text-gray-800 dark:text-gray-200"> {/* Dark mode text color */}
              <p>Potential Direct Profit: <strong className="text-gray-900 dark:text-white">£{directProfit.toFixed(2)}</strong></p> {/* Dark mode text color */}
              <p>Potential Bonus Return: <strong className="text-gray-900 dark:text-white">£{bonusReturn.toFixed(2)}</strong></p> {/* Dark mode text color */}
              <p className="text-lg font-bold mt-2">Total Potential Return: <span className="text-green-600 dark:text-green-400">£{totalReturn.toFixed(2)}</span></p> {/* Dark mode text color */}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold w-full mb-4 hover:bg-primary-light transition-colors duration-200">Add to Cart</button>

          {/* Trust Markers Placeholder - To be replaced with icons/badges */}
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm"> {/* Dark mode text color */}
            <p>Secure Payment | Fast Delivery | Quality Guaranteed</p>
          </div>
        </div>
      </div>

      {/* Similar Items Section - To be implemented with product cards */}
      <section className="mt-16"> {/* Increased top margin */}
        <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-primary-light">Similar Items</h2> {/* Styled heading */}
        {/* Similar Items Carousel or Grid Placeholder */}
        <div className="text-center text-gray-700 dark:text-gray-300"> {/* Dark mode text color */}
          [Similar Products Carousel/Grid Placeholder]
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;