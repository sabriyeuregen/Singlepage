import {NavLink} from "react-router-dom"
import "./Navigation.css"
const Navigation = () => {
  //to gidilmesi istenilen link,link sayfanın render edilmemesini sağlar
  //navlinkin avantajı active menuye class verilir,data default gelir

  const isActiveMenu = (data) => {
    return data.isActive ? "-active" : "";
  };

 
    return (
    <nav>
     
     <NavLink to="/userregister" className={isActiveMenu}>UserRegister</NavLink>
    <NavLink to="/userlogin" className={isActiveMenu}>UserLogin</NavLink>
    <NavLink to="/myprofile" className={isActiveMenu}>MyProfile</NavLink>
    </nav>
  )
}

export default Navigation