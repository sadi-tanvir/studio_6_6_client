import EventsHeader from '@/components/EventsComponents/EventsHeader';
import React from 'react'
import EventCard from '@/components/EventsComponents/EventCard';
import EventBookingForm from '@/components/EventsComponents/EventBookingForm';
import { eventSchedules } from '@/components/EventsComponents/EventScheduleData';

const Events = () => {
    return (
        <div className='container mx-auto'>
            <EventsHeader></EventsHeader>

            {/* event schedules */}
            {
                eventSchedules.map((event, index) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        index={index + 1}
                    />
                ))
            }

            {/* event booking form */}
            <EventBookingForm></EventBookingForm>
        </div>
    );
};

export default Events;