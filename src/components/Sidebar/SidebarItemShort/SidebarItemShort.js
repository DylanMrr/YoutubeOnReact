import React from "react";

import './SidebarItemShort.css'

export default ({selected, Icon, title}) => {
    return(
        <div className={`sidebarItemShort ${selected && 'selected'}`}>
            <Icon className="sidebarItemShort__icon"/>
            <div className="sidebarItemShort__title">{title}</div>
        </div>
    )
}