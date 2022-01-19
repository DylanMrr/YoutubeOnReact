import React, {useRef, useEffect} from "react";

import ApplicationModalItem from "./ApplicationModalItem/ApplicationModalItem";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './ApplicationModal.css'

export default ({applicationModalButton, onClose}) => {
    
    const applicationModalRef = useRef(null)

    useEffect(() => {
		function handleClickOutside(event) {
		    if (applicationModalRef.current 
                && !applicationModalRef.current.contains(event.target) 
                && !applicationModalButton.current.contains(event.target)
            ) {
				onClose();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [applicationModalRef])
    
    return (
        <div className="applicationModal" ref={applicationModalRef}>
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