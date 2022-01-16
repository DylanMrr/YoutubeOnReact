import Sidebar from "../Sidebar/Sidebar"
import RecommendedVideos from '../RecommendedVideos/RecommendedVideos'
import React from "react"

import './HomePage.css'

export default () => {
    return (
        <div className="home">
            <Sidebar />
            <RecommendedVideos />
        </div>
    )
}