import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => {
  return (
    <div className="nav-tab">
      <Link to="/signup" className="nav-tab__link nav-tab__link_signup">Регистрация</Link>
      <Link to="/signin" className="nav-tab__link nav-tab__link_signin">Войти</Link>
    </div>
  )
}

export default NavTab