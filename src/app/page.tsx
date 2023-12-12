import AosInit from "@/components/aosInit";
import Carrusel from "@/components/carrusel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TopBar from "@/components/topBar";
import BDGCentroamerica from "@/views/BDGcentroamerica";
import AppsRpa from "@/views/appsRpa";
import Blog from "@/views/blog";
import NewsLetter from "@/views/newsLetter";
import VisionMision from "@/views/visionMision";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">
      <AosInit />
      <section
        className="bg-[#b2b2b2] h-[55px] w-full flex justify-center"
        id=""
      >
        <TopBar />
      </section>
      <Header />
      <Carrusel />
      <BDGCentroamerica />
      <VisionMision />
      <AppsRpa />
      <Blog />
      <NewsLetter />
      <Footer />
    </main>
  );
}
