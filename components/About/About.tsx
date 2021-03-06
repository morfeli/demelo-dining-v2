import AboutImages from "./AboutImages";
import { Slider } from "../Slider/Slider";
import GetStarted from "../CompanyInfo/GetStarted";
import Characteristics from "../CompanyInfo/Characteristics";

export const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col p-8 leading-8 text-center text-slate-700 bg-lightGrayTwo md:px-18 md:text-lg"
    >
      <h1 className="self-center px-8 py-4 text-3xl border-2 border-white font-Nautigal">
        About
      </h1>
      <div className="lg:flex lg:justify-between lg:pt-8">
        <div className="lg:w-50vw">
          <p className="py-4">
            Demelo Dining is a private dining company created by Chef
            Christopher Demelo. Chef Chris is back in Miami and ready to bring
            you the ultimate dining experience, at the comfort of your own home.
            We are talking about the best flavors, presentation, sauces, menu
            options and passion in every bite.
          </p>
          <p className="py-4">
            We are elevating the “at home” dining experience to a whole
            different realm. Chef Chris loves to share his past experiences he
            obtained in New York City, working for Chef Daniel Boulud. Allow us
            to provide you with the best of life, food and experiences. As soon
            as Demelo Dining steps into the room, the flare is on!
          </p>
          <p className="py-4">
            Demelo Dining is a Miami based company and we are here to stay. We
            want to feed the community, one delicious meal at a time. We Mainly
            focus on small private dining events at the moment, but plan on
            expanding into a much larger Food & Hospitality Group within our
            local community.
          </p>
        </div>
        <Slider images={AboutImages} />
      </div>

      <GetStarted />
      <Characteristics />
    </section>
  );
};
