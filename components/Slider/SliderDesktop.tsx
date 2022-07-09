import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ISlider } from "../Gallery/Gallery";
// import ArrowSVG from "~/components/ui/ArrowSVG";

type SliderDesktopProps = {
  gallery: ISlider[];
};

export const SliderDesktop = ({ gallery }: SliderDesktopProps) => {
  //   const slideToLeft = () => {
  //     let slider = document.getElementById("carousel-box");
  //     if (slider) {
  //       slider.scrollLeft = slider.scrollLeft - 500;
  //     }
  //   };

  //   const slideToRight = () => {
  //     let slider = document.getElementById("carousel-box");
  //     if (slider) {
  //       slider.scrollLeft = slider.scrollLeft + 500;
  //     }
  //   };

  return (
    <section
      id="Gallery"
      className="flex flex-col flex-wrap items-center justify-center"
    >
      <div id="carousel" className="relative flex items-center w-4/5">
        {/* <div className="h-24 rounded-full bg-logoMediumPurple">
          <ArrowSVG rotate slideToLeft={slideToLeft} />
        </div> */}

        <motion.div
          id="carousel-box"
          className="flex items-center w-auto pb-2 mx-8 overflow-hidden scroll-smooth whitespace-nowrap"
        >
          {gallery.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                // key={i}
                // src={item.src}
                className="m-2 bg-contain cursor-pointer w-60 h-60 hover:bg-black"
                alt="Demelo Dining's sample dishes"
              />
            </div>
          ))}
        </motion.div>
        {/* <div className="h-24 rounded-full bg-logoMediumPurple">
          <ArrowSVG slideToRight={slideToRight} />
        </div> */}
      </div>
    </section>
  );
};
