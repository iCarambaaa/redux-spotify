import React from "react";
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { selectSongAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  // liked: state.likedSongs.liked,
  arrayOfSongs: state.arrayOfSongs.songs
  // albumSongs: state.selectedAlbums.songs,
});

const mapDispatchToProps = (dispatch) => ({
  selectSong: ( value ) => {
    dispatch(selectSongAction(value))
  }
  // getAlbumByAlbumId: (albumId) => {
  //   dispatch(albumSongByAlbumidAction(albumId));
  // },
});


const Song = ({ track, arrayOfSongs, selectSong }) => {

  const likedBoolean = arrayOfSongs.includes(track.id)

  // const handleClick = () => {
  //   <HeartFill />
  // }

  return (
    <div className="py-3 trackHover">
      <span onClick={()=>(selectSong(track))} className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
          {likedBoolean !== true ? <Heart className="ml-2" color="white" /> : <HeartFill className="ml-2" color="white" />}
      </small>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Song)