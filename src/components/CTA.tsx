import { ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 text-white flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Ready to Start Shopping?
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Join thousands of happy customers and discover a world of amazing products
                at unbeatable prices. Sign up today and get 20% off your first order!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all border-2 border-white/50">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-12 lg:p-16 flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600 mb-6">
                  Get exclusive deals, new arrivals, and insider news delivered to your inbox.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Subscribe Now</span>
                  </button>
                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates.
                  </p>
                </form>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-3xl font-bold">20%</div>
                  <div className="text-sm opacity-90">First Order</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">Free</div>
                  <div className="text-sm opacity-90">Shipping</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
