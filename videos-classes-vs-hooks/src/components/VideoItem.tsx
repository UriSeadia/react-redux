import React from 'react';
import { TYoutubeItem } from '../models/types';
import '../style/VideoItem.css';

type TVideoItemProps = {
  video: TYoutubeItem,
  onVideoSelect: React.Dispatch<React.SetStateAction<TYoutubeItem | null>>;
};

const VideoItem: React.FC<TVideoItemProps> = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="video-item item"
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
