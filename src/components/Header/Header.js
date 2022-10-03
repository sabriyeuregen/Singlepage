import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.Header}>
      <Navigation />
    </div>
  );
};

export default Header;
