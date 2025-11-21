import { Heart, Shield, Zap, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Curated with Care',
      description: 'Every product is handpicked by our team to ensure quality and value for your lifestyle.',
      color: 'from-orange-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Shop with confidence using our encrypted payment system and buyer protection guarantee.',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience seamless browsing and checkout with our optimized platform and quick delivery.',
      color: 'from-purple-600 to-orange-400'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We partner with top brands and verified sellers to bring you authentic, high-quality products.',
      color: 'from-orange-500 to-pink-600'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              About DropCart
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're not just another online store. DropCart is a movement dedicated to transforming
            the way you shop online. Our mission is to connect you with products that inspire,
            empower, and elevate your everyday experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-1">
          <div className="bg-white rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 2020, DropCart emerged from a simple idea: shopping should be exciting,
                  effortless, and enriching. We noticed a gap in the market for a platform that truly
                  understands what modern shoppers need.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Today, we're proud to serve over 50,000 happy customers across the globe, offering
                  a carefully curated selection of products that combine quality, style, and value.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team works tirelessly to discover emerging trends, partner with ethical brands,
                  and create an unmatched shopping experience that keeps our community coming back.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-4">
                      5 Years
                    </div>
                    <p className="text-xl text-gray-700 font-semibold">Of Excellence</p>
                    <p className="text-gray-600 mt-2">Building Trust & Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
