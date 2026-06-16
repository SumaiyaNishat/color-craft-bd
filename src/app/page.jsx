import Image from "next/image";

import Hero from "./components/home/Hero";
import FeaturedCollections from "./components/home/FeaturedCollection";
import BestSellers from "./components/home/BestSellers";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/home/Testimonials";
import Newsletter from "./components/home/Newsletter";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero></Hero>

      <FeaturedCollections></FeaturedCollections>

      <BestSellers></BestSellers>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>

     
    </div>
  );
}