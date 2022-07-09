import React from 'react';
import { IoIosArrowUp } from "react-icons/io";

const Category = () => {

    const FurnitueName = [
        { id: 1, name: 'Chair' },
        { id: 2, name: 'Table' },
        { id: 3, name: 'Bed' },
        { id: 4, name: 'Cabinet' },
        { id: 5, name: 'Sofa' },
        { id: 6, name: 'Wardrobe' },
        { id: 7, name: 'Cupboard' },
        { id: 8, name: 'Dining Table' },
        { id: 9, name: 'Dresser' },
        { id: 10, name: 'Bookshelf' },
        { id: 11, name: 'Coffee Table' },
        { id: 12, name: 'Others' },
    ];

    return (
        <div className='px-5' >
            <div className="flex justify-between items-center my-2">
              <h1 className="uppercase font-semibold">Category</h1>
              <IoIosArrowUp />
            </div>
            {
                FurnitueName.map((items, index) => (
                    <ul>
                        <li className='text-[16px] cursor-pointer mt-1 text-[#454545] font-semibold' key={index} >{items.name}</li>
                    </ul>
                ))
            }
        </div>
    );
};

export default Category;