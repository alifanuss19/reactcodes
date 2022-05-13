import React from 'react';
import ReactDOM from 'react-dom/client';
//HashRouter => .../#/...
//MemoryRouter => ...(hide)
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './index.css';
import Layout from './Layouts';
import App from './App';
import Formclass from './Formclass';
import Formfunchoo from './Formfunchoo';
import Timeclass from './Timeclass';
import Timefunchoo from './Timefunchoo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
      </Layout>
      <Routes>
        <Route path="/" exact element={<App/>}/>
        <Route path="/Formclass" element={<Formclass/>}/>
        <Route path="/Formfunchoo" element={<Formfunchoo/>}/>
        <Route path="/Timeclass" element={<Timeclass/>}/>
        <Route path="/Timefunchoo" element={<Timefunchoo/>}/>
        <Route path="*" element={<App/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
