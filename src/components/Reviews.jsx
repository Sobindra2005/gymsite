"use client"
import React, { useEffect, useRef, useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import Image from 'next/image';
import { client } from '@/sanity/client';
import imageUrlBuilder from "@sanity/image-url";

const POSTS_QUERY = `*[_type == "gallery"] {image,}`;

const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();


export default function Reviews() {
    const [Response, setResponse] = useState([])
    const scrollContainerRef = useRef(null);
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 500;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    useEffect(() => {
        async function Fetchdata() {
            const response = await client.fetch(POSTS_QUERY, {}, options);
            setResponse(response)
        }
        Fetchdata();
    })

    return (
        <section id='gallery' className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
                </div>
                <div className="relative">
                    <button
                        className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        onClick={() => scroll('left')}
                    >
                        <BiLeftArrow size={24} />
                    </button>
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto space-x-4 no-scrollbar  "
                    >
                        {Response.map((image, index) => (
                            <div key={index} className="flex-shrink-0 relative w-64 h-64">

                                <Image
                                    src={imageUrlBuilder({ projectId, dataset }).image(image.image).url() || null}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                        onClick={() => scroll('right')}
                    >
                        <BiRightArrow size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}