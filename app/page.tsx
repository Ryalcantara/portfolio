import Nav       from "@/components/Nav";
import Hero      from "@/components/Hero";
import About     from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services  from "@/components/Services";
import Contact   from "@/components/Contact";
import Footer    from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
