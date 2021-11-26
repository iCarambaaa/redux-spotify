import React from "react";
import { connect } from "react-redux";
import { selectSongAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  selectSong: ( value ) => {
    dispatch(selectSongAction(value))
  }
})

const Song = ({ track, selectSong }) => (
  <div onClick={()=>(selectSong(track))} className="py-3 trackHover">
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song)
