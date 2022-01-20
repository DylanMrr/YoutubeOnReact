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
                    <Link to="/originals" style={{textDecoration: "none"}}>
                        <SidebarItemShort Icon={YouTubeIcon} title="Originals" selected={checkSelectedItem("Originals")} onclick={() => dispatch(actions.sidebarSelected("Originals"))}/>
                    </Link>
                    <Link to="/music" style={{textDecoration: "none"}}>
                        <SidebarItemShort Icon={LibraryMusicIcon} title="Youtube Music" selected={checkSelectedItem("music")} onclick={() => dispatch(actions.sidebarSelected("music"))}/>
                    </Link>
                    <Link to="/library" style={{textDecoration: "none"}}>
                        <SidebarItemShort Icon={VideoLibraryIcon} title="Библиотека" selected={checkSelectedItem("Библиотека")} onclick={() => dispatch(actions.sidebarSelected("Библиотека"))}/>
                    </Link>
                    <Link to="/downloaded" style={{textDecoration: "none"}}>
                        <SidebarItemShort Icon={DownloadIcon} title="Скачанные" selected={checkSelectedItem("Скачанные")} onclick={() => dispatch(actions.sidebarSelected("Скачанные"))}/>
                    </Link>
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
                <Link to="/originals" style={{textDecoration: "none"}}>
                    <SidebarItem Icon={YouTubeIcon} title="Originals" selected={checkSelectedItem("Originals")} onclick={() => dispatch(actions.sidebarSelected("Originals"))}/>
                </Link>
                <Link to="/music" style={{textDecoration: "none"}}>
                    <SidebarItem Icon={LibraryMusicIcon} title="Youtube Music" selected={checkSelectedItem("music")} onclick={() => dispatch(actions.sidebarSelected("music"))}/>
                </Link>
                <hr />
                <Link to="/library" style={{textDecoration: "none"}}>
                    <SidebarItem Icon={VideoLibraryIcon} title="Библиотека" selected={checkSelectedItem("Библиотека")} onclick={() => dispatch(actions.sidebarSelected("Библиотека"))}/>
                </Link>
                <Link to="/history" style={{textDecoration: "none"}}>
                    <SidebarItem Icon={HistoryIcon} title="История" selected={checkSelectedItem("История")} onclick={() => dispatch(actions.sidebarSelected("История"))}/>
                </Link>
                <Link to="/your" style={{textDecoration: "none"}}>
                    <SidebarItem Icon={OndemandVideoIcon} title="Ваши видео" selected={checkSelectedItem("Ваши видео")} onclick={() => dispatch(actions.sidebarSelected("Ваши видео"))}/>
                </Link>
                <Link to="/watchlater" style={{textDecoration: "none"}}>
                    <SidebarItem Icon={WatchLaterIcon} title="Смотреть позже" selected={checkSelectedItem("Смотреть позже")} onclick={() => dispatch(actions.sidebarSelected("Смотреть позже"))}/>
                </Link>
                <Link to="/downloaded" style={{textDecoration: "none"}}>
                    <SidebarItem Icon={DownloadIcon} title="Скачанные" selected={checkSelectedItem("Скачанные")} onclick={() => dispatch(actions.sidebarSelected("Скачанные"))}/>
                </Link>
                <Link to="/liked" style={{textDecoration: "none"}}>
                    <SidebarItem Icon={ThumbUpOffAltIcon} title="Понравившиеся" selected={checkSelectedItem("Понравившиеся")} onclick={() => dispatch(actions.sidebarSelected("Понравившиеся"))}/>
                </Link>
                <SidebarItem Icon={ExpandMoreIcon} title="Развернуть" onclick={() => {}}/>
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