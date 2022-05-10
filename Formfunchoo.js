import React, { useState } from 'react';
const Formfunchoo = () => {
  const [name, setName] = useState("");
  const chName = (event) => {
    setName(event.target.value.toUpperCase());
  };
  const subData = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={subData}>
        <label>
          name:
          <input name="name" type="text" value={name} onChange={chName} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
export default Formfunchoo;
