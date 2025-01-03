"use client"
import Image from 'next/image';
import React, { Suspense, useEffect, useState } from 'react';
import { Button } from '@/components/buttons';

const Hero = () => {
    const [datas, setDatas] = useState(null);
    const [imageSrc, setImageSrc] = useState('');
    console.log(datas)

    useEffect(() => {
        const fetchData = async () => {
            const dataResponse = await fetch(`http://localhost:1337/api/hero-sections`);

            const dataJson = await dataResponse.json();
            setDatas(dataJson);

            const imageResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/photo_1534438327276_14e5300c3a48_6d6b843982.jpeg`);
            const imageBlob = await imageResponse.blob();
            setImageSrc(URL.createObjectURL(imageBlob));
        };

        fetchData();
    }, []);


if(!!datas || !!imageSrc)
    return (
        <Suspense fallback={<div className='w-full h-screen flex items-center justify-center text-black text-2xl '>Loading...</div>}>
            <section className="relative h-screen">
                <img
                    src={imageSrc || null}
                    alt="FitLife Gym interior with modern equipment and motivated members working out"
                    className='object-cover w-full h-full object-center'
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center h-full justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">{`${datas.data[0].quote}`} <span className='text-blue-600'>{"Fit"}</span><span className='text-red-600'>{"Life"}</span> <span className='text-green-600'>{"Gym"}</span>  </h1>
                        <q className="text-xl mb-8 text-[#ffc300]">{`${datas.data[0].description}`}</q>
                        {/* <Button className="bg-purple-600 p-2 rounded-md px-4 shadow-slate-500" label={'Get Started'}>
                        Get Started 
                    </Button> */}
                    </div>
                </div>
            </section>
        </Suspense>
    );
};

export default Hero;