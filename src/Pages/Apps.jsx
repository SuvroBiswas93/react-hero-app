import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from './AppCard';

const Apps = () => {
    const allCardsData = useLoaderData()
    console.log(allCardsData)
    const[search,setSearch]=useState('')
    const term = search.trim().toLocaleLowerCase()
  const searchedProducts = term
    ? allCardsData.filter(product =>
        product.name.toLocaleLowerCase().includes(term)
      )
    : allCardsData
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>
          All Products{' '}
          <span className='text-sm text-gray-500'>
            ({searchedProducts.length}) Products Found.
          </span>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Products'
          />
        </label>
      </div>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-10 my-10'>
                {
                    allCardsData.map((card,id)=><AppCard key={id} data={card}></AppCard>)
                }
           </div>
        </div>
    );
};

export default Apps;