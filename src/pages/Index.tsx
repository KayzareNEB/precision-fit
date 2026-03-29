import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import InvestorForm from "@/components/InvestorForm";
import UpdatesSignup from "@/components/UpdatesSignup";
import Footer from "@/components/Footer";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <PositioningSection />
    <WhyItMattersSection />
    <InvestorForm />
    <UpdatesSignup />
    <Footer />
  </main>
);

export default Index;
