import React from 'react';
import Links from './Links';

const Layouts = (props) => {
  
  const {children}=props;

  return (

    <div>
      <Links/>
    <div>
      {children}
    </div>
    </div>
    
  );

};

export default Layouts;
