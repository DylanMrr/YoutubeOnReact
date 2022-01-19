import React from "react";

import ApplicationModalItem from "./ApplicationModalItem/ApplicationModalItem";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './ApplicationModal.css'

export default () => {
    return (
        <div className="applicationModal">
            <ApplicationModalItem 
                ImageItem={OndemandVideoIcon}
                text="Youtube TV"
            />
            <hr/>
            <ApplicationModalItem 
                ImageItem={LibraryMusicIcon}
                text="Youtube Music"
            />
            <ApplicationModalItem 
                ImageItem={YouTubeIcon}
                text="Youtube Детям"
            />
            <hr/>
            <ApplicationModalItem 
                ImageItem={YouTubeIcon}
                text="Youtube для музыкантов"
            />
        </div>
    )
}