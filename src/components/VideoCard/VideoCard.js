import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import React from "react";

import './VideoCard.css'

export default ({image, title, channel, timestamp, views, channelImage, veryfied}) => {
    return (
        <div className="videoCard">
            <img
                className="videoCard__thumbnail"
                src={image}
            />
            <div className="videoCard__info">
                <Avatar 
                    className="videoCard__avatar"
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel} {veryfied && <VerifiedIcon className="videoCard__verifyed"/>}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}