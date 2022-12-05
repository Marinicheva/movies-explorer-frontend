import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';

import './App.css';
// TODO: temporary const for test different view of header
const loggedIn = true;

function App() {

  return (
    <div className="App">
      <Header isLoggedIn={loggedIn} />
      <main className='main'>
        {/* {loggedIn ? <Movies /> : <Main />} */}
        <Profile />
      </main>
      <Footer />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
