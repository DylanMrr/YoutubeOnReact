import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';

import './NotificationModal.css'

export default () => {
    return (
        <div className="notificationModal">
            <div className="notificationModal__header">
                <div className="notificationModal__header__text">
                    Уведомления
                </div>
                <div className="notificationModal__header__icon">
                    <SettingsIcon />
                </div>
            </div>

            
        </div>
    )
}