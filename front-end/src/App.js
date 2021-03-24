import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [apiResponse, changeAPIResponse] = useState([]);

  function callAPI() {
    fetch("http://localhost:5000")
        .then(res => res.text())
        .then(
          res => {changeAPIResponse(res);
          console.log("changed API")});
    return apiResponse;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick = {() =>{console.log("button clicked"+callAPI())}}>
          Update
        </button>
        <p>
          {apiResponse}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
