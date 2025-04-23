import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative h-screen overflow-hidden bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/photo-1464822759023-fed622ff2c3b.avif"
          alt="Scenic travel view"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-9xl font-bold text-green-600 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you&apos;re looking for might have been removed, had its name changed, or is temporarily unavailable.
            <br />
            You can return to the homepage or explore our amazing travel destinations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-16">
          <svg
            className="w-32 h-32 text-green-500 opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
