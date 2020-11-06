import { useState, useEffect } from 'react';
import youtube from '../api/youtube.api';
import { TYoutubeItem } from '../models/types';

const useVideos = (defaultSearchTerm: string): [TYoutubeItem[], (term: string) => Promise<void>] => {
  const [videos, setVideos] = useState<TYoutubeItem[]>([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term: string): Promise<void> => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
