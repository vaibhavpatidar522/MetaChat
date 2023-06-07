
import './App.css';
import {Routes , Route,} from 'react-router-dom'
import LoginPage from './pages/login-page';
import LoginCredPage from './pages/login-cred';
import SignUpPage from './pages/signup-page';
import PinPage from './pages/pin-page';


function App() {
  const loggedIn = true;
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loggedIn ? <PinPage/>:<LoginPage/>}/>
        <Route path='/home-page' element={<LoginPage/>}/>
        <Route path='/login-details' element={<LoginCredPage/>}/>
        <Route path='/signup-page' element = {<SignUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
