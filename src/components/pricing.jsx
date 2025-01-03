"use client";
import React, { useEffect, useState } from 'react';
import { BiCheck } from 'react-icons/bi';


const plans = [
    {
        name: 'Basic',
        price: '699',
        features: [
            'Access to gym facilities',
            'Basic equipment usage',
            'Locker room access',
            '2 group classes/month'
        ]
    },
    {
        name: 'Pro',
        price: '999',
        features: [
            'All Basic features',
            'Unlimited group classes',
            'Personal trainer (2x/month)',
            'Nutrition consultation'
        ],
        popular: true
    },
    {
        name: 'Elite',
        price: '1599',
        features: [
            'All Pro features',
            'Unlimited personal training',
            'Premium equipment access',
            'Spa & massage services'
        ]
    }
];

export default function Pricing() {
    const [currentPlan, setCurrentPlan] = useState('Pro');
    const [plans, setPlans] = useState([]);
    const [description, setDescription] = useState('');
    

    useEffect(() => {
        const fetchPricingData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/memberships`);
            const data = await response.json();
            setDescription(data.data[0].description);
            setPlans(data.data[0].Details);
        };

        fetchPricingData();
    }, []);

    return (
        <section id="pricing" className={'py-24 bg-gray-50'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Plans</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect membership plan that fits your fitness journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            onClick={() => setCurrentPlan(`${plan.name}`)}
                            key={index}
                            className={`bg-white rounded-lg p-8 ${currentPlan === plan.name ? 'ring-2 ring-purple-600 shadow-lg' : ''
                                }`}
                        >
                            {plan.popular && (
                                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mt-4">{plan.name}</h3>
                            <p className="mt-4">
                                <span className="text-4xl font-bold text-gray-900">Rs.{plan.price}</span>
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