import Topbar from './Components/Topbar/Topbar';
import Main from './Components/Main/Main';
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
    <div>
        <Topbar />
        <Main />
        <button onClick = {() =>{console.log("button clicked"+callAPI())}}>
          Update
        </button>
        <p>
          {apiResponse}
        </p>
    </div>
  );
}

export default App;