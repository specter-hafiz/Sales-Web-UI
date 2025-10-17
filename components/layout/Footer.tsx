"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="padding py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-6 w-6">
                <Image
                  src="/sales-logo.png"
                  alt="Sales Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-semibold">Sales</h2>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-gray-600 mb-6 max-w-xs">
              Sell Smarter. Close Faster. Short intro about Sales Cloud
              benefits.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-2 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="bg-black rounded-md text-white p-2 hover:bg-gray-800 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="bg-black rounded-md text-white p-2 hover:bg-gray-800 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="bg-black rounded-md text-white p-2 hover:bg-gray-800 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="bg-black rounded-md text-white p-2 hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="bg-black rounded-md text-white p-2 hover:bg-gray-800 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 text-sm text-black hover:text-blue-600 transition-colors"
                aria-label="Select language"
                aria-expanded={languageOpen}
              >
                <div className="relative h-4 w-4">
                  <Image
                    src="/sales-logo.png"
                    alt="Language icon"
                    fill
                    className="object-contain"
                  />
                </div>
                English
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language Dropdown */}
              {languageOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <button
                    onClick={() => setLanguageOpen(false)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguageOpen(false)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Español
                  </button>
                  <button
                    onClick={() => setLanguageOpen(false)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Français
                  </button>
                  <button
                    onClick={() => setLanguageOpen(false)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Deutsch
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Docs Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-900">Docs</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Product Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  API & Developer Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/integrations"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Integration Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/knowledge-base"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link
                  href="/gdpr"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  GDPR / Data Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-900">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact/sales"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Partner Program
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Office Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-900">
              Careers
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/positions"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Open Positions
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/culture"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Life at Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/diversity"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link
                  href="/careers/internships"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Internship Programs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sales. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/sitemap"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/accessibility"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
