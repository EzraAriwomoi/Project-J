import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const signin = () => {
  return (
    <>
        <Helmet>
            <title>Sign In | Healthfin</title>
        </Helmet>
        <body>
            <section className='my-[50px] md:my-[100px] w-[80%] md:w-[70%] lg:w-[35%] mx-auto bg-white shadow-xl rounded-xl p-5'>
                <h1 className='text-center text-3xl md:text-4xl font-semibold my-[20px]'>Sign In</h1>
                <form className='md:w-[80%] mx-auto space-y-[20px] flex flex-col items-center justify-center'>
                    <input type='text' name='' placeholder='First Name' className='w-full border border-[#001C31] rounded-md p-2' />
                    <input type='email' name='' placeholder='Email Address' className='w-full border border-[#001C31] rounded-md p-2' />
                    <input type='password' name='' placeholder='Password' className='w-full border border-[#001C31] rounded-md p-2' />
                    <input type='submit' name='' value='Sign In' className='w-[70%] bg-[#001C31] text-center text-lg font-semibold text-white rounded-md p-2 hover:cursor-pointer' />
                    <div className='text-sm text-center'>
                        <p>Don't have an account? <Link to="/signup" className='text-[#6D9AC4]'>Sign Up</Link></p>
                        
                    </div>
                </form>
            </section>
        </body>
    </>
  );
}

export default signin;