import { SELECTED_SONG } from '../actions'
import { initialState } from '../store'


const selectedSongReducer = (state = initialState.selectedSong, action) => {
  switch (action.type) {
    case SELECTED_SONG:
      return {
        ...state,
          track: [action.payload], 
      }
    default:
      return state
  }
}

export default selectedSongReducer