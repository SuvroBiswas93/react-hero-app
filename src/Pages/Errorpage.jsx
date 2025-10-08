import React from 'react';
import { useRouteError } from 'react-router';

const Errorpage = () => {
    const error =useRouteError()
    return (
         <>
            <Navbar />
            <div>{error.message}</div>
            <Footer />
        </>
    );
};

export default Errorpage;