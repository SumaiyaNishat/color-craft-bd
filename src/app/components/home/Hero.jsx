import Link from "next/link";

const Hero = () => {
return ( <section className="bg-base-100"> <div className="max-w-7xl mx-auto px-6 py-20"> <div className="grid lg:grid-cols-2 gap-12 items-center">


      {/* Left Content */}
      <div>
        <div className="badge badge-primary mb-4">
          Handmade Jewelry Marketplace
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover{" "}
          <span className="text-primary">
            Handcrafted Jewelry
          </span>
          <br />
          Made With Passion
        </h1>

        <p className="py-6 text-lg text-base-content/70">
          Explore unique artisan-made necklaces,
          rings, bracelets, and earrings crafted
          with premium materials and timeless
          craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/items"
            className="btn btn-primary btn-lg"
          >
            Shop Collection
          </Link>

          <Link
            href="/about"
            className="btn btn-outline btn-lg"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-10">
          <div>
            <h3 className="text-3xl font-bold text-primary">
              500+
            </h3>
            <p className="text-sm text-base-content/60">
              Handmade Products
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">
              120+
            </h3>
            <p className="text-sm text-base-content/60">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">
              50+
            </h3>
            <p className="text-sm text-base-content/60">
              Artisan Partners
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <img
          src="https://i.ibb.co.com/SD8nK3t7/8185-Bd-L6ba-L-AC-UF350-350-QL80.jpg"
          alt="ColorCraft Jewelry"
          className="w-full rounded-3xl shadow-2xl"
        />

        <div className="absolute -bottom-6 -left-6 bg-base-100 shadow-xl rounded-2xl p-4">
          <p className="font-bold text-primary">
            ⭐ 4.9 Rating
          </p>

          <p className="text-sm">
            Trusted by Jewelry Lovers
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


);
};

export default Hero;
