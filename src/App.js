import React,{Component} from "react";
import {Switch,Route} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default'; 

class App extends Component {
  render(){
   return (
    <React.Fragment>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component={ProductList}></Route> 
            <Route path='/Details' component={Details}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route component={Default}></Route>
          </Switch>
    </React.Fragment>        
  )
 }
}

export default App;
