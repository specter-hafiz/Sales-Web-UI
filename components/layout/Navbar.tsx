"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone, Search, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 right-0 left-0 padding bg-white shadow-md z-50">
      <div className="flex items-center justify-between py-3">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="relative h-8 w-12">
            <Image
              src="/sales-logo.png"
              alt="Sales Logo"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-base md:text-lg lg:text-xl font-semibold">
            Sales
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("products")}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              aria-expanded={activeDropdown === "products"}
            >
              Products
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  activeDropdown === "products" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "products" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                <Link
                  href="/products/crm"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  CRM
                </Link>
                <Link
                  href="/products/analytics"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  Analytics
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("solutions")}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              aria-expanded={activeDropdown === "solutions"}
            >
              Solutions
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  activeDropdown === "solutions" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "solutions" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                <Link
                  href="/solutions/enterprise"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  Enterprise
                </Link>
                <Link
                  href="/solutions/startup"
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  Startup
                </Link>
              </div>
            )}
          </div>

          {/* Other Nav Items */}
          <Link
            href="#pricing"
            className="hover:text-blue-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#resources"
            className="hover:text-blue-600 transition-colors"
          >
            Resources
          </Link>
          <Link
            href="#company"
            className="hover:text-blue-600 transition-colors"
          >
            Company
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Search Icon */}
          <Link
            href="/search"
            className="hidden sm:flex border border-gray-300 items-center justify-center rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </Link>

          {/* Phone Icon */}
          <Link
            href="tel:+1234567890"
            className="hidden sm:flex border border-gray-300 items-center justify-center rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Call us"
          >
            <Phone size={18} />
          </Link>

          {/* Log In - Hidden on mobile */}
          <Link
            href="/login"
            className="hidden md:block font-medium py-2 px-4 border border-black rounded-full hover:bg-light-green hover:border-light-green transition-colors"
          >
            Log In
          </Link>

          {/* Sign Up */}
          <Link
            href="/signup"
            className="hidden text-sm sm:text-base sm:block text-white bg-black py-2 px-4 rounded-full font-light hover:bg-gray-800 transition-colors"
          >
            Sign up for free
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="py-4 space-y-3 border-t border-gray-200 mt-4">
          {/* Mobile Nav Items */}
          <Link
            href="#products"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="#solutions"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="#pricing"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#resources"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="#company"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Company
          </Link>

          {/* Mobile Actions */}
          <div className="pt-4 space-y-3 border-t border-light-gray">
            <Link
              href="/"
              className="block text-center py-2 px-4 border border-black rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/"
              className="block text-center text-white bg-black py-2 px-4 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
