import axios from "axios";
import React from "react";
import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import OptionalNavbar from "../OptionalNavbar/OptionalNavbar";
import "./Admin.css";

const Admin = () => {
  const [imageURL, setImageURL] = useState(null);

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      image: imageURL,
    };
    fetch("https://guarded-ravine-35026.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side responsed"));

  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "9885cca864e257079be6cd6b1b434082");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setImageURL(res.data.data.display_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <OptionalNavbar></OptionalNavbar>
      </div>
      <div className="admin">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="name" placeholder="Product name" ref={register} />
          <br />
          <input name="price" placeholder="Price" ref={register} />
          <br />
          <input type="file" name="photo" onChange={handleImageUpload} id="" />
          <br />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Admin;
