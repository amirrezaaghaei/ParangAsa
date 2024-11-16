import Image from "next/image";
import { AuroraBackgroundDemo } from "../components/Hero";
import NavBar from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import WobbleCardDemo from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { AppleCardsCarouselDemo } from "@/components/CardsCarousel";
import Contact from "@/components/Contact";

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
        <Clients />
        <Contact />
        {/* <RecentProjects />
        <Experience />
        <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
