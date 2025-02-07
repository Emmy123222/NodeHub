import React from "react";

const SystemCostCard: React.FC<{ price: string }> = ({ price }) => (
  <div className="bg-white shadow-lg rounded- overflow-hidden w-80 text-center border rounded-t-3xl">
    <div className="bg-black text-white py-3 text-lg font-bold rounded-t-3xl">
      System cost
    </div>
    <div className="py-6 text-3xl font-bold text-cyan-500">₦{price}</div>
    <div className="pb-4">
      <button className="bg-black text-white px-6 py-2 rounded">
        Add to cart
      </button>
    </div>
  </div>
);

const PCBuilder = () => {
  return (
    <div className="relative p-5">
      {/* Navbar */}
      <div className=" gap-4 border-2 border-dashed border-gray-400 p-4 rounded-lg w-full  ">
        <div className="text-black text-3xl font-bold">Customize your PC</div>

        {/* System Cost Card at the Top-Right */}
        <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
          <SystemCostCard price="1,500,950" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <p>Build your PC with the best components.</p>
      </div>
    </div>
  );
};

export default PCBuilder;
