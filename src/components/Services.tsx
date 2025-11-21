import { Truck, RotateCcw, Headphones, CreditCard, Gift, Package } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Enjoy free standard shipping on all orders over $50. Fast delivery to your doorstep.',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day hassle-free returns. Not satisfied? Send it back for a full refund.',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated support team is always ready to help you with any questions or concerns.',
      gradient: 'from-purple-600 to-orange-400'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level security. Your data is always protected.',
      gradient: 'from-orange-500 to-pink-600'
    },
    {
      icon: Gift,
      title: 'Loyalty Rewards',
      description: 'Earn points with every purchase and unlock exclusive discounts and perks.',
      gradient: 'from-pink-600 to-purple-500'
    },
    {
      icon: Package,
      title: 'Gift Wrapping',
      description: 'Professional gift wrapping service available. Make every delivery special.',
      gradient: 'from-purple-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We go beyond just selling products. Experience shopping the way it should be
            with our comprehensive suite of customer-first services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl from-orange-400 via-pink-500 to-purple-600"></div>

              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

              <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our VIP Club</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get exclusive early access to new collections, member-only discounts, and birthday surprises!
          </p>
          <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            Sign Up for Free
          </button>
        </div>
      </div>
    </section>
  );
}
