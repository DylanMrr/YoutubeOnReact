const initialState = {
    showSidebar: true,
    selectedItem: "Главная"
}

const SIDEBAR_SHOW = "SIDEBAR_SHOW"
const SIDEBAR_HIDE = "SIDEBAR_HIDE"
const SIDEBAR_SELECTED = "SIDEBAR_SELECTED" 

export const actions = { 
    showSidebar : () => ({
            type: SIDEBAR_SHOW
        }
    ),
    hideSidebar : () => ({
            type: SIDEBAR_HIDE
        }
    ),
    sidebarSelected : (item) => ({
            type: SIDEBAR_SELECTED,
            payload: item
        }
    )
}

export default function sidebarReducer(state = initialState, action) {
    switch (action.type){
        case SIDEBAR_SHOW:
            return {
                ...state,
                showSidebar: true,
            }
        case SIDEBAR_HIDE: 
            return{
                ...state,
                showSidebar: false
            }
        case SIDEBAR_SELECTED:
            return{
                ...state,
                selectedItem: action.payload
            }
        default:
            return state
    }
}