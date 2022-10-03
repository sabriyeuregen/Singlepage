import style from "./Register.module.css";
import { useState } from "react";

const Register = () => {

  const[userName,setUserName]=useState("");
  const[userPassword,setUserPassword]=useState("");
  const[userEmail,setUserEmail]=useState("");

  const handleClick = () => {
     
    localStorage.setItem('UserName', userName);
    localStorage.setItem('UserPassword', userPassword);
    localStorage.setItem('UserEmail', userEmail);

  }


  return (
    <div className={style.userregister__wrapper}>                       
    <div className={style.userregister}>
      <div className={style.title}>Welcome</div>
      <div className={style.subtitle}>Let's create your account!</div>
      <div className={style.inputcontaineric1}>
      <label  className={style.placeholder}>First name</label>
        <input className={style.input} type="text" placeholder=" "  onChange={(event) => setUserName(event.target.value)}/>
        <div ></div>
        
      </div>
      <div className={style.inputcontaineric2}>
      <label className={style.placeholder}>Password</label>
        <input  className={style.input} type="text" placeholder=" "  onChange={(event) => setUserPassword(event.target.value)}/>
        <div ></div>
        
      </div>
      <div className={style.inputcontaineric2}>
      <label  className={style.placeholder}>Email</label>
        <input className={style.input} type="text" placeholder=" "  onChange={(event) => setUserEmail(event.target.value)}/>
        <div className="cut cut-short"></div>
        
      </div>
      <button type="text" className={style.submit} onClick={handleClick}>Create</button>
    </div>
    </div> 
  )
}

export default Register