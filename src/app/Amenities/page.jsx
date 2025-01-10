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

const Odd = (number) => {
    if (number === 0) return true;
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

export default async function AmenitiesPage() {
    const Response = await client.fetch(QUERY, {}, options);
    return (
        <section className="bg-gray-100">
            <div className=" mx-auto max-w-7xl  sm:px-6 lg:px-8 px-4 py-[6rem] text-black">
                <h1 className="text-4xl font-bold text-center mb-8">Our Amenities</h1>
                <div className="grid grid-cols-1  gap-[15rem]">
                    {Response.map((amenity, index) => (
                        <div key={index} className={`  w-full p-6  flex flex-col items-center  ${Odd(index) ? "md:flex-row" : `md:flex-row-reverse`} items-center text-center`}>
                            <div className="flex items-center p-20 h-[26rem] justify-center w-1/2 ">
                                <Image src={`${imageUrlBuilder({ projectId, dataset }).image(amenity.icon).url()}`} width={20} height={20} alt="icon" className="h-full w-full object-over object-center " />
                            </div>
                            <div className="w-1/2 flex flex-col  h-full items-center bg-gray-200 p-8 justify-center">
                                <h2 className="text-xl font-semibold mb-2">{amenity.title}</h2>
                                <p className="text-gray-600">{amenity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

