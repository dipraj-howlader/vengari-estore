import React from 'react';

const DisplayProducts = (props) => {
    const {name, price, image} = props.product;
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <img src={image} alt=""/>

        </div>
    );
};

export default DisplayProducts;