import { ShoppingCart, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-2 rounded-xl">
                <ShoppingCart className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                DropCart
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted e-commerce destination for quality products, exceptional service, and unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Fashion & Apparel</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Electronics & Tech</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Home & Living</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Beauty & Wellness</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Luxury Collection</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {currentYear} DropCart. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              <span>for amazing shoppers</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
