import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]
p-16">
            <h3 className='text-4xl text-center font-bold text-white'>
                Trusted By Millions, Built For You
            </h3>
            <div className='flex flex-col md:flex-row justify-around items-center mt-8'>
                <div className='text-white text-center '>
                    <p className='text-sm'>Total DownLoads</p>
                    <p className='text-5xl font-bold my-3'>29.6 M</p>
                    <p className='text-sm'>21% More Than Last Month</p>
                </div>
                
                <div className='text-white text-center'>
                    <p className='text-sm'>Total Reviews</p>
                    <p className='text-5xl font-bold my-3 '>906K</p>
                    <p className='text-sm'>46% More Than Last Month</p>
                </div>
                
                <div className='text-white text-center'>
                    <p className='text-sm'>Active Apps</p>
                    <p className='text-5xl font-bold my-3'>132+</p>
                    <p className='text-sm '>31 More Will Launch</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;