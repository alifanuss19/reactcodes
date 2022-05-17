import React from 'react';
import ReactDOM from 'react-dom/client';
//HashRouter => .../#/...
//MemoryRouter => ...(hide)
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './index.css';
import Layout from './Layouts';
import PrivateRoute from './PrivateRoute';
import Loginfunchoo from './Loginfunchoo';
import UsersPosts from './UsersPosts';
import CategoriesList from './CategoriesList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
      </Layout>
      <Routes>
        <Route path="*" element={<PrivateRoute/>}/>
        <Route path="/Loginfunchoo" exact element={<Loginfunchoo/>}/>
        <Route path="/UsersPosts" exact element={<UsersPosts/>}/>
        <Route path="/CategoriesList" exact element={<CategoriesList/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
