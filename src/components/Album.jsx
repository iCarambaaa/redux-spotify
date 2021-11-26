import React from "react";
import Song from "./Song";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { albumSongByAlbumidAction } from "../redux/actions/index.js";
import uniqid from "uniqid";

const mapStateToProps = (state) => ({
  songs: state.arrayOfSongs.songs,
  selectedAlbums: state.selectedAlbums,
  // albumSongs: state.selectedAlbums.songs,
});

const mapDispatchToProps = (dispatch) => ({
  getAlbumByAlbumId: (albumId) => {
    dispatch(albumSongByAlbumidAction(albumId));
  },
});

let album = {};

class Album extends React.Component {
  componentDidMount = async () => {
    // console.log(this.props.albumSongs);

    let albumId = this.props.match.params.id;

    // let headers = new Headers({
    //   "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    //   "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    // });

    await this.props.getAlbumByAlbumId(albumId);

    console.log(this.props.selectedAlbums);
    console.log(this.props.selectedAlbums.tracks);
    console.log(this.props.selectedAlbums.cover);
    //   try {
    //     let response = await fetch(
    //       "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
    //       {
    //         method: "GET",
    //         headers,
    //       }
    //     );

    //     if (response.ok) {
    //       let album = await response.json();
    //       this.setState({
    //         album,
    //         songs: album.tracks.data,
    //       });
    //     }
    //   } catch (exception) {
    //     console.log(exception);
    // console.log(this.props.selectedAlbums);
    // console.log(this.props.selectedAlbums.tracks);
    // console.log(this.props.selectedAlbums.cover);
    //   }
  };

  componentDidUpdate = async (prevProps) => {
    let albumId = this.props.match.params.id;

    if (this.props.selectedAlbums !== prevProps.selectedAlbums) {
      album = { ...this.props.selectedAlbums };
      await this.props.getAlbumByAlbumId(albumId);
      console.log(album);
      console.log(album.selectedAlbums.tracks.data);
      console.log(album.selectedAlbums.title);
      console.log(album.selectedAlbums.cover);
      console.log({ ...this.props.selectedAlbums.title });
    }
  };

  render() {
    return (
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>
        <Row>
          {album.selectedAlbums && (
            <div className="col-md-3 pt-5 text-center" id="img-container">
              <img
                src={album.selectedAlbums.cover}
                className="card-img img-fluid"
                alt="Album"
              />
              <div className="mt-4 text-center">
                <p className="album-title">{album.selectedAlbums.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">
                  {album.selectedAlbums.artist
                    ? album.selectedAlbums.artist.name
                    : ""}
                </p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </div>
          )}
          <div className="col-md-8 p-5">
            {album.selectedAlbums ? (
              <Row>
                <div className="col-md-10 mb-5" id={uniqid}>
                  {album.selectedAlbums.tracks.data.map((song) => (
                    <Song track={song} key={song.id} />
                  ))}
                </div>
              </Row>
            ) : null}
          </div>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
