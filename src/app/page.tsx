import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PromoBanners from "@/components/PromoBanners";
import NewArrivals from "@/components/NewArrivals";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PromoBanners />
        <NewArrivals />
        <CategoryGrid />
      </main>
      <Footer />
    </>
  );
}
