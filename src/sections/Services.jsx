
import { useEffect } from "react";
import payement from '../assets/payment.png';
import shipping from '../assets/shipping.png';
import refund  from '../assets/return.png';
import gift from '../assets/gift.png';
import AOS from "aos";
import "aos/dist/aos.css";


const Services = () => {

  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();

  }, []);
  return (
    <div className="w-full lg:px-20 px-5 pt-[0] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10">
      <div  data-aos="zoom-in"
              data-aos-delay="100" className="flex flex-col justify-center items-center gap-2">
                <img src={shipping} alt="" className="mb-[20px] w-[60px]" />
                <h1 className="text-xl text-black font-semibold">Expédition dans le monde entier</h1>
                <p className="text-[17px] text-slate-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div  data-aos="zoom-in"
              data-aos-delay="100" className="flex flex-col justify-center items-center gap-2">
                <img src={payement} alt="" className="mb-[20px] w-[60px]" />
                <h1 className="text-xl text-black font-semibold">Paiement 100% sécurisé</h1>
                <p className="text-[17px] text-slate-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div  data-aos="zoom-in"
              data-aos-delay="100" className="flex flex-col justify-center items-center gap-2">
                <img src={refund} alt="" className="mb-[20px] w-[60px]" />
                <h1 className="text-xl text-black font-semibold">Expédition dans le monde entier</h1>
                <p className="text-[17px] text-slate-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div  data-aos="zoom-in"
              data-aos-delay="100" className="flex flex-col justify-center items-center gap-2">
                <img src={gift} alt="" className="mb-[20px] w-[60px]" />
                <h1 className="text-xl text-black font-semibold">Expédition dans le monde entier</h1>
                <p className="text-[17px] text-slate-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      
    </div>
  )
}

export default Services
