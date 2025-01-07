
import imageUrlBuilder from "@sanity/image-url";
import React from 'react';
import { client } from "@/sanity/client";
import Image from "next/image";

const QUERY = `*[
  _type == "feature"
]{ title , description , icon}`;

const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();

const Features = async () => {
  const Response = await client.fetch(QUERY, {}, options);
  return (
    <section id="Service&facilities" className="py-16 text-black bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose FitLife?</h2>
          <p className="text-gray-600 w-full text-center mb-12">
            {" Fit Life gym  for personalized fitness, expert guidance, and flexible coaching"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Response.map((feature, index) => (
              <div key={index} className="bg-white p-6 border hover:border-gray-500 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <Image src={`${imageUrlBuilder({ projectId, dataset }).image(feature.icon)?.width(20).height(20).url()}`} width={20} height={20} alt="icon" className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
