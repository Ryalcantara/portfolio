import Nav         from "@/components/Nav";
import Hero        from "@/components/Hero";
import About       from "@/components/About";
import Experience  from "@/components/Experience";
import Works       from "@/components/Works";
import CTABanner   from "@/components/CTABanner";
import Footer      from "@/components/Footer";
import Cursor      from "@/components/Cursor";
import SectionDots from "@/components/SectionDots";

export default function Home() {
  return (
    <>
      <Cursor />
      <SectionDots />
      <Nav />
      <div id="scroll-root">
        <Hero />
        <About />
        <Experience />
        <Works />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}
