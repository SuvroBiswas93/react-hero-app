import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from './AppCard';

const Home = () => {
    const appData = useLoaderData()
    console.log(appData)
     const homePageData = appData.slice(0,8)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-10 my-10'>
               {
                    homePageData.map((data,id) =><AppCard key={id} data={data}></AppCard>)
               }
            </div>

            <div className='py-8 grid place-items-center'>
                <Link to='/apps' className='btn bg-purple-500'>Show All the Card</Link>
            </div>
            
        </div>
        
    );
};

export default Home;