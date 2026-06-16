"use client";

import ProtectedRoute from "@/app/components/ProtectedRoute";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    shortDesc: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleDateString(),
    };

    const existingProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    localStorage.setItem(
      "products",
      JSON.stringify([
        ...existingProducts,
        newProduct,
      ])
    );

    toast.success("Product Added Successfully!");

    setFormData({
      title: "",
      category: "",
      shortDesc: "",
      description: "",
      price: "",
      image: "",
    });
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-6">
              Add New Product
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Product Title */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Product Title
                  </span>
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter product title"
                  className="input input-bordered w-full"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Category
                  </span>
                </label>

                <select
                  name="category"
                  className="select select-bordered w-full"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Category
                  </option>
                  <option value="Necklace">
                    Necklace
                  </option>
                  <option value="Ring">
                    Ring
                  </option>
                  <option value="Bracelet">
                    Bracelet
                  </option>
                  <option value="Earrings">
                    Earrings
                  </option>
                </select>
              </div>

              {/* Short Description */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Short Description
                  </span>
                </label>

                <input
                  type="text"
                  name="shortDesc"
                  placeholder="Write a short description"
                  className="input input-bordered w-full"
                  value={formData.shortDesc}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Full Description */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Full Description
                  </span>
                </label>

                <textarea
                  name="description"
                  placeholder="Write full product details"
                  className="textarea textarea-bordered w-full"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Price ($)
                  </span>
                </label>

                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Image URL
                  </span>
                </label>

                <input
                  type="url"
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Submit Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}