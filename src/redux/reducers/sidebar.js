const initialState = {
    showSidebar: true
}

const SIDEBAR_SHOW = "SIDEBAR_SHOW"
const SIDEBAR_HIDE = "SIDEBAR_HIDE"

export const actions = { 
    showSidebar : () => ({
            type: SIDEBAR_SHOW
        }
    ),
    hideSidebar : () => ({
            type: SIDEBAR_HIDE
        }
    )
}

export default function sidebarReducer(state = initialState, action) {
    switch (action.type){
        case SIDEBAR_SHOW:
            return {
                showSidebar: true
            }
        case SIDEBAR_HIDE: 
            return{
                showSidebar: false
            }
        default:
            return state
    }
}