import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const RecentFilterButton = () => {
    return (
        <div className='hidden group/menu sm:flex justify-between items-center cursor-pointer relative w-28 md:w-48 py-2 md:py-[13px] px-4 border border-gray-300 rounded-xl'>
            Recent
            <p className='text-xl text-gray-600'>
                <IoIosArrowDown />
            </p>
            <ul className='z-50 absolute hidden group-hover/menu:block top-10 md:top-[52px] left-1 pt-2 mt-[1px] bg-white border border-gray-300 rounded-lg'>
                <li className='w-[175px] rounded-t-lg px-3 py-3'>menu 1</li>
                <li className='w-[175px] px-3 py-3'>menu 2</li>
                <li className='w-[175px] rounded-b-lg px-3 py-3'>menu 3</li>
            </ul>
        </div>
    )
}

export default RecentFilterButton