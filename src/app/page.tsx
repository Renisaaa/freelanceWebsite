import Navbar from "../components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import HomeInfo from "@/components/HomeInfo";
import UnlockYourDream from "@/components/UnlockYourDream";
import HomepageServices from "@/components/HomepageServices";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Navbar />

      <Header />
      <AboutUs />
      <section id="carousel-section">
        <PhotoGallery />
      </section>

      <HomeInfo />
      <HomepageServices />
      <Testimonials />
      <UnlockYourDream />
    </main>
  );
}
