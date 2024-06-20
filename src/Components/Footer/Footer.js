import React from 'react';
import { Link } from 'react-router-dom';

//Icons
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";



const Footer = () => {
  return (
    <>
        <footer className='bg-gradient-to-r from-[#12344F] to-[#001C31] w-full p-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-[90%]  mx-auto mt-[50px]'>
                <div className='flex gap-4 text-white text-2xl'>
                    <div className='w-[100px] h-[100px]'>
                        <img src={require('../../Assets/Logo/logo.jpg')} alt='Logo' className='w-full h-full' />
                    </div>
                    <div className='basis-[50%]'>
                        <h1 className='text-white text-2xl'>HEALTHFIN</h1>
                        <p className='text-sm text-gray-500'>HealthFin recognizes the burden of healthcare costs.HealthFin recognizes the burden of healthcare costs.</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-white text-3xl mb-[20px]'>Quick Links</h1>
                    <ol className='text-white text-lg'>
                        <li>
                            <Link to="/loans">Loans</Link>
                        </li>
                        <li>
                            <Link to="expenses">Expenses</Link>
                        </li>
                        <li>
                            <Link>Insurance</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ol>
                </div>
                <div>
                    <h1 className='text-white text-3xl mb-[10px]'>Reach Out</h1>
                    <div className='text-white flex gap-3 mb-[20px]'>
                        <span className='text-3xl'>
                            <CiLocationOn />
                        </span>
                        <h4>P.O. BOX 232434-00100 Nairobi</h4>
                    </div>
                    <div className='text-white flex gap-3 mb-[20px]'>
                        <span className='text-3xl'>
                            <IoMailOpenOutline />
                        </span>
                        <a href='mailto:'>
                            <h4>healthfin@gmail.com</h4>
                        </a>
                    </div>
                    <div className='text-white flex gap-3 mb-[10px]'>
                        <span className='text-3xl'>
                            <FaPhone />
                        </span>
                        <a href='tel:'>
                            <p className=''>07xxxxxxxx</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        <section className='bg-black text-white text-center p-3'>
            <div className='flex items-center justify-center gap-2 my-auto'>
                <span className='my-auto'>
                    <FaRegCopyright />
                </span>
                <h4>Healthfin 2024. All rights reserved.</h4>
            </div>
        </section>
    </>
  );
}

export default Footer;