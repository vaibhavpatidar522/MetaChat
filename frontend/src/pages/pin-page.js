import './login-page.css';
import { useNavigate} from 'react-router-dom';


function PinPage() {
  const navigate = useNavigate();

  const navigateToHomePage =() =>{
    navigate('/home-page')
  }
  const navigateToChatPage =() =>{
    navigate('/chat-list')
  }
    return (
      <div className="App">
        <div className="LoginPage">
            <div className="LogoBG">
                <h1>PinPage</h1>
                <div className = "logo">
                    <img src={require("../logos/sloth-icon.png")} height = "120 px" alt="img"/>
                </div>
            </div>
            <div className="semiCircle"></div>
            <div className='pin-area'>
            <label>Enter your pin</label>
            <input type="password"/>
            <button type="submit" onClick={navigateToChatPage}>LOGIN</button>
            <h2 onClick={navigateToHomePage}>Sign in with another account</h2>
            </div>
            
            
        </div>
      </div>
    );
  }

export default PinPage;