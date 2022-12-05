import logo from '../../images/logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <a href='f' className='logo__link'>
        <img src={logo} alt='Логотип проекта' className='logo' />
      </a>
  )
}

export default Logo