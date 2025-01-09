"use client"
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image';
import React, { Suspense, useEffect, useRef } from 'react';
import { client } from "@/sanity/client";
import { motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";
import useSWR from 'swr';

const QUERY = `*[_type == "HeroSection"]{ Quote, desc, image}`;
const { projectId, dataset } = client.config();
const options = { next: { revalidate: 30 } };

// Separate fetcher function for SWR
const fetcher = async () => {
    const data = await client.fetch(QUERY, {}, options);
    return data;
};

// Separate loading component with a skeleton UI
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
    const [IsVisible, setIsVisible] = React.useState(true);
    const ref = useRef(null);

    // Scroll tracking logic
    useEffect(() => {
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

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Error handling
    if (error) {
        return (
            <section className="relative h-screen bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <p>Failed to load hero section. Please try again later.</p>
                </div>
            </section>
        );
    }

    // Show skeleton while loading
    if (!Response || Response.length === 0) {
        return <HeroSkeleton />;
    }

    const heroData = Response[0];
    const imageUrl = imageUrlBuilder({ projectId, dataset }).image(heroData.image).url();

    return (
        <section id='home' className="relative h-screen" ref={ref}>
            <div
                className={`absolute z-10 bottom-10 right-10 flex items-center gap-2 text-xl animate-bounce ${IsVisible ? 'opacity-100' : 'opacity-0'
                    } transition-all ease-in duration-600`}
            >
                Scroll Down <IoIosArrowDropdown size={20} />
            </div>

            <Image
                src={imageUrl}
                alt="FitLife Gym interior with modern equipment and motivated members working out"
                layout="fill"
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: ["linear"]
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