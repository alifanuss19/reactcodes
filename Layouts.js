import React from 'react';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Links from './Links';

const Layouts = (props) => {

  const location = useLocation();
  
  const userInfo=JSON.parse(localStorage.getItem('user'));

  const gologOut=()=>{
    if(userInfo){
      localStorage.clear();
      window.location.reload();
    };
  };

  const {children}=props;

  return (

    <>
    <div>
      {userInfo != null ? userInfo.userName : null}
    </div>
      <Links/>
    <div>
      {userInfo?<button onClick={gologOut}>logOut</button>:""}
    </div>
    <div>
      {children}
    </div>
    </>
    
  );

};

export default Layouts;

Layouts.propTypes={
  children:PropTypes.array.isRequired
};

Layouts.defaultProps={
  children:[]
};
