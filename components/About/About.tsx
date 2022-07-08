import AboutImages from "./AboutImages";
import { Slider } from "../Slider/Slider";
import GetStarted from "../CompanyInfo/GetStarted";
import Characteristics from "../CompanyInfo/Characteristics";

export const About = () => {
  return (
    <section>
      <h1>About</h1>
      <p>
        Demelo Dining is a private dining company created by Chef Christopher
        Demelo. Chef Chris is back in Miami and ready to bring you the ultimate
        dining experience, at the comfort of your own home. We are talking about
        the best flavors, presentation, sauces, menu options and passion in
        every bite.
      </p>
      <p>
        We are elevating the “at home” dining experience to a whole different
        realm. Chef Chris loves to share his past experiences he obtained in New
        York City, working for Chef Daniel Boulud. Allow us to provide you with
        the best of life, food and experiences. As soon as Demelo Dining steps
        into the room, the flare is on!
      </p>
      <p>
        Demelo Dining is a Miami based company and we are here to stay. We want
        to feed the community, one delicious meal at a time. We Mainly focus on
        small private dining events at the moment, but plan on expanding into a
        much larger Food & Hospitality Group within our local community.
      </p>
      <Slider images={AboutImages} />
      <GetStarted />
      <Characteristics />
    </section>
  );
};
