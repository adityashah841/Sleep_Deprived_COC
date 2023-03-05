import './App.css';
import Main from './components/Main';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import { Routes } from 'react-router-dom';
import CreateAccount from './elements/CreateAccount';
import Login from './elements/Login';
import LoginEmail from './elements/LoginEmail';
import Register from './elements/Register';
import RegisterEmail from './elements/RegisterEmail';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/email" element={<LoginEmail/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/register/email" element={<RegisterEmail/>}/>
        <Route path="/app" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
