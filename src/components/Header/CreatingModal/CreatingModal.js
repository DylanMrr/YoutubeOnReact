import React, {useRef, useEffect} from "react";
import CreatingModalItem from './CreatingModalItem/CreatingModalItem'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PodcastsIcon from '@mui/icons-material/PodcastsOutlined';

import './CreatingModal.css'

export default ({creatingModalButton, onClose}) => {
    
    const creatingModalRef = useRef(null)

    useEffect(() => {
		function handleClickOutside(event) {
		    if (creatingModalRef.current 
                && !creatingModalRef.current.contains(event.target) 
                && !creatingModalButton.current.contains(event.target)
            ) {
				onClose();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [creatingModalRef])
    
    return (
        <div className="creatingModal" ref={creatingModalRef}>
            <CreatingModalItem 
                ImageItem={OndemandVideoIcon}
                text="Добавить видео"
            />
            <CreatingModalItem 
                ImageItem={PodcastsIcon}
                text="Начать трансляцию"
            />
        </div>
    )
}