import React from 'react'
import { Link } from 'react-router-dom';

//react icons
import { IoClose } from "react-icons/io5";
import { FaUser, FaCalendarAlt, FaEye  } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const UserProfile = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  return (
    <>
        <div className="fixed w-[230px] top-[100px] right-[50px] flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-[#D9D9D9] p-4 rounded shadow-lg w-full">
                <span>
                    <IoClose onClick={onClose}/>
                </span>
                <div className='w-[50px] h-[50px] mx-auto'>
                    <img  src='https://i.pinimg.com/564x/07/97/e9/0797e964db4ac82a033b5a8d62f9067e.jpg' alt='' className='w-full h-full rounded-full object-cover' />
                </div>

                {/* User Information */}
                <div className='grid grid-col-1 divide-y justify-center items-center'>
                    <div className='flex gap-3 py-3'>
                        <span className='my-auto text-[#1A2130] text-xl'>
                            <FaUser />
                        </span>
                        <div>
                            <h3>Full Name</h3>
                        </div>
                    </div>
                    <div className='flex gap-3 py-3'>
                        <span className='my-auto text-[#1A2130] text-xl'>
                            <FaCalendarAlt />
                        </span>
                        <div>
                            <h3>BirthDate</h3>
                        </div>
                    </div>
                    <div className='flex gap-3 py-3'>
                        <span className='my-auto text-[#1A2130] text-xl'>
                            <IoPhonePortrait />
                        </span>
                        <div>
                            <h3>Phone Number</h3>
                        </div>
                    </div>
                    <div className='flex gap-3 py-3'>
                        <span className='my-auto text-[#1A2130] text-xl'>
                            <MdEmail />
                        </span>
                        <div>
                            <h3>Email Address</h3>
                        </div>
                    </div>
                    <div className='flex gap-3 py-3'>
                        <span className='my-auto text-[#1A2130] text-xl'>
                            <FaEye />
                        </span>
                        <div>
                            <h3>Password</h3>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Link to="">
                            <button className='bg-[#1A2130] text-white px-4 py-2 rounded-full mt-[10px]'>Edit Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfile;