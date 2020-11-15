export type TSongDetails = {
  title: string;
  duration: string;
};

export type TReduxAction = {
  type: string,
  payload?: any;
};

export type TReduxState = {
  selectedSong: TSongDetails | null;
  songs: TSongDetails[];
};
