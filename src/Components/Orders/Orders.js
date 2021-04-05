import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import OrderDetails from "../OrderDetalis/OrderDetails";

const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [pdAllInfo, setPdAllInfo] = useState();
  useEffect(() => {
    fetch("https://guarded-ravine-35026.herokuapp.com/orderinfo")
      .then((res) => res.json())
      .then((data) => setPdAllInfo(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <h3>
        Hey <span style={{ color: "cyan" }}>{loggedInUser.Username}</span> , You
        have ordered:{" "}
      </h3>
      {pdAllInfo?.map((pd) => (
        <OrderDetails pd={pd}></OrderDetails>
      ))}
    </div>
  );
};

export default Orders;
