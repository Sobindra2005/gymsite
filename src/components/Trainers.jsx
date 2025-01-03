"use client";

import React, { useEffect, useState } from 'react';

export default function Trainers() {
    const [trainers, setTrainers] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchTrainersData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/expert-trainers`);
            const data = await response.json();
            setDescription(data.data[0].description);
            setTrainers(data.data[0].data);
        };

        fetchTrainersData();
    }, []);

    return (
        <section id="trainers" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Trainers</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-300 rounded-lg overflow-hidden">
                            <div className='h-[16rem] overflow-hidden'>
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-200 ease-in"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                                <p className="text-gray-600">{trainer.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}