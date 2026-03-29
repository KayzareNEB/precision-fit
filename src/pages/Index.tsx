import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { PrivacyModal, TermsModal, CookieModal } from "@/components/LegalModals";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenCookies={() => setCookiesOpen(true)}
      />

      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
      <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
      <CookieModal open={cookiesOpen} onOpenChange={setCookiesOpen} />
      <CookieConsent onOpenCookiePolicy={() => setCookiesOpen(true)} />
    </main>
  );
};

export default Index;
