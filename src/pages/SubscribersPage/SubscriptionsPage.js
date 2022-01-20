import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Subscriptions from "../../components/Subscriptions/Subscriptions";

import './SubscriptionsPage.css'

export default () => {
    return (
        <div className="subscriptionsPage">
            <Sidebar />
            <Subscriptions />
        </div>
    )
}