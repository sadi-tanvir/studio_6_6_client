import React from 'react'

const ShopHeader = () => {
    return (
        <div className='container mx-auto flex flex-col items-center gap-6'>
            <p className='text-lg'>Home / Shop</p>
            <h1 className='text-5xl text-gray-700 font-bold'>Explore Our Shop</h1>
            <div className=' px-2 py-2 bg-primary/20 rounded-full'>
                <button className='py-3 px-8 bg-primary rounded-full text-white'>Original Artwork</button>
                <button className='py-3 px-8 rounded-full'>Collectibles</button>
            </div>
        </div>
    );
};

export default ShopHeader;