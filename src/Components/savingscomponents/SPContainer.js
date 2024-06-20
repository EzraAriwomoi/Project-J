import React from "react";
import { Link } from "react-router-dom";

const SPContainer = () => {
  return (
    <>
    <div className="w-[30%] h-[90%] flex flex-col justify-center items-center bg-gray-50">
      <div className="w-[100%] bg-yellow-50 h-[70%]">
        <img
          src={require('../../Assets/images/femalenurse.jpg')}
          className="object-cover w-full h-full rounded-md object-top"
          alt="Medic"
        />
      </div>
      <div className="h-[30%] w-[100%] flex flex-col justify-center items-start px-5 gap-0">
        <h1 className="text-2xl font-semibold">MONTHLY DEPOSIT</h1>
        <p className="text-gray-700 text-sm">
          Add monthly deposits to your savings <a className="text-blue-700">learn more</a>{" "}
        </p>
        <Link to="/SPForm" className="w-[40%] h-[40px]">
          <button className="bg-gray-800 rounded-md px-3 py-1 text-white">
            Start Now
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default SPContainer;
