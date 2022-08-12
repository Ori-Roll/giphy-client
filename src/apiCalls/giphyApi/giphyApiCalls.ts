import { handleError } from '../apiErrorHandlers/basicErrorHandle';

import { MultiResponse } from 'giphy-api';

import axios from 'axios';
import { join } from 'path';

const GIPHY_API_KEY = 'BPQxDk7fvxwaFbNgBX9xOdvGpBDgEysB';
const GIPHY_BASE_URL = 'https://api.giphy.com/v1';
const GIPHY_GIF_SEARCH_URL = '/gifs/search';

export const callSearchGiphyApi = async (
  phrase: string,
  searchParams?: Record<string, string | number>
): Promise<MultiResponse | undefined> => {
  if (!phrase) console.error('no search phrase provided');

  const additionalParams = searchParams
    ? Object.entries(searchParams)
        .map(([key, value]: any[]) => `${key}=${value}`)
        .join('&')
    : '';

  const fullSearchUrl = `${GIPHY_BASE_URL}${GIPHY_GIF_SEARCH_URL}?api_key=${GIPHY_API_KEY}&q=${phrase}&${additionalParams}`;
  console.log('calling fullSearchUrl ', fullSearchUrl);

  // TODO: Is this the right way?
  try {
    const { data } = await axios.get<MultiResponse>(fullSearchUrl, {
      headers: {},
    });
    console.log('res data ', data);
    if (!data) throw new Error('no data');

    return data;
  } catch (err: unknown) {
    if (err instanceof Error) handleError(err);
  }
};
