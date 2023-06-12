import style from './signup-page.module.css';
import {useNavigate} from 'react-router-dom';


function SignUpPage() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate(-1);
      };
    const navigateToLoginCred = () => {
        navigate('/login-details');
      };
    return (
      <div className={style.App}>
        <div className={style.LoginPage}>
            <div className={style.LogoBG}>
                <div className={style.backButton}>
                    <img src={require("../logos/back-logo.png")} height="30px" onClick={navigateHome} alt='logo'/>
                    <h1 onClick={navigateHome}>Sign Up page</h1>
                </div>
                <div className = {style.logo}>
                    <img src={require("../logos/sloth-icon.png")} height = "120 px" onClick={navigateHome} alt="logo"/>
                </div>
            </div>
            <div className={style.semiCircle}></div>
            
            <div className={style.loginArea}>
            <div className={style.container}>

            <div className={style.inputs}>
                <label>ENTER EMAIL</label>
                <input type="email" placeholder="example@test.com" />
                <label>CREATE PASSWORD</label>
                <input type="password" placeholder="Min 6 charaters long" />
                <button type="submit">Create Account</button>
                <h2 onClick={navigateToLoginCred}>Already a member?</h2>
            </div>
            </div>
            </div>
            
            
            
        </div>
      </div>
    );
  }

export default SignUpPage;