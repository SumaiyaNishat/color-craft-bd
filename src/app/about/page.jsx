import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
     
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          About ColorCraft
        </h1>

        <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
          ColorCraft is a handmade jewelry marketplace
          where creativity meets craftsmanship.
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800"
          alt="Handmade Jewelry"
          width={800}
          height={600}
          className="rounded-3xl shadow-xl w-full"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Story
          </h2>

          <p className="mb-4 text-base-content/80">
            ColorCraft was created to connect talented
            artisans with people who appreciate
            handcrafted beauty and unique jewelry.
          </p>

          <p className="text-base-content/80">
            Every piece is carefully designed using
            premium materials and traditional
            craftsmanship techniques.
          </p>
        </div>
      </div>

     
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Our Mission
        </h2>

        <p className="max-w-3xl mx-auto text-base-content/80">
          Our mission is to support local artisans,
          promote sustainable craftsmanship, and
          provide customers with unique handmade
          jewelry that tells a story.
        </p>
      </div>
    </section>
  );
}