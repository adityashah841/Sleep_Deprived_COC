import './App.css';
import SideBar from './components/SideBar';
import Content from './components/Content';
// import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">  
      <nav>
        <div className="sideBar">
          <SideBar className="SideBar"/>
        </div>
        <div className="content">
          <Content className="content"/>
        </div>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <Route path="/about" element={<About/>}/> */}
        </Routes>
      </nav>
    </div>
  );
}

export default App;
