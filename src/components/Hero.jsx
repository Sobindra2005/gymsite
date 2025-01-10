"use client";
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { client } from "@/sanity/client";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";
import useSWR from 'swr';

const QUERY = `*[_type == "HeroSection"]{ Quote, desc, image}`;
const { projectId, dataset } = client.config();
const options = { next: { revalidate: 30 } };

const fetcher = async () => {
    const data = await client.fetch(QUERY, {}, options);
    return data;
};

const HeroSkeleton = () => (
    <section className="relative h-screen bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
                <div className="h-12 w-96 bg-gray-800 animate-pulse rounded"></div>
                <div className="h-6 w-72 bg-gray-800 animate-pulse rounded mx-auto"></div>
            </div>
        </div>
    </section>
);

const Hero = () => {
    const { data: Response, error } = useSWR('heroSection', fetcher);
    const [IsVisible, setIsVisible] = useState(true);
    const [index, setIndex] = useState(0);
    const ref = useRef(null);

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

    // Fixed useEffect for image rotation
    useEffect(() => {
        if (Response && Response.length > 0) {
            const length = Response[0].image.length - 1;
            const intervalId = setInterval(() => {
                setIndex(prevIndex => prevIndex === length ? 0 : prevIndex + 1);
            }, 5000);

            // Cleanup function
            return () => clearInterval(intervalId);
        }
    }, [Response]); // Only depend on Response, not index

    // Separate useEffect for scroll handling
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!Response || Response.length === 0) {
        return <HeroSkeleton />;
    }

    const heroData = Response[0];

    return (
        <section id='home' className="relative h-screen overflow-hidden" ref={ref}>
            <div
                className={`absolute z-10 bottom-10 right-10 flex items-center gap-2 text-xl animate-bounce ${IsVisible ? 'opacity-100' : 'opacity-0'
                    } transition-all ease-in duration-600`}
            >
                Scroll Down <IoIosArrowDropdown size={20} />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={index} // Add key prop here
                    className="absolute inset-0"
                    initial={{ opacity: 0.8, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0.8, x: -20 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src={`${imageUrlBuilder({ projectId, dataset }).image(heroData.image[index]).url()}`}
                        alt="FitLife Gym interior with modern equipment and motivated members working out"
                        layout="fill"
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeOut"
                    }}
                    className="text-center text-white"
                >
                    <h1 className="text-5xl font-bold mb-4">
                        {heroData.Quote}
                        <span className='text-blue-600'>Fit</span>
                        <span className='text-red-600'>Life</span>
                        <span className='text-green-600'>Gym</span>
                    </h1>
                    <q className="text-xl mb-8 text-[#ffc300]">{heroData.desc}</q>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;