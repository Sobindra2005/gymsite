"use client"
import React, { useRef } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import ReviewCard from './cards/ReviewCard';
import { reviews } from './cards/ReviewData';

export default function Reviews() {
    const scrollContainerRef = useRef (null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 500;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id='reviews' className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Reviews</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        See what our members have to say about their experience at FitLife Gym.
                    </p>
                </div>

                <div className="relative flex items-center justify-center">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Scroll left"
                    >
                        <BiLeftArrow className="h-6 w-6 text-gray-600" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x snap-mandatory scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="flex-none w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] snap-start"
                            >
                                <ReviewCard {...review} />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Scroll right"
                    >
                        <BiRightArrow className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
}