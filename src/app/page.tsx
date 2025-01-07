import Hero from "@/components/Hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Trainer from "@/components/Trainers";
import Gallery from "@/components/gallery"
import Location from "@/components/location";

export default function Home() {
  return (
    <div className="">
      
      <Hero />
      <Features />
      <Pricing />
      {/* <ServiceAndFacilities /> */}
      <Trainer />
      <Gallery />
      <Location/>
  
    
    </div>
  );
}
