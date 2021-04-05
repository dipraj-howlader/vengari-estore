import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './OrderDetails.css'

const OrderDetails = (props) => {
    const {Username, email, Pid, Pname, Pprice,date} = props.pd
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if(loggedInUser.email === email)
        return(
        <div className="order">
          <h4> {Pname}</h4>
           <h6>Cost: ${Pprice}</h6>
          Order Time: {date}
        </div>
        )
 
    return (
        <div>
           
        </div>
    );
};

export default OrderDetails;