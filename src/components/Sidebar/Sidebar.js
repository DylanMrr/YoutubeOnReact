import React, {useState} from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DownloadIcon from '@mui/icons-material/Download';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Sidebar.css'


export default () => {
    return (
        <div className="sidebar">
            <SidebarItem selected Icon={HomeIcon} title="Главная" />
            <SidebarItem Icon={WhatshotIcon} title="Тренды" />
            <SidebarItem Icon={SubscriptionsIcon} title="Подписки" />
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
    )
}