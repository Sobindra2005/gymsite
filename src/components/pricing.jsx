"use client"


import React, { useEffect, useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { client } from "@/sanity/client";

const QUERY = `*[_type == "pricing"] | order(price asc) {
  name,
  price,
  features,
  isPopular
}`;

const options = { next: { revalidate: 30 } };

export default function Pricing() {

    const [Response, setResponse] = useState([])
    const [currentPlan, setCurrentPlan] = useState('Pro');

    useEffect(() => {
        const fetchPricingData = async () => {
            const response = await client.fetch(QUERY, {}, options);
            setResponse(response)
        };

        fetchPricingData();
    }, []);

    return (
        <section id="pricing" className={'py-24 bg-gray-100'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Plans</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect membership plan that fits your fitness journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {Response.map((plan, index) => (
                        <div
                            onClick={() => setCurrentPlan(`${plan.name}`)}
                            key={index}
                            className={`bg-white border  rounded-lg p-8 ${currentPlan === plan.name ? 'ring-2 ring-purple-600 shadow-lg ' : 'hover:ring-1 hover:ring-purple-300'
                                }`}
                        >
                            {plan.isPopular && (
                                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mt-4">{plan.name}</h3>
                            <p className="mt-4">
                                <span className="text-4xl font-bold text-gray-900">Rs.{plan.price}</span>\
                                <span className="text-gray-600">/month</span>
                            </p>
                            <ul className="mt-6 space-y-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <BiCheck className="h-5 w-5 text-purple-600 mr-2" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {/* <button className="mt-8 w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                                Get Started
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}