import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css'
import Header from '../Header/Header';
import { Button } from 'react-bootstrap';


const Checkout = () => {
    const {_id} = useParams();
    const pdId = _id;

    const [orderedProduct, setOrderedProduct] =useState([])
    useEffect(() => {
        fetch('http://localhost:5055/products')
    .then(res => res.json())
    .then (data => setOrderedProduct(data))
    }, [])
   const pdFound = () => {
    for (let i = 0; i < orderedProduct.length; i++) {
        const pd = orderedProduct[i];
        if(pd._id===pdId){
            return(
            <div>
                <div>
                <Header></Header>
                </div>
                <div className="checkoutPd">
                    <h1>Check Out Description</h1>
                   <h2> Name: {pd.name}</h2>
                    <h4>price: ${pd.price}</h4>
                </div>
            </div>
            )
        }
        
    }
   }
    return (
        <div>
           <div>
           {pdFound()}
           </div>
           <div>
           <Button variant="warning"> Place order </Button>{' '}
           </div>
        </div>
    );
};

export default Checkout;