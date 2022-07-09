import React from "react";
import image from "../../../Assets/Images/file.png";

const Process = () => {
  const processData = [
    {
      title: "Fast and Free Shipping",
      des: "Every single order ships for free, No minimums, no tiers, no fine print whatsever.",
    },
    {
      title: "Easy-to-move design",
      des: "Our innovative module design is driven by the belief that furniture should fit this home.",
    },
    {
      title: "Durable, premium matcrials",
      des: "We use metarial like sustainably-forested wood , strengthened steel hardware, and top-grain.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 md:space-x-4 px-5 md:px-24 mt-32 py-6">
      {processData.map((content) => (
        <div className="flex items-center border space-x-4 p-3 mt-3 rounded hover:bg-gray-100">
          <img src={image} alt="" />
          <div>
            <h1 className="text-[20px] font-serif mb-3">{content.title}</h1>
            <p className="text-gray-500 text-[17px]">{content.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
