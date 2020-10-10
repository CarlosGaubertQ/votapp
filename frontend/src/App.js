import React, { useState, useEffect} from 'react';
import './App.css';
import {Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from './views/Login'
function App() {

  const [autorizado, setAutorizado] = useState(false)
  const [remember, setRemember] = useState(false)


  return (
    <Router>
        {//falta algo//
        }
      <Switch>
          <Route path='/Home' >
              <div><h1>hola mundo</h1></div>
          </Route>
          <Route path='/'>
              <Login/>
          </Route>
          
      </Switch>
    </Router>
  );
}

export default App;
