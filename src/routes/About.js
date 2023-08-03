import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/img-1.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutimg} title="about" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
