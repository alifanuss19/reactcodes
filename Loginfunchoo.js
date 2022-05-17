import React, { memo } from 'react';
import { useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import sweetAlert from 'sweetalert';
const Loginfunchoo = () => {
  const location = useLocation();
  const {register,handleSubmit,watch,formState:{errors},reset} = useForm(
    {defaultValues:{email:"",password:""}}
  );
  // useEffect(() => {
    
  //   return () => {
  //     reset();
  //   }},[]
  // );
  const subMithandle = (sdata) => {
    if (sdata.email=="a@gmail.com" && sdata.password=="a") {
      const user = {
        userId : 'uuid',
        //guid
        userName : sdata.email,
        userPass : sdata.password,
        token:'./a,gerjoihjthmskjsghjkgnazqmfgdmnbj,.fjn/.,/oil.;'
      };
      sweetAlert({
        title: "it is your email & sendinfo ?",
        text: sdata.email,
        icon: "warning",
        buttons: true,
        dangerMode: true
      })
      .then(
        (sdata) => {
          if (sdata) {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.reload();
          };
        },
        (error) => {
          if (!sdata) {
            alert("error or cancelled submit");
          }
        },);
    }else{
        setTimeout(() => {
          console.log(sdata);
          console.log(watch("email"));
          console.log(watch("password"));
        }, 500);
      };
  };
  return (
    <>
      <form onSubmit={
        handleSubmit(subMithandle)
      }>
        <label>
          email:
          <input type="email" {...register(
            "email",{required:true,minLenght:11,pattern:
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
          />
          {errors.email&&<small>please,fill</small>}
          {errors.email&&<small>please,fill with 11 charachter</small>}
          {errors.email&&<small>please,fill with email</small>}
        </label>
        <label>
          password:
          <input type="password" {...register(
            "password",{required:true,minLenght:5
            })}
          />
          {errors.password&&<small>please,fill</small>}
          {errors.password&&<small>please,fill with 5 charachter</small>}
        </label>
        {/* <input name="submit" type="submit" value="submit" /> */}
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default memo(Loginfunchoo);
