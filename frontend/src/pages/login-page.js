import './login-page.css';
import { useNavigate} from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();
  const navigateToLoginCred = () => {
    navigate('/login-details');
  };
  const navigateToSignUpPage = () => {
    navigate('/signup-page');
  };
    return (
      <div className="App">
        <div className="LoginPage">
            <div className="LogoBG">
                <h1>SLOTHER</h1>
                <div className = "logo">
                    <img src={require("../logos/sloth-icon.png")} height = "120 px" alt="img"/>
                </div>
            </div>
            <div className="semiCircle"></div>
            <div className="Buttons">
            <button class="button-5"  onClick={navigateToLoginCred}>Login</button>
            <br></br>
            <button class="button-5" onClick={navigateToSignUpPage}>Sign up</button>
            <br></br>
            <br></br>
            <hr width = "70%"></hr>
            <button class="button-5">Sign in using google</button>
            <br></br>
            <h4>Use Other Sign in options</h4>
            </div>
            <div className = "sign-in-logos">
                    <img src={require("../logos/github-logo.png")} height = "50px" alt = "img"/>
                    <img src={require("../logos/linkedIn-logo.png")} height = "50px" alt = "img" />
                    <img src={require("../logos/twitter-logo.png")} height = "50px" alt = "img"/>
            </div>
            
        </div>
      </div>
    );
  }

export default LoginPage;