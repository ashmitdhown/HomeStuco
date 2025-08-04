import { useState } from 'react';
import Slider from 'react-slick';
import { ShoppingCart, Heart, Star } from 'lucide-react';

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
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Conversion rate: 1 USD = 3.67 AED (as of knowledge cutoff)
  const usdToAed = (usd: number) => (usd * 3.67).toFixed(2);

  const products: Product[] = [
    {
      id: 1,
      name: 'BIts Hoodie',
      price: 49.99,
      category: 'hoodie',
      image: 'https://via.placeholder.com/300x300/f3f4f6/6b7280?text=BIts+Hoodie',
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
      image: 'https://via.placeholder.com/300x300/f9fafb/6b7280?text=Bits+Tote+Bag',
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
      image: 'https://via.placeholder.com/300x300/f3f4f6/6b7280?text=Bits+Tote+Bag+Boys',
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
      image: 'https://via.placeholder.com/300x300/f9fafb/6b7280?text=Bits+Cap',
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
      image: 'https://via.placeholder.com/300x300/f3f4f6/6b7280?text=Bits+Sweatshirt',
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
      image: 'https://via.placeholder.com/300x300/f9fafb/6b7280?text=Bits+Polo',
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

  const addToCart = (productId: number) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === productId);
      if (existingItem) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Carousel */}
      <div className="relative h-[420px] md:h-[520px] lg:h-[600px] w-full overflow-hidden">
        {/* Hero Carousel Slider - covers entire hero section */}
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          className="h-full w-full"
        >
          {products.map((product) => (
            <div key={product.id} className="h-[420px] md:h-[520px] lg:h-[600px] w-full relative">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              {/* Overlay for heading only */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                  Student Council <span className="text-yellow-300">Merch</span>
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              {/* Product Image - Fixed height container */}
              <div className="relative h-80 flex items-center justify-center bg-gray-50">
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
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
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
                      <span className="text-sm text-gray-500 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-indigo-600">
                      AED {usdToAed(product.price)}
                    </div>
                  </div>
                </div>

                {/* Colors - Only show if product has colors */}
                {product.colors.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">Colors:</p>
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
                  <p className="text-sm text-gray-500">Sizes:</p>
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
                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full flex items-center justify-center bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Cart Preview (simplified) */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 z-50">
          <div className="flex items-center">
            <ShoppingCart className="w-6 h-6 text-indigo-600 mr-2" />
            <span className="font-medium">{cart.reduce((sum, item) => sum + item.quantity, 0)} items</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Merch; 