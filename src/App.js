// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Portfolio" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    /* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */
    // </div>
  );
}

export default App;
