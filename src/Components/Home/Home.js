import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const [products, setProducts] =useState([])
    useEffect(() => {
        fetch('http://localhost:5055/products')
    .then(res => res.json())
    .then (data => setProducts(data))
    }, [])
    return (
        <div className="home">
            <div>
            <Header></Header>
            </div>
            <div className="display">
                {
                    products.map(product => <DisplayProducts product={product} ></DisplayProducts>)
                }
            </div>
            
        </div>
    );
};

export default Home;