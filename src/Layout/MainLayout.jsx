import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';

const MainLayout = () => {
    return (
        <div>
            <div className=''>
                <Navbar></Navbar>
            </div>
            <Hero></Hero>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;