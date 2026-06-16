import { FiMail } from "react-icons/fi";

export default function Newsletter() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-primary text-primary-content rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          
          <FiMail className="text-6xl mx-auto mb-4" />

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get 10% Off Your First Order
          </h2>

          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter and be the first
            to know about new arrivals, exclusive offers,
            and handcrafted jewelry collections.
          </p>

          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-black"
              required
            />

            <button
              type="submit"
              className="btn btn-secondary px-8"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm mt-4 opacity-75">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}