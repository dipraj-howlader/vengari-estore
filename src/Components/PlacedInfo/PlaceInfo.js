import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/giphy.gif';
import './PlaceInfo.css';

const PlaceInfo = () => {


    return (
        <div className="placed">
            <h3>Congrats, We have confirmed your order</h3>
            <img src={img} alt=""/>
            <div>
            <p>Check Your all orders information Here,</p>
            <Button variant="primary"><Link style={{textDecoration:'none',color:'black'}} to="/order">Click Here</Link> </Button>{' '}
            </div>
        </div>
    );
};

export default PlaceInfo;