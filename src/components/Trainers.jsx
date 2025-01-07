
import imageUrlBuilder from "@sanity/image-url";
import React from 'react';
import Image from 'next/image';
import { client } from "@/sanity/client";

const QUERY = `*[_type == "trainers"] {
  name,
  speciality,
  image,
}`;

const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();


export default async function Trainers() {

    const Response = await client.fetch(QUERY, {}, options);

    return (
        <section id="trainers" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Trainers</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {"Meet our expert trainers who are here to guide you on your fitness journey."}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-800  md:grid-cols-4 gap-8">
                    {Response.map((member, index) => (
                        <div key={index} className="text-center">
                            <Image
                                src={`${imageUrlBuilder({ projectId, dataset }).image(member.image).url()}`}
                                alt={member.name}
                                width={200}
                                height={200}
                                className="rounded-full w-[12rem] h-[12rem]  mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600">{member.speciality}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}