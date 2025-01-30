import React from "react";

const Details = () => {
  return (
    <div className="mb-1 md:mb-5 flex gap-x-4 ">
      <div className="w-1/2">
        <h1 className="text-xs md:text-base font-DmSans font-bold">
          Des 25 2024
        </h1>
        <h3 className="text-xs md:text-base font-DmSans font-bold">To,</h3>
        <h2 className="text-xs md:text-base font-DmSans font-bold">
          Director,
        </h2>
        <p className="text-xs md:text-sm font-DmSans font-normal text-black">
          Address Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          veniam!
        </p>
      </div>
      <div className="w-1/2">
        <p className="text-xs md:text-sm font-DmSans font-normal text-black">
          Order No: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Sit, et.
        </p>
      </div>
    </div>
  );
};

export default Details;
