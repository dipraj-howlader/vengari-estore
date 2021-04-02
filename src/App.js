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

function App() {

  return (
   <Router>
     <Switch>
       <Route path="/order">
         <Orders></Orders>
       </Route>
       <Route path="/checkout/:_id">
         <Checkout></Checkout>
       </Route>
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
  );
}

export default App;
