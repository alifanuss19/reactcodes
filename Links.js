import React from 'react';
import {NavLink} from 'react-router-dom';

const Links = () => {

  return (

    <div>
      <ul>
        <li>
            <NavLink to="/" exact="true" activestyle={{fontWeight:'bold'}} >App</NavLink>
        </li>
        <li>
            <NavLink to="/Formclass" activestyle={{fontWeight:'bold'}}>Formclass</NavLink>
        </li>
        <li>
            <NavLink to="/Formfunchoo" activestyle={{fontWeight:'bold'}}>Formfunchoo</NavLink>
        </li>
        <li>
            <NavLink to="/Timeclass" activestyle={{fontWeight:'bold'}}>Timeclass</NavLink>
        </li>
        <li>
            <NavLink to="/Timefunchoo" activestyle={{fontWeight:'bold'}}>Timefunchoo</NavLink>
        </li>
      </ul>
    </div>
    
  );

};

export default Links;
