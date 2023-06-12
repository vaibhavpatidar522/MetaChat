import style from './chat-list.module.css';
import {useNavigate} from 'react-router-dom';

const myName = "my_name";
const userName2 = "User_Name_2";
const lastMessage = "Last message, lorem ipsum lavda lassan 12 am lorem"

function ChatList() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate(-1);
      };
      const navigateToChat = () => {
        navigate("/" + myName + userName2);
      };
    return (
      <div className={style.App}>
        <div className={style.LoginPage}>
            <div className={style.LogoBG}>
                <div className={style.backButton}>
                    <img src={require("../logos/back-logo.png")} height="30px" onClick={navigateHome} alt='logo'/>
                    <img src={require("../logos/sloth-icon.png")} height = "30 px" onClick={navigateHome} alt="logo"/>
                    <div className={style.wrap}>
                        <div className={style.search}>
                            <input type="text" className={style.searchTerm} placeholder="Search Contact"/>
                            <button type="submit" className={style.searchButton}>GO</button>
                        </div>
                        </div>
                        <img src={require("../logos/three-dots-icon.png")} height = "30 px" onClick={navigateHome} alt="logo" className={style.threeDots}/>
                    
                </div>

            </div>
            <div className={style.listSpace}>
                <div className={style.userLists}>
                    <UserPlate />
                    <UserPlate />
                    <UserPlate />
                    <UserPlate />
                    </div>
                
                </div>
            

            
            
            
            
        </div>
      </div>
    );
  }
  function UserPlate(){
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate(-1);
      };
      const navigateToChat = () => {
        navigate("/" + myName + userName2);
      };

    return (
        <div className={style.chatPlate} onClick={navigateToChat}>
            <img src={require("../logos/default-user-logo.png")} alt="user Profile"/>
            <div className={style.userDetails}>
                <h2>{userName2}</h2>
                <h3>{lastMessage}</h3>
            </div>

        </div>
    )
  }

export {myName, userName2};
export default ChatList;