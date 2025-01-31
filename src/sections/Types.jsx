import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ban1 from "../assets/ban1.jpg";
import ban2 from "../assets/ban2.jpg";
import ban3 from "../assets/ban3.jpg";

export const Types = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);
  return (
    <div id="apropos" className="w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10">
      <div  data-aos="zoom-in"
              data-aos-delay="100" className="flex flex-col justify-center items-end gap-8 bg-cover bg-center p-10 rounded-lg" style={{backgroundImage: `url(${ban1})`}}>
                <h1 className="text-white border rounded-lg border-white px-6 py-2 text-lg">50% de réduction</h1>
                <h1 className="text-4xl text-white font-semibold">Appareils <br /> sans fil</h1>
                <button className="bg-primary px-6 py-3 rounded-lg text-white font-semibold">ACHETEZ MAINTENANT</button>
      </div>
      <div  data-aos="zoom-in"
              data-aos-delay="200" className="flex flex-col justify-center items-end gap-8 bg-cover bg-center p-10 rounded-lg" style={{backgroundImage: `url(${ban2})`}}>
                <h1 className="text-white border rounded-lg border-white px-6 py-2 text-lg">50% de réduction</h1>
                <h1 className="text-4xl text-white font-semibold">Appareils <br /> sans fil</h1>
                <button className="bg-primary px-6 py-3 rounded-lg text-white font-semibold">ACHETEZ MAINTENANT</button>
      </div>
      <div  data-aos="zoom-in"
              data-aos-delay="300" className="flex flex-col justify-center items-end gap-8 bg-cover bg-center p-10 rounded-lg" style={{backgroundImage: `url(${ban3})`}}>
                <h1 className="text-white border rounded-lg border-white px-6 py-2 text-lg">50% de réduction</h1>
                <h1 className="text-4xl text-white font-semibold">Appareils <br /> sans fil</h1>
                <button className="bg-primary px-6 py-3 rounded-lg text-white font-semibold">ACHETEZ MAINTENANT</button>
      </div>

    </div>
  );
};
