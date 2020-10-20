import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Login from './views/Admin/Login'
import axios from 'axios'
import Home from './views/Admin/Home/Home'
import MisSalas from './views/Admin/Home/MisSalas'

function App() {

  const [autorizado, setAutorizado] = useState(false)
  const [remember, setRemember] = useState(false)


  useEffect(() => {
    renderizadoCondicional()
  }, [])


  function renderizadoCondicional() {

    axios
      .post("http://localhost:8080/api/admin/vigencia")
      .then(
        (response) => {
          if (response.status === 200) {
            setAutorizado(true)

            let recordar = localStorage.getItem('RECORDAR_VOTAPP_ISW')
            if (recordar === 'remember') {
              setRemember(true);
            }

          }

        }
      )
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            setAutorizado(false)
            
          }

        } else if (err.request) {

        } else {

        }
      })
  }

  return (
    <Router>
     {remember ? <Redirect to="/Home"/> :""}
      <Switch>
        <Route path='/Home' >
          {autorizado ? <Home/> : <Login />}
        </Route>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/missalas'>
          {autorizado ? <MisSalas /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
