import SearchPage from "../SeacrhPage/SearchPage"
import Sidebar from "../Sidebar/Sidebar"

import './SearchContainer.css'

export default () => {
    return (
        <div className="searchContainer">
            <Sidebar />
            <SearchPage />
        </div>
    )
}