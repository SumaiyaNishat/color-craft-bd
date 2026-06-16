import Link from "next/link";

export default function ProductCard({
  product,
}) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">

      <figure>
        <img
          src={product.image}
          alt={product.title}
          className="h-64 w-full object-cover"
        />
      </figure>

      <div className="card-body">

        <h2 className="card-title">
          {product.title}
        </h2>

        <p>{product.shortDesc}</p>

        <p className="font-bold text-primary">
          ${product.price}
        </p>

        <div className="card-actions justify-end">

          <Link
            href={`/items/${product.id}`}
          >
            <button className="btn btn-primary">
              View Details
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}