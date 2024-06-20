import React from 'react';
import { Helmet } from 'react-helmet-async';

const loans = () => {
  return (
    <>
        <Helmet>
            <title>Loans | Healthfin</title>
        </Helmet>
        <body className='font-Main'>
            <section className='w-[90%] mx-auto my-[70px]'>
                <h1 className='text-5xl lg:ml-[50px] mb-[50px]'>Loans</h1>
                <div className='md:flex justify-center gap-4'>
                    <div className='basis-[50%] mb-[20px] md:mb-0'>
                        <img src='https://i.pinimg.com/736x/92/ef/fd/92effd6f3ddc0ac8d0fd78ab892b3134.jpg' alt='' className='w-full h-full object-cover' />
                    </div>
                    <div className='md:basis-[45%] lg:basis-[40%]'>
                        <form className='space-y-4'>
                            <div className='space-x-3 w-full'>
                                <input type='text' name='' placeholder='First Name' className='border border-[#686666] outline-none p-2 w-[48%]' required/>
                                <input type='text' name='' placeholder='Last Name' className='border border-[#686666] outline-none p-2 w-[48%]' required/>
                            </div>
                            <input type='email' name='' placeholder='Email Address' className='border border-[#686666] outline-none w-full p-2' required/>
                            <input type='text' name='' placeholder='Phone Number' className='border border-[#686666] outline-none w-full p-2' required/>
                            <input type='email' name='' placeholder='Required Treatment' className='border border-[#686666] outline-none w-full p-2' required/>
                            <input type='text' name='' placeholder='Estimated Cost' className='border border-[#686666] outline-none w-full p-2' required/>
                            <input type='text' name='' placeholder='Health Care Provider' className='border border-[#686666] outline-none w-full p-2' required/>
                            <input type='submit' name='' value='Submit' className='text-white text-xl cursor-pointer bg-[#001C31] outline-none w-full p-2' required/>
                        </form>
                    </div>
                </div>
            </section>
        </body>
    </>
  )
}

export default loans;