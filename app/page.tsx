import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureProject from "@/components/FeatureProject";
import WorkGrid from "@/components/WorkGrid";
import StudioSection from "@/components/StudioSection";
import ShopPreview from "@/components/ShopPreview";
import DonationSection from "@/components/DonationSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureProject />
      <WorkGrid />
      <StudioSection />
      <ShopPreview />
      <DonationSection />
      <CtaSection />
      <Footer />
    </>
  );
}