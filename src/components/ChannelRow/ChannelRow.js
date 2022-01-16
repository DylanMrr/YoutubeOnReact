import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import React from "react";

import './ChannelRow.css'

export default ({
    image,
    subs,
    videos,
    description,
    verifyed,
    channel
}) => {
    return(
        <div className="channelRow">
            <Avatar 
                className="channelRow__logo "
                src={image}
            />
            <div className="channelRow__text">
                <h4>
                    {channel} {verifyed && <VerifiedIcon className="channelRow__verifyed"/>}
                </h4>
                <p>
                    {subs} подписчиков • {videos} видео
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}