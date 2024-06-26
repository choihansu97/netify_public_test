import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Mobile from './components/mobile.jsx';
import Desktop from "./components/desktop.jsx";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/mobile" element={<Mobile/>}/>
          <Route path="/" element={<Desktop/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
