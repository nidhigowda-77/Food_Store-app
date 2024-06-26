import React from "react";
import { categories } from "../Data/data";
const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>

      {/* categories*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6" >
        {categories.map((item,index)=>(
            <div className="bg-gray-100 rounded-lg  flex p-4 justify-between items-center"key={index}>
                <h2 className="font-bold sm:text-xl">{item.name}</h2>
                <img className="object-cover w-14 sm:w-20" src={item.image} alt={item.name} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
