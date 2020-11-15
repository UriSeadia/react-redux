import { combineReducers } from 'redux';
import { TReduxAction, TSongDetails } from '../models/types';

const songsReducer = (): TSongDetails[] => {
  return [
    {
      title: 'No Scrubs',
      duration: '4:05'
    },
    {
      title: 'Macarena',
      duration: '2:30'
    },
    {
      title: 'All Star',
      duration: '3:15'
    },
    {
      title: 'I Want it That Way',
      duration: '1:45'
    }
  ];
};

const selectedSongReducer = (selectedSong: TSongDetails | null = null, action: TReduxAction): TSongDetails | null => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
