import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Логотип проекта" className="logo__img" />
    </Link>
  )
}

export default Logo