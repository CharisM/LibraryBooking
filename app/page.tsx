import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold tracking-wide">
          📚 Library Reservation
        </h1>

        <nav className="space-x-8 text-sm font-medium hidden md:flex">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>

        <Link
          href="/login"
          className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Login
        </Link>
      </header>


      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        {/* Icon */}
        <div className="mb-6 text-6xl">
          📖
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Library Booking System
        </h2>

        <p className="max-w-xl text-lg text-purple-100 mb-10">
          Easily reserve books, study rooms, and library resources online.
          Manage your reservations anytime and anywhere.
        </p>

        <div className="flex gap-6">
          <Link
            href="/login"
            className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Log In
          </Link>

          <Link
            href="/about"
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>


      {/* FEATURES */}
      <section className="bg-white text-gray-800 py-20 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Book Reservation</h3>
            <p className="text-gray-600 text-sm">
              Reserve available books quickly through the system without
              waiting in line.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🪑</div>
            <h3 className="text-xl font-semibold mb-2">Study Space Booking</h3>
            <p className="text-gray-600 text-sm">
              Book study tables and rooms for group study or personal research.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast & Easy Access</h3>
            <p className="text-gray-600 text-sm">
              Manage reservations, track availability, and access resources
              anytime.
            </p>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-purple-200">
        © {new Date().getFullYear()} Library Reservation System
      </footer>

    </div>
  );
}