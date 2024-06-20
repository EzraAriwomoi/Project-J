import React, {useState, useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";


//react icons
import { IoMenu, IoClose  } from "react-icons/io5";


const NavSm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className='bg-[#D9D9D9] w-full'>
            <div className='flex justify-between h-[60px]'>
                <div className='w-[60px]'>
                    <Link to="/">
                        <img src={require('../../Assets/Logo/logo.jpg')} alt='logo' className='w-full h-full' />
                    </Link>
                </div>
                <div className='text-5xl my-auto mr-4' onClick={toggleMenu}>
                    <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                </div>
            </div>
            <div className='relative'>
                <div
                    className={`absolute h-screen w-full  right-0 bg-white text-black z-50 transition-all duration-500 overflow-hidden origin-top-right ${isOpen ? ' sclae-100 ' : 'scale-0'}`}
                >
                    <ul className='flex flex-col justify-center  font-light space-y-[25px] p-3 w-[80%] pt-[40px] mx-auto text-xl text-left'>
                        <li>
                            <Link to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" onClick={closeMenu}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/loans" onClick={closeMenu}>Loans</Link>
                        </li>
                        <li>
                            <Link to="" onClick={closeMenu}>Insurance</Link>
                        </li>
                        <li>
                            <Link to="/expenses" onClick={closeMenu}>Expense</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/signin" onClick={closeMenu}>
                                <button className='border bg-[#0F324B] text-white px-7 py-1 rounded-full'>Sign In</button>
                            </Link>
                        </li>
                    </ul>
                    <div className='relative bottom-0 mt-[30px]'>
                        <ul className='flex justify-center items-center space-x-[50px] text-gray-600'>
                            <li>
                                <a href=''>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavMd = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className='bg-[#D9D9D9] z-50 relative'>
                <div className='flex justify-between'>
                    <div className='w-[90px]'>
                        <Link to="/">
                            <img src={require('../../Assets/Logo/logo.jpg')} alt='logo' className='w-full h-full' />
                        </Link>
                    </div>
                    <div className='text-7xl my-auto mr-4' onClick={toggleMenu}>
                        <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <div className='relative'>
                <div
                    className={`absolute h-screen w-full  right-0 bg-white text-black z-50 transition-all duration-500 overflow-hidden origin-top-right ${isOpen ? ' sclae-100 ' : 'scale-0'}`}
                >
                    <ul className='flex flex-col justify-center  font-light space-y-[25px] p-3 w-[80%] pt-[40px] mx-auto text-xl text-left'>
                        <li>
                            <Link to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" onClick={closeMenu}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/loans" onClick={closeMenu}>Loans</Link>
                        </li>
                        <li>
                            <Link to="" onClick={closeMenu}>Insurance</Link>
                        </li>
                        <li>
                            <Link to="/expenses" onClick={closeMenu}>Expense</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/signin" onClick={closeMenu}>
                                <button className='border bg-[#0F324B] text-white px-7 py-1 rounded-full'>Sign In</button>
                            </Link>
                        </li>
                    </ul>
                    <div className='relative bottom-0 mt-[30px]'>
                        <ul className='flex justify-center items-center space-x-[50px] text-gray-600'>
                            <li>
                                <a href=''>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </nav>
        </>
    );
};

const NavLg = () => {
    return (
        <>
            <nav className='bg-[#D9D9D9] h-[90px] w-full flex justify-between'>
                <div className='w-[90px] h-[90px]'>
                    <Link to="/">
                        <img src={require('../../Assets/Logo/logo.jpg')} alt='' className='w-full h-full' />
                    </Link>
                </div>
                <div className='my-auto'>
                    <ul className='flex space-x-[20px] font-Menu text-lg mr-4'>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutus">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link to="/loans">
                                Loans
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                Insurance
                            </Link>
                        </li>
                        <li>
                            <Link to="/expenses">
                                Expenses
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact us
                            </Link>
                        </li>
                        <li className='my-auto'>
                            <Link to="/signin">
                                <button className='border bg-[#0F324B] text-white px-7 py-1 rounded-full my-auto'>Sign In</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};


const NavBar = () => {
  return (
    <>
        <div className='md:hidden'>
            <NavSm />
        </div>
        <div className='hidden md:block lg:hidden'>
            <NavMd />
        </div>
        <div className='hidden lg:block'>
            <NavLg />
        </div>
    </>
  );
};

export default NavBar;
