import React from 'react';
import {NavLink} from 'react-router-dom';

const Links = () => {

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
        <li>
            <NavLink to="/Timeclass" activestyle="active" style={{fontWeight:'bold'}} >Timeclass</NavLink>
        </li>
        <li>
            <NavLink to="/Timefunchoo" activestyle="active" style={{fontWeight:'bold'}} >Timefunchoo</NavLink>
        </li>
      </ul>
    </>
    
  );

};

export default Links;
