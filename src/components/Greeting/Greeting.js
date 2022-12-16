import Logo from '../Logo/Logo';

import './Greeting.css';

const Greeting = ({ title }) => {
  return (
    <div className="greeting">
      <Logo />
      <h1 className="greeting__title">{title}</h1>
    </div>
  )
}

export default Greeting