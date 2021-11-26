import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  selectedSong: state.selectedSong
})

const mapDispatchToProps = dispatch => ({
})

const Player = ({selectedSong}) => {
  useEffect(() => {
    
  }, [selectedSong])
return (
  <div className="container-fluid fixed-bottom bg-container pt-1">
    
    <Row>
    
      <div className="col-lg-10 offset-lg-2">
        <Row>
        <div className="col-6 col-md-4 col-lg-2">
          {selectedSong.track.length === 0?<h6></h6>:<h6 className="text-white">{selectedSong.track[0].title_short}</h6>}
          {/* <h6 className="text-white">{selectedSong.track[0].title_short}</h6> */}
        </div>
          <div className="col-6 col-md-4 col-lg-2 offset-1 offset-md-2 offset-lg-3 playerControls mt-1">
            <Row >
              <a href="/">
                <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="/playerbuttons/Previous.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="/playerbuttons/Play.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="/playerbuttons/Next.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="/playerbuttons/Repeat.png" alt="shuffle" />
              </a>
            </Row>
          </div>
        </Row>
        <Row className="justify-content-center playBar py-3">
          <div className="col-8 col-md-6">
            <div id="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </Row>
      </div>
    </Row>
  </div>
)}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
