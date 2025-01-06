
import imageUrlBuilder from "@sanity/image-url";
import React from 'react';
import { client } from "@/sanity/client";
import Image from "next/image";

const POSTS_QUERY = `*[
  _type == "feature"
]{ title , description , icon}`;

const options = { next: { revalidate: 30 } };
const { projectId, dataset } = client.config();

const Features = async () => {

  const Response = await client.fetch(POSTS_QUERY, {}, options);
  // const [featuresData, setFeaturesData] = useState([]);
  // const [description, setDescription] = useState('');

  // useEffect(() => {

  //   const sampleData = {
  //     data: [
  //       {
  //         title: "State-of-the-Art Equipment",
  //         description: "Access the latest and most advanced fitness machines to enhance your workouts.",
  //         icon: (
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth="1.5"
  //             stroke="currentColor"
  //             className="w-12 h-12 text-blue-500"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M6 18L18 6M6 6l12 12"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         title: "Expert Trainers",
  //         description: "Work with certified professionals dedicated to helping you achieve your fitness goals.",
  //         icon: (
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth="1.5"
  //             stroke="currentColor"
  //             className="w-12 h-12 text-green-500"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"
  //             />
  //           </svg>
  //         ),
  //       },
  //       {
  //         title: "Flexible Memberships",
  //         description: "Choose from a variety of membership options tailored to your needs.",
  //         icon: (
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             strokeWidth="1.5"
  //             stroke="currentColor"
  //             className="w-12 h-12 text-red-500"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M5 13l4 4L19 7"
  //             />
  //           </svg>
  //         ),
  //       },
  //     ],
  //   };



  //   setFeaturesData(sampleData.data[0].features);
  // }, []);

  return (
    <section id="Service&facilities" className="py-16 text-black bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Why Choose FitLife?</h2>
          <p className="text-gray-600 w-full text-center mb-12">
            {" Fit Life gym  for personalized fitness, expert guidance, and flexible coaching"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Response.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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
