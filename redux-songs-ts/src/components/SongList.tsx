import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import { TReduxAction, TReduxState, TSongDetails } from '../models/types';

interface ISongListProps {
  songs: TSongDetails[];
  selectSong: (song: TSongDetails) => TReduxAction;
}

class SongList extends Component<ISongListProps> {

  renderList(): JSX.Element[] {
    return this.props.songs.map((song: TSongDetails) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

// the name 'mapStateToProps' is the convention
const mapStateToProps = (state: TReduxState): { songs: TSongDetails[]; } => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
