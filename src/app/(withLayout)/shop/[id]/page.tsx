import React from 'react';
import ArtDetailsHeader from '@/components/ShopComponents/ShopDetailsComponents/ArtDetailsHeader';
import AboutTheArtSection from '@/components/ShopComponents/ShopDetailsComponents/AboutTheArtSection';
import FeaturedProductOfArtists from '@/components/ShopComponents/ShopDetailsComponents/FeaturedProductOfArtists';


const ArtDetails = () => {
    return (
        <div className='container mx-auto'>
            <ArtDetailsHeader></ArtDetailsHeader>
            <AboutTheArtSection></AboutTheArtSection>
            <FeaturedProductOfArtists></FeaturedProductOfArtists>
        </div>
    );
};

export default ArtDetails;