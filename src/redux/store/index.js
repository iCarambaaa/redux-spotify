import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import albumReducer from '../reducers/album.js'
import songsReducer from '../reducers/home.js'
import selectedSongReducer from '../reducers/selectedsong'
import likesReducer from '../reducers/likes'
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

const persistConfig = {                                     // configure persistance here
    key: 'root',
    storage,
  }

const reducerGrande = combineReducers({                     // combine reducers here
    likedSongs: likesReducer,
    // ...

   arrayOfSongs:songsReducer,
   selectedAlbums:albumReducer,
    selectedSong: selectedSongReducer
   
})

const persistedReducer = persistReducer(persistConfig, reducerGrande) // wrap the reducer with persistance


const store = createStore(                         // need to import this in index.js    <Provider store={configureStore}>   
    persistedReducer,                              // pass the persisted reducer instead of rootReducer to createStore
    initialState,
    aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk)) // composing two middlewares (DEV & thug) thug needs to be wrapped in applyMiddleware()
)

const persistor = persistStore(store)               // used to create the persisted store

export {store, persistor}