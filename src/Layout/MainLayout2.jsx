import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Loader from '../Components/Loader';
import { useLoading } from '../Hooks/useLoading';

const MainLayout2 = () => {
    const isLoading = useLoading()
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 px-2 lg:px-10 '>
                {
                    isLoading ? <Loader></Loader> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout2;