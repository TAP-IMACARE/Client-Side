import Header from "../components/header/Header";
import Hero from "../components/Hero/Hero";
import PatientInfoContent from "../components/patientInfoContent/PatientInfoContent";
import WhyUs from "../components/whyUs/WhyUs";
import Footer from "../components/Footer/Footer";
import Plans from "../components/plans/Plans";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <PatientInfoContent />
      <WhyUs />
      <Plans />
      <Footer />
    </>
  );
};

export default LandingPage;
