import React from 'react';
import { IoIosArrowUp } from "react-icons/io";

const Color = () => {

    const color = [
        { id: 1, name: 'red'},
        { id: 2, name: 'blue'},
        { id: 3, name: 'yellow'},
        { id: 4, name: 'black'},
        { id: 5, name: 'white'},
    ]

    return (
        <div>
            <div className="py-5 border-b-2">
            <div className="flex justify-between items-center px-5 my-2">
              <h1 className="uppercase font-semibold">Color</h1>
              <IoIosArrowUp />
            </div>
            <div class=" pt-1 px-5 grid grid-cols-3">
              {
                color.map((items) => (
                    <div className=" flex justify-center items-center h-16 w-16  border  hover:text-white cursor-pointer"  >
                        <h1 className='text-lg font-semibold text-[#919191]'>{items.name}</h1>
                </div>
                ))
              }
            </div>
          </div>
        </div>
    );
};

export default Color;