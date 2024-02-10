import Image from 'next/image'
import React from 'react'
import Events_3 from "/public/events-photo/Events_3.png";

const EventBookingForm = () => {
    return (
        <div className='my-24'>
            <hr className='mb-10' />
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='px-12 space-y-7 order-2 sm:order-1 mt-10'>
                    <h1 className='text-3xl font-bold text-gray-700'>Book Studio 6/6</h1>
                    <p className='text-lg text-gray-700'>
                        If you want to book our studio, please fill up the form then submit us. We will contact you as soon as possible.
                    </p>

                    <form action="">
                        <input
                            type="text"
                            placeholder='Name*'
                            className='outline-none border-b border-b-primary w-full py-4 xl:py-5'
                        />
                        <input
                            type="text"
                            placeholder='Email'
                            className='outline-none border-b border-b-primary w-full py-4 xl:py-5'
                        />
                        <input
                            type="text"
                            placeholder='Phone*'
                            className='outline-none border-b border-b-primary w-full py-4 xl:py-5'
                        />

                        <textarea
                            cols={0}
                            className='outline-none border-b border-b-primary w-full py-6 md:h-36 lg:h-52 h-64'
                            placeholder='Message'
                        >
                        </textarea>

                        <button className='w-full py-3 bg-primary text-white rounded-xl mt-6' type="submit">
                            Submit
                        </button>
                    </form>
                </div>

                <div className='order-1 sm:order-2'>
                    <Image
                        src={Events_3}
                        alt='Form Photo'
                        className='h-full rounded-[3rem]'
                    />
                </div>
            </div>
        </div>
    );
};

export default EventBookingForm;