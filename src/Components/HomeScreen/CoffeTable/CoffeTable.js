import React from 'react';
import TwoCols from "./TwoCols"

const CoffeTable = () => {
    return (
        <>
        <div className= 'mt-32 grid md:grid-cols-2 gap-10 px-7 text-center md:text-left md:px-24 items-center' >
            <div className="mx-auto">
                <img src=" https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg" alt="" />
            </div>
            <TwoCols 
            title="The Coffee 
            Table"
            
            des="The perfect companion for your sofa. Sturdy, power coated steel legs attach in seconds to a surface sized to fit everything you need close at hand. High-grade plywood is finished with timeless birch or FSC certified walnut veneer. Available in oval or rounded."
            />
        </div>

        <div className= 'mt-32 grid md:grid-cols-2 px-7 text-center md:text-left md:px-24 items-center' >
            <TwoCols 
            title="The Shelving System"
            des ="Probably the world's most modular shelving system. When it comes to modularity, the limit does not exist. Start with one Shelf and add expansion units and add-ons to build a shelving system that works perfectly in your space - either now or in the future."
            />
            <div className="mx-auto">
                <img src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg" className='h-[60%] w-[70%]' alt="" />
            </div>
        </div>
        </>
    );
};

export default CoffeTable;