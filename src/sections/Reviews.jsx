import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { reviewdata } from "../export";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Reviews = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrowsL: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    <div id="testimonials" className="w-full lg:px-20 px-5 py-[80px] bg-slate-100 flex flex-col justify-center items-center gap-4">
      <h1 data-aos="zoom-in" data-aos-delay="100" className="text-blue-500 text-xl font-semibold capitalize">1400+ avis clients</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className="text-black text-[42px] leading-[50px] font-semibold capitalize">Notre amour pour nos clients</h1>
      <div data-aos="zoom-in" data-aos-delay="200" className="w-full mt-10">
        <Slider className="w-full" {...settings}>
          {
            reviewdata.map((item, index) =>(
             <div key={index}>
                <div key={index} className="w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3">
                    <img src={item.img} alt="" className="rounded-full w-[120px] m-auto"/>
                    <div className="flex justify-center items-center gap-1">
                      <FaStar className="text-primary"/>
                      <FaStar className="text-primary"/>
                      <FaStar className="text-primary"/>
                      <FaStar className="text-primary"/>
                      <FaStar className="text-primary"/>
                    </div>
                    <p className="text-center text-gray-500 text-lg">{item.para}</p>
                    <div className="flex justify-center items-center gap-5">
                      <FaQuoteLeft className="fill-primary size-16"/>
                      <div className="w-full flex flex-col justify-center items-start">
                        <h1 className="text-black text-xl capitalize font-semibold">{item.name}</h1>
                        <h1 className="text-gray-500 capitalize">{item.post}</h1>
                      </div>
                    </div>
                </div>
             </div> 
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Reviews
