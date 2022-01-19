import React from "react";

import './ApplicationModalItem.css'

export default ({ImageItem, text}) => {
    return (
        <div className="applicationModalItem">
            <div>
                <ImageItem
                    className="applicationModalItem__icon"
                />
            </div>
            <div className="applicationModalItem__text">
                {text}
            </div>
        </div>
    )
}