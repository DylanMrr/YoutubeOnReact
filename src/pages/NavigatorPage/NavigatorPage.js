import React from "react";
import Navigator from "../../components/Navigator/Navigator";
import Sidebar from "../../components/Sidebar/Sidebar";

import './NavigatorPage.css'

export default () => {
    return (
        <div className="navigationPage">
            <Sidebar />
            <Navigator />
        </div>
    )
}