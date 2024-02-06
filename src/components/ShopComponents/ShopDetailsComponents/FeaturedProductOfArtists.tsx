'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Image1 from "/public/product-card/image 112.png";
import Image2 from "/public/product-card/image 116.png";
import Image3 from "/public/product-card/image 118.png";
import Image4 from "/public/product-card/image 119.png";
import Image5 from "/public/product-card/image 117.png";
import { MdAddShoppingCart } from "react-icons/md";


const GalleryData = [
    { id: 1, artist: 'Nabil Rahman', Image: Image1, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
    { id: 2, artist: 'Nabil Rahman', Image: Image2, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
    { id: 3, artist: 'Nabil Rahman', Image: Image4, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
    { id: 4, artist: 'Nabil Rahman', Image: Image2, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
    { id: 5, artist: 'Nabil Rahman', Image: Image1, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
    { id: 6, artist: 'Nabil Rahman', Image: Image5, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
    { id: 7, artist: 'Nabil Rahman', Image: Image3, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: true },
    { id: 8, artist: 'Nabil Rahman', Image: Image1, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false },
    { id: 9, artist: 'Nabil Rahman', Image: Image5, description: 'Pencil on paper 5.5 x 8.25 inches 2020', price: 250, isFeaturedArt: false }
];



const FeaturedProductOfArtists = () => {
    return (
        <div className='my-20 px-5 md:px-0'>
            <div className='flex justify-between items-center my-7'>
                <h3 className='text-gray-700 text-2xl font-bold'>More Art From Nabil Rahman</h3>
                <button className='bg-primary px-5 py-3 flex justify-center items-center text-white rounded-3xl'>
                    <MdAddShoppingCart className='text-2xl mr-2' />
                    Shop
                </button>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper cursor-pointer"
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    }
                }}
            >
                {
                    GalleryData.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className='relative'>
                                {item.isFeaturedArt &&
                                    <p className='absolute top-2 left-3 text-sm px-2 py-1 md:px-4 md:py-2 rounded-xl bg-[#DED5ED] text-gray-600'>Featured Art</p>
                                }
                                <Image
                                    src={item.Image}
                                    alt='photo'
                                    className='rounded-2xl'
                                />
                                <div className='space-y-1 mt-3'>
                                    <p>Painting by Nabil Hasan</p>
                                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-700'>
                                        {item.description}
                                    </h3>
                                    <div>
                                        <span className='text-xl md:text-2xl font-bold text-primary'>{item.price}৳</span>
                                        <span className='text-md md:text-lg ml-2 text-gray-600'>270৳</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}


export default FeaturedProductOfArtists;