import React from "react";
import NotFound from "../../components/NotFound/NotFound";
import Sidebar from "../../components/Sidebar/Sidebar";

import './NotFoundPage.css'

export default () => {
    return (
        <div className="notFoundPage">
            <Sidebar />
            <NotFound />
        </div>
    )
}