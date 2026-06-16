import Image from "next/image";

import Hero from "./components/home/Hero";
import FeaturedCollections from "./components/home/FeaturedCollection";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero></Hero>

      <FeaturedCollections></FeaturedCollections>

     
    </div>
  );
}