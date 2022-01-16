import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import React from "react";

import './VideoRow.css'

export default ({
  views,
  veryfied,
  description,
  timestamp,
  channel,
  title,
  image,
  channelImage
}) => {
    return (
        <div className="videoRow">
            <img src={image}/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {views} • {timestamp}
                </p>
                <div className="videoRow__channel">
                    <Avatar src={channelImage} className="videoRow__avatar"/>
                    <div className="videoRow__channelName">
                        {channel}
                    </div>
                    {veryfied && <VerifiedIcon className="videoRow__verifyed"/>}
                </div>
                <p className="videoRow__description">
                    {description}
                </p>
            </div>
        </div>
    )
}