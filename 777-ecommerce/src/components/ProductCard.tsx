import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    tradePrice: number;
    rrp: number;
    profitPercentage: number;
    bonusReturnPercentage: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800">
      <Link href={`/catalogue/${product.id}`} className="block">
        <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 mb-4 flex items-center justify-center text-gray-500 dark:text-gray-400 rounded-md overflow-hidden">
          {/* Product Image */}
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-center">Image Coming Soon</span>
          )}
        </div>
      </Link>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">Trade Price: <strong className="text-gray-900 dark:text-white">£{product.tradePrice.toFixed(2)}</strong></p>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">RRP: £{product.rrp.toFixed(2)}</p>
      <p className="text-green-600 dark:text-green-400 text-sm mb-1">Profit %: <strong className="text-green-700 dark:text-green-300">{product.profitPercentage}%</strong></p>
      <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">Bonus Return %: <strong className="text-blue-700 dark:text-blue-300">{product.bonusReturnPercentage}%</strong></p>

      <div className="flex flex-col space-y-2 mt-auto">
        <button className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-light transition-colors duration-200 text-sm w-full text-center">
          Add to Cart
        </button>
        <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm w-full text-center">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;