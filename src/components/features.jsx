"use client"
import React, { useEffect, useState } from 'react';

const Features = () => {
    const [featuresData, setFeaturesData] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchFeaturesData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/why-chooses`);
            const data = await response.json();
            setDescription(data.data[0].description);
            setFeaturesData(data.data[0].features);
        };

        fetchFeaturesData();
    }, []);

    return (
        <section className="py-16 text-black bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Why Choose FitLife?</h2>
                <p className="text-gray-600 w-full text-center mb-12">
                    {description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <svg xmlns={feature.icon.svg.xmlns} fill={feature.icon.svg.fill} viewBox={feature.icon.svg.viewBox} stroke="currentColor" className={feature.icon.svg.className}>
                                    <path strokeLinecap={feature.icon.svg.path.strokeLinecap} strokeLinejoin={feature.icon.svg.path.strokeLinejoin} strokeWidth={feature.icon.svg.path.strokeWidth} d={feature.icon.svg.path.d} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                            <p className="text-gray-600 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;