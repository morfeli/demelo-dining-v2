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
    return <Slider gallery={GalleryImages} />;
  } else {
    // return <SliderDesktop gallery={GalleryImages} />;
    return <h1>hello</h1>;
  }
};
