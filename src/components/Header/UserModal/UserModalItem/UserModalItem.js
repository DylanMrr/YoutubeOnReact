import React from "react";

import './UserModalItem.css'

export default ({Icon, text}) => {
    return(
        <div className="userModalItem">
            <Icon className="userModalItem__Icon"/>
            <div className="userModalItem__text">
                {text}
            </div>
        </div>
    )
}