import React from 'react';
import Button from "../../Button/Button";

const ShopCart = (props) => {
    return (
            <div className="image relative">
              <img src={props.url} className="h-[350px] w-[300px] object-cover" alt="" />
              <div className="absolute bottom-20 left-20">
                <Button text={props.text} />
              </div>
            </div>
    );
};

export default ShopCart;