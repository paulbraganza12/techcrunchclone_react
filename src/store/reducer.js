import * as actionTypes  from './actions'

const initialState = {
    feedType: "",
    page: 1,
    loadingContent:true
}

const reducer = (state = initialState, action)=>{

    switch (action.type){
        case actionTypes.CHANGE_FEED_TYPE : {
            return{
                ...state,
                feedType:action.payload.type
            }
        }

        case actionTypes.LOADING_CONTENT : {
            return{
                ...state,
                loadingContent: action.payload.loadingContent
            }
        }

        case actionTypes.PAGE_UPDATE : {
            return{
                ...state,
                page: action.payload.page
            }
        }

        default : return state;
    }
}


export default reducer
