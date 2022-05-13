import React from 'react';
import PropTypes from 'prop-types';
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

Layouts.propTypes={
  children:PropTypes.array.isRequired
};

Layouts.defaultProps={
  children:[]
};
