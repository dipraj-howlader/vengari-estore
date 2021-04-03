import React from 'react';
import { Link } from 'react-router-dom';

const PlaceInfo = () => {


    return (
        <div style={{color:'blue'}}>
            <h1>Order Placed</h1>
            <Link to="/order">Order info</Link>
        </div>
    );
};

export default PlaceInfo;