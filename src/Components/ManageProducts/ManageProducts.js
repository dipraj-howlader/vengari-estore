import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Spinner } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import './ManageProducts.css';
import OptionalNavbar from "../OptionalNavbar/OptionalNavbar";

const ManageProducts = () => {
  const [manageProduct, setManageProducts] = useState([]);
  useEffect(() => {
    fetch("https://guarded-ravine-35026.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, []);
  const history = useHistory();
  
  const deleteProduct = (id) => { 
    fetch(`https://guarded-ravine-35026.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

  };
  return (
    <div>
        <div>
       <OptionalNavbar></OptionalNavbar>
        </div>

        <div>{
            
            manageProduct.length === 0 && <Spinner animation="border" /> 
            }
      {
      manageProduct.map((pd) => (
        <div className="mnpd">
          <div>
         <h3> Name : {pd.name}</h3>
          <h4>price :$ {pd.price}</h4>
          </div>
          <Button onClick={() => deleteProduct(pd._id)} variant="outline-danger">Delete</Button>{' '}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ManageProducts;
