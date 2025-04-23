import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkedAlt, FaCampground, FaHiking, FaUmbrellaBeach, FaMountain, FaCity, FaCheck } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/services.avif"
          alt="Travel adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-white/90">
              Discover the perfect travel experiences tailored just for you
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From adventure-packed itineraries to relaxing getaways, we&apos;ve got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <service.icon className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="text-green-600 font-medium hover:text-green-700 transition-colors inline-flex items-center"
                >
                  Learn more <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Specialized Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unique travel experiences crafted for special interests
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Customized Travel Packages</h3>
                <ul className="space-y-6">
                  {customServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <FaCheck className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-full">
                <Image
                  src="/adv.avif"
                  alt="Custom travel planning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Tailor-Made Adventures</h3>
                    <Link
                      href="/contact"
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full inline-flex items-center transition-colors"
                    >
                      Request Custom Trip <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to your perfect vacation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to plan your perfect getaway
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/camps"
              className="border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const mainServices = [
  {
    id: 'adventure-tours',
    title: 'Adventure Tours',
    description: 'Thrilling expeditions for adrenaline seekers with expert guides',
    icon: FaHiking,
    image: '/advan.avif',
  },
  {
    id: 'beach-getaways',
    title: 'Beach Getaways',
    description: 'Relaxing beach vacations at the most beautiful coastal destinations',
    icon: FaUmbrellaBeach,
    image: '/boat.png',
  },
  {
    id: 'mountain-expeditions',
    title: 'Mountain Expeditions',
    description: 'Breathtaking mountain treks and alpine experiences',
    icon: FaMountain,
    image: '/img-1.png',
  },
  {
    id: 'cultural-tours',
    title: 'Cultural Tours',
    description: 'Immerse yourself in local traditions and heritage',
    icon: FaCity,
    image: '/img-2.png',
  },
  {
    id: 'camping-packages',
    title: 'Camping Packages',
    description: 'Fully-equipped camping experiences in stunning locations',
    icon: FaCampground,
    image: '/ser2.avif',
  },
  {
    id: 'custom-itineraries',
    title: 'Custom Itineraries',
    description: 'Tailor-made trips designed just for you',
    icon: FaMapMarkedAlt,
    image: '/services.avif',
  },
];

const customServices = [
  {
    title: 'Honeymoon Packages',
    description: 'Romantic getaways for newlyweds with special amenities',
  },
  {
    title: 'Family Vacations',
    description: 'Kid-friendly activities and accommodations for all ages',
  },
  {
    title: 'Group Retreats',
    description: 'Team-building and special group experiences',
  },
  {
    title: 'Luxury Travel',
    description: 'High-end accommodations and exclusive experiences',
  },
  {
    title: 'Eco-Tourism',
    description: 'Sustainable travel that supports local communities',
  },
];

const steps = [
  {
    title: 'Tell Us Your Dream',
    description: 'Share your travel preferences and must-have experiences',
  },
  {
    title: 'Get Customized Options',
    description: 'We create personalized itinerary options for your review',
  },
  {
    title: 'Book & Travel',
    description: 'Confirm your trip and get ready for an unforgettable journey',
  },
];