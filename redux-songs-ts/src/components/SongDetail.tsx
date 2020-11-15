import React, { FC } from 'react';
import { connect } from 'react-redux';
import { TReduxState, TSongDetails } from '../models/types';

const SongDetail: FC<{ song: TSongDetails | null; }> = ({ song }) => {
  if (!song) {
    return (
      <div>Select a Song</div>
    );
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        {`Title: ${song.title}`}
        <br />
        {`Duration: ${song.duration}`}
      </p>
    </div>
  );
};

const mapStateToProps = (state: TReduxState) => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
