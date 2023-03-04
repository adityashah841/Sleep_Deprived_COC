import './App.css';
import Main from './components/Main';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import { Routes } from 'react-router-dom';
import CreateAccount from './elements/CreateAccount';

function App() {

  

  return (
    <div className="app">
      <Routes>
        <Route path="/app" element={<Main/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
      </Routes>
    </div>
  );
}

export default App;
