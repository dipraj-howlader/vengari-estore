import { Button } from 'react-bootstrap';
import React from 'react';import './DisplayProducts.css';
import { useHistory } from 'react-router';


const DisplayProducts = (props) => {
    const history = useHistory();
    const {name, price, image, _id} = props.product;
    
    const handleCheckOut = (id) => {
        history.push(`/checkout/${id}`);
    }
    return (
        
        <div className="displayProducts">
 
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <div className="innerfix">
                <h5>${price}</h5>
                <Button onClick={() => handleCheckOut(_id)} variant="success"> Buy Now </Button>{' '}
            
            </div>
        </div>
    );
};

export default DisplayProducts;