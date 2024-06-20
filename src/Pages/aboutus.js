import React from 'react';
import { Helmet } from 'react-helmet-async';

const aboutus = () => {
  return (
    <>
        <Helmet>
            <title>About Us | Healthfin</title>
        </Helmet>
        <body className='w-[80%] mx-auto pb-[70px]'>
            <section className='my-[70px] text-center space-y-3'>
                <h1 className='text-3xl md:text-5xl font-semibold '>ABOUT US</h1>
                <p className='md:w-[60%] mx-auto text-md'>HealthFin recognizes the burden of healthcare costs.  We bridge the gap to quality care by offering both affordable health insurance solutions, fitting any budget or employment status, and streamlined medical loan assistance with competitive rates and flexible repayment options.</p>
            </section>

            {/* Our Mission */}
            <section className='md:flex justify-center items-center mt-[50px] md:mt-[50px]'>
                <div className='basis-[40%]  text-left'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>OUR MISSION</h1>
                    <p className='text-md'>To champion well-being by providing accessible, comprehensive health insurance and fostering a culture of preventive care for a healthier and more vibrant future.</p>
                </div>
                <div className='basis-[45%] h-[200px] md:h-[350px] mt-[20px]'>
                    <img src='https://i.pinimg.com/564x/06/33/8c/06338c5618390aa8daa78da139a092a7.jpg' alt='' className='w-full h-full object-cover' />
                </div>
            </section>

            {/* Our Vision */}
            <section className='md:flex flex-row-reverse justify-center items-center mt-[50px] md:mt-[100px] gap-[50px]'>
                <div className='basis-[40%]  text-left'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>OUR VISION</h1>
                    <p className='text-md'>To champion well-being by providing accessible, comprehensive health insurance and fostering a culture of preventive care for a healthier and more vibrant future.</p>
                </div>
                <div className='basis-[45%] h-[200px] md:h-[350px] mt-[20px]'>
                    <img src='https://i.pinimg.com/564x/2d/e6/18/2de6188162383585b7eb01bc0e655971.jpg' alt='' className='w-full h-full object-cover' />
                </div>
            </section>

            <section className='mt-[100px]'>
                <div className='w-full h-[250px]'>
                    <img src='https://i.pinimg.com/564x/f5/b8/0d/f5b80d09b3108570ecf45f80ef3657d3.jpg' alt='' className='w-full h-full object-cover' />
                </div>
                <div className='mt-[50px] space-y-[20px]'>
                    <h1 className='text-center text-3xl md:text-4xl'>OUR MESSAGE</h1>
                    <p className='text-center md:w-[70%] mx-auto'>Healthfin is a health insurance company built on the foundation of empowering your well-being. We believe health insurance should be more than just a financial safety net – it should be an active partner in your journey to a healthier, happier you.</p>
                </div>
            </section>
        </body>
    </>
  )
}

export default aboutus;