import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import { useSwiper } from "swiper/react";

import Image from "next/image";
import { LeftArrow } from "./LeftArrow";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { ISlider } from "../Gallery/Gallery";
import { RightArrow } from "./RightArrow";

type Props = {
  gallery: ISlider[];
};

export const SwiperFN = ({ gallery }: Props) => {
  return (
    <div className="flex items-center justify-around">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mx-auto w-600px"
      >
        {gallery.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                src={item.src}
                width={600}
                height={500}
                className="shadow-2xl rounded-3xl"
                alt="Chef Demelo sample dishes"
              />
              <div className="p-8 mt-4 mb-20 text-white rounded-md bg-grayTwo">
                <h1 className="text-3xl text-center">{item.title}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
