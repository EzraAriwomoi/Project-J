import React from 'react';
import { Helmet } from 'react-helmet-async';

const contact = () => {
  return (
    <>
        <Helmet>
            <title>Contact Us | Healthfin</title>
        </Helmet>
        <body className='w-[90%] mx-auto'>
            <section className='md:flex justify-center my-[50px]'>
                <div className='md:basis-[50%]'>
                    <h1 className='text-3xl md:text-5xl font-semibold'>CONTACT US</h1>
                    <p className='text-sm md:w-[50%] mt-[10px]'>Feel free to contact us any time. We will get back to you as soon as we can </p>
                    <form className='mt-[40px] space-y-[20px]'>
                        <input type='text' name='' placeholder='Name' className='border border-[#001C31] p-2 md:w-[70%]' required/>
                        <input type='email' name='' placeholder='Email Address' className='border border-[#001C31] p-2 w-[70%]' required/>
                        <textarea type='text' name='' placeholder='Message' rows="5" className='border border-[#001C31] p-2 w-[70%]' required/>
                        <input type='submit' value='Submit' className='bg-[#001C31] text-white font-semibold p-2 w-[70%] hover:cursor-pointer' />
                    </form>
                </div>
                <div className='md:basis-[40%] h-[500px]'>
                    <img src='https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='w-full h-full object-cover' />
                </div>
            </section>
        </body>
    </>
  );
}

export default contact;