import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaStar } from 'react-icons/fa';

export default function Pricing() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-80">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/photo.avif"
          alt="Travel adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Plans</h1>
            <p className="text-xl text-white/90">
              Choose the perfect plan for your dream travel experience
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Pricing Options</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer flexible plans to suit every traveler&apos;s needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-xl overflow-hidden shadow-lg ${plan.featured ? 'border-2 border-green-500 transform md:-translate-y-4' : 'border border-gray-200'}`}
            >
              {plan.featured && (
                <div className="bg-green-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                  <span className="text-gray-500"> / per person</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/booking?plan=${plan.id}`}
                  className={`block text-center py-3 px-6 rounded-full font-medium transition-colors ${
                    plan.featured 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'border-2 border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Plan Comparison</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our different plans stack up against each other
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-4 px-6 text-left">Feature</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.id} className="py-4 px-6">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featuresComparison.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 font-medium text-gray-800">{feature.name}</td>
                    {pricingPlans.map((plan) => (
                      <td key={plan.id} className="py-4 px-6 text-center">
                        {plan.features.includes(feature.name) ? (
                          <FaCheck className="text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our travelers say about their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} w-5 h-5`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">&quot;{testimonial.comment}&quot;</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.plan} - {testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions About Pricing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect plan for your adventure
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-colors"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    description: 'Perfect for solo travelers looking for essential services',
    price: '$499',
    featured: false,
    features: [
      'Shared camp accommodation',
      'Two meals per day',
      'Local tour guide',
      'Airport transfer',
      'Basic travel insurance'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    description: 'Our most comprehensive package with premium services',
    price: '$899',
    featured: true,
    features: [
      'Private tent accommodation',
      'Three meals per day',
      'Private tour guide',
      'Round-trip airport transfers',
      'Comprehensive travel insurance',
      'Complimentary activities',
      'Welcome gifts'
    ]
  },
  {
    id: 'family',
    name: 'Family Plan',
    description: 'Special discounts for families and groups',
    price: '$1299',
    featured: false,
    features: [
      'Family tent accommodation',
      'Three meals per day',
      'Private tour guide',
      'Round-trip airport transfers',
      'Comprehensive travel insurance',
      'Kids activities included',
      '20% off additional tours'
    ]
  }
];

const featuresComparison = [
  { name: 'Private tent accommodation' },
  { name: 'Three daily meals' },
  { name: 'Private tour guide' },
  { name: 'Round-trip airport transfers' },
  { name: 'Comprehensive insurance' },
  { name: 'Complimentary activities' },
  { name: '24/7 support' },
  { name: 'Discounts on additional tours' }
];

const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    plan: 'Premium Plan',
    comment: 'Absolutely worth every penny! The private guide made our experience unforgettable.',
    rating: 5,
    date: 'January 2023',
    avatar: '/avatar-1.jpeg'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    plan: 'Family Plan',
    comment: 'Our kids loved the activities, and the family tent was spacious and comfortable.',
    rating: 4,
    date: 'March 2023',
    avatar: '/avatar-2.jpeg'
  },
  {
    id: 3,
    name: 'David Chen',
    plan: 'Basic Plan',
    comment: 'Great value for money. Got everything I needed for my solo adventure.',
    rating: 4,
    date: 'November 2022',
    avatar: '/avatar-3.jpeg'
  }
];