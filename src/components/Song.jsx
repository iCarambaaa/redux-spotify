import React from "react";
import { Heart, HeartFill } from 'react-bootstrap-icons'


const Song = ({ track }) => (
  <div className="py-3 trackHover">
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
        <Heart className="ml-2" color="white" />
    </small>
  </div>
);

export default Song;
