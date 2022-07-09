import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <form className="mt-8">
        <input
          type="email"
          className="border-black border-2 px-2 py-2 w-[40%] text-gray-500 text-lg"
          placeholder="Enter email"
        />
        <input
          type="button"
          value="Subscribe"
          className="text-white absolute cursor-pointer bg-black py-[10px] font-semibold px-6 text-lg"
        />
      </form>
    </div>
  );
};

export default NewsLetter;
