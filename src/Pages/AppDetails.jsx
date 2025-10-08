import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id}=useParams()
    const cardId =parseInt(id)
    const data=useLoaderData()

    const singleCard = data.find(card => card.id === cardId)

    const{image,title,reviews,companyName,description}=singleCard
 
    return (
        <div>
           <img src={image} alt="" />
        </div>
    );
};

export default AppDetails;