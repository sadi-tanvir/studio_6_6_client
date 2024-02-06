import Image from 'next/image';
import React from 'react'
import Artist from "/public/Artist.png";

const AboutTheArtSection = () => {
    return (
        <div className='space-y-10 px-5 md:px-0'>
            <div className='space-y-5'>
                <div className='border-b border-b-gray-300 py-2'>
                    <span className='border-b-4 border-b-primary py-2 text-2xl font-semibold text-primary '>About the art</span>
                </div>
                <p className='text-gray-700 text-lg'>
                    Using a sandy texture paste and allowing a juxtaposition of color by adding the gold leaf. The series is a homage to the moon cycle falling crescent to full. This piece is made with sand plaster, gold foil, a raw red oak frame and acrylics.The gold is intended to liberate upon seeing and invoke a feeling of richness.Abstract, Fine Art. Space. Moon. Circle.
                </p>
            </div>

            {/* artist profile */}
            <div className='text-gray-700'>
                <h4 className='text-xl font-bold mb-4'>Artist profile</h4>
                <div className='grid grid-cols-1 md:grid-cols-3 space-y-6 md:space-y-0 md:space-x-5'>
                    <Image
                        src={Artist}
                        alt='Artist'
                        className='border border-gray-200 rounded-xl shadow-lg opacity-85 w-full h-full'
                    />
                    <div className='md:col-span-2'>
                        <h4 className='text-xl font-bold mb-1'>Nabil Rahman</h4>
                        <p className='font-bold mb-3'>Painter</p>
                        <p className='mb-3'>
                            Certainly, always, now with the efficiency of desire, nobly, it is full of gregariousness, and justly it is with moderation. The tincture is large, the laces are efficient. Sharing things with colleagues on the shore. Another trifle is the size of the piece, the chain of mollusks is very efficient. They were amused at the bow, and the font was with a vestibule. Sharing things with colleagues on the shore. Another trifle is the size of the piece, the chain of mollusks is very efficient. They were amused at the bow, and the font was with a vestibule
                        </p>
                        <button className='px-7 py-3 rounded-3xl bg-primary text-white'>
                            Visit Artist Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTheArtSection;