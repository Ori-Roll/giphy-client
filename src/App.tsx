import React from 'react';
import './App.css';
import { GifAutocomplete } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">GIPHY SEARCH</header>
      <div>
        <GifAutocomplete />
      </div>
    </div>
  );
}

export default App;
