
import React from 'react';

const trainers = [
    {
        name: 'Sarah Johnson',
        specialty: 'HIIT & Strength Training',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
    },
    {
        name: 'Mike Chen',
        specialty: 'Yoga & Flexibility',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
     
    },
    {
        name: 'Lisa Brown',
        specialty: 'Cardio & Boxing',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        
    },
    {
        name: 'Alex Smith',
        specialty: 'Nutrition & Weight Training',
        image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
       
    }
];

export default function Trainers() {
  
    return (
        <section id="trainers" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Trainers</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our certified trainers are here to help you achieve your fitness goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-300 rounded-lg overflow-hidden">
                            <div className='h-[16rem] overflow-hidden'><img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-full scale-105 hover:scale-125 h-full overflow-hidden object-cover object-center border border-blue transiton-all ease-in duration-300 "
                            />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{trainer.name}</h3>
                                <p className="text-gray-600 mb-4">{trainer.specialty}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}