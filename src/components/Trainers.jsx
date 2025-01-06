
import imageUrlBuilder from "@sanity/image-url";
import React from 'react';
import Image from 'next/image';
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "trainers"] {
  name,
  speciality,
  image,
}`;

const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();


// const sampleTrainers = [
//     {
//         name: "Alice Johnson",
//         specialty: "Yoga & Pilates",
//         image: "/images/trainers/mark-brown.jpg",
//     },
//     {
//         name: "Mark Brown",
//         specialty: "HIIT & Weightlifting",
//         image: "/images/trainers/mark-brown.jpg",
//     },
//     {
//         name: "Sarah Lee",
//         specialty: "Cardio & Aerobics",
//         image: "/images/trainers/sarah-lee.jpg",
//     },
//     {
//         name: "David Smith",
//         specialty: "Strength Training & CrossFit",
//         image: "/images/trainers/david-smith.jpg",
//     }
// ];
export default async function Trainers() {

const Response = await client.fetch(POSTS_QUERY, {}, options);

    return (
        <section id="trainers" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Trainers</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {"Meet our expert trainers who are here to guide you on your fitness journey."}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Response.map((trainer, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-300 rounded-lg overflow-hidden">
                            <div className='h-[16rem] relative overflow-hidden'>
                                <Image
                                    src={`${imageUrlBuilder({ projectId, dataset }).image(trainer.image).url()}`}
                                    alt={trainer.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-125 transition-transform duration-200 ease-in"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 ">{trainer.name}</h3>
                                <p className="text-gray-600">{trainer.speciality}</p>
                            </div>
                        </div>

                    ))}
                </div>



            </div>
        </section>
    );
}