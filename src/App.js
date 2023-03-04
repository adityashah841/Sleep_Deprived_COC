import './App.css';
import SideBar from './Components/SideBar';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="sideBar">
        <SideBar />
      </div>
      <Navbar className="Navbar"/>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
