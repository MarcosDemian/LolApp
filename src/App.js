import React from 'react';
import Log from './components/Log';
import Seeker from './components/Seeker';
import Home from './components/Home';
import Champs from './components/champions/Champions';
import Characters from './components/Characters';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/characters/:id' element={<Characters/>} /> 
      <Route exact path='/characters' element={<Champs/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/seeker' element={<Seeker/>} />
      <Route exact path='/' element={<Log />} />
      </Routes>
    </Router>
  );
}

export default App;
