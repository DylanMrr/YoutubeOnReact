import React from "react";
import './SidebarItem.css';

export default ({selected, Icon, title}) => {
    return (
        <div className={`sidebarItem ${selected && 'selected'}`}>
            <Icon className="sidebarItem__icon"/>
            <h2 className="sidebarItem__title">{title}</h2>
        </div>
    )
}