import Image from 'next/image';
import React from 'react';
import Image2 from "/public/product-card/image 116.png";

const ArtDetailsHeader = () => {
    return (
        <div className='w-full lg:py-14  xl:py-14 my-10 md:my-0 px-5 md:px-0'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2'>
                {/* left side */}
                <div className='w-full bg-[#D5EDEC] p-10 xl:p-14 rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-l-3xl'>
                    <Image
                        src={Image2}
                        alt='Art'
                        className='w-full h-full rounded-lg'
                    />
                </div>

                {/* right side */}
                <div className='flex flex-col justify-center items-start w-full px-5 sm:px-16  xl:px-28 space-y-6 py-10 md:py-5 lg:py-5 xl:py-0 rounded-br-3xl rounded-bl-3xl md:rounded-bl-none md:rounded-r-3xl bg-[#F5CEBC]/15'>
                    <div className='space-y-5 xl:space-y-10'>
                        <div className='space-y-2'>
                            <h1 className='text-xl md:text-2xl xl:text-3xl font-bold text-gray-600'>Ink, pencil and palo santo on paper 9.5 x 7.5 inches 2019</h1>
                            <p className='text-gray-600'> Painting by <span className='text-primary'>Nabil Rahman</span></p>
                            <div>
                                <span className='text-xl md:text-2xl font-bold text-primary'>250৳</span>
                                <span className='text-md md:text-lg ml-2 text-gray-600'>270৳</span>
                            </div>
                            <p className='text-gray-600'>size: 9.5 in X 7.5 in</p>
                            <p className='text-gray-600'>Published date: 25/01/2024</p>
                        </div>

                        <div className='bg-[#DED5ED] rounded-2xl p-4 lg:p-7 space-y-2'>
                            <h3 className='text-lg lg:text-xl xl:text-2xl font-bold text-gray-600'>
                                Experience the artwork in its full glory - ready for a closer look?
                            </h3>
                            <button className='px-5 py-2 rounded-3xl bg-primary text-white'>Request a Closer Look</button>
                        </div>

                        <p>
                            <span className='font-semibold'>Note:</span> Feel the brushstrokes sing in [Artwork name]. Bring its beauty home. (Showcase a section evoking the desired emotion)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtDetailsHeader;