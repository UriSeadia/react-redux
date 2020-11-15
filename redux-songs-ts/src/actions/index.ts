import { TReduxAction, TSongDetails } from "../models/types";

// Action creator, returns an action
export const selectSong = (song: TSongDetails): TReduxAction => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
