import React, { useEffect } from 'react';
import { callSearchGiphyApi } from './apiCalls';
import './App.css';

const callAPI = async () => {
  const res = await callSearchGiphyApi('cheeseburgers');
  console.log(JSON.stringify(res, null, 2));
};

function App() {
  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">GIPHY SEARCH</header>
    </div>
  );
}

export default App;
