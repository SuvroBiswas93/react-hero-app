import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';
import { useLoading } from '../Hooks/useLoading';
import Loader from '../Components/Loader';


const MainLayout = () => {
    const isLoading = useLoading()
    return (
        <div>
            
            <Navbar></Navbar>

              {isLoading?<Loader></Loader>
                
                :<>
                <Hero></Hero>
                <Banner></Banner>
                <Outlet></Outlet>
                </>
              }  
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;