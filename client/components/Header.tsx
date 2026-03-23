import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ResumeBuilder
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/builder"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Builder
            </Link>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Features
            </a>
          </nav>

          {/* CTA Button */}
          <Link
            to="/builder"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
