import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import albumReducer from '../reducers/album.js'
import songsReducer from '../reducers/home.js'
import selectedSongReducer from '../reducers/selectedsong'


const aComposeFunctionThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const initialState = {

    likedSongs: {
     liked:   []
    },
    arrayOfSongs: {
       songs: []
    },
    selectedAlbums: {},
    selectedArtist: {},
    playlists: {
        playingQueue: [],
        otherPlaylist: []
    },
    selectedSong: {
        track: []
    }

}


const reducerGrande = combineReducers({                     // combine reducers here
    // likedSongs: likedReducer,
    // ...
   arrayOfSongs:songsReducer,
   selectedAlbums:albumReducer,
    selectedSong: selectedSongReducer
   
})

const configureStore = createStore(                         // need to import this in index.js    <Provider store={configureStore}>   
    reducerGrande,
    initialState,
    aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk)) // composing two middlewares (DEV & thug) thug needs to be wrapped in applyMiddleware()
)

export default configureStore