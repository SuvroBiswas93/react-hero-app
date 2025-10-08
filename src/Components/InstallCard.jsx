import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'

const InstallCard = ({item,onRemove}) => {
    console.log(item)
    console.log(onRemove)

    const{title,downloads,ratingAvg,image}=item

    return (
        <div className='flex justify-between items-center space-y-2 mb-6 bg-white shadow-2xl px-6 py-2 rounded-xl'>
           <div className='flex justify-center items-center gap-4'>
                <div>
                    <img src={image} alt={title} className='w-14 h-14 p-2 rounded bg-gray-400' />
                </div>
                <div className='flex-col space-y-1 justify-center items-center'>
                    <h3 className='font-bold text-xl ml-4'>{title}</h3>
                    <div className='flex gap-4 items-center'>
                       <h3 className='flex gap-1 items-center text-sm text-green-500'><img src={downloadImg} className='w-4 h-4' alt="" />{downloads} </h3>
                       <h3 className='flex gap-1 items-center tex-sm text-amber-500'><img src={ratingImg} className='w-4 h-4' alt="" /> {ratingAvg} </h3>
                        
                    </div>
                </div>
           </div>
           <div>
                <button className='btn bg-green-400 hover:bg-green-600 text-white'onClick={onRemove}>Unistall</button>
           </div>
        </div>
    );
};

export default InstallCard;