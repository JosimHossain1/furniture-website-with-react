import React from "react";

const Hero = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-10  mt-32 ">
      <div className="content">
        <h1 className="text-5xl font-serif font-bold mb-5">
          Future <br />
          of furniture
        </h1>
        <p className="font-poppin text-[#919191] font-semibold">
          Find an elegant and luxurious interior <br /> designed by a
          professional innterior designer.
        </p>
        <form className="mt-8">
          <input
            type="email"
            className="border-black border-2 px-2 py-2 w-[80%] text-gray-500 text-lg z-10"
            placeholder="Enter email"
          />
          <input
            type="button"
            value="Subscribe"
            className="text-white absolute cursor-pointer bg-black py-[10px] font-semibold px-6 text-lg"
          />
        </form>
      </div>
      <div className="image md:flex justify-end hidden">
        <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg" alt="" className="w-[60%] h-[450px] object-cover" />
        <img src="https://images.pexels.com/photos/2325717/pexels-photo-2325717.jpeg" alt="" className="w-[30%] h-[450px] object-cover" />
        <img src="https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg" alt="" className="w-[30%] h-[450px] object-cover" />
      </div>
    </div>
  );
};

export default Hero;
