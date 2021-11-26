import { initialState } from '../store'
// import {SAVE_TO_JOBLIST} from "../actions"



const likesReducer = (state = initialState, action) => {
    
    switch (action.type) {
     
            // case SAVE_TO_JOBLIST:
            //     return {...state,
            //         jobList: action.payload}

            case ADD_LIKE_TO_SONG:
                return {...state,
                }

            default: 
                return state
    }
}



export default mainReducer