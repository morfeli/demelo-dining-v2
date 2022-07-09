import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import classNames from "classnames";
import Image from "next/image";
import { Gallery, ISlider } from "../Gallery/Gallery";

type AboutSliderProps = {
  images?: StaticImageData[];
  gallery?: ISlider[];
};

export const Slider = ({ images, gallery }: AboutSliderProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: any;
    if (images) {
      interval = setTimeout(
        () =>
          setIndex((current) =>
            current === images.length - 1 ? 0 : current + 1
          ),
        3000
      );
    }

    if (gallery) {
      interval = setTimeout(
        () =>
          setIndex((current) =>
            current === gallery.length - 1 ? 0 : current + 1
          ),
        6000
      );
    }

    return () => clearInterval(interval);
  }, [index]);
  return (
    <section className="flex flex-col px-8">
      <div className="max-w-md m-auto overflow-hidden">
        <motion.div
          animate={{ translateX: `${-index * 100}%` }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="whitespace-nowrap"
        >
          {images &&
            images.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt="Demelo Dining"
                width={500}
                height={500}
                className="inline-block mx-2 my-2 rounded-3xl"
              />
            ))}
          {gallery &&
            gallery.map((image, i) => {
              return (
                <Image
                  key={i}
                  src={image.src}
                  alt="Demelo Dining"
                  width={500}
                  height={500}
                  className="inline-block mx-2 my-2 rounded-3xl"
                />
              );
            })}
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center h-12 mt-4">
        {images &&
          images.map((dot, idx) => (
            <div
              onClick={() => {
                setIndex(idx);
              }}
              key={idx}
              className={classNames(
                "mx-2",
                "w-4",
                "h-4",
                "bg-zinc-400",
                "rounded-lg",
                "cursor-pointer",
                "inline-block",
                { "bg-slate": index === idx }
              )}
            ></div>
          ))}
        {gallery &&
          gallery.map((dot, idx) => (
            <div
              onClick={() => {
                setIndex(idx);
              }}
              key={idx}
              className={classNames(
                "mx-2",
                "w-4",
                "h-4",
                "bg-zinc-400",
                "rounded-lg",
                "cursor-pointer",
                "inline-block",
                { "bg-slate": index === idx }
              )}
            ></div>
          ))}
      </div>
    </section>
  );
};
