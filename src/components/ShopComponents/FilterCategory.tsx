import React from 'react'
import CheckBox from './CheackBox';
import MultiRangeSlider from './MultiRangeSlider';

const FilterCategory = () => {

    const categories = [
        { id: 1, name: 'All Original' },
        { id: 2, name: 'Paintings' },
        { id: 3, name: 'Sculpture' },
        { id: 4, name: 'Textile' },
        { id: 5, name: 'Mixed Media' },
        { id: 6, name: 'Textile' },
        { id: 7, name: 'Collectibles' },
    ];

    const artists = [
        { id: 1, name: 'Artist 1' },
        { id: 2, name: 'Artist 2' },
        { id: 3, name: 'Artist 3' },
        { id: 4, name: 'Artist 4' },
        { id: 5, name: 'Artist 5' },
        { id: 6, name: 'Artist 6' },
        { id: 7, name: 'Artist 7' },
        { id: 8, name: 'Artist 8' },
        { id: 9, name: 'Artist 9' },
        { id: 10, name: 'Artist 10' },
        { id: 11, name: 'Artist 11' },
        { id: 12, name: 'Artist 12' },
        { id: 13, name: 'Artist 13' },
        { id: 14, name: 'Artist 14' },
        { id: 15, name: 'Artist 15' },
    ];


    return (
        <div className='hidden md:block space-y-5'>
            {/* Filter by Category */}
            <div className='space-y-3'>
                <h1 className='text-gray-700 text-2xl font-bold capitalize'>filter By Category</h1>
                <ul className='space-y-3'>
                    {
                        categories.map((category) => (
                            <div className='flex items-center space-x-3'>
                                <CheckBox checked={category.id === 3}></CheckBox>
                                <li
                                    key={category.id}
                                    className='text-lg'
                                >
                                    {category.name}
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </div>

            <hr className='w-5/6 border border-gray-300' />

            {/* Filter by Artist */}
            <div className='space-y-3'>
                <h1 className='text-gray-700 text-2xl font-bold capitalize'>Filter by Artist</h1>
                <ul className='space-y-3'>
                    {
                        artists.length > 4 ?
                            <>
                                {
                                    artists.slice(0, 4).map((category) => (
                                        <div className='flex items-center space-x-3'>
                                            <CheckBox checked={category.id === 2}></CheckBox>
                                            <li
                                                key={category.id}
                                                className='text-lg'
                                            >
                                                {category.name}
                                            </li>
                                        </div>
                                    ))
                                }
                                <p className='font-semibold'>+{artists.length - 4} more</p>
                            </>
                            :
                            artists.map((category) => (
                                <div className='flex items-center space-x-3'>
                                    <CheckBox checked={category.id === 2}></CheckBox>
                                    <li
                                        key={category.id}
                                        className='text-lg'
                                    >
                                        {category.name}
                                    </li>
                                </div>
                            ))
                    }
                </ul>
            </div>


            <hr className='w-5/6 border border-gray-300' />

            {/* Filter by Artist */}
            <div className='space-y-7'>
                <h1 className='text-gray-700 text-2xl font-bold capitalize'>Filter by Price</h1>
                <MultiRangeSlider />
            </div>
        </div>
    )
}

export default FilterCategory