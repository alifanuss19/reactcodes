import React, { useState } from 'react';
const Timefunchoo = () => {
  const [timeis, setTimeis] = useState(new Date().toLocaleTimeString());
  times = () => {
    setTimeis(new Date().toLocaleTimeString());
    //clearInterval(timesID);
  };
  //const timesID = setInterval(times, 1000);
  return (
    <div onClick={times}>time is
      {' ' + timeis}
    </div>
  );
};
export default Timefunchoo;
