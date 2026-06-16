import {
  FaHandSparkles,
  FaGem,
  FaShippingFast,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

export default function WhyChooseUs() {
  const features = [
    {
      title: "100% Handmade",
      desc: "Every piece crafted with care",
      icon: FaHandSparkles,
    },
    {
      title: "Premium Materials",
      desc: "High quality materials only",
      icon: FaGem,
    },
    {
      title: "Worldwide Shipping",
      desc: "Fast and secure delivery",
      icon: FaShippingFast,
    },
    {
      title: "Custom Designs",
      desc: "Personalized jewelry available",
      icon: MdDesignServices,
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose ColorCraft
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="card-body text-center">
                  <Icon className="text-5xl mx-auto text-primary mb-4" />

                  <h3 className="font-bold text-xl">
                    {feature.title}
                  </h3>

                  <p className="text-base-content/70">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}