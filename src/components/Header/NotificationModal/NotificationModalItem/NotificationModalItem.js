import React from "react";

import { Avatar } from "@mui/material";

import './NotificationModalItem.css'

export default ({avatar, text, date, preview}) => {
    return (
        <div className="notificationModalItem">
            <Avatar 
                src={avatar}
                
            />
            <div>
                <div className="notificationModalItem__text">
                    {text}
                </div>
                <div className="notificationModalItem__date">
                    {date}
                </div>
            </div>
            <img 
                className="notificationModalItem__preview"
                src={preview}
            />
        </div>
    )
}