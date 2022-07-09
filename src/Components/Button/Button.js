import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className='bg-black text-white py-2 px-6 font-semibold rounded shadow-lg' >{props.text}</button>
        </div>
    );
};

export default Button;