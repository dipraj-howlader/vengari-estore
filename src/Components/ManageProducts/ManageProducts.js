import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router';

const ManageProducts = () => {
    const [manageProduct, setManageProducts] =useState([])
    useEffect(() => {
        fetch('http://localhost:5055/products')
    .then(res => res.json())
    .then (data => setManageProducts(data))
    }, [])
    const history = useHistory();
    const deleteProduct =(id)=>{

           fetch(`http://localhost:5055/delete/${id}`,{
               method:'DELETE'
           })
           .then(res => res.json())
           .then(result => {
               console.log(result);
              
           })
           Redirect('/manageProducts')
    }
    return (
        <div>
            {
                manageProduct.map(pd => (
                    <div>
                        Name : {pd.name}
                        price :{pd.price}
                        <button onClick={()=> deleteProduct(pd._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageProducts;