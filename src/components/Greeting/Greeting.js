import logo from '../../images/logo.png';
import './Greeting.css';

const Greeting = ({ title }) => {
  return (
    <div className="greeting">
      <a href='f' className='logo__link'>
        <img src={logo} alt='Логотип проекта' className='logo' />
      </a>
      <h1 className='greeting__title'>{title}</h1>
    </div>
  )
}

export default Greeting