import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Travel</h3>
            <p className="text-gray-400">
              Making travel accessible and memorable for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Safety', 'Cancellation', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebook />, name: 'Facebook' },
                { icon: <FaTwitter />, name: 'Twitter' },
                { icon: <FaInstagram />, name: 'Instagram' },
                { icon: <FaLinkedin />, name: 'LinkedIn' },
              ].map((social) => (
                <Link
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}