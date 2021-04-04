import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/giphy.gif';
import './PlaceInfo.css';

const PlaceInfo = () => {


    return (
        <div className="placed">
            <img src={img} alt=""/>
            <Button variant="primary"><Link style={{textDecoration:'none',color:'black'}} to="/order">Check Your All Orders Info </Link> </Button>{' '}
        </div>
    );
};

export default PlaceInfo;