import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//Icons
import { GoHomeFill } from "react-icons/go";
import { FaWallet } from "react-icons/fa6";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { ImExit } from "react-icons/im";




const DashSm = () => {
    return (
        <>
            <section className='w-[95%] mx-auto bg-[#656564] rounded-full grid grid-cols-5 divide-x'>
                <div className='bg-[#001C31] px-3 py-2 text-white rounded-xl text-center text-lg'>
                    <NavLink to="/expenses">
                        Home
                    </NavLink>
                </div>
                <div className=' text-center text-lg m-auto text-black'>
                    <NavLink to="/savings"
                        className={({ isActive }) => [
                            " p-2 text-white", isActive ? "bg-[#001C31] rounded-lg p-2" : ""
                        ]}
                    >
                        Savings
                    </NavLink>
                </div>
                <div className=' text-center text-lg m-auto text-black'>
                    <NavLink to="/savings"
                        className={({ isActive }) => [
                            " p-2 text-white", isActive ? "bg-[#001C31] rounded-lg p-2" : ""
                        ]}
                    >
                        Help
                    </NavLink>
                </div>
                <div className=' text-center text-lg m-auto text-black'>
                    <NavLink to="/savings"
                        className={({ isActive }) => [
                            " p-2 text-white", isActive ? "bg-[#001C31] rounded-lg p-2" : ""
                        ]}
                    >
                        Settings
                    </NavLink>
                </div>
                <div className=' text-center text-lg m-auto text-black'>
                    <NavLink to="/savings"
                        className={({ isActive }) => [
                            " p-2 text-white", isActive ? "bg-[#001C31] rounded-lg p-2" : ""
                        ]}
                    >
                        LogOut
                    </NavLink>
                </div>
            </section>
        </>
    );
};

const DashMd = () => {
    return (
        <>
        
        </>
    );
};

const DashLg = () => {
    return (
        <>
            <div className='fixed top-[150px] left-0 h-auto w-[90px] bg-white  p-3  flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <span className='text-4xl mx-auto mt-[50px]'>
                        <NavLink to="/expenses"
                            className={({ isActive }) => [
                                "text-[#686666]", isActive ? "text-[#1A2130]" : "null"
                            ]}
                        >
                            <GoHomeFill />
                        </NavLink>
                    </span>
                    <span className='text-4xl ext-[#686666] hover:text-[#1A2130] mx-auto mt-[40px]'>
                        <NavLink to="/savings"
                        className={({ isActive }) => [
                            "text-[#686666]", isActive ? "text-red-900" : "text-[#686666]"
                        ]}
                        >
                            <FaWallet />
                        </NavLink>
                    </span>
                    <span className='text-4xl text-[#686666] hover:text-[#1A2130] mx-auto mt-[40px]'>
                        <NavLink to="/expenses">
                            <AiFillInfoCircle />
                        </NavLink>
                    </span>
                </div>
                <div className='flex flex-col'>
                    <span className='text-4xl text-[#686666] hover:text-[#1A2130] mx-auto mt-[40px]'>
                        <Link to="/expenses">
                            <IoSettings />
                        </Link>
                    </span>
                    <span className='text-4xl text-[#686666] hover:text-[#1A2130] mx-auto mt-[40px]'>
                        <Link to="/expenses">
                            <ImExit />
                        </Link>
                    </span>
                </div>
            </div>
        </>
    );
};

const DashSideBar = () => {
  return (
    <>
        <div className='md:hidden'>
            <DashSm />
        </div>
        <div className='hidden md:block lg:hidden'>
            <DashMd />
        </div>
        <div className='hidden lg:block'>
            <DashLg />
        </div>
    </>
  )
}

export default DashSideBar;