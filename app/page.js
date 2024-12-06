import BestSelling from "./components/BestSelling";
import Featured from "./components/Featured";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import LatestBlogs from "./components/LatestBlogs";
import Maskimg from "./components/Maskimg";
import Offers from "./components/Offers";
import Poster from "./components/Poster";
import Slider from "./components/Slider";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

export default function page() {
  return (
   <>  
   <Home/>
   <Slider/>
   <FeaturedProducts/>
   <Poster/>
   <Trending/>
   <Featured/>
   <BestSelling/>
   <Maskimg/>
   <LatestBlogs/>
   <Offers/>
   </>
  );
}
