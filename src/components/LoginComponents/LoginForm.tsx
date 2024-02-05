'use client'
import React, { useState } from 'react'
import { RiEyeCloseLine } from 'react-icons/ri'

const LoginForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <form action="" className='space-y-5'>
            <label className="relative">
                <input
                    type="text"
                    placeholder='info@example.com'
                    className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 py-2 text-lg outline-none duration-200 hover:border-gray-600 focus:border-primary mb-6"
                />
                <span className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.7rem] peer-focus:text-primary">Enter Your Email</span>
            </label>

            <label className="relative">
                <input
                    type={passwordVisible ? "text" : "password"}
                    className="w-full peer placeholder:text-sm text-gray-600 rounded-lg border border-gray-400 px-4 py-3 text-lg outline-none duration-200 hover:border-gray-600 focus:border-primary"
                    placeholder='***********'
                />
                <span
                    className="pointer-events-none absolute -top-6 left-4 bg-white px-1 text-sm uppercase tracking-wide text-gray-400 duration-200 peer-focus:text-[.7rem] peer-focus:text-primary"
                >
                    password
                </span>
                <RiEyeCloseLine
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className={`absolute right-4 bottom-1 ${passwordVisible ? "text-primary" : "text-gray-700"} cursor-pointer`}
                />
            </label>

            <p className='text-primary font-semibold'>Forgot password?</p>

            <button className='bg-primary text-white w-full rounded-xl py-3'>Sign in</button>
        </form>
    );
};

export default LoginForm;