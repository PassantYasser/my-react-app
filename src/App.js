import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Main/Home';
import Html from './Component/Main/Html';
import Css from './Component/Main/Css';
import Java from './Component/Main/Java'; 


function App() {
  return (
    <>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Html" element={<Html />} />
      <Route path="/Css" element={<Css />} />
      <Route path="/Java" element={<Java />} />
    </Routes>    
    </>
  );
}

export default App;
