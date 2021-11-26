import { initialState } from "../store/index.js";
import {ARTIST_BY_ID_AND_NAME  } from '../actions/index.js'

const albumReducer = (state = initialState.selectedAlbums, action) => {
    switch (action.type) {
      case  ARTIST_BY_ID_AND_NAME :
        return {
          ...state,
          selectedArtist: action.payload,
        }
   
      
      default:
        return state
    }
  }
  
  export default albumReducer