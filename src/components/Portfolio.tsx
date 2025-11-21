import { Shirt, Smartphone, Home, Watch, Sparkles, Gem } from 'lucide-react';

export default function Portfolio() {
  const categories = [
    {
      icon: Shirt,
      title: 'Fashion & Apparel',
      description: 'Trending styles for every season',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Electronics & Tech',
      description: 'Latest gadgets and innovations',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      icon: Home,
      title: 'Home & Living',
      description: 'Transform your living space',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600 to-orange-400'
    },
    {
      icon: Watch,
      title: 'Accessories',
      description: 'Premium watches and jewelry',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 to-pink-600'
    },
    {
      icon: Sparkles,
      title: 'Beauty & Wellness',
      description: 'Self-care essentials',
      image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-pink-600 to-purple-500'
    },
    {
      icon: Gem,
      title: 'Luxury Collection',
      description: 'Exclusive premium items',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-orange-500'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Our Collections
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Browse through our carefully curated categories featuring thousands of products
            from top brands and emerging designers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-200 mb-4">{category.description}</p>

                <div className={`inline-block bg-gradient-to-r ${category.gradient} px-6 py-2 rounded-full text-sm font-semibold group-hover:shadow-lg transition-all`}>
                  Explore Now
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
