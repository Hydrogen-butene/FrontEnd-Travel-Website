import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/img-2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutimg}
        title="contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
