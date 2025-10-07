import React from 'react';
import heroImg from '../assets/hero.png'
import gplayImg from '../assets/gplay.png'
import iImg from '../assets/applestore.png'

const Hero = () => {
    return (
        <div className='bg-gray-200 flex flex-col justify-center items-center md:px-10  '>
            <div className='space-y-4 mt-10'>
                <div className='text-center text-5xl font-extrabold space-y-3 ' >
                    <h3 className=''>We Build</h3>
                    <h3><span className='text-purple-600 text-6xl'>Productive</span> Apps</h3>
                </div>
                <div>
                    <p className='text-center text-gray-600 max-w '>At HEROAPP, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex justify-center items-center gap-2 mb-4'>
                    <button className='btn font-bold'>
                        <img src={gplayImg} alt="" />
                         Google Play
                         </button>
                    <button className='btn font-bold'>
                        <img src={iImg} alt="" />
                        App Store
                        </button>
                </div>
            </div>
            <div className='flex justify-center items-center px-2 md:px-10'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;