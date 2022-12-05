import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = () => {
  return (
    <div className='nav__tab'>
      <Link to="/signup" className="nav__link nav__link_signup">Регистрация</Link>
      <Link to="/signin" className="nav__link nav__link_signin">Войти</Link>
    </div>
  )
}

export default NavTab