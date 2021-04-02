import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {
    const {_id} = useParams();
    const pdId = _id;

    const [orderedProduct, setOrderedProduct] =useState([])
    useEffect(() => {
        fetch('http://localhost:5055/products')
    .then(res => res.json())
    .then (data => setOrderedProduct(data))
    }, [])
    
    return (
        <div>
            {
                orderedProduct.map(pd => {
                    if(pd._id=== pdId){
                        <div>
                            {
                                pd.name
                            }
                        </div>
                    }
                })
            }
        </div>
    );
};

export default Checkout;