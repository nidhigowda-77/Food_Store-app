import React, { useState } from "react";
import { data } from "../Data/data";
const Food = () => {

  const [foods, setFoods] = useState(data);

  // filter type burger pizza etc

  const filterType =(category)=>{

    setFoods(
        data.filter((item)=>{

            return item.category===category

        })
    )
  }

  const filterByPrice=(price)=>{

    setFoods(
        data.filter((value)=>{
            return value.price===price
        })
    )
  }
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="font-bold text-4xl text-center text-orange-600">
        Top Rated Menu Items
      </h1>
      {/* Filter row*/}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type*/}
        <div>
          <p className="text-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={()=>setFoods(data)} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button onClick={()=>filterType("burger")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button onClick={()=>filterType("pizza")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizzas
            </button>
            <button onClick={()=>filterType("salad")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button onClick={()=>filterType('chicken')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chickens
            </button>
          </div>
        </div>

        {/* Filter Price*/}

        <div>
          <p className="flex justify-between flex-wrap">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=>filterByPrice('$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={()=>filterByPrice('$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={()=>filterByPrice('$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={()=>filterByPrice('$$$$')} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods*/}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item,index)=>(
            <div className="border shadow-2xl hover:scale-105 duration-300 rounded-lg " key={index}>
                <img className="w-full h-[200px] object-cover rounded-t-lg " src={item.image} alt={item.name} />
                <div className="flex justify-between px-2 py-4">
                    <p className="font-bold">{item.name}</p>
                    <p>
                        <span className="bg-orange-500 p-1 text-white rounded-full">{item.price}</span>
                    </p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
