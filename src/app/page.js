import Navbar from "@/components/Navbar";
import OurWorks from "@/components/OurWorks";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-24"> {/* Push content below fixed navbar */}
        <OurWorks />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
