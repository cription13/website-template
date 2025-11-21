import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Fashion Blogger',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'DropCart has completely changed how I shop online. The curation is impeccable, and I always find unique pieces that match my style perfectly. The customer service is outstanding!',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      name: 'James Rodriguez',
      role: 'Tech Enthusiast',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'As someone who loves the latest gadgets, DropCart never disappoints. Fast shipping, authentic products, and competitive prices. This is my go-to platform for all tech purchases.',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Emily Chen',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'I furnish my client projects with items from DropCart. The home collection is diverse and high-quality. Plus, their return policy gave me peace of mind when ordering in bulk.',
      gradient: 'from-purple-600 to-orange-400'
    },
    {
      name: 'Michael Park',
      role: 'Fitness Coach',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The wellness and fitness products on DropCart are top-notch. I appreciate the detailed descriptions and honest reviews. My clients love the gear I recommend from here.',
      gradient: 'from-orange-500 to-pink-600'
    },
    {
      name: 'Lisa Thompson',
      role: 'Small Business Owner',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The VIP loyalty program is amazing! The exclusive discounts and early access to new collections make me feel valued as a customer. DropCart truly cares about their community.',
      gradient: 'from-pink-600 to-purple-500'
    },
    {
      name: 'David Kumar',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The website is incredibly smooth and user-friendly. Checkout is seamless, and I love the personalized recommendations. DropCart sets the standard for e-commerce platforms.',
      gradient: 'from-purple-500 to-orange-500'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Customer Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Hear from thousands of satisfied customers
            who have made DropCart their favorite shopping destination.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient} rounded-t-2xl`}></div>

              <Quote className="w-10 h-10 text-pink-200 mb-4" />

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-pink-200"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">4.9/5</div>
                <div className="text-gray-600 text-sm mt-1">Average Rating</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">15K+</div>
                <div className="text-gray-600 text-sm mt-1">Reviews</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">98%</div>
                <div className="text-gray-600 text-sm mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
