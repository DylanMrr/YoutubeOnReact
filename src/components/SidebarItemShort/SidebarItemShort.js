import React from "react";

import './SidebarItemShort.css'

export default ({selected, Icon, title}) => {
    return(
        <div className={`sidebarItemShort ${selected && 'selected'}`}>
            <Icon className="sidebarItemShort__icon"/>
            <h2 className="sidebarItemShort__title">{title}</h2>
        </div>
    )
}