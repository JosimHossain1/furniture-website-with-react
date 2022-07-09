import React from 'react';
import Button from "../../Button/Button";


const TwoCols = (props) => {
    return (
            <div className="CoffeTable mb-10 md:mb-0">
                <h1 className='text-5xl text-black font-serif font-bold mb-5 md:mb-10 mt-10 md:mt-0'>{props.title}</h1>
                <p className='text-[#919191] text-left font-[poppins] text-[19px] leading-6 mb-6 w-[80%]'>{props.des}</p>
                <Button text="ORDER NOW" />
            </div>
    );
};


export default TwoCols;
