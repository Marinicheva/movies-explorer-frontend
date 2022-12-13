import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo__link">
      <img src={logo} alt="Логотип проекта" className="logo" />
    </Link>
  )
}

export default Logo