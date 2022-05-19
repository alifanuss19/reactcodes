import React from 'react';
import {NavLink} from 'react-router-dom';

const Links = () => {
  const userInfo=JSON.parse(localStorage.getItem('user'));

  return (

    <>
      <ul>
        <li>
            <NavLink to="/" exact="true" activestyle="active" style={{fontWeight:'bold'}} >App</NavLink>
        </li>
        <li>
            <NavLink to="/Formclass" activestyle="active" style={{fontWeight:'bold'}} >Formclass</NavLink>
        </li>
        <li>
            <NavLink to="/Formfunchoo" activestyle="active" style={{fontWeight:'bold'}} >Formfunchoo</NavLink>
        </li>
        {userInfo?"":
        <li>
            <NavLink to="/Loginfunchoo" activestyle="active" style={{fontWeight:'bold'}} >Loginfunchoo</NavLink>
        </li>        
        }
        <li>
            <NavLink to="/Timeclass" activestyle="active" style={{fontWeight:'bold'}} >Timeclass</NavLink>
        </li>
        <li>
            <NavLink to="/Timefunchoo" activestyle="active" style={{fontWeight:'bold'}} >Timefunchoo</NavLink>
        </li>
        <li>
            <NavLink to="/UsersPosts" activestyle="active" style={{fontWeight:'bold'}} >UsersPosts</NavLink>
        </li>
        <li>
            <NavLink to="/CategoriesList" activestyle="active" style={{fontWeight:'bold'}} >CategoriesList</NavLink>
        </li>
        <li>
            <NavLink to="/ADiagram" activestyle="active" style={{fontWeight:'bold'}} >ADiagram</NavLink>
        </li>
      </ul>
    </>
    
  );

};

export default Links;
