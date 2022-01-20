import React, {useState} from "react";
import SidebarItem from "./SidebarItem/SidebarItem";
import SidebarItemShort from "./SidebarItemShort/SidebarItemShort";
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLaterOutlined';
import DownloadIcon from '@mui/icons-material/DownloadOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusicOutlined';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/sidebar";
import { bindActionCreators } from 'redux'

import './Sidebar.css'


const Sidebar = (props) => {

    const selectedItem = useSelector(state => state.sidebar.selectedItem)

    const dispatch = useDispatch()

    const checkSelectedItem = (checkedName) => {
        return checkedName == selectedItem
    }

    if (!props.showSidebar){
        return (
            <div className="sidebarShort">
                <div className="sidebar__wrapper">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <SidebarItemShort selected={checkSelectedItem("Главная")} Icon={HomeIcon} title="Главная" onclick={() => dispatch(actions.sidebarSelected("Главная"))}/>
                    </Link>
                    <Link to="/navigator" style={{textDecoration: "none"}}>
                        <SidebarItemShort selected={checkSelectedItem("Навигатор")} Icon={ExploreIcon} title="Навигатор" onclick={() => dispatch(actions.sidebarSelected("Навигатор"))}/>
                    </Link>
                    <Link to="/subscriptions" style={{textDecoration: "none"}}>
                        <SidebarItemShort selected={checkSelectedItem("Подписки")} Icon={SubscriptionsIcon} title="Подписки" onclick={() => dispatch(actions.sidebarSelected("Подписки"))}/>
                    </Link>
                    <SidebarItemShort Icon={YouTubeIcon} title="Originals" />
                    <SidebarItemShort Icon={LibraryMusicIcon} title="Youtube Music" />
                    <SidebarItemShort Icon={VideoLibraryIcon} title="Библиотека" />
                    <SidebarItemShort Icon={DownloadIcon} title="Скачанные" />
                </div>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <Link to="/" style={{textDecoration: "none"}}>
                    <SidebarItem selected={checkSelectedItem("Главная")} Icon={HomeIcon} title="Главная" onclick={() => dispatch(actions.sidebarSelected("Главная"))}/>
                </Link>
                <Link to="/navigator" style={{textDecoration: "none"}}>
                    <SidebarItem selected={checkSelectedItem("Навигатор")} Icon={ExploreIcon} title="Навигатор" onclick={() => dispatch(actions.sidebarSelected("Навигатор"))}/>
                </Link>
                <Link to="/subscriptions" style={{textDecoration: "none"}}>
                    <SidebarItem selected={checkSelectedItem("Подписки")} Icon={SubscriptionsIcon} title="Подписки" onclick={() => dispatch(actions.sidebarSelected("Подписки"))}/>
                </Link>
                <SidebarItem Icon={YouTubeIcon} title="Originals" />
                <SidebarItem Icon={LibraryMusicIcon} title="Youtube Music" />
                <hr />
                <SidebarItem Icon={VideoLibraryIcon} title="Библиотека" />
                <SidebarItem Icon={HistoryIcon} title="История" />
                <SidebarItem Icon={OndemandVideoIcon} title="Ваши видео" />
                <SidebarItem Icon={WatchLaterIcon} title="Смотреть позже" />
                <SidebarItem Icon={DownloadIcon} title="Скачанные" />
                <SidebarItem Icon={ThumbUpOffAltIcon} title="Понравившиеся" />
                <SidebarItem Icon={ExpandMoreIcon} title="Развернуть" />
                <hr />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    showSidebar: state.sidebar.showSidebar
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar)