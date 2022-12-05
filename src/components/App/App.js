import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

import './App.css';
// TODO: temporary const for test different view of header
const loggedIn = false;

function App() {

  return (
    <div className="App">
      {/* <Header isLoggedIn={loggedIn} /> */}
      <main className='main'>
        {/* <>
        {loggedIn ? <Movies /> : <Main />}
        <Footer />
        </> */}
        {/* <Profile /> */}
        {/* <Register /> */}
        <Login />
      </main>
      {/* <NotFound /> */}
      
    </div>
  );
}

export default App;
