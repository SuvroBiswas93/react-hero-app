import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from './AppCard';
import noAppImg from '../assets/App-Error.png'

const Apps = () => {
    const allCardsData = useLoaderData()
    console.log(allCardsData)
    const[search,setSearch]=useState('')
    const term = search.trim().toLowerCase()
    const searchedProducts = term
    ? allCardsData.filter(product =>
        product.title.toLowerCase().includes(term)
      )
    : allCardsData
    if(searchedProducts.length === 0){
        return(
             <div className='text-center mt-20'>
                <img src={noAppImg} alt="" />
                <h3>OOPS!! APP NOT FOUND</h3>
                <P>The app you are looking is not found in your system, Please tey another apps.</P>
                <Link to='/' className='bg-purple-400 hover:bg-purple-700 text-white'>Go Back!</Link>
            </div>
        )
    }
    return (
        <div>
            <div className='flex flex-col space-y-2 md:flex-row justify-between py-5 items-center md:px-10'>
                <h1 className='text-3xl font-semibold'>
                All Apps{' '}
                <span className='text-sm text-gray-500'>
                    ({searchedProducts.length}) Apps Found.
                </span>
                </h1>
                <label className='input border-2 border-purple-500 '>
                <input
                    className='text-purple-500 font-bold'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type='search'
                    placeholder='Search Apps'
                />
                </label>
        </div>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-2 md:px-10 my-10'>
                {
                    searchedProducts.map((card,id)=><AppCard key={id} data={card}></AppCard>)
                }
           </div>
        </div>
    );
};

export default Apps;