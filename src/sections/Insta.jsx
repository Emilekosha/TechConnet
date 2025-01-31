import { useEffect } from 'react';
import insta1 from '../assets/insta-1.jpg';
import insta2 from '../assets/insta-2.jpg';
import insta3 from '../assets/insta-3.jpg';
import insta4 from '../assets/insta-4.jpg';
import insta5 from '../assets/insta-5.jpg';
import insta6 from '../assets/insta-6.jpg';
import AOS from "aos";
import "aos/dist/aos.css";


const Insta = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);
  return (
    <div className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-5'>
       <h1  data-aos="zoom-in"
              data-aos-delay="100" className='text-first text-xl font-semibold capitalize'>Notre boutique Instagram</h1>
       <h1  data-aos="zoom-in"
              data-aos-delay="200" className='text-black text-[42px] font-semibold capitalize text-center leading-[50px]'>Suivez-nous sur Instagram</h1>
              <div  data-aos="zoom-in"
              data-aos-delay="300" className='w-full grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 justify-center items-center gap-6 mt-8'>
                <img data-aos="zoom-in"
              data-aos-delay="400" src={insta1} alt="" className='rounded-lg'/>
                <img data-aos="zoom-in"
              data-aos-delay="500" src={insta2} alt="" className='rounded-lg'/>
                <img data-aos="zoom-in"
              data-aos-delay="600" src={insta3} alt="" className='rounded-lg'/>
                <img data-aos="zoom-in"
              data-aos-delay="700" src={insta4} alt="" className='rounded-lg'/>
                <img data-aos="zoom-in"
              data-aos-delay="800" src={insta5} alt="" className='rounded-lg'/>
                <img data-aos="zoom-in"
              data-aos-delay="900" src={insta6} alt="" className='rounded-lg'/>
              </div>
              <button data-aos="zoom-in"
              data-aos-delay="400" className='bg-first hover:bg-primary text-white hover:text-black text-xl px-6 py-2 rounded-lg font-semibold mt-10'>Techconnet Shop</button>
    </div>
  )
}

export default Insta
