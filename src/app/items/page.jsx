"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { products } from "@/data/products";
import ProductCard from "../components/ProductCard";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ? true : product.category === category;

    const matchPrice =
      priceRange === "All"
        ? true
        : priceRange === "0-50"
          ? product.price <= 50
          : product.price > 50;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <section className="py-16 bg-base-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge badge-primary mb-4">Handmade Collection</span>

          <h1 className="text-4xl md:text-5xl font-bold">Our Collection</h1>

          <p className="text-base-content/70 mt-4">
            Discover unique handcrafted jewelry made with love and care.
          </p>
        </div>

        {/* Filters */}
        <div className="card bg-base-200 shadow-md mb-10">
          <div className="card-body">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <label className="input input-bordered flex items-center gap-2">
                <FiSearch />
                <input
                  type="text"
                  className="grow"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>

              {/* Category */}
              <select
                className="select select-bordered w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Necklace">Necklaces</option>
                <option value="Ring">Rings</option>
                <option value="Bracelet">Bracelets</option>
                <option value="Earrings">Earrings</option>
              </select>

              {/* Price */}
              <select
                className="select select-bordered w-full"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="All">All Prices</option>
                <option value="0-50">$0 - $50</option>
                <option value="50+">$50+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-6">
          <p className="text-base-content/70">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-2">No Products Found</h3>

            <p className="text-base-content/60">
              Try changing your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
