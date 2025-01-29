import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { products } from "../export";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart, FaStar } from "react-icons/fa";

const Products = () => {
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
      id="products"
      className="w-full lg:px-20 px-5 py-[80px] bg-slate-100 flex flex-col justify-center items-center gap-6"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-first text-xl font-semibold"
      >
        Parcourir les collections
      </h1>

      <h1 data-aos="zoom-in"
        data-aos-delay="200" className="text-[42px] text-black font-semibold loading-[50px]">Produits tendance</h1>

        <div data-aos="zoom-in"
        data-aos-delay="300" className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10">
          {
            products.map((item, index) =>(
              <div data-aos="zoom-in"
              data-aos-delay="300" id="product-box" key={index} className="flex flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg cursor-pointer relative">
                <img src={item.img} alt="" />
                <div id="icons" className="flex justify-center items-center gap-4 absolute top-[20px]">
                  <div className="bg-first hover:bg-primary hover:text-rounded-full p-3 text-white">
                    <MdOutlineRemoveRedEye />
                  </div>
                  <div className="bg-first hover:bg-primary hover:text-rounded-full p-3 text-white">
                    <FaRegHeart />
                  </div>
                  <div className="bg-first hover:bg-primary hover:text-rounded-full p-3 text-white">
                    <MdAddShoppingCart />
                  </div>
                </div>
                <h1 className="text-lg text-gray-500 font-semibold">{item.category}</h1>
                <h1 className="text-xl text-black font-semibold">{item.name}</h1>
                <h1 className="text-xl text-first font-semibold">{item.price}</h1>
                <div className="w-full mt-2">
                  <hr />
                  <div className="flex justify-between items-center gap-8 mt-3">
                    <div className="flex justify-start items-center gap-1">
                      <FaStar className="text-primary"/>
                      <FaStar className="text-primary"/>
                      <FaStar className="text-primary"/>
                      <FaStar className="text-primary"/>
                      <FaStar className="text-primary"/>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold">Vente 15%</button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
        <button data-aos='zoom-in' data-aos-delay='400' className="bg-first hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold mt-8">VOIR PLUS</button>
    </div>
  );
};

export default Products;
