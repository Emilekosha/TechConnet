import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  const [isMenuopen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuopen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Accueil",
      path: "accueil",
    },
    {
      link: "A props",
      path: "apropos",
    },
    {
      link: "Produits",
      path: "produits",
    },
    {
      link: "Témoignages",
      path: "temoignages",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <>
      <div className="w-full px-16 py-2 bg-primary lg:flex hidden justify-between items-center gap-8">
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2 ">
          <FaPhoneVolume className="size-[20]" /> <span>+228 97388544</span>
        </h1>
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2 ">
          <FaMapMarkerAlt className="size-[20]" />{" "}
          <span>Agoè Cacaveli
          Près de l'église Saint-Pierre et Paul, non loin de la route nationale..</span>
        </h1>
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2 ">
          <MdEmail className="size-[20]" /> <span>support@techconnet.com</span>
        </h1>
      </div>

      <nav className="w-full bg-slate-100 flex justify-between items-center gap-10 lg:px-16 py-5 sticky top-0 z-50">
        <h1 className="text-first font-bold lg:text-[40px] text-3xl underline italic">
          TechConnet
        </h1>
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-primary hover:text-white"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>

        <div
          id="header-icons"
          className="lg:flex hidden justify-center    items-center gap-8 text-black"
        >
          <FaSearch className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-first" />
          <IoPerson className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-first" />
          <FaHeart className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-first" />
          <div className="relative">
            <FaShoppingCart className="w-[20px] h-[20px] hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-first" />
            <div className="bg-primary hover:bg-first px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] text-[14px] font-bold">
              2
            </div>
          </div>
        </div>

        {/*mobile menu starts here */}

        <div className="flex justify-center items-center lg:hidden mt-3" onClick={toggleMenu}>
          <div>
            {isMenuopen ? <FaXmark className="text-first text-3xl cursor-pointer" /> : <FaBars className="text-first text-3xl cursor-pointer" />}
          </div>
        </div>

        <div className={`${isMenuopen ? 'flex' : 'hidden'} w-full h-fit bg-first p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({link, path}) =>(
              <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-primary hover:text-black w-full text-center" to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
            ))}
          </ul>
        </div>

      </nav>
    </>
  );
};

export default Header;
