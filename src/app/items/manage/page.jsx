"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function ManagePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter(
      (item) => item.id !== id
    );

    setProducts(updatedProducts);

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    toast.success("Product Deleted Successfully!");
  };

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto py-10 px-4">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Manage Products
            </h1>

            <p className="text-base-content/70 mt-2">
              Total Products: {products.length}
            </p>
          </div>

          <Link
            href="/items/add"
            className="btn btn-primary mt-4 md:mt-0"
          >
            Add New Product
          </Link>
        </div>

        {/* Empty State */}
        {products.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold">
              No Products Found
            </h2>

            <p className="text-base-content/60 mt-2">
              Add your first product to get started.
            </p>

            <Link
              href="/items/add"
              className="btn btn-primary mt-4"
            >
              Add Product
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto bg-base-100 rounded-xl shadow-lg">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={
                          product.image ||
                          "https://via.placeholder.com/60"
                        }
                        alt={product.title}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                    </td>

                    <td className="font-medium">
                      {product.title}
                    </td>

                    <td>
                      {product.category || "N/A"}
                    </td>

                    <td>
                      ${product.price}
                    </td>

                    <td>
                      {product.date || "N/A"}
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <Link
                          href={`/items/${product.id}`}
                        >
                          <button className="btn btn-info btn-sm">
                            View
                          </button>
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(
                              product.id
                            )
                          }
                          className="btn btn-error btn-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}