import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Trainer from "@/components/Trainers";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import Reviews from "@/components/Reviews"

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Trainer />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
}
