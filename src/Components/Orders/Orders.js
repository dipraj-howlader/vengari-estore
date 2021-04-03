import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetalis/OrderDetails';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [pdAllInfo, setPdAllInfo] = useState();
    useEffect(() =>{
        fetch('http://localhost:5055/orderinfo')
        .then(res=> res.json())
        .then( data => setPdAllInfo(data));
    }, [])


    return (
       <div>
        {
            pdAllInfo?.map(pd => <OrderDetails pd={pd}></OrderDetails>)
        }
       </div>
    );
};

export default Orders;