import React, { useState } from 'react';
import { MultiResponse } from 'giphy-api';
import { callSearchGiphyApi } from '../../../apiCalls';
import {
  onGifSearchResponseSuccess,
  onGifSearchMoreResponseSuccess,
} from '../slice/gifAutocompleteSlice';
import { useDispatch, useSelector } from 'react-redux';

const ITEMS_LIMIT = 9;

const getSearchData = async (searchPhrase: string, offset?: number) => {
  const res = await callSearchGiphyApi(searchPhrase, { limit: ITEMS_LIMIT });
  return res as MultiResponse;
};

export const useGifGetDataHandler = () => {
  const dispatch = useDispatch();

  const [currentOffset, setCurrentOffset] = useState(0);

  const searchGifs = async (searchPhrase: string) => {
    const { data, pagination }: MultiResponse = await getSearchData(
      searchPhrase
    );
    console.log('got', data);
    if (onGifSearchResponseSuccess) {
      dispatch(onGifSearchResponseSuccess(data));
    }
    setCurrentOffset(pagination.offset);
  };

  const searchMoreGifs = async (searchPhrase: string) => {
    const nextOffset = currentOffset + ITEMS_LIMIT;

    const { data, pagination }: MultiResponse = await getSearchData(
      searchPhrase,
      nextOffset
    );

    if (onGifSearchMoreResponseSuccess) {
      dispatch(onGifSearchMoreResponseSuccess(data));
    }
    setCurrentOffset(pagination.offset);
  };

  return { searchGifs, searchMoreGifs };

  //  dispatch(
  //     onGifSearchResponseSuccess({
  //       // totalCount: pagination.total_count,
  //       // count: pagination.count,
  //       // offset: pagination.offset,
  //       // data: [],
  //       totalCount: null,
  //       count: null,
  //       offset: null,
  //       data: [],
  //     })
  //   );
};

const gifGetDataHandler = async (searchPhrase: string) => {
  // const { data, pagination }: MultiResponse = await getSearchData(searchPhrase);
  // const dispatch = useDispatch();
  // store.dispatch(
  //   onGifSearchResponseSuccess({
  //     // totalCount: pagination.total_count,
  //     // count: pagination.count,
  //     // offset: pagination.offset,
  //     // data: [],
  //     totalCount: null,
  //     count: null,
  //     offset: null,
  //     data: [],
  //   })
  // );
};
