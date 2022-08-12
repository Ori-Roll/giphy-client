import { handleError } from '../apiErrorHandlers/basicErrorHandle';

import { SingleResponse } from 'giphy-api';

import axios from 'axios';

const GIPHY_API_KEY = 'BPQxDk7fvxwaFbNgBX9xOdvGpBDgEysB';
const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs/search';
const GIPHY_GIF_SEARCH_URL = '/gifs/search';

export const callSearchGiphyApi = async (phrase: string) => {
  if (!phrase) console.error('no search phrase provided');

  const fullSearchUrl = `${GIPHY_BASE_URL}${GIPHY_GIF_SEARCH_URL}?api_key=${GIPHY_API_KEY}&q=${phrase}`;

  try {
    const response = await axios.get<SingleResponse>(
      'https://api.giphy.com/v1/gifs/search?api_key=BPQxDk7fvxwaFbNgBX9xOdvGpBDgEysB&q=cheeseburgers',
      {
        headers: {
          // api_key: apiKey,
          // q: 'cheeseburgers',
        },
      }
    );
    console.log('response ', response);
    return response;
  } catch (err: unknown) {
    if (err instanceof Error) handleError(err);
  }
};
