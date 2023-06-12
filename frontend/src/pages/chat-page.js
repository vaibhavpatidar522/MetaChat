import style from './chat-page.module.css';
import {useNavigate} from 'react-router-dom';
import { userName2 } from './chat-list';
import {useState} from 'react';


function ChatPage(props) {
    
    const [messagesList, setMessagesList] = useState([]);
    const [message, setMessage] = useState('');
  
    const handleChange = event => {
      setMessage(event.target.value);
    };
  
    const navigate = useNavigate();
    const navigateHome = () => {
      navigate(-1);
    };
  
    const sendMessage = async (e) => {
      e.preventDefault();
      setMessagesList([...messagesList, message]);
      setMessage('');
    };



    return (
      <div className={style.App}>
        <div className={style.LoginPage}>
            <div className={style.LogoBG}>
                <div className={style.backButton}>
                    <img src={require("../logos/back-logo.png")} height="40px" onClick={navigateHome} alt='logo'/>
                    <img src={require("../logos/default-user-logo.png")} alt="user Profile" height="40px" onClick={navigateHome}/>
                    <h1>{userName2}</h1>
                </div>
            </div>
            <div className={style.listSpace}>
                <div className={style.messageList}>
                {messagesList.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
                


                </div>
                <div className={style.bottomArea}>
                    <img src={require('../logos/attach-icon.png')} height="30px" alt='attach'/>
                    <input type='string' value = {message} onChange={(e) => handleChange(e)}></input>
                    <img src={require('../logos/send-icon.png')} height="30px" alt='attach' onClick={sendMessage}/>
                    <img src={require('../logos/etherium-logo.png')} height="40px" alt='attach' className={style.eth}/>
                </div>

            </div>

      </div>
      </div>
    );
  };

  function ChatMessage(props) {
    const text= props.message;
    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes();
  
    return (<>
      <div className={style.message}>
        <p>{text}</p>
        <h3 className = {style.time}>{showTime}</h3>
      </div>
    </>)
  }
  

export default ChatPage;