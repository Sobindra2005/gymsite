"use client"
import React, { useEffect, useRef, useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import Image from 'next/image';
import { client } from '@/sanity/client';
import imageUrlBuilder from "@sanity/image-url";

const QUERY = `*[_type == "gallery"] {image,}`;

const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();


export default function Gallery() {
    const [Response, setResponse] = useState([])
   
    const scrollContainerRef = useRef(null);
    const scroll = (direction, length) => {
        if (scrollContainerRef.current) {
            const totalwidth =scrollContainerRef.current.scrollWidth;
            const scrollAmount = totalwidth / length;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
  
    console.log(" here is startx ",startX.current)
    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
        scrollLeft.current = scrollContainerRef.current.scrollLeft;
        scrollContainerRef.current.style.cursor = 'grabbing';
        scrollContainerRef.current.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.removeProperty('user-select');
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.removeProperty('user-select');
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX;
        console.log("here is x ",x)
        const walk = x - startX.current;
        console.log("here is walk",walk)
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };


    useEffect(() => {
        async function Fetchdata() {
            const response = await client.fetch(QUERY, {}, options);
            setResponse(response)
        }
        Fetchdata();
    })

    return (
        <section id='gallery' className="py-16  bg-gray-100">
            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
                </div>
                <div className='relative'>
                    <button
                        className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2  text-gray-800  rounded-full"
                        onClick={() => scroll('left', Response.length)}
                    >
                        <BiLeftArrow size={24} />
                    </button>
                    <div>

                        <div
                            ref={scrollContainerRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            style={{ cursor: 'grab', overflow: 'auto' }}
                            className="flex overflow-x-auto space-x-4 p-8  cursor-grab no-scrollbar  "
                        >
                            {Response.map((image, index) => (
                                <div key={index} className="flex-shrink-0 relative rounded-lg overflow-hidden gap-8  w-[24rem] h-[24rem]">

                                    <Image
                                        src={imageUrlBuilder({ projectId, dataset }).image(image.image).url() || null}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover object-center transition-transform ease-in duration-250 hover:scale-110  "
                                        layout="fill"
                                        objectFit="cover"
                                        draggable="false"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-gray-800 p-2 rounded-full"
                        onClick={() => scroll('right', Response.length)}
                    >
                        <BiRightArrow size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}