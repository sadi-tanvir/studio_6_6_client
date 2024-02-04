import ShopHeader from '@/components/ShopComponents/ShopHeader'
import ShopLayout from '@/components/ShopComponents/ShopLayout'
import React from 'react'

const Shop = () => {
  return (
    <div className='py-10'>
      <ShopHeader></ShopHeader>
      <ShopLayout></ShopLayout>
    </div>
  );
};

export default Shop;