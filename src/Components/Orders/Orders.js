import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div >
            <h1>Hey, <span style={{color:'blue'}}>{loggedInUser.Username}</span> your orders are:</h1>
            <br/>
            <h1>This </h1>
        </div>
    );
};

export default Orders;