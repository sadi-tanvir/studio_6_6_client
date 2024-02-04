import React from 'react'
import { IoIosCheckmark } from 'react-icons/io'

const CheckBox = ({ checked }: { checked: boolean }) => {
    return (
        <div className="inline-flex items-center">
            <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="purple">
                <input
                    checked={checked}
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
                    id=""
                />
                <span
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 text-2xl">
                    <IoIosCheckmark />
                </span>
            </label>
        </div>
    )
}

export default CheckBox