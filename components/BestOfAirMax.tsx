'use client';

import { useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Nike Air Max Pulse',
    category: "Men's Shoes",
    price: '₹ 13,995',
    image: '/products/air-max-pulse.jpg',
  },
  {
    id: 2,
    name: 'kobe',
    category: "Women's Shoes",
    price: '₹ 13,995',
    image: '/products/air-max-pulse-women.jpg',
  },
  {
    id: 3,
    name: 'Nike Air Max 97 SE',
    category: "Men's Shoes",
    price: '₹ 16,995',
    image: '/products/air-max-97.jpg',
  },
];

export default function BestOfAirMax() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="nike-heading text-2xl md:text-3xl text-nike-black">
            Best of Air Max
          </h3>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[300px] md:w-[380px] snap-start"
            >
              <div className="bg-gray-50 rounded-lg overflow-hidden mb-4 aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 nike-body text-sm">
                    Product Image
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="nike-body font-semibold text-base text-nike-black">
                    {product.name}
                  </h4>
                  <p className="nike-body font-semibold text-base text-nike-black">
                    {product.price}
                  </p>
                </div>
                <p className="nike-body text-sm text-gray-600">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
