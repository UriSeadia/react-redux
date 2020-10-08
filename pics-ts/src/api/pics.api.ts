import axios from 'axios';
import { TPictureDataResult, TPictureResponse } from '../models/types';

// from: https://unsplash.com/
const accessKey = '--3_Yi0A2gxVXmSMv8libxm6MPGp7ztV6RrKxjAlaTU';
const unsplashApi = 'https://api.unsplash.com/search/photos';

export const getPictures = async (term: string): Promise<TPictureDataResult[] | void> => {
  const reqOptions = {
    params: {
      query: term
    },
    headers: {
      Authorization: `Client-ID ${accessKey}`
    }
  };

  try {
    const response: TPictureResponse = await axios.get(unsplashApi, reqOptions);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
} 