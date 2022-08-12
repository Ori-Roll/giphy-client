import { handleError } from '../apiErrorHandlers/basicErrorHandle';

import { SingleResponse } from 'giphy-api';

import axios from 'axios';

const apiKey = 'BPQxDk7fvxwaFbNgBX9xOdvGpBDgEysB';

const callSearchGiphyApi = async () => {
  try {
    const response = await axios.get<SingleResponse>(
      'https://api.giphy.com/v1/gifs/search',
      {
        headers: {
          api_key: apiKey,
        },
      }
    );
  } catch (err: unknown) {
    if (err instanceof Error) handleError(err);
  }
};
