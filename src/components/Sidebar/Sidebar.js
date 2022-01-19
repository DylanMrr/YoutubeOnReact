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

import './Sidebar.css'


const Sidebar = (props) => {
    if (!props.showSidebar){
        return (
            <div className="sidebarShort">
                <div className="sidebar__wrapper">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <SidebarItemShort selected Icon={HomeIcon} title="Главная" />
                    </Link>
                    <SidebarItemShort Icon={ExploreIcon} title="Навигатор" />
                    <SidebarItemShort Icon={SubscriptionsIcon} title="Подписки" />
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
                    <SidebarItem selected Icon={HomeIcon} title="Главная" />
                </Link>
                <SidebarItem Icon={ExploreIcon} title="Навигатор" />
                <SidebarItem Icon={SubscriptionsIcon} title="Подписки" />
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

export default connect(mapStateToProps) (Sidebar)