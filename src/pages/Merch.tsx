import InstagramContactBar from "@/components/ui/InstagramContactBar";
// Author: Manav Arya & Ashmit Dhown
import { useState } from 'react';
import { Heart, Star, CreditCard } from 'lucide-react';
import { FixedSizeList as ProductList } from 'react-window';
import Spline from '@splinetool/react-spline';

import { PageBgAndCursor } from "@/components/PageBgAndCursor";

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

  const usdToAed = (usd: number) => (usd * 3.67).toFixed(2);

  const products: Product[] = [
    {
      id: 1,
      name: 'BIts Hoodie',
      price: 49.99,
      category: 'hoodie',
      image: "/assets/MERCH/black-hoodie-mockup-classic-comfortable-stylish-apparel_191095-82052.jpg.avif",
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
      image: "/assets/MERCH/a-beige-cotton-tote-bag-on-a-black-background-png.webp",
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
      image: "/assets/MERCH/a-beige-cotton-tote-bag-on-a-black-background-png.webp",
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
      image: "/assets/MERCH/Black_Baseball_Cap_PNG_Clipart-982.webp",
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
      image: "/assets/MERCH/5d2ac61c96e7f3691bc68e80ad9a2200.webp",
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
      image: "/assets/MERCH/ai-generated-short-sleeves-black-polo-t-shirt-isolated-on-transparent-background-free-png.webp",
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

        <div className="relative w-full overflow-hidden h-[34vh] md:h-screen">
          <div className="absolute inset-0 w-full h-full z-0">
            <Spline scene="https://prod.spline.design/E9Y1f0Wp36HmvzX0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
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


        <div id="products-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          

          <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wider">
              Coming Soon
            </h2>
          </div>


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


          <div className="w-full">
            <ProductList
              height={900}
              itemCount={filteredProducts.length}
              itemSize={400}
              width={"100%"}
            >
              {({ index, style }) => {
                const product = filteredProducts[index];
                return (
                  <div key={product.id} style={style} className="bg-black/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full text-white mb-8">
                    <div className="relative h-80 flex items-center justify-center bg-black/60">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-h-full max-w-full p-4 object-contain"
                      />
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

                      <div className="mt-auto pt-4">
                        <a
                          href="https://forms.gle/your-google-form-link"
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
                );
              }}
            </ProductList>
          </div>
        </div>
      </div>
      </PageBgAndCursor>
      <InstagramContactBar />
    </>
  );
};

export default Merch;
