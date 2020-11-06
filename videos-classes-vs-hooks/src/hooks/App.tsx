import React, { FC, useState, useEffect } from 'react';
import useVideos from './useVideos';
import SearchBar from '../components/hooks/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import { TYoutubeItem } from '../models/types';

const App: FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<TYoutubeItem | null>(null);
  const [videos, search] = useVideos('Lionel Messi');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
