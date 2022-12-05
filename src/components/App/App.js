import { Routes, Route } from 'react-router-dom';

import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

import './App.css';
// TODO: temporary const for test different view of header
function App() {

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        {/* <Route path='/saved-movies' /> */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
