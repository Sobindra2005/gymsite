import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Trainer from "@/components/Trainers";
import Footer from "@/components/footer";
import Reviews from "@/components/Reviews"
import ServiceAndFacilities from "@/components/serviceAndFacilities";
import Location from "@/components/location";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <ServiceAndFacilities />
      <Trainer />
      <Reviews />
      <Location/>
      <Footer />
    
    </div>
  );
}
