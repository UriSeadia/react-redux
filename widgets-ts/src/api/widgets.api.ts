import axios from 'axios';
import { TWikiResponse, TWikiDataQuerySearch, TGoogleTranslateResponseData } from '../models/types';

// https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming
export const getWiki = async (term: string): Promise<TWikiDataQuerySearch[]> => {
  const url = 'https://en.wikipedia.org/w/api.php';
  const params = {
    origin: '*',
    action: 'query',
    list: 'search',
    format: 'json',
    srsearch: term
  };
  const options = {
    params
  };

  try {
    const response: TWikiResponse = await axios.get(url, options);
    return response.data.query.search;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTranslation = async (text: string, language: string): Promise<string> => {
  const url = 'https://translation.googleapis.com/language/translate/v2';
  const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'; // key will work only for localhost:3000

  const response: { data: TGoogleTranslateResponseData; } = await axios.post(url, {}, {
    params: {
      q: text,
      target: language,
      key
    }
  });

  return response.data.data.translations[0].translatedText;
};
