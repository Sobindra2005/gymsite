import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/buttons'

const Hero = () => {
    return (
        <section className="relative h-screen">
            <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="FitLife Gym interior with modern equipment and motivated members working out"
                className='object-cover w-full h-full object-center'
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center h-full justify-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Step Into <span className='text-blue-600'>Fit</span><span className='text-red-600'>Life</span> <span className='text-green-600'>Gym</span>  </h1>
                    <q className="text-xl mb-8 text-[#ffc300]">Whether you're a beginner or a pro, we have everything <br/> you need to get stronger, fitter, and healthier</q>
                    {/* <Button className="bg-purple-600 p-2 rounded-md px-4 shadow-slate-500" label={'Get Started'}>
                        Get Started 
                    </Button> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;