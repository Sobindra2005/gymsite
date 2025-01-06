
import Image from 'next/image';
import React, { Suspense} from 'react';
import { Button } from '@/components/buttons';
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "HeroSection"
]{ Quote , desc , image}`;
  
const options = { next: { revalidate: 30 } };
         
const Hero =async  () => {
    const Response = await client.fetch(POSTS_QUERY, {}, options);
    
        return (
            <Suspense fallback={<div className='w-full h-screen flex items-center justify-center text-black text-2xl '>Loading...</div>}>
                <section id='home' className="relative h-screen">
                  
                        <Image
                            src={"https://cdn.sanity.io/images/damct3qr/production/d0b2542476ebc1297f08c3d732e080656c1974b1-300x168.jpg"}
                            alt="FitLife Gym interior with modern equipment and motivated members working out"
                            layout="fill"
                            className='object-cover'
                        />
             
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center h-full justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-5xl font-bold mb-4">{`${Response[0].Quote}`} <span className='text-blue-600'>{"Fit"}</span><span className='text-red-600'>{"Life"}</span> <span className='text-green-600'>{"Gym"}</span>  </h1>
                            <q className="text-xl mb-8 text-[#ffc300]">{`${Response[0].desc}`}</q>
                            {/* <Button className="bg-purple-600 p-2 rounded-md px-4 shadow-slate-500" label={'Get Started'}>
                        Get Started 
                    </Button> */}
                        </div>
                    </div>
                </section>
            </Suspense>
        );
};

export default Hero;