
import './App.css';
import {Routes , Route,} from 'react-router-dom'
import LoginPage from './pages/login-page';
import LoginCredPage from './pages/login-cred';
import SignUpPage from './pages/signup-page';
import PinPage from './pages/pin-page';
import ChatList, { myName, userName2 } from './pages/chat-list';
import ChatPage from './pages/chat-page';


function App() {
  const loggedIn = true;
  const chat_list_path = "/" + myName + userName2;
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loggedIn ? <PinPage/>:<LoginPage/>}/>
        <Route path='/home-page' element={<LoginPage/>}/>
        <Route path='/login-details' element={<LoginCredPage/>}/>
        <Route path='/signup-page' element = {<SignUpPage/>}/>
        <Route path='/chat-list' element ={<ChatList/>}/>
        <Route path={chat_list_path} element = {<ChatPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
