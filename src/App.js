import './App.css';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar className="Navbar"/>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
