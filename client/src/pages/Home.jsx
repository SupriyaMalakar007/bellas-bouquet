import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

export default Home;