import React from "react";
// UseState
import { useState, useEffect } from "react";
// Navbar Component
// React Icons
import { BsGrid3X3GapFill, BsFillGrid1X2Fill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
// Shop Cart Component
import ShoppingCart from "./ShoppingCart";
// Shop Side Component
import ShopSide from "./ShopSide";

// Start Here
const Shop = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://course-api.com/react-store-products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Navbar Component */}
    
      {/* Shop controler */}
      <div className="control flex justify-between item-center space-x-4 pt-24 px-8">
        <div className="filter">
          <h1 className="uppercase text-xl">Filter</h1>
        </div>
          <div className="grids flex ">
            <BsFillGrid1X2Fill className=" mr-5 text-xl cursor-pointer" />
            <BsGrid3X3GapFill className=" text-xl cursor-pointer" />
          </div>
        </div>

      {/* Shop Content  */}
      <div className="shopbox grid md:grid-cols-5 gap-8 mx-auto sm:px-5">

     {/* Shop Left Side */}
        <div className="hidden lg:block mt-10 lg:col-span-1 border-2 h-full">
          <div className="PriceRange border-b-2">
            <div className="flex justify-between items-center px-5">
              <h1 className="uppercase font-semibold mt-4">Price Range</h1>
              <IoIosArrowUp />
            </div>
            <div className="flex justify-between items-center px-5">
              <h1 className="uppercase font-semibold mt-4"> <TbCurrencyTaka className="inline text-xl" /> 3099</h1>
              <h1 className="uppercase font-semibold mt-4"> <TbCurrencyTaka className="inline text-xl" /> 309999</h1>
              
            </div>
            <div class=" pt-1 pb-3 px-5">
              <input type="range" class="form-range appearance-none w-full h-2 rounded-full bg-gray-300" min="3099" max="309999" step="25000"/>
            </div>
          </div>
          {/* Shop Side Component */}
          <ShopSide />
        </div>


        {/* Shop right Side */}
        <div className="shopbox-right lg:col-span-4 md:col-span-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {product.map((items) => (
              <ShoppingCart
                key={items.id}
                image={items.image}
                title={items.name}
                price={items.price}
                category={items.category}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Shop;
