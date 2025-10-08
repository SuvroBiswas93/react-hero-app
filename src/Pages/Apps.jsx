import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from './AppCard';

const Apps = () => {
    const allCardsData = useLoaderData()
    console.log(allCardsData)
    const[search,setSearch]=useState('')
    console.log(search)
    const term = search.trim().toLowerCase()
    console.log(term)
    const searchedProducts = term
    ? allCardsData.filter(product =>
        product.title.toLowerCase().includes(term)
      )
    : allCardsData
    if(searchedProducts.length === 0){
        return(
             <div className='text-center'>
                no app found
            </div>
        )
    }
    return (
        <div>
            <div className='flex justify-between py-5 items-center px-10'>
                <h1 className='text-3xl font-semibold'>
                All Apps{' '}
                <span className='text-sm text-gray-500'>
                    ({searchedProducts.length}) Apps Found.
                </span>
                </h1>
                <label className='input'>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type='search'
                    placeholder='Search Apps'
                />
                </label>
        </div>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-10 my-10'>
                {
                    searchedProducts.map((card,id)=><AppCard key={id} data={card}></AppCard>)
                }
           </div>
        </div>
    );
};

export default Apps;