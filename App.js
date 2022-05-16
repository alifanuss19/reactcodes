import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {useNavigate,useParams,useLocation} from 'react-router-dom';
import * as QueryString from 'query-string';
import logo from './logo.svg';
import './App.css';
import Formclass from './Formclass';
import Formfunchoo from './Formfunchoo';
import Timeclass from './Timeclass';
import Timefunchoo from './Timefunchoo';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Routes>
      <Route path="/Formclass" element={<Formclass/>}/>
      <Route path="/Formfunchoo" element={<Formfunchoo/>}/>
      <Route path="/Timeclass" element={<Timeclass/>}/>
      <Route path="/Timefunchoo" element={<Timefunchoo/>}/>
    </Routes>
    </>
  );
};

export default App;
