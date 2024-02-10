'use client'
import { MdOutlineDateRange } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Image from 'next/image';
import { useEffect, useState } from "react";


interface EventType {
    title: string;
    image: any;
    description: string;
    date: string;
    time: string;
    location: string;
}


const EventCard = ({ event, index }: { event: EventType; index: number; }) => {
    const [fullDesc, setFullDesc] = useState(false)
    const [textSize, setTextSize] = useState(event.description.length);

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    console.log('width', width);
    console.log('height', height);



    const updateSize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        if (width > 1024) {
            setTextSize(event.description.length);
        } else if ((width < 1024) && (width > 768)) {
            setTextSize(240);
        } else if (width < 768) {
            setTextSize(event.description.length);
        }
    }, [width])

    return (
        <div className=''>
            <hr className='my-10' />
            <div className='grid sm:grid-cols-12 gap-10 text-gray-700 px-5 sm:px-0'>
                <div className={`sm:col-span-8 space-y-5 xl:space-y-8 ${index % 2 === 0 ? "order-2" : "order-2 sm:order-1"}`}>
                    <h1 className="text-2xl xl:text-4xl font-bold xl:mt-5">{event.title}</h1>
                    <div>
                        <p className="xl:text-xl">
                            {event.description.slice(0, textSize)}
                            {
                                textSize < event.description.length ?
                                    <>
                                        <span className="font-semibold">...</span>
                                        <span onClick={() => setTextSize(event.description.length)} className="text-[#186B3A] font-semibold">Read More</span>
                                    </> : null
                            }
                        </p>

                    </div>
                    <div className='font-semibold space-y-2'>
                        <div className='flex flex-col sm:flex-row items-start sm:space-x-4'>
                            <p className='flex justify-center items-center xl:text-xl'>
                                <MdOutlineDateRange className='mr-2 text-lg  text-primary' />
                                Thursday, January 20, 2023
                            </p>
                            <p className='flex  justify-center items-center xl:text-xl'>
                                <CiClock2 className='mr-2 text-lg text-primary' />
                                06:00 AM - 10:30 AM
                            </p>
                        </div>
                        <p className='flex items-center'>
                            <CiLocationOn className='mr-2 text-lg text-primary xl:text-xl' />
                            Gulshan 1, Dhaka (House 15, Road 8, Gulshan 1, Dhaka 1205)
                        </p>
                    </div>
                </div>


                <div className={`sm:col-span-4 ${index % 2 === 0 ? "order-1" : "order-1 sm:order-2"}`}>
                    <Image
                        src={event.image}
                        alt='event card'
                        className='w-full h-full max-h-[470px] rounded-3xl'
                        onClick={() => setFullDesc(!fullDesc)}
                    />
                </div>
            </div>
        </div>
    );
};

export default EventCard;