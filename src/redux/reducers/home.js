import { initialState } from "../store/index.js";
import {SEARCH_SONG_BY_ARTIST_NAME} from '../actions/index.js'

const songsReducer = (state = initialState.arrayOfSongs, action) => {
    switch (action.type) {
      case  SEARCH_SONG_BY_ARTIST_NAME:
        return {
          ...state,
          songs: action.payload,
        }
    //   case GET_BOOKS_ERROR:
    //     return {
    //       ...state,
    //       isError: true,
    //     }
      
      default:
        return state
    }
  }
  
  export default songsReducer