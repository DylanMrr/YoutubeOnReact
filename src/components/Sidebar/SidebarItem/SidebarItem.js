import React from "react";
import './SidebarItem.css';

export default ({selected, Icon, title, onclick}) => {
    return (
        <div className={`sidebarItem ${selected && 'selected'}`}  onClick={() => onclick()}>
            <Icon className="sidebarItem__icon"/>
            <h2 className="sidebarItem__title">{title}</h2>
        </div>
    )
}