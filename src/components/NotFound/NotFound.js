import React from 'react';

import './NotFound.css';

const NotFound = () => {
  return (
    <main className="not-found">
      <h1 className='not-found__title'>Страница не найдена</h1>
      <p className="not-found__subtitle">404</p>
      <a href="f" className="not-found__back">Назад</a>
    </main>
  )
}

export default NotFound;