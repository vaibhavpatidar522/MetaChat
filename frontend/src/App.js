
import './App.css';
import {Routes , Route,} from 'react-router-dom'
import LoginPage from './pages/login-page';
import LoginCredPage from './pages/login-cred';


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
       
        <Route path='/login-details' element={<LoginCredPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
