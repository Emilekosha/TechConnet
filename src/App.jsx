import Banner from "./sections/Banner";
import Category from "./sections/Category";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Heros from "./sections/Heros";
import Insta from "./sections/Insta";
import Products from "./sections/Products";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import { Types } from "./sections/Types";

export default function App() {
  return (
    <div>
      <Header />
      <Heros />
      <Category />
      <Types />
      <Services />
      <Products />
      <Banner />
      <Reviews />
      <Insta />
      <Footer />
    </div>
  );
}
