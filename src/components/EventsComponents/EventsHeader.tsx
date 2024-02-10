import React from 'react'

const EventsHeader = () => {
    return (
        <div className='flex flex-col items-center gap-6 mb-16'>
            <p className='text-lg'>Home / Event</p>
            <h1 className='text-5xl text-gray-700 font-bold'>Events & Activities</h1>
            <div className='px-2 py-2 bg-primary/20 rounded-full'>
                <button className='py-3 px-6 bg-primary rounded-full text-white'>This Month</button>
                <button className='py-3 px-6 rounded-full'>Upcoming</button>
                <button className='py-3 px-6 rounded-full'>Archive</button>
            </div>
        </div>
    );
};

export default EventsHeader;