import { products } from "@/data/products";
import ProductCard from "../ProductCard";


export default function BestSellers() {
  return (
    <section className="py-20 bg-base-200">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-4">
          Best Sellers
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Most loved products by our customers
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}