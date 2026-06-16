import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Jewelry Collector",
      review:
        "Amazing quality and beautiful craftsmanship. The necklace exceeded my expectations.",
    },
    {
      name: "Emma Wilson",
      role: "Fashion Enthusiast",
      review:
        "Absolutely love my handmade necklace. The details are stunning and unique.",
    },
    {
      name: "Olivia Brown",
      role: "Happy Customer",
      review:
        "Beautiful packaging, fast shipping, and exceptional customer service.",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Customer Reviews
          </h2>

          <p className="mt-3 text-base-content/70">
            Trusted by jewelry lovers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-300"
            >
              <div className="card-body">

                <FaQuoteLeft className="text-primary text-3xl opacity-50" />

                <div className="flex gap-1 text-warning mt-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p className="text-base-content/80 leading-relaxed mt-3">
                  "{review.review}"
                </p>

                <div className="divider my-2"></div>

                <div className="flex items-center gap-3">

                  <div className="avatar placeholder">
                    <div className="bg-primary text-primary-content rounded-full w-12">
                      <span className="font-bold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold">
                      {review.name}
                    </h4>

                    <p className="text-sm text-base-content/60">
                      {review.role}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}