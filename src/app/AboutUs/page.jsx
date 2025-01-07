import Image from 'next/image'
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Features from "@/components/features";
import Trainer from "@/components/Trainers";

const ABOUTUS_QUERY = `*[_type == "aboutus"] {title,description,mission}`;
const TRAINERS_QUERY = `*[_type == "trainers"] {
    name,
    speciality,
    image,
  }`;
const { projectId, dataset } = client.config();
const options = { next: { revalidate: 30 } };

export default async function AboutPage() {
    const About_Response = await client.fetch(ABOUTUS_QUERY, {}, options);

    const Trainer_Response = await client.fetch(TRAINERS_QUERY, {}, options);


    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">

            <section className="relative h-[50vh] bg-black">
                <div className="absolute inset-0 flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{`${About_Response[0].title}`}</h1>
                        <p className="text-xl md:text-2xl text-gray-200">{`${About_Response[0].description}`}</p>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-white">
                <div className="container  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        {`${About_Response[0].mission}`}
                    </p>
                </div>
            </section>

            < Features />
            <Trainer />

           
            <section className="py-16 bg-gray-800 text-white">
                <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
                    <p className="mb-8">Join us today and experience the difference at FitLife Gym.</p>
                </div>
            </section>
        </div>
    )
}

