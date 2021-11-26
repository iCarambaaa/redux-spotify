import { initialState } from '../store'
// import {SAVE_TO_JOBLIST} from "../actions"



const mainReducer = (state = initialState, action) => {
    
    switch (action.type) {
     
            // case SAVE_TO_JOBLIST:
            //     return {...state,
            //         jobList: action.payload}

            default: 
                return state
    }
}



export default mainReducer