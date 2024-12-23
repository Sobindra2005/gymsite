import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';


interface ReviewCardProps {
  name: string;
  image: string;
  rating: number;
  review: string;
  date: string;
}

export default function ReviewCard({ name, image, rating, review, date }: ReviewCardProps) {
  return (
    <div className="bg-white p-6  rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar  
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600">{review}</p>
    </div>
  );
}