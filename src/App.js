import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MyProfile from "./pages/MyProfile/MyProfile";
import UserLogin from "./pages/UserLogin/UserLogin";
import UserRegister from "./pages/UserRegister/UserRegister";
import Navigation from "./components/Navigation/Navigation";



const App = () => {
  //pages componentleri toplayan sayfalar
  //path url kısmındaki yol,element component
  //browser router projenin kapsayıcısında olmalı

  return (<div>
    <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
    <Route path="/" element={<UserRegister />} />
    <Route path="/userlogin" element={<UserLogin />} />
    <Route path="/myprofile" element={<MyProfile />} />
  </Routes>
  
  </BrowserRouter>
  </div>
   ) 
 
  };

export default App;
