import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import PatientInfoContent from "../components/PatientInfoContent/PatientInfoContent";
import WhyUs from "../components/WhyUs/WhyUs";
import Footer from "../components/Footer/Footer";
import Plans from "../components/Plans/Plans";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <PatientInfoContent /> */}
      <WhyUs />
      {/* <Plans /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
