import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import earbud from "../assets/earbud.jpg";
import bani from "../assets/bani.png";
import ordi from "../assets/ordi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Heros = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL: false,
  };
  

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div
      id="hero"
      className="w-full flex justify-center items-center lg:h-[700px] h-[600px]"
    >
      <Slider className="w-full" {...settings}>
        <div>
          <div
            className="w-full flex flex-col lg:px-20 px-5 gap-10 bg-cover bg-center justify-center items-center lg:h-[700px] h-[600px] min-h-[500px]"
            style={{ backgroundImage: `url(${bani})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-primary border rounded-lg border-primary px-6 py-2 text-2xl"
            >
              Bénéficiez de réductions allant jusqu&apos à 50 %
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-secondary lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              DSLR 360<br /> Camera
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-secondary text-2xl"
            >
              100% de confiance <span className=" text-primary font-bold"> Matérils électroniques </span>
            </h1>
            <button data-aos="zoom-in"
              data-aos-delay="200" className="bg-primary px-6 py-3 rounded-lg text-secondary text-xl font-semibold">Collections en ligne</button>
          </div>
        </div>

        <div>
          <div
            className="w-full lg:px-20 px-5 gap-10 bg-cover bg-center flex flex-col justify-center items-center lg:h-[700px] h-[600px] min-h-[500px]"
            style={{ backgroundImage: `url(${headset})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-primary border rounded-lg border-primary px-6 py-2 text-2xl"
            >
              Bénéficiez de réductions allant jusqu&apos à 50 %
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-secondary lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              Casque Bluetooth <br /> BLAUPUNKT
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-secondary text-2xl"
            >
              100% de confiance <span className=" text-primary font-bold"> Gadgets électroniques </span>
            </h1>
            <button data-aos="zoom-in"
              data-aos-delay="200" className="bg-primary px-6 py-3 rounded-lg text-secondary text-xl font-semibold">Collections en ligne</button>
          </div>
        </div>

        <div>
          <div
            className="w-full flex flex-col lg:px-20 px-5 gap-10 bg-cover bg-center justify-center items-center lg:h-[700px] h-[600px] min-h-[500px]"
            style={{ backgroundImage: `url(${earbud})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-primary border rounded-lg border-primary px-6 py-2 text-2xl"
            >
              Bénéficiez de réductions allant jusqu&apos à 50 %
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-secondary lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              Écouteurs<br />sans fil
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-secondary text-2xl"
            >
              100% de confiance <span className=" text-primary font-bold"> Gadgets électroniques </span>
            </h1>
            <button data-aos="zoom-in"
              data-aos-delay="200" className="bg-primary px-6 py-3 rounded-lg text-secondary text-xl font-semibold">Collections en ligne</button>
          </div>
        </div>

        <div>
          <div
            className="w-full flex flex-col lg:px-20 px-5 gap-10 bg-cover bg-center justify-center items-center lg:h-[700px] h-[600px] min-h-[500px]"
            style={{ backgroundImage: `url(${ordi})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-orange-600 border rounded-lg border-orange-600 px-6 py-2 text-2xl"
            >
              Bénéficiez de réductions allant jusqu'à 50 %
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-secondary lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              Ordinateu portable<br />MacBook Air
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-secondary text-2xl"
            >
              100% de confiance <span className=" text-black font-bold"> Gadgets électroniques </span>
            </h1>
            <button data-aos="zoom-in"
              data-aos-delay="200" className="bg-primary px-6 py-3 rounded-lg text-secondary text-xl font-semibold">Collections en ligne</button>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default Heros;
