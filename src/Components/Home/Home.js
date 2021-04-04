import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import Header from '../Header/Header';
import './Home.css';
import Spinner from 'react-bootstrap/Spinner'

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
            <div >
               <div  style={{textAlign:'center'}} >
               {
                    products.length===0  && <Spinner animation="border" /> 
                }
               </div>
                <div className="display">
                {
                    products.map(product => <DisplayProducts product={product} ></DisplayProducts>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default Home;