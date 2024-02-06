import React from 'react';
import Image1 from "/public/product-card/image 112.png";
import Image2 from "/public/product-card/image 116.png";
import Image3 from "/public/product-card/image 118.png";
import Image4 from "/public/product-card/image 119.png";
import Image5 from "/public/product-card/image 117.png";
import Image from 'next/image';
import SearchBox from './SearchBox';
import RecentFilterButton from './RecentFilterButton';
import { CiSliderVertical } from "react-icons/ci";

const ArtGallery = () => {
    const GalleryData = [
        { id: 1, artist: 'Nabil Rahman', Image: Image1, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
        { id: 2, artist: 'Nabil Rahman', Image: Image2, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
        { id: 3, artist: 'Nabil Rahman', Image: Image4, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
        { id: 4, artist: 'Nabil Rahman', Image: Image3, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
        { id: 5, artist: 'Nabil Rahman', Image: Image1, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
        { id: 6, artist: 'Nabil Rahman', Image: Image5, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
        { id: 7, artist: 'Nabil Rahman', Image: Image2, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: true },
        { id: 8, artist: 'Nabil Rahman', Image: Image5, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
        { id: 9, artist: 'Nabil Rahman', Image: Image1, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false }
    ];

    return (
        <div className='md:col-span-3 relative px-5 md:px-0'>
            <div className='md:before:absolute md:before:left-[-30px] md:before:h-full md:before:w-[2px] md:before:bg-gray-300'>
                {/* search box & Recent button */}
                <div className='flex flex-row justify-between items-center mb-7 gap-5'>
                    <SearchBox></SearchBox>
                    <RecentFilterButton></RecentFilterButton>
                    <button className='md:hidden bg-primary px-5 py-2 flex justify-center items-center text-white rounded-lg'>
                        Filter
                        <CiSliderVertical className='text-2xl ' />
                    </button>
                </div>


                {/* gallery section */}
                <div className='columns-3 [&>:not(:first-child)]:mt-10'>
                    {
                        GalleryData.map((item) => (
                            <div className='relative' key={item.id}>
                                {item.isFeaturedArt &&
                                    <p className='absolute top-2 left-3 text-sm px-2 py-1 md:px-4 md:py-2 rounded-xl bg-[#DED5ED] text-gray-600'>Featured Art</p>
                                }
                                <Image
                                    src={item.Image}
                                    alt='photo'
                                    className='rounded-2xl'
                                />
                                <div className='space-y-1 mt-3'>
                                    <p>Painting by {item.artist}</p>
                                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-700'>
                                        {item.description}
                                    </h3>
                                    <div>
                                        <span className='text-xl md:text-2xl font-bold text-primary'>{item.price}৳</span>
                                        <span className='text-md md:text-lg ml-2 text-gray-600'>270৳</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* pagination */}
                <div className='flex justify-center items-center space-x-6 mt-16'>
                    <button className='font-bold text-gray-600'>PREV</button>
                    <ul className='flex justify-center items-center'>
                        {
                            [...Array(4)]
                                .map((item, index) => (
                                    <li
                                        key={index}
                                        className={`${index === 0 ? 'bg-primary text-white' : ''} w-14 h-14 flex justify-center items-center rounded-full`}
                                    >
                                        {index + 1}
                                    </li>
                                ))
                        }
                    </ul>
                    <button className='font-bold text-primary'>NEXT</button>
                </div>
            </div>
        </div>
    )
}

export default ArtGallery