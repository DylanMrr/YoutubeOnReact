import React from "react";

import './SidebarItemShort.css'

export default ({selected, Icon, title, onclick}) => {
    return(
        <div className={`sidebarItemShort ${selected && 'selected'}`} onClick={() => onclick()}>
            <Icon className="sidebarItemShort__icon"/>
            <div className="sidebarItemShort__title">{title}</div>
        </div>
    )
}