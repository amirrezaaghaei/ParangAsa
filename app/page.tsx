import dynamic from "next/dynamic";

import { AuroraBackgroundDemo } from "../components/Hero";
import NavBar from "@/components/ui/FloatingNav";
import WobbleCardDemo from "@/components/Grid";
import LogoCloud from "@/components/LogoCloud";
import Footer from "@/components/Footer";
import { AppleCardsCarouselDemo } from "@/components/CardsCarousel";
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
import Plans from "@/components/Plans";

export default function Home() {
  return (
    <main
      className={`relative bg-white flex justify-center items-center flex-col mx-auto overflow-clip`}
    >
      <div className="w-full">
        <NavBar />
        <AuroraBackgroundDemo />
        <WobbleCardDemo />
        <AppleCardsCarouselDemo />
        <LogoCloud />
        <Plans />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
