import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const OrderDetails = (props) => {
    const {Username, email, Pid, Pname, Pprice,date} = props.pd
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    if(loggedInUser.email === email)
        return(
            <h1>{Pname}</h1>
        )
    return (
        <div>
            
        </div>
    );
};

export default OrderDetails;