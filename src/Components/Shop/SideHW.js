import React from 'react';
import { IoIosArrowUp } from "react-icons/io";

const SideHW = (props) => {

    const height = [
        { id: 1, height: "5 F" },
        { id: 2, height: "10 F" },
        { id: 3, height: "15 F" },
        { id: 4, height: "20 F" },
        { id: 5, height: "25 F" }
    
      ]

    return (
        <div>
            <div className="py-5 border-b-2">
            <div className="flex justify-between items-center px-5 my-2">
              <h1 className="uppercase font-semibold">{props.size}</h1>
              <IoIosArrowUp />
            </div>
            <div class=" pt-1 px-5 grid grid-cols-3">
              {
                height.map((items) => (
                    <div className=" flex justify-center items-center h-16 w-16  border hover:bg-black hover:text-white cursor-pointer">
                        <h1 className='text-lg font-semibold text-[#919191]'>{items.height}</h1>
                </div>
                ))
              }
            </div>
          </div>
        </div>
    );
};

export default SideHW;