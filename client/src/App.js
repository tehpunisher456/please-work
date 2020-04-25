import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./components/screens/Home";
import Profile from "./components/screens/Profile";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route path = "/">
      <Home></Home>
    </Route>
    <Route path = "/profile">
      <Profile></Profile>
    </Route>
    <Route path = "/Login">
      <Login></Login>
    </Route>
    <Route path = "/Signup">
      <Signup></Signup>
    </Route>
    </BrowserRouter>
    
  );
}

export default App;
