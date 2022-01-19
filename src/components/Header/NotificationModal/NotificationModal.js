import React, {useRef, useEffect} from "react";
import SettingsIcon from '@mui/icons-material/SettingsOutlined';

import NotificationModalItem from "./NotificationModalItem/NotificationModalItem";

import './NotificationModal.css'

export default ({notificationModalButton, onClose}) => {
    
    const notificationModalRef = useRef(null)

    useEffect(() => {
		function handleClickOutside(event) {
		    if (notificationModalRef.current 
                && !notificationModalRef.current.contains(event.target) 
                && !notificationModalButton.current.contains(event.target)
            ) {
				onClose();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [notificationModalRef])
    
    return (
        <div className="notificationModal" ref={notificationModalRef}>
            <div className="notificationModal__header">
                <div className="notificationModal__header__text">
                    Уведомления
                </div>
                <div className="notificationModal__header__icon">
                    <SettingsIcon />
                </div>
            </div>

            <hr />

            <div className="notificationModal__items">
                <NotificationModalItem 
                    avatar="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                    text="Всем привет! Сегодня  заключительная часть Подбор авто за 150.  У Славы еще есть шанс выйти на равных если вы проголосуете за его автомобиль!  Смотрите видео и участвуйте в розыгрыше авто, который вы сами выбираете! "
                    date="2 дня назад"
                    preview="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                />
                <NotificationModalItem 
                    avatar="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                    text="Всем привет! Сегодня  заключительная часть Подбор авто за 150.  У Славы еще есть шанс выйти на равных если вы проголосуете за его автомобиль!  Смотрите видео и участвуйте в розыгрыше авто, который вы сами выбираете! "
                    date="2 дня назад"
                    preview="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                />
                <NotificationModalItem 
                    avatar="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                    text="Всем привет! Сегодня  заключительная часть Подбор авто за 150.  У Славы еще есть шанс выйти на равных если вы проголосуете за его автомобиль!  Смотрите видео и участвуйте в розыгрыше авто, который вы сами выбираете! "
                    date="2 дня назад"
                    preview="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                />
                <NotificationModalItem 
                    avatar="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                    text="Всем привет! Сегодня  заключительная часть Подбор авто за 150.  У Славы еще есть шанс выйти на равных если вы проголосуете за его автомобиль!  Смотрите видео и участвуйте в розыгрыше авто, который вы сами выбираете! "
                    date="2 дня назад"
                    preview="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                />
                <NotificationModalItem 
                    avatar="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                    text="Всем привет! Сегодня  заключительная часть Подбор авто за 150.  У Славы еще есть шанс выйти на равных если вы проголосуете за его автомобиль!  Смотрите видео и участвуйте в розыгрыше авто, который вы сами выбираете! "
                    date="2 дня назад"
                    preview="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                />
                <NotificationModalItem 
                    avatar="https://yt3.ggpht.com/ytc/AKedOLR87l_OkveAWz6c26dKlxtmx3k55i6I6mFUm668=s176-c-k-c0x00ffffff-no-rj"
                    text="Всем привет! Сегодня  заключительная часть Подбор авто за 150.  У Славы еще есть шанс выйти на равных если вы проголосуете за его автомобиль!  Смотрите видео и участвуйте в розыгрыше авто, который вы сами выбираете! "
                    date="2 дня назад"
                    preview="https://i.ytimg.com/vi/pnyVKNlzVOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50NNpHZ5wWGkllOVGpHfkVCns2g"
                />
            </div>
            
        </div>
    )
}