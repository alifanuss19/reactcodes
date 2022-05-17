import React, { useState, useRef, memo } from 'react';
//three & perfect
import { useForm } from 'react-hook-form';
import sweetAlert from 'sweetalert';
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
  // const subMit = event => {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   console.log(form.get("name"));
  // };
  //three & perfect
  // const {register,handleSubmit,watch,formState:{errors},reset} = useForm(
  //   {defaultValues:{yname:"your name"}}
  // );
  // useEffect(() => {

  //   return () => {
  //     reset();
  //   }},[]
  // );
  // const subMithandle = (sdata) => {
  //   sweetAlert({
  //     title: "sendinfo",
  //     text: "sendInfo",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //     buttons: ["cacel", "send"]
  //   })
  //   .then((sdata) => {
  //     if (sdata) {
  //       console.log(sdata);
  //       console.log(watch("yname"));
  //     }
  //   });
  // };
  const [nameref, setNameref] = useState([]);
  const refValue = useRef();
  const refFunc = () => {
    if (refValue.current.value == "") {
      alert("please fill");
      refValue.current.focus();
      return;
    };
    setNameref([...nameref, refValue.current.value]);
    refValue.current.value = "";
    refValue.current.focus();
  };
  return (
    <>
      {/* <form></form> */}
      {/* // onSubmit={ */}
      {/* //   //one & bad
      //   // subData
      //   //two & good
      //   // subMit
      //   //three & perfect
      //   // handleSubmit(subMithandle)
      // } */}
      {/* <label>
          name: */}
      {/* one & bad */}
      {/* <input name="name" type="text" value={name} onChange={chName} /> */}
      {/* two & good */}
      {/* <input name="name" type="text" /> */}
      {/* three & perfect */}
      {/* <input {...register(
            "yname",{required:true,minLenght:5,pattern:/\d+/
            })}
          />
          {errors.yname&&<small>please,fill</small>}
          {errors.yname&&<small>please,fill with 5 charachter</small>}
          {errors.yname&&<small>please,fill with numbers</small>}
        </label> */}
      {/* <input name="submit" type="submit" value="submit" /> */}
      {/* <button type="submit">submit</button> */}
      <input name="refValue" type="text" ref={refValue} />
      <button onClick={refFunc}>refFunc</button>
      {nameref}
    </>
  );
};
export default memo(Formfunchoo);
