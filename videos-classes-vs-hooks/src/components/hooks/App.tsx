import React, { FC, useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../../api/youtube.api';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import { TYoutubeItem } from '../../models/types';

const App: FC = () => {
  const [videos, setVideos] = useState<TYoutubeItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<TYoutubeItem | null>(null);

  useEffect(() => {
    onTermSubmit('lionel messi');
  }, []);

  const onTermSubmit = async (term: string): Promise<void> => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
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
