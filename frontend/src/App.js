import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './views/Admin/Login'
//import Dashboard from './views/Admin/Home/Dashboard'
function App() {

  //const [autorizado, setAutorizado] = useState(false)
  //const [remember, setRemember] = useState(false)


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
