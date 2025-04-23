import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/contact.avif"
          alt="Travel adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-xl text-white/90">
              We&apos;re here to help you plan your perfect adventure
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors flex items-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our travel packages or need help with your booking? Reach out to
              us through any of these channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">info@traveladventures.com</p>
                  <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Office</h3>
                  <p className="text-gray-600">123 Adventure Lane</p>
                  <p className="text-gray-600">Denver, CO 80202</p>
                  <p className="text-gray-500 text-sm mt-1">
                    <Link href="#" className="text-green-600 hover:underline">
                      Get directions
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaClock className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Facebook */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/facebook.svg" 
                    alt="Facebook"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </Link>
                
                {/* Instagram */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/instagram.svg" 
                    alt="Instagram"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </Link>
                
                {/* Twitter */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/twitter.svg" 
                    alt="Twitter"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </Link>
                
                {/* YouTube */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/youtube.svg" 
                    alt="YouTube"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256836766!2d-73.98887592401726!3d40.74844097138951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689871586263!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
