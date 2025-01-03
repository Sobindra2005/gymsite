import React from 'react';

const Location = () => {
    return (
        <section id='Service&facilities' className="bg-white px-4 pb-16">
            <div className="max-w-7xl flex gap-5   mx-auto px-4 sm:px-6 bg-black rounded-lg text-gray-900 lg:px-8 container p-4">
                <div className='w-full '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.556572225305!2d85.3639168!3d27.72070885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b34ce93930f%3A0xfcd192546dfe646!2sMeerako%20Services!5e0!3m2!1sen!2snp!4v1735887947179!5m2!1sen!2snp" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[7rem] rounded-md '></iframe>
                </div>
                <div className='flex  min-w-fit   flex-col  items-center h-full gap-2 '>
                    <h1 className='font-bold text-md md:text-2xl text-yellow-600 '> Visit <span className='text-blue-600'>Fit</span><span className='text-red-600'>Life</span> <span className='text-green-600'>Gym</span>  </h1>
                    <button className='md:p-2 p-1 text-md font-semibold md:text-lg md:px-3  bg-yellow-500 rounded-lg text-black md:font-bold  '>
                        Get Direction
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Location;