import style from "./Login.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
const Login = () => {
  const [signName, setSignName] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [modal, setModal] = useState(false);
  
 

  const signHandleClick = () => {
    const getName = localStorage.getItem("UserName");
    const getPassword = localStorage.getItem("UserPassword");

    if (getName === signName && getPassword === signPassword) {
      setModal(true)
      console.log("Giriş başarılı");
    } else {
      console.log("Name yada password yanlış");
    }
  };
  

  return (
    <div className={style.userlogin__wrapper}>
      
      <div className={style.userlogin}>
        <div className={style.title}>Welcome</div>
        <div className={style.subtitle}>Sign In</div>
        <div className={style.inputcontaineric1}>
          <input
            className={style.input}
            type="text"
            placeholder="First Name"
            onChange={(event) => setSignName(event.target.value)}
          />
       
          
        </div>
        <div className={style.inputcontaineric2}>
          <input
            className={style.input}
            type="text"
            placeholder="Password"
            onChange={(event) => setSignPassword(event.target.value)}
          />
       
         
        </div>
        <button type="text" className={style.submit} onClick={signHandleClick}>
          Sign In
        </button>
      </div>
      {modal && <Modal closeModal={setModal}/>}
    </div>
  );
};

export default Login;
