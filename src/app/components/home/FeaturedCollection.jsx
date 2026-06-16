import {
  FaGem,
  FaRing,
  FaRegStar,
} from "react-icons/fa";
import { GiEarrings } from "react-icons/gi";

export default function FeaturedCollections() {
  const collections = [
    {
      title: "Necklaces",
      desc: "Elegant handmade necklaces",
      icon: FaGem,
    },
    {
      title: "Rings",
      desc: "Beautiful artisan rings",
      icon: FaRing,
    },
    {
      title: "Bracelets",
      desc: "Premium handcrafted bracelets",
      icon: FaRegStar,
    },
    {
      title: "Earrings",
      desc: "Unique statement earrings",
      icon: GiEarrings,
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Collections
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Explore our most loved handmade collections
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="card-body text-center">
                  <Icon className="text-5xl mx-auto text-primary" />

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}