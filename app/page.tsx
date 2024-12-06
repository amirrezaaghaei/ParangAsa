import { AuroraBackgroundDemo } from "../components/Hero";
import NavBar from "@/components/ui/FloatingNav";
import WobbleCardDemo from "@/components/Grid";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { AppleCardsCarouselDemo } from "@/components/CardsCarousel";
import Contact from "@/components/Contact";
import Plans from "@/components/Plans";

export default function Home() {
  return (
    <main
      className={`relative bg-white flex justify-center items-center flex-col mx-auto overflow-clip`}
    >
      <div className="w-full">
        <NavBar />
        <AuroraBackgroundDemo />
        {/* <WobbleCardDemo />
        <AppleCardsCarouselDemo />
        <Clients />
        <Plans />
        <Contact /> */}
        <Footer />
      </div>
    </main>
  );
}
