import React, {useEffect, useRef}  from "react";
import { Avatar } from "@mui/material";
import UserModalItem from "./UserModalItem/UserModalItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ReviewsIcon from '@mui/icons-material/Reviews';
import KeyboardIcon from '@mui/icons-material/Keyboard';

import './UserModal.css'

export default ({userModalButton, onClose}) => {
    
    const userModalRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
		    if (userModalRef.current && !userModalRef.current.contains(event.target) && !userModalButton.current.contains(event.target)) {
				onClose();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [userModalRef])
    
    return(
        <div className="userModal" ref={userModalRef}>
            <div className="userModal__avatar">
                <Avatar 
                    src="https://avatars.githubusercontent.com/u/46375815?s=400&u=759528978e9b3dcee06cb85cef13960451653177&v=4"
                    className="userModal__avatar__icon"
                />
                <div>
                    <h4 className="userModal__avatar__h4">Dmitriy Eginov</h4>
                    <div className="userModal__avatar__link">Управление аккаунтом гугл </div>
                </div>
            </div>
            <hr/>
            <UserModalItem text="Мой канал" Icon={AccountCircleIcon} />
            <UserModalItem text="Покупки и платные подписки" Icon={MonetizationOnIcon} />
            <UserModalItem text="Творческая студия Youtube" Icon={SettingsSuggestIcon} />
            <UserModalItem text="Cменить аккаунт" Icon={ChangeCircleIcon} />
            <UserModalItem text="Выйти" Icon={LogoutIcon} />
            <hr />
            <UserModalItem text="Тема: как на устройстве" Icon={DarkModeIcon} />
            <UserModalItem text="Язык: Русский" Icon={TranslateIcon} />
            <UserModalItem text="Страна: Россия" Icon={LanguageIcon} />
            <UserModalItem text="Настройки" Icon={SettingsIcon} />
            <UserModalItem text="Личные данные" Icon={SettingsAccessibilityIcon} />
            <UserModalItem text="Справка" Icon={HelpOutlineIcon} />
            <UserModalItem text="Отправить отзыв" Icon={ReviewsIcon} />
            <UserModalItem text="Быстрые клавиши" Icon={KeyboardIcon} />
            <hr />
        </div>
    )
}