import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mobile from './components/mobile.jsx';
import Desktop from './components/desktop.jsx';

function App() {
  useEffect(() => {
    const mainElement = document.querySelector("#root > main");
    const bodyElement = document.body;

    const updateBodyDisplay = () => {
      if (mainElement.offsetWidth === 375) {
        bodyElement.style.display = "flex";
      } else {
        bodyElement.style.display = "";
      }
    };

    updateBodyDisplay();

    window.addEventListener("resize", updateBodyDisplay);

    return () => {
      window.removeEventListener("resize", updateBodyDisplay);
    };
  }, []);

  return (
    <Router>
      <>
        <Routes>
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/" element={<Desktop />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
