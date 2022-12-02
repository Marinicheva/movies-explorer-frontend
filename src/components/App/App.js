import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

import './App.css';
  // TODO: temporary const for test different view of header
  const loggedIn = true;

function App() {

  return (
    <div className="App">
      <Header isLoggedIn={loggedIn} />
      { loggedIn ? <Movies /> : <Main /> }
      <Footer />
    </div>
  );
}

export default App;
