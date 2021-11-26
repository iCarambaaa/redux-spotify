
export const SEARCH_SONG_BY_ARTIST_NAME = 'SEARCH_SONG_BY_ARTIST_NAME'
//export const GET_SONGS_ERROR ='GET_SONGS_ERROR'
export const ALBUM_SONG_BY_ALBUMID ='ALBUM_SONG_BY_ALBUMID'
export const ARTIST_BY_ID_AND_NAME = 'ARTIST_BY_ID_AND_NAME'

export const  getSongByArtistNameAction =  (artistName)=>{
    return async (dispatch)=>{
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artistName)
          if (response.ok) {
            const data = await response.json()
            const songInfo = data.data
           
            dispatch({
              type: SEARCH_SONG_BY_ARTIST_NAME,
              payload:songInfo,
            })
           
          } else {
            console.log(' we got an error :(')
           
            // dispatch({
            //   type: GET_SONGS_ERROR,
            // })
           
          }
            
        } catch (error) {
           console.log(error) 
        }
    }
    
}

export const albumSongByAlbumidAction = (albumId)=>{
    return async(dispatch)=>{
        try {
            const  response = await fetch(
                "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId
                
              );
        
              if (response.ok) {
                const album = await response.json();
               
                const songs = {
                    album,
                    songs: album.tracks.data,
                  }
                
            dispatch({
                type: SEARCH_SONG_BY_ARTIST_NAME,
                payload:songs,
              })
              }else{
                  console.log("data failed to fetch")
              }
            
        } catch (error) {
            console.log("something went wrong")
        }
    }
}


export const artistByIdAndNameAction =(artistId,)=>{
    return async(dispatch)=>{
        try {
            let response = await fetch(
              "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId
              
            );
      
            if (response.ok) {
              let artist = await response.json();
              this.setState(
                {
                  artist,
                },
                async () => {
                  let tracksResponse = await fetch(
                    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
                      artist.name
                    
                  );
      
                  if (tracksResponse.ok) {
                    let tracklist = await tracksResponse.json();
                    this.setState({ songs: tracklist.data });
                  }
                }
              );
            }
          } catch (exception) {
            console.log(exception);
          } 
       
      
        
    }

}

export const SELECTED_SONG = 'SELECTED_SONG'

export const selectSongAction = (song) => ({
    type: SELECTED_SONG,
    payload: song
})
