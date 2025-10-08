import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredItem, removeItemfromStore } from '../utilities/localStorage';
import InstallCard from '../Components/InstallCard';
import Swal from 'sweetalert2';

const AppList = () => {
    const [appList,setAppList] = useState([])
    const [sort ,setSort] = useState('')
    const data = useLoaderData() 
    useEffect(()=>{
        const storedAppData = getStoredItem()
        const covertedStoredAppData = storedAppData.map(item => parseInt(item))
        const myAppList = data.filter(app => covertedStoredAppData.includes(app.id))
        setAppList(myAppList)
    },[data])
     if (!appList.length) return <p>No Data Available</p>

      const sortedList = (() => {
        if (sort === 'High-Low') {
        return [...appList].sort((a, b) => b.downloads - a.downloads);
        } else if (sort === 'Low-High') {
        return [...appList].sort((a, b) => a.downloads - b.downloads);
        } else {
        return appList;
        }
    })();

    const handleRemove = (id) => {
            Swal.fire({
                title: "Drag me!",
                icon: "success",
                draggable: true
                });
         removeItemfromStore(id)
         setAppList(prev => prev.filter(p => p.id !== id))
  }

    return (
        <div>
            <div className='text-center mt-10 space-y-2'>
                <h3 className='font-bold text-3xl'>Your Installed Apps</h3>
                <h3 className='text-gray-400'>Explore All Trending Apps On The Market Developed By Us</h3>
            </div>
             <div className='flex flex-col lg:flex-row justify-between space-y-4 py-5 items-center'>
                <h1 className='text-xl font-semibold'>
                {appList.length} Apps Found
                </h1>

                
                <label className='form-control  w-[2/3] max-w-xs border-2 border-purple-400 text-purple-700'>
                <select
                    className='select select-bordered'
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                >
                    <option value='none'>Sort By DownLoads</option>
                    <option value='High-Low'>High-&gt;Low</option>
                    <option value='Low-High'>Low-&gt;High</option>
                </select>
                </label>

             </div>
             <div>
                {
                    sortedList.map((item) =><InstallCard
                    key={item.id} 
                    item={item}
                    onRemove={() => handleRemove(item.id)}
                    >

                    </InstallCard>)
                }
             </div>
        </div>
    );
};

export default AppList;