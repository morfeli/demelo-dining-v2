import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Video } from "../components/Hero/Video";
import { About } from "../components/About/About";
import { Services } from "../components/Services/Services";
import { Gallery } from "../components/Gallery/Gallery";
import ContactForm from "../components/Contact/ContactForm";
import { Footer } from "../components/Footer/Footer";

export interface BrowserWidth {
  innerWidth: number;
  isMobile: boolean;
}

const Home: NextPage = () => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const isMobile = innerWidth < 767;

  const changeWidth = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    changeWidth();

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="bg-lightGrayOne text-slate-800">
      <Header innerWidth={innerWidth} isMobile={isMobile} />
      <Hero />
      <Video />
      <About />
      <Services />
      <Gallery innerWidth={innerWidth} isMobile={isMobile} />
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
