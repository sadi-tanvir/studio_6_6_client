import React from 'react'
import ArtGallery from './ArtGallery'
import FilterCategory from './FilterCategory'

const ShopLayout = () => {
  return (
    <div className='container mx-auto'>
      <hr className='my-20' />
      <div className='md:grid md:grid-cols-4'>
        <FilterCategory></FilterCategory>
        <ArtGallery></ArtGallery>
      </div>
    </div>
  )
}

export default ShopLayout