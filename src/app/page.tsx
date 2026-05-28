import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedDrop from "@/components/FeaturedDrop";
import NewArrivals from "@/components/NewArrivals";
import BrandStatement from "@/components/BrandStatement";
import SocialGallery from "@/components/SocialGallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedDrop />
        <NewArrivals />
        <BrandStatement />
        <SocialGallery />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
