import { handleError } from '../apiErrorHandlers/basicErrorHandle';

import { MultiResponse } from 'giphy-api';

import axios from 'axios';

const GIPHY_API_KEY = 'BPQxDk7fvxwaFbNgBX9xOdvGpBDgEysB';
const GIPHY_BASE_URL = 'https://api.giphy.com/v1';
const GIPHY_GIF_SEARCH_URL = '/gifs/search';

export const callSearchGiphyApi = async (
  phrase: string
): Promise<MultiResponse | undefined> => {
  if (!phrase) console.error('no search phrase provided');

  const fullSearchUrl = `${GIPHY_BASE_URL}${GIPHY_GIF_SEARCH_URL}?api_key=${GIPHY_API_KEY}&q=${phrase}`;

  // TODO: Is this the right way?
  try {
    const { data } = await axios.get<MultiResponse>(fullSearchUrl, {
      headers: {
        // api_key: apiKey,
        // q: 'cheeseburgers',
      },
    });

    if (!data) throw new Error('no data');

    return data;
  } catch (err: unknown) {
    if (err instanceof Error) handleError(err);
  }
};
