import { initialState } from "../store/index.js";
import {ALBUM_SONG_BY_ALBUMID } from '../actions/index.js'

const albumReducer = (state = initialState.selectedAlbums, action) => {
    switch (action.type) {
      case  ALBUM_SONG_BY_ALBUMID:
        return {
          ...state,
          selectedAlbums: action.payload,
        }
   
      
      default:
        return state
    }
  }
  
  export default albumReducer