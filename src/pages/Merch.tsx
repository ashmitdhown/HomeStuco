// Author: Manav Arya & Ashmit Dhon
import { useState } from 'react';
import { ShoppingCart, Heart, Star, CreditCard } from 'lucide-react';

import { PageBgAndCursor } from "@/components/PageBgAndCursor";
import Spline from '@splinetool/react-spline';
import hoodieImg from "@/assets/MERCH/black-hoodie-mockup-classic-comfortable-stylish-apparel_191095-82052.jpg.avif";
import toteGirlImg from "@/assets/MERCH/a-beige-cotton-tote-bag-on-a-black-background-png.webp";
import toteBoyImg from "@/assets/MERCH/a-beige-cotton-tote-bag-on-a-black-background-png.webp";
import capImg from "@/assets/MERCH/Black_Baseball_Cap_PNG_Clipart-982.png";
import sweatshirtImg from "@/assets/MERCH/5d2ac61c96e7f3691bc68e80ad9a2200.jpg";
import poloImg from "@/assets/MERCH/ai-generated-short-sleeves-black-polo-t-shirt-isolated-on-transparent-background-free-png.webp";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

const Merch = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Conversion rate: 1 USD = 3.67 AED (as of knowledge cutoff)
  const usdToAed = (usd: number) => (usd * 3.67).toFixed(2);

  const products: Product[] = [
    {
      id: 1,
      name: 'BIts Hoodie',
      price: 49.99,
      category: 'hoodie',
      image: hoodieImg,
      colors: ['black', 'navy', 'gray'],
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.8,
      reviews: 124,
      isNew: true
    },
    {
      id: 2,
      name: 'Bits Tote Bag (Girl)',
      price: 24.99,
      category: 'bag',
      image: toteGirlImg,
      colors: [],
      sizes: ['One Size'],
      rating: 4.7,
      reviews: 89,
      isSale: true
    },
    {
      id: 3,
      name: 'Bits Tote Bag (Boys)',
      price: 24.99,
      category: 'bag',
      image: toteBoyImg,
      colors: [],
      sizes: ['One Size'],
      rating: 4.6,
      reviews: 67
    },
    {
      id: 4,
      name: 'Bits Cap',
      price: 19.99,
      category: 'cap',
      image: capImg,
      colors: ['black', 'navy', 'gray', 'white'],
      sizes: ['One Size'],
      rating: 4.5,
      reviews: 112,
      isNew: true
    },
    {
      id: 5,
      name: 'Bits Sweatshirt',
      price: 44.99,
      category: 'sweatshirt',
      image: sweatshirtImg,
      colors: ['black', 'gray', 'burgundy'],
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.7,
      reviews: 98,
      isSale: true
    },
    {
      id: 6,
      name: 'Bits Polo',
      price: 34.99,
      category: 'polo',
      image: poloImg,
      colors: ['white', 'navy', 'black'],
      sizes: ['S', 'M', 'L', 'XL'],
      rating: 4.6,
      reviews: 76
    },
  ];

  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };



  // Scroll to products section
  const handleViewProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageBgAndCursor>
      <div className="min-h-screen">
      {/* Hero Section - Spline Cover */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Spline scene="https://prod.spline.design/E9Y1f0Wp36HmvzX0/scene.splinecode" />
        </div>
        {/* Floating View Products Button */}
        <div className="absolute z-10 bottom-2 right-1 md:bottom-4 md:right-6">
          <button
            onClick={handleViewProducts}
            className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-base hover:bg-gray-800 transition-colors duration-200"
            style={{ minWidth: 150 }}
          >
            BITS PILANI
          </button>
        </div>
      </div>

      {/* Floating Contact Us Button */}
      <a
        href="/contact us"
        className="fixed z-50 bottom-2 right-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-all text-lg font-semibold"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
        aria-label="Contact Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
        </svg>
        Contact Us
      </a>
      {/* Main Content */}
      <div id="products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-black/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full text-white">
              {/* Product Image - Fixed height container */}
              <div className="relative h-80 flex items-center justify-center bg-black/60">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-h-full max-w-full p-4 object-contain"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                </div>
                {/* Wishlist Button */}
                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full ${
                    wishlist.includes(product.id) 
                      ? 'text-red-500 bg-white/90' 
                      : 'text-gray-400 bg-white/80 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Product Info - Flex grow to push button to bottom */}
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-200 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                  <div className="text-xl font-bold text-indigo-400">
                    AED {usdToAed(product.price)}
                  </div>
                  </div>
                </div>

                {/* Colors - Only show if product has colors */}
                {product.colors.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-200">Colors:</p>
                    <div className="flex space-x-2 mt-1">
                      {product.colors.map(color => (
                        <button
                          key={color}
                          className={`w-5 h-5 rounded-full border border-gray-200`}
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                <div className="mt-3">
                  <p className="text-sm text-gray-200">Sizes:</p>
                  <div className="flex space-x-2 mt-1">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        className="w-8 h-8 flex items-center justify-center text-sm font-medium border border-gray-200 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button - Pushed to bottom */}
                <div className="mt-auto pt-4">
                  <a
                    href="https://forms.gle/your-google-form-link" // TODO: Replace with actual Google Form link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      </div>
      </PageBgAndCursor>
    </>
  );
};

export default Merch; 