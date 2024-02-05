import Image from 'next/image'
import LoginBg from "/public/LoginBG.png";
import Logo from "/public/Logo.png";
import LoginForm from '@/components/LoginComponents/LoginForm';

const page = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#FFEADD]'>
            <div className='w-4/6 grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl'>
                <div className='w-full hidden md:block'>
                    <Image
                        src={LoginBg}
                        alt='Login'
                        className='w-full h-full rounded-l-3xl'
                    />
                </div>
                <div className='flex flex-col justify-center items-start w-full px-5 sm:px-16  xl:px-28 space-y-6 py-10 md:py-5 lg:py-0'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        className='w-20 xl:w-32 '
                    />

                    <div className='space-y-2'>
                        <h1 className='text-xl md:text-2xl xl:text-3xl font-bold text-gray-600'>Welcome to</h1>
                        <h1 className='text-xl md:text-2xl xl:text-3xl font-bold text-gray-600'>Studio 6/6 Dashboard</h1>
                    </div>
                    
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    );
};

export default page;