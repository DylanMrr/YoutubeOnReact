import React from "react";

import './CreatingModalItem.css'

export default ({ImageItem, text}) => {
    return (
        <div className="creatingModalItem">
            <div>
                <ImageItem
                    className="creatingModalItem__icon"
                />
            </div>
            <div className="creatingModalItem__text">
                {text}
            </div>
        </div>
    )
}