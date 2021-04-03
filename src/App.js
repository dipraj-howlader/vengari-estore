import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import Checkout from './Components/Checkout/Checkout';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceInfo from './Components/PlacedInfo/PlaceInfo';
export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({
      isSignedIn: false,
      Username: '',
      email: '',
      password: '',
      success:''
    });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
 <Router>
     <Switch>
       <PrivateRoute path="/placed">
      <PlaceInfo></PlaceInfo>
       </PrivateRoute>
       <Route path="/login">
         <Login></Login>
       </Route>
       <PrivateRoute path="/order">
         <Orders></Orders>
       </PrivateRoute>
       <PrivateRoute path="/checkout/:_id">
         <Checkout></Checkout>
       </PrivateRoute>
       <Route path='/manageProducts'>
      <ManageProducts></ManageProducts>
       </Route>
       <Route exact path='/'>
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/admin">
         <Admin></Admin>
       </Route>
     </Switch>
   </Router>
    </UserContext.Provider>
  
  );
}

export default App;
