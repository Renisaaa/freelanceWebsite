import Image from "next/image";
import Navbar from "../components/Navbar";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import HomeInfo from "@/components/HomeInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />

      <Header />
      <AboutUs />
      <section id="carousel-section">
        <Carousel />
      </section>

      <HomeInfo />
    </main>
  );
}
