import { color } from "@mui/system";
import React from "react";

import './NavigatorType.css'

export default ({Icon, text, iconColor}) => {
    return (
        <div className="navigatorType">
            <div className="navigatorType__container">
                <div className="navigatorType__icon">
                    <Icon style={{fill:iconColor}}/>
                </div>
                <div className="navigatorType__text">
                    {text}
                </div>
            </div>
        </div>
    )
}