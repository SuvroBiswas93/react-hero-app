import React from 'react';
import { Link } from 'react-router';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'

const AppCard = ({data}) => {
    const{title,image,ratingAvg,downloads,id}=data
    return (
       <Link to={`apps/appdetails/${id}`}>
            <div className="card bg-base-100  p-4  shadow-lg hover:scale-105 transition ease-in-out">
        <figure className='h-40 overflow-hidden bg-gray-300  rounded-xl'>
            <img
            src={image}
            alt="image"
            className=' w-30 h-30' />
        </figure>
        <div className="card-body">
            <h2 className="card-title">  {title}</h2>
            
            <div className='flex justify-between items-center gap-4'>
                <h2 className="card-title flex justify-center items-center text-green-400"> <img className='w-6 h-6' src={downloadIcon} alt="" />{downloads}</h2>
                <h2 className="card-title text-amber-600"><img className='w-6 h-6' src={ratingIcon} alt="" /> {ratingAvg}</h2>
            </div>
            
            
        </div>
        
           </div>
    
       </Link>
    );
};

export default AppCard;