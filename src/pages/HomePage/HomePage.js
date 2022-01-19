import Sidebar from "../../components/Sidebar/Sidebar"
import RecommendedVideos from '../../components/RecommendedVideos/RecommendedVideos'
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