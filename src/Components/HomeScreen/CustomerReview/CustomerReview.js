import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="px-10">
    
        <h1 className="text-4xl font-serif mt-10 mb-5">Words from our customers</h1>
      
      <Carousel className=" skew-x-6" responsive={responsive}>
      <div className="w-[90%]">
        <ReviewCard emoji="" user="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU" />
      </div>
      <div className="w-[90%]">
        <ReviewCard />
      </div>
      <div className="w-[90%]">
        <ReviewCard />
      </div>
      <div className="w-[90%]">
        <ReviewCard />
      </div>
    </Carousel>
    </div>

    
   
  );
};

export default CustomerReview;
