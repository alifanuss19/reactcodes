import React, { useState,memo } from 'react';
//three & perfect
import { useForm } from 'react-hook-form';
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
  const {register,handleSubmit,watch,formState:{errors},reset} = useForm(
    {defaultValues:{yname:"your name"}}
  );
  // useEffect(() => {
    
  //   return () => {
  //     reset();
  //   }},[]
  // );
  const subMithandle = (sdata) => {
    console.log(sdata);
    console.log(watch("yname"));
  };
  return (
    <>
      <form onSubmit={
        //one & bad
        // subData
        //two & good
        // subMit
        //three & perfect
        handleSubmit(subMithandle)
      }>
        <label>
          name:
          {/* one & bad */}
          {/* <input name="name" type="text" value={name} onChange={chName} /> */}
          {/* two & good */}
          {/* <input name="name" type="text" /> */}
          {/* three & perfect */}
          <input {...register(
            "yname",{required:true,minLenght:5,pattern:/\d+/
            })}
          />
          {errors.yname&&<small>please,fill</small>}
          {errors.yname&&<small>please,fill with 5 charachter</small>}
          {errors.yname&&<small>please,fill with numbers</small>}
        </label>
        {/* <input name="submit" type="submit" value="submit" /> */}
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default memo(Formfunchoo);
