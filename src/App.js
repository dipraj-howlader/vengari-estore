import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import ManageProducts from './Components/ManageProducts/ManageProducts';

function App() {
  return (
   <Router>
     <Switch>
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
