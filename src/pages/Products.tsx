import speaker from "../assets/speaker.png";
import AMD from "../assets/AMD.png";
import logi from "../assets/logitech.png";
import Asus from "../assets/Asus.png";
import intel from "../assets/intel.png";
import phone from "../assets/Phone.png";
import hand from "../assets/hand.png";
import Truck from "../assets/Truck.png";
import Product from "../components/product/Product";
import { ProcessorCard } from "../components/product/ProcessorCard";
import ProductSearch from "../components/product/ProductSearch";
import corel from "../assets/Core.jpeg";
import ryzen from "../assets/Ryzen.jpeg";
import thread from "../assets/Threadripper.jpeg";
import { useNavigate } from "react-router-dom";
import Hard from "./Hard";
const Products = () => {
  return (
    <div className="space-y-8">
      <section className="bg-[#17172B] text-white py-20 px-6 flex justify-center gap-12  items-center text-center">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Explore custom-built PCs designed just for you
          </h1>

          <div className="flex justify-center gap-[55px] items-center mt-12">
            <img src={AMD} alt="" className="w-[91.66px] h-[30.57px]" />
            <img src={logi} alt="" className="w-[100px] h-[13.59px]" />
            <img src={Asus} alt="" className="w-[98.16px] h-[8.6px] " />
            <img src={intel} alt="" className="w-[61.86px] h-[24px]" />
          </div>
        </div>

        {/* PC Image */}
        <div className="mt-10">
          <img src={speaker} alt="Gaming PC" className="w-[270px] h-[351px]" />
        </div>
      </section>
      <div className="bg-[#D1D1D6] shadow-md rounded-lg py-4 px-6 flex flex-col md:flex-row justify-between gap-6 items-center p-4">
        {/* Feature 1 */}
        <div className="flex items-center gap-2 ">
          <img src={phone} alt="" />
          <span className="text-gray-700 text-sm">
            24/7 Customer support via Live chat and Telegram
          </span>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-2">
          <img src={hand} alt="" />
          <span className="text-gray-700 text-sm">
            1-year Manufacturer warranty
          </span>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-2">
          <img src={Truck} alt="" />
          <span className="text-gray-700 text-sm">
            Free shipping on orders over 5 items
          </span>
        </div>
      </div>
      <div className="py-4 px-4   bg-[#17172B] p-5">
        <div className="flex items-center justify-center w-full py-4">
          <div className="flex-1 h-[2px] bg-[#D1D1D6]"></div>
          <h2 className="mx-4 text-white text-lg font-semibold">
            Workstations by Processors
          </h2>
          <div className="flex-1 h-[2px] bg-[#D1D1D6]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 ">
          <ProcessorCard title="Core" logo="intel" image={corel} type="core" />
          <ProcessorCard title="Ryzen" logo="amd" image={ryzen} type="ryzen" />
          <ProcessorCard
            title="Threadripper"
            logo="amd"
            image={thread}
            type="threadripper"
          />
        </div>
      </div>

      <div className="p-5 space-y-4">
        <ProductSearch />
        <Product />
      </div>
    </div>
  );
};

export default Products;
