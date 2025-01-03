"use client"
import React, { useEffect, useState } from 'react';
import { FaDumbbell, FaSwimmer, FaSpa, FaRunning } from 'react-icons/fa';

const iconMap = {
    FaDumbbell: FaDumbbell,
    FaSwimmer: FaSwimmer,
    FaSpa: FaSpa,
    FaRunning: FaRunning,
};

const ServiceAndFacilities = () => {
    const [services, setServices] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchServicesData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/service-and-facilities`);
            const data = await response.json();
            setDescription(data.data[0].description);
            setServices(data.data[0].services);
        };

        fetchServicesData();
    }, []);

    return (
        <section id='Service&facilities' className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-gray-900 lg:px-8 container p-4">
                <h2 className="text-3xl font-bold mb-4 text-center">Services & Facilities</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
                    {description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
                        return (
                            <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
                                <IconComponent className="text-4xl mb-2" />
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceAndFacilities;