import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import "./App.css";
import MyProfile from "./pages/MyProfile/MyProfile";
import UserLogin from "./pages/UserLogin/UserLogin";
import UserRegister from "./pages/UserRegister/UserRegister";
import RootLayout from './pages/RootLayout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route path="/userregister" element={<UserRegister />} />
    <Route path="/userlogin" element={<UserLogin />} />
    <Route path="/myprofile" element={<MyProfile />} />
    </Route>
  )
);


const App = () => {
  //pages componentleri toplayan sayfalar
  //path url kısmındaki yol,element component
  //browser router projenin kapsayıcısında olmalı

  return   <RouterProvider router={router} />;
 
  };

export default App;
