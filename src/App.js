import './App.css';
import Main from './components/Main';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/app" element={<Main/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
