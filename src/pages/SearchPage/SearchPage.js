import SearchContainer from "../../components/SeacrhContainer/SearchContainer"
import Sidebar from "../../components/Sidebar/Sidebar"

import './SearchPage.css'

export default () => {
    return (
        <div className="searchPage">
            <Sidebar />
            <SearchContainer />
        </div>
    )
}