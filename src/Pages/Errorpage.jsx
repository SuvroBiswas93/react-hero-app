import React from 'react';
import { useNavigate, useRouteError } from 'react-router';

const Errorpage = () => {
    const error =useRouteError()
    const navigate = useNavigate()
    return (
         <>
            <Navbar />
            <div>{error.message}</div>
            <Footer />
        </>
    );
};

export default Errorpage;