import style from './login-cred.module.css';
import {useNavigate} from 'react-router-dom';


function LoginCredPage() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
      };
    return (
      <div className={style.App}>
        <div className={style.LoginPage}>
            <div className={style.LogoBG}>
                <div className={style.backButton}>
                    <img src={require("../logos/back-logo.png")} height="30px" onClick={navigateHome} alt='logo'/>
                    <h1 onClick={navigateHome}>SLOTHER</h1>
                </div>
                <div className = {style.logo}>
                    <img src={require("../logos/sloth-icon.png")} height = "120 px" onClick={navigateHome} alt="logo"/>
                </div>
            </div>
            <div className={style.semiCircle}></div>
            
            <div className={style.loginArea}>
            <div className={style.container}>

            <div className={style.inputs}>
                <label>EMAIL</label>
                <input type="email" placeholder="example@test.com" />
                <label>PASSWORD</label>
                <input type="password" placeholder="Min 6 charaters long" />
                <button type="submit">LOGIN</button>
            </div>
            </div>
            </div>
            
            
        </div>
      </div>
    );
  }

export default LoginCredPage;