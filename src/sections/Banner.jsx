import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import deal from '../assets/deal-bg.jpg'


const Banner = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);
  return (
    <div className="w-full lg:px-20 px-5 py-[80px]">
      <div data-aos="zoom-in" data-aos-delay="100" className="w-full h-[300px] rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3 p-4" style={{backgroundImage: `url(${deal})`}}>
        <h1 className="text-primary text-xl font-semibold">Les achats quotidiens</h1>
        <p className="text-white text-[42px] leading-[50px] font-bold">Offre du jour</p>
      </div>
    </div>
  )
}

export default Banner
