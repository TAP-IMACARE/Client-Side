import Header from "../components/Header/Header";
import OurDoctors from "../components/OurDoctors/OurDoctors";
import OurServices from "../components/OurServices/OurServices";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <OurDoctors />
      <Footer />
    </>
  );
};

export default Homepage;
