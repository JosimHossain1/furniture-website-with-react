import React from "react";
import { useState, useEffect } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://course-api.com/react-store-products")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <center className=" px-5 lg:px-24">
         <div className="text-center mt-32 mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
               <span className="font-semibold text-lg text-primary mb-2 block">
               Our Blogs
               </span>
               <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  ">
                  Our Recent News
               </h2>
               <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 px-4">
        {
        blog.map((items) => (
          <div className="bg-gray-200 rounded-lg overflow-hidden mb-10">
            <img src={items.image} alt="images" className="w-full h-[150px] object-cover"/>
            <div className="p-4">
              <h3 className="h-[65px] overflow-hidden my-3 text-left text-[20px] font-semibold">
                {items.description}
              </h3>
              <p className="mb-5 text-left text-[17px] h-[100px] overflow-hidden text-[#4c4c4c]">
                {items.description}
              </p>
              <a href="/" className="text-blue-500 cursor-pointer">
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
        </div>
    </center>
  );
};

export default Blog;
