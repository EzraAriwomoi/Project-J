import React,{useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
        } else {
            setErrorMessage('');
            console.log('Form Submitted');
        }
    };

  return (
    <>
        <Helmet>
            <title>SignUp | Healthfin</title>
        </Helmet>
        <body>
            <section className='my-[100px] w-[90%] md:w-[70%] lg:w-[40%] mx-auto bg-white shadow-xl rounded-xl p-5'>
                <h1 className='text-center text-3xl md:text-4xl font-semibold my-[20px]'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='md:w-[80%] mx-auto space-y-[20px] flex flex-col items-center justify-center'>
                    <input type='text' name='' placeholder='First Name' className='w-full border border-[#001C31] rounded-md p-2' required/>
                    <input type='text' name='' placeholder='Last Name' className='w-full border border-[#001C31] rounded-md p-2' required/>
                    <input type='text' name='' placeholder='Phone Number' className='w-full border border-[#001C31] rounded-md p-2' required/>
                    <input type='email' name='' placeholder='Email Address' className='w-full border border-[#001C31] rounded-md p-2' required/>
                    <input type='password' name='' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='w-full border border-[#001C31] rounded-md p-2' required/>
                    <input type='password' name='' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='w-full border border-[#001C31] rounded-md p-2' required/>
                    {errorMessage && (
                        <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>
                    )}
                    <input type='submit' name='' value='Sign Up' className='w-[70%] bg-[#001C31] text-center text-lg font-semibold text-white rounded-md p-2 hover:cursor-pointer' />
                    <div className='text-sm text-center'>
                        <p>Already have an account? <Link to="/signin" className='text-[#6D9AC4]'>Sign In</Link></p>
                    </div>
                </form>
            </section>
        </body>
    </>
  );
}

export default Signup;