import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      <figure>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="h-60 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {product.title}
        </h2>

        <p className="text-sm text-base-content/70">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-neutral">Price:
            ${product.price}
          </span>

          <Link
            href={`/items/${product.id}`}
            className="btn btn-secondary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}