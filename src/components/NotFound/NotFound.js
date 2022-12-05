import { useNavigate } from "react-router-dom";

import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClickGoBack = () => {
    navigate(-1);
  }
  
  return (
    <section className="not-found">
      <h1 className='not-found__title'>Страница не найдена</h1>
      <p className="not-found__subtitle">404</p>
      <button className="not-found__back" onClick={handleClickGoBack}>Назад</button>
    </section>
  )
}

export default NotFound;