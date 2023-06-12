import { useState } from 'react';
import style from './login-cred.module.css';
import {useNavigate} from 'react-router-dom';


function LoginCredPage() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('not logged in');
 
  
  

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate(-1);
      };
      const navigateToSignUpPage = () => {
        navigate('/signup-page');

      };


 

      
  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch('http://localhost:3001/api/hello').then(res => res.json()).then((data) => console.log(data))


    fetch('http://localhost:3001/api/users/login', {
       method: 'POST',
       body: JSON.stringify({
        email,
        password,
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((res) => res.json())
       .then((post) => {
          console.log(post.token)
          setEmail('')
          setPassword('')
          localStorage.setItem('token', post.token);
          setToken(localStorage.getItem('token'))


       })
       .catch((err) => {
          console.log(err.message);
       });
  }


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
                <input type="email" placeholder="example@test.com"  onChange={e =>  setEmail(e.target.value)}
        value={email}/>
                <label>PASSWORD</label>
                <input type="password" placeholder="Min 6 charaters long" onChange={e =>  setPassword(e.target.value)}
        value={password}/>
                <button type="submit" onClick={handleSubmit }>LOGIN</button>
                <h2 onClick={navigateToSignUpPage}>Not a member? sign up</h2>
            </div>
            </div>
            </div>
            
        </div>
      </div>
    );
  }

export default LoginCredPage;