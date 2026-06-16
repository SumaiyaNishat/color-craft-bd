import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default async function ProductDetails({
  params,
}) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">
          Product Not Found
        </h2>

        <Link
          href="/items"
          className="btn btn-primary mt-6"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link
        href="/items"
        className="btn btn-outline mb-8"
      >
        ← Back to Products
      </Link>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={400}
            className="rounded-3xl w-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-primary text-2xl font-bold my-4">
            ${product.price}
          </p>

          <div className="badge badge-secondary">
            {product.category}
          </div>

          <p className="mt-6 text-base-content/80">
            {product.description}
          </p>

          {/* Additional Information */}
          <div className="mt-8 space-y-2">
            <p>
              <strong>Price:</strong> $
              {product.price}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {product.category}
            </p>

            <p>
              <strong>Date Added:</strong>{" "}
              {product.date}
            </p>
          </div>

          {/* Specifications */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3">
              Specifications
            </h3>

            <ul className="space-y-2">
              <li>
                Material:{" "}
                {
                  product.specifications
                    ?.material
                }
              </li>

              <li>
                Handmade:{" "}
                {
                  product.specifications
                    ?.handmade
                }
              </li>

              <li>
                Stock:{" "}
                {
                  product.specifications
                    ?.stock
                }
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Related Products
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <figure>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-52 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {item.title}
                </h2>

                <p className="text-sm text-base-content/70 line-clamp-2">
                  {item.shortDesc}
                </p>

                <p className="font-bold text-primary">Price:
                  ${item.price}
                </p>

                <Link
                  href={`/items/${item.id}`}
                  className="btn btn-secondary"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}