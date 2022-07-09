import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShopCart from "./ShopCart";

const ShopProduct = () => {

    const image = [
        {text: 'Table', url: 'https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},

        {text: "Sofa", url: "http://admin.hatimfurniturebd.com/images/product/6881f144c24deff64a4720f61dd909d5.jpg" },

        {text: "Cahir", url: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

        {text: "Lamp", url: 'https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},

        {text: "Tool", url: 'https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
    ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="lg:px-24 py-10">
      <div className="title my-10 lg:flex justify-between items-center">
        <h1 className="font-bold text-4xl">Shop by Product</h1>
        <p className="text-gray-500">
          {" "}
          We are solving the biggest problems in furniture <br /> You can easily
          search for what product you want.
        </p>
      </div>

      <div className="carosul ">
        <Carousel responsive={responsive}>
            {
                image.map((items, inddex) =>(
                    <ShopCart key={inddex} url={items.url} text={items.text} />
                ))
            }
        </Carousel>
      </div>
    </div>
  );
};

export default ShopProduct;
