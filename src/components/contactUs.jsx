"use client";
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoLocationSharp, IoMail } from 'react-icons/io5';
import { Button } from './buttons';

const ContactUs = () => {

  return (
    <section id="contact" className="md:p-24 text-black lg:px-44 gap-8 p-8  bg-gray-100 ">
      <div className='flex-row items-center justify-center md:items-start md:flex md:justify-between bg-gray-100 w-full h-full'>
        <div className='md:w-1/2  p-4 space-y-4'>
          <h2 className='font-bold text-3xl w-full  '>You Can Find Us At</h2>
          {
            [{
              icon: <IoMail />,
              name: "Email",
              p: "info@mail.com"
            }, {
              icon: <IoLocationSharp />,
              name: "Location",
              p: "bauddha,kathamandu"
            },
            {
              icon: <FaPhone />,
              name: "Phone",
              p: "9841234567"
            }].map((data, index) =>
              <div key={index}>
                <h1 className='flex items-center gap-x-1'>{data.icon} {data.name}</h1>
                <p>{data.p}</p>
              </div>
            )}
        </div>
        <div className='md:w-1/2 p-4 '>
          <h2 className='font-bold text-3xl ' >Contact Us </h2>
          {[{
            label: "Name",
            type: "text",
            placeholder: "Enter your name"
          },
          {
            label: "Email",
            type: "email",
            placeholder: "Enter your Email"
          },
          {
            label: "Phone Number",
            type: "tel",
            placeholder: "Enter your Phoen number"
          }].map((data, index) =>
            <div key={index} className=''>
              <label className='text-gray-600'>{data.label}</label>
              <input type={data.type} placeholder={data.placeholder} className='w-full p-2 border border-gray-400 outline-none text-gray-700  focus:ring-1 rounded-md ' />
            </div>
          )}
          <label className='text-gray-600'>Message</label>
          <textarea rows={4} placeholder="Enter your message" className='w-full border border-gray-400 p-2 outline-none text-gray-700  focus:ring-1 rounded-md ' />
          <Button label={"Submit "} className={'bg-purple-600 text-white px-3 py-2'} />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;