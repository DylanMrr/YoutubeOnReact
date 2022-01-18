import React, {useState, useRef} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { Avatar } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/sidebar";
import { bindActionCreators } from 'redux'

import UserModal from './UserModal/UserModal'
import NotificationModal from "./NotificationModal/NotificationModal";

import { useNavigate } from 'react-router-dom';

import './Header.css';
import ApplicationModal from "./ApplicationModal/ApplicationModal";

const Header = (props) => {
    const [inputSearch, setInputSearch] = useState('');
    
    const showSidebarValue = useSelector(state => state.sidebar.showSidebar)
    
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onKeyPress = (event) => {
        if (event.key === 'Enter'){
            navigate(`/search/${inputSearch}`)
        }
    }

    const [userModal, setUserModal] = useState(false);
    const [notificationModal, setNotificationModal] = useState(false);

    const userModalButton = useRef(null);
    const notificationModalButton = useRef(null);

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon 
                    onClick = {() => dispatch(showSidebarValue ? actions.hideSidebar() : actions.showSidebar())}
                />
                <Link to="/">
                    <img
                        className="header__logo"
                        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"    
                        />
                </Link>
            </div>

            <div className="header__input">
                <input
                    placeholder="Введите запрос"
                    type="text"
                    onChange={(e) => setInputSearch(e.target.value)}
                    onKeyPress={onKeyPress}
                    value={inputSearch}
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>

            <div className="header__icons" >
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <div ref = {notificationModalButton}>
                    <NotificationsIcon 
                        className="header__icon"
                        onClick = {() => setNotificationModal(!notificationModal)}
                    />
                </div>
                <div ref={userModalButton}>
                    <Avatar 
                        className="header__icon"
                        onClick = {() => setUserModal(!userModal)}
                        src="https://avatars.githubusercontent.com/u/46375815?s=400&u=759528978e9b3dcee06cb85cef13960451653177&v=4"
                    />
                </div>
                { userModal && (
                    <UserModal 
                        userModalButton={userModalButton}
                        onClose={() => setUserModal(false)}
                    />
                )}
                { notificationModal && (
                    <NotificationModal 
                        notificationModalButton={notificationModalButton}
                        onClose={() => setNotificationModal(false)}
                    />
                )}
                <ApplicationModal
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Header)
