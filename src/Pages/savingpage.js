import React from "react";

//Components
import SavingPlans from "../Components/savingscomponents/SavingPlans";
import DashSideBar from "../Components/NavBar/DashSideBar";

const savingpage = () => {
  
  return (
    <>
      <section className="flex bg-[#F0F0F0]">
        <DashSideBar />
      <div className=" min-h-max-[100vh] flex flex-col justify-start items-center pt-10 w-full">
      <h1 className="text-3xl font-semibold my-10">MY SAVINGS</h1>
      <div className="h-[50vh] w-[60%] rounded-lg flex items-center justify-evenly">
        <div className="h-[100%] w-[50%] bg-slate-900 flex flex-col justify-center items-center p-10 rounded-lg hover:opacity-90">
          <h1 className="text-2xl text-white font-semibold">Current Savings</h1>
          <span className="text-4xl text-white font-semibold">
            KES: <span className="text-green-700">00:00</span>
          </span>
        </div>
        <div className="h-[100%] w-[50%] flex flex-col justify-between items-center">
          <section className="w-[90%] h-[45%] flex justify-center items-center bg-green-700 hover:opacity-90 rounded-lg ">
            <h1 className="text-2xl font-semibold">WITHDRAW</h1>
          </section>
          <section className="w-[90%] h-[45%] flex justify-center items-center bg-yellow-400 hover:opacity-90 rounded-lg ">
            <h1 className="text-2xl font-semibold">DEPOSIT</h1>
          </section>
        </div>
      </div>

      <h1 className="text-3xl font-semibold mt-20">SAVING PLANS</h1>
      <span>A saving plan suitable just for you</span>
      <SavingPlans />
    </div>
      </section>
    </>
  );
};

export default savingpage;
