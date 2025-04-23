import Image from 'next/image';
import Link from 'next/link';
import { FaMountain, FaRoute, FaLeaf } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/photo-1520250497591-112f2f40a3f4.avif"
          alt="Travel adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Story, Your Journey
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the passion behind our travel experiences and the team that makes it all possible.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            We believe travel should be transformative, accessible, and sustainable. Our mission is to connect people with
            authentic experiences that inspire personal growth and cultural understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/photo-1520250497591-112f2f40a3f4.avif"
              alt="Team hiking"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaMountain className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Expert Local Guides</h4>
                  <p className="text-gray-600">
                    Our guides are born and raised in the destinations we visit, offering authentic insights.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaRoute className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Unique Itineraries</h4>
                  <p className="text-gray-600">
                    We design experiences that go beyond typical tourist attractions.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <FaLeaf className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Sustainable Travel</h4>
                  <p className="text-gray-600">
                    Committed to eco-friendly practices that protect the places we visit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate travelers and local experts dedicated to creating unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've experienced the world differently with us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/camps"
              className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Explore Our Camps
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Outdoor enthusiast with 15+ years of travel experience across 6 continents.",
    image: "/member1.avif",
  },
  {
    id: 2,
    name: "Ahmed Al-Mansoori",
    role: "Head Guide",
    bio: "Local expert with deep knowledge of Middle Eastern destinations.",
    image: "/member2.avif",
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    role: "Sustainability Director",
    bio: "Environmental scientist passionate about eco-tourism.",
    image: "/member3.avif",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Adventure Specialist",
    bio: "Mountaineer and survival expert with a love for extreme destinations.",
    image: "/member4.jpg",
  },
];