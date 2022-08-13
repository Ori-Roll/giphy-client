import React from 'react';
import './App.css';
import { GifLister } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ViewPage } from './components/ViewPage/Components/ViewPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">GIPHY SEARCH</header>
        <Routes>
          <Route path=":gifId" element={<ViewPage />} />
          <Route path="*" element={<GifLister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
