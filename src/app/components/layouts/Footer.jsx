import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-base-200 to-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
         
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              ColorCraft
            </h2>
            <p className="mt-4 text-sm opacity-80">
              Discover handcrafted jewelry created by talented artisans.
              Every piece tells a story.
            </p>
          </div>

         
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop">All Products</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/new-arrivals">New Arrivals</Link></li>
              <li><Link href="/featured">Featured Items</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Stay Inspired
            </h3>
            <p className="text-sm opacity-80 mb-4">
              Get updates on new collections and artisan stories.
            </p>

            <div className="join w-full">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="divider my-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} ColorCraft • Handmade with passion
          </p>

          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-outline"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-outline"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-sm btn-outline"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;