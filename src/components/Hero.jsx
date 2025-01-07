"use client"
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { client } from "@/sanity/client";
import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";

const QUERY = `*[
  _type == "HeroSection"
]{ Quote , desc , image}`;
const { projectId, dataset } = client.config();
const options = { next: { revalidate: 30 } };

const Hero = () => {
    const [Response, setResponse] = useState([])
    const [IsVisible, setIsVisible] = useState(true);
    const ref = useRef(null);

    //function for fetching data from sanity 
    async function response() {
        const data = await client.fetch(QUERY, {}, options);
        setResponse(data);
    }


    //to track view
    const handleScroll = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            setIsVisible(isVisible);
        }
    };



    //useEffect function
    useEffect(() => {
        //calling fetch function
        response();

        //for tracking whether section is in view or not 
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, [])

    //returning jsx only when reponse is not empty
    if (Response.length > 0)
        return (
            <Suspense fallback={<div className='w-full h-screen flex items-center justify-center text-black text-2xl '>Loading...</div>}>
                <section id='home' className="relative h-screen" ref={ref}>
                    <div className={`absolute z-10 bottom-10 right-10 flex items-center gap-2 text-xl  animate-bounce  ${IsVisible ? 'opacity-100' : 'opacity-0 '} transition-all ease-in duration-600`}>
                        Scroll Down <IoIosArrowDropdown size={20} />
                    </div>
                    <Image
                        src={`${imageUrlBuilder({ projectId, dataset }).image(Response[0].image).url()}`}
                        alt="FitLife Gym interior with modern equipment and motivated members working out"
                        layout="fill"
                        className='object-cover'
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center h-full justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5,
                                ease: ["linear"]
                            }} className="text-center text-white">
                            <h1 className="text-5xl font-bold mb-4">{`${Response[0].Quote}`} <span className='text-blue-600'>{"Fit"}</span><span className='text-red-600'>{"Life"}</span> <span className='text-green-600'>{"Gym"}</span>  </h1>
                            <q className="text-xl mb-8 text-[#ffc300]">{`${Response[0].desc}`}</q>
                            {/* <Button className="bg-purple-600 p-2 rounded-md px-4 shadow-slate-500" label={'Get Started'}>
                        Get Started 
                    </Button> */}
                        </motion.div>
                    </div>
                </section>
            </Suspense>
        );
};

export default Hero;