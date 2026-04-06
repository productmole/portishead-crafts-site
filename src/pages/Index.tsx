import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Work />
      <FAQ />
      <Testimonials />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
