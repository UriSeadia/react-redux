import axios from 'axios'
import { TWikiResponse, TWikiDataQuerySearch } from '../models/types';

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
}
