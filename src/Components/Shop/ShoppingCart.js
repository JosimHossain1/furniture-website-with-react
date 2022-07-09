import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";

const ShoppingCart = (props) => {

  const { image, title, price, category } = props;

  return (
    <div className="max-w-sm mr-5 mb-8 bg-white rounded-lg shadow-md hover:-mt-1">
        <img className="rounded-t-lg w-full h-[150px] object-cover" src={image} alt="product"/>
            <h5 className=" text-sm py-1 pl-3 font-semibold text-[#919191] "> Category : {category}</h5>
                <div className="px-4 py-2">
                    <h5 className="text-xl capitalize font-semibold tracking-tight text-gray-900"> {title} </h5>
                        <div className="flex items-center mt-2.5 mb-5 text-yellow-500">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-2xl flex items-center font-bold text-gray-900"><TbCurrencyTaka className="text-3xl" />{price}</span>
                            <HiShoppingCart className="text-3xl text-blue-500 cursor-pointer" />
                        </div>
            </div>
    </div>
  );
};

export default ShoppingCart;
