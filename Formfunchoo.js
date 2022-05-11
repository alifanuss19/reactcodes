import React, { useState } from 'react';
const Formfunchoo = () => {
  //one & bad
  // const [name, setName] = useState("");
  // const chName = (event) => {
  //   setName(event.target.value.toUpperCase());
  // };
  // const subData = (event) => {
  //   event.preventDefault();
  // };
  //two & good
  const subMit = event => {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(form.get("name"));
  };
  return (
    <>
      <form onSubmit={
        //one & bad
        //subData
        //two & good
        subMit
      }>
        <label>
          name:
          {/* one & bad */}
          {/* <input name="name" type="text" value={name} onChange={chName} /> */}
          {/* two & good */}
          <input name="name" type="text" />
        </label>
        {/* <input name="submit" type="submit" value="submit" /> */}
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default Formfunchoo;
