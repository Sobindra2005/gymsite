import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const QUERY = `*[_type == "Service"] {
    title,
    description,
    icon,
  }`;
const { projectId, dataset } = client.config();
const options = { next: { revalidate: 30 } };

export default async function AmenitiesPage() {
    const Response = await client.fetch(QUERY, {}, options);
    return (
        <section className="bg-gray-100">
            <div className=" mx-auto max-w-7xl  sm:px-6 lg:px-8 px-4 py-32 text-black">
                <h1 className="text-3xl font-bold text-center mb-8">Our Amenities</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Response.map((amenity, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 border hover:border-gray-500 flex flex-col items-center text-center">
                            <div className="flex items-center justify-center mb-4">
                                <Image src={`${imageUrlBuilder({ projectId, dataset }).image(amenity.icon).url()}`} width={20} height={20} alt="icon" className="h-10 w-10" />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{amenity.title}</h2>
                            <p className="text-gray-600">{amenity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

