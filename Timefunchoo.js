import React, { memo , useState , useEffect } from 'react';
const Timefunchoo = () => {
  const [timeis, setTimeis] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timesID = setInterval(times, 1000);
    return () => {
      clearInterval(timesID);
    }
  }, [timeis]);
  const times = () => {
    setTimeis(new Date().toLocaleTimeString());
  };
  return (
    <div onClick={times}>time is
      {' ' + timeis}
    </div>
  );
};
export default memo(Timefunchoo);
