import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Checkout.css'
import Header from '../Header/Header';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Checkout = () => {
    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {_id} = useParams();
    const pdId = _id;

    const [orderedProduct, setOrderedProduct] =useState([])
    useEffect(() => {
        fetch('http://localhost:5055/products')
    .then(res => res.json())
    .then (data => setOrderedProduct(data))
    }, [])



let orderinfo = '';

   const pdFound = () => {
    for (let i = 0; i < orderedProduct.length; i++) {
        const pd = orderedProduct[i];
        if(pd._id===pdId){
            const date = new Date ().toDateString('dd/MM/yyyy');
            let RID ={...pd} 
             RID={
                Pid: pd._id,
                Pname: pd.name,
                Pprice: pd.price,

            }

           orderinfo = {...loggedInUser, ...RID, date};

            return(
            <div>
                <div>
                <Header></Header>
                </div>
                <div className="checkoutPd">
                    <h1>Check Out</h1>
                   <h2> Product Name : {pd.name}</h2>
                    <h4>Price: ${pd.price}</h4>
                </div>
            </div>
            )
        }
        
    }
   }

   const goToPlaceOrder =() =>{
   
      const productData = {...orderinfo};
      console.log('got o place', productData);

    fetch('http://localhost:5055/order' ,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(res => console.log('server side responsed') )


history.push('/placed');

}

    return (
        <div>
           <div>
           {pdFound()}
           </div>
           <div className="checkOutBtn">
           <Button onClick={goToPlaceOrder} variant="warning"> Place Order </Button>{' '}
           </div>
        </div>
    );
};

export default Checkout;