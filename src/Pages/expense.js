import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
//icons
import { FaWallet } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { BsBank2 } from "react-icons/bs";
import { MdSavings } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";


//components
import DashSideBar from '../Components/NavBar/DashSideBar';
import UserProfile from '../Components/UserProfile/UserProfile';

const Expense = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <>
        <Helmet>
            <title>Expenses | Healthfin</title>
        </Helmet>
        <body className='relative bg-[#F0F0F0] md:flex'>
            {/* sidebar */}
            <DashSideBar />

            {/* Dashborad Hero */}
            <section className='ml-[90px] p-3 w-full'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-3xl font-semibold'>Dashboard</h1>
                    </div>
                    <div className='flex gap-4'>
                        <span className='text-4xl text-[#1A2130]'>
                            <IoIosMailUnread />
                        </span>
                        <div className=' my-auto flex'>
                            <div className='w-[40px] h-[40px]'>
                                <img  src='https://i.pinimg.com/564x/07/97/e9/0797e964db4ac82a033b5a8d62f9067e.jpg' alt='' className='w-full h-full rounded-full object-cover' />
                            </div>
                            <span className='text-xl cursor-pointer'>
                                <IoChevronDown onClick={togglePopup}/>
                            </span>
                            <UserProfile isVisible={isPopupVisible} onClose={togglePopup} />
                        </div>
                    </div>
                </div>
                <div className='w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-4 gap-3 text-white mt-[40px]'>
                    <div className='p-2 py-6 bg-[#1A2130] rounded-md'>
                        <div className='text-white text-2xl bg-[#2490EB] w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center ml-4'>
                            <FaWallet />
                        </div>
                        <div className='mt-[10px] ml-4'>
                            <h4 className='text-xl text-[#686666]'>Balance</h4>
                            <h1 className='text-xl'>$100,000.00</h1>
                        </div>
                    </div>
                    <div className='p-2 py-6 bg-white rounded-md group hover:bg-[#1A2130] transition-all duration-300 cursor-pointer'>
                        <div className='text-white text-2xl bg-[#2490EB] w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center ml-4'>
                            <BsBank2 />
                        </div>
                        <div className='mt-[10px] ml-4'>
                            <h4 className='text-xl text-[#686666]'>Income</h4>
                            <h1 className='text-xl text-black group-hover:text-white transition-all duration-300'>$100,000.00</h1>
                        </div>
                    </div>
                    <div className='p-2 py-6 bg-white rounded-md group hover:bg-[#1A2130] transition-all duration-300 cursor-pointer'>
                        <div className='text-white text-2xl bg-[#2490EB] w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center ml-4'>
                            <MdSavings />
                        </div>
                        <div className='mt-[10px] ml-4'>
                            <h4 className='text-xl text-[#686666]'>Savings</h4>
                            <h1 className='text-xl text-black group-hover:text-white transition-all duration-300'>$100,000.00</h1>
                        </div>
                    </div>
                    <div className='p-2 py-6 bg-white rounded-md group hover:bg-[#1A2130] transition-all duration-300 cursor-pointer'>
                        <div className='text-white text-2xl bg-[#2490EB] w-[50px] h-[50px] rounded-full flex flex-col items-center justify-center ml-4'>
                            <FaHandHoldingUsd />
                        </div>
                        <div className='mt-[10px] ml-4'>
                            <h4 className='text-xl text-[#686666]'>Expenses</h4>
                            <h1 className='text-xl text-black group-hover:text-white transition-all duration-300'>$100,000.00</h1>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] mx-auto flex gap-5 mt-[30px]'>
                    <div className='basis-[60%] h-[300px]'>
                        <img src="https://i.pinimg.com/564x/e0/67/4b/e0674b2a40070a52716e2a49c8ccd198.jpg" alt='' className='w-full h-full object-cover rounded-lg' />
                    </div>
                    <div className='bg-white basis-[35%] rounded-md p-3'>
                        <div className='flex justify-bewteen'>
                            <h1 className='text-xl'>Savings</h1>
                            <div className='w-full h-[80%]'>
                                <img src="https://i.pinimg.com/736x/ad/ef/de/adefdeae1bf5debcffa17cf6fb5bf425.jpg" alt='' className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    </>
  );
};

export default Expense;