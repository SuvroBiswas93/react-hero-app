import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import reviewImg from '../assets/icon-review.png';
import downloadImg from '../assets/icon-downloads.png';
import startImg from '../assets/icon-ratings.png'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    const {id}=useParams()
    const cardId =parseInt(id)
    const data=useLoaderData()

    const singleCard = data.find(card => card.id === cardId)

    const{image,title,reviews,companyName,description,downloads,ratingAvg,ratings}=singleCard

    // const[install,setInstall]=useState(false)

    // const handleClick = e =>{
    //     setInstall(true)
    // }
 
    return (
        <>
        
            <div className='flex flex-col md:flex-row  gap-7 mt-10 '>

          <div className=' bg-gray-200 flex justify-center items-center p-5 rounded-xl '>
                <img src={image} alt="" className='w-50 h-45'/>
          </div>
          <div className=' space-y-4'>
            <div className='space-y-4  '>
                <h3 className='text-4xl font-bold'>{title}</h3>
                <h3>Developed By : <span className='text-purple-500 font-bold'>{companyName}</span></h3>
            </div>
             <div className="divider"></div>
            <div className='flex justify-center items-center gap-5'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={downloadImg} alt=""className='w-6 h-6' />
                    <h3 className='tex-sm'>Downloads</h3>
                    <h3 className='font-bold text-2xl'>{downloads}</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={startImg} alt="" className='w-6 h-6' />
                    <h3 className='tex-sm'>Average Ratings</h3>
                    <h3 className='font-bold text-2xl'>{ratingAvg}</h3>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={reviewImg} alt="" className='w-6 h-6'/>
                    <h3 className='tex-sm'>Total reviews</h3>
                    <h3 className='font-bold text-2xl'>{reviews}</h3>
                </div>
            </div>

            <div className='flex justify-center md:justify-start '>
                <button 
                to='' 
                onClick=''
                className='btn bg-green-500 text-white'>
                    Install Now
                </button>
            </div>
            
          </div>
            </div>
          
           <div className="divider"></div>
          
             <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4">Ratings</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                        data={[...ratings].reverse()}
                        layout="vertical"
                       
                        >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category"/>
                        <Tooltip />
                        <Bar dataKey="count" 
                        fill="#FF8C00"
                         barSize={25}  
                         animationBegin={0}
                        animationDuration={1500}
                        animationEasing="ease-out"
                         />
                        </BarChart>
                    </ResponsiveContainer>
            </div>
           
           <div className="divider"></div>
           <div className='mb-10 space-y-3'>
            <h3 className='font-bold text-3xl '>Description</h3>
             <p className='text-justify'>{description}</p>
           </div>

        </>

       
    );
};

export default AppDetails;