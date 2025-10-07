import React from 'react';
import { Link } from 'react-router';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'

const AppCard = ({data}) => {
    const{title,image,ratingAvg,downloads}=data
    return (
       <div className="card bg-base-100  p-4  shadow-lg hover:scale-105 transition ease-in-out">
        <figure className='h-40 overflow-hidden bg-gray-300  rounded-xl'>
            <img
            src={image}
            alt="Shoes"
            className=' w-full' />
        </figure>
        <div className="card-body">
            <h2 className="card-title">  {title}</h2>
            
            <div className='flex justify-between items-center gap-4'>
                <h2 className="card-title flex justify-center items-center text-green-400"> <img src={downloadIcon} alt="" />{downloads}</h2>
                <h2 className="card-title text-amber-600"><img src={ratingIcon} alt="" /> {ratingAvg}</h2>
            </div>
            
            
        </div>
        
    </div>
    
    );
};

export default AppCard;