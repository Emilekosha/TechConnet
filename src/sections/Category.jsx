import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";

const Category = () => {
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
      id="category"
      className="w-full bg-slate-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex flex-col lg:flex-row justify-center items-center gap-20"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]"
      >
        <h1 className="text-first text-2xl font-semibold text-center">
          Article préféré
        </h1>
        <h1 className="text-black font-semibold text-[40px] leading-[50px] text-center lg:text-start">
          Catégorie populaire
        </h1>
        <button className="bg-first px-8 py-3 rounded-lg text-secondary hover:bg-primary hover:text-black font-semibold uppercase mt-[60px] ">
          Tout voir
        </button>
      </div>
      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10">
        <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center gap-8">
          <img src={cat1} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-first cursor-pointer">Enceintes portables</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-8">
          <img src={cat3} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-first cursor-pointer">Enceintes portables</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col justify-center items-center gap-8">
          <img src={cat5} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-first cursor-pointer">Enceintes portables</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col justify-center items-center gap-8">
          <img src={cat2} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-first cursor-pointer">Enceintes portables</h1>
        </div>
        <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col justify-center items-center gap-8">
          <img src={cat4} alt="" className="rounded-full cursor-pointer"/>
          <h1 className="text-black text-xl font-semibold hover:text-first cursor-pointer">Enceintes portables</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
