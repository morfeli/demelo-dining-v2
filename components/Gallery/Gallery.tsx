import { BrowserWidth } from "../../pages";
import { Slider } from "../Slider/Slider";
import { StaticImageData } from "next/image";

import GalleryImages from "./GalleryImages";
// import { SliderDesktop } from "../Slider/SliderDesktop";

export interface ISlider {
  src: StaticImageData;
  title: string;
}

export const Gallery = ({ isMobile, innerWidth }: BrowserWidth) => {
  if (isMobile) {
    return (
      <section id="Gallery" className="flex flex-col">
        <h1 className="self-center px-8 py-4 my-4 text-3xl border-2 border-white">
          Gallery
        </h1>
        <Slider gallery={GalleryImages} />
      </section>
    );
  } else {
    // return <SliderDesktop gallery={GalleryImages} />;
    return <h1>hello</h1>;
  }
};
