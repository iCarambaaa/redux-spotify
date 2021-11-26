import { initialState } from '../store'
import {ADD_LIKE_TO_SONG} from "../actions"



const likesReducer = (state = initialState.likedSongs.liked, action) => {
     console.log(state)
    
    switch (action.type) {
        
            // case SAVE_TO_JOBLIST:
            //     return {...state,
            //         jobList: action.payload}

            case ADD_LIKE_TO_SONG:
                return {...state,
                    liked: [...state.liked, action.payload]}
            default: 
                return state
    }
}



export default likesReducer