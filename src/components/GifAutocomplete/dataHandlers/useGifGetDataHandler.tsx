import React, { useState } from 'react';
import { MultiResponse } from 'giphy-api';
import { callSearchGiphyApi } from '../../../apiCalls';
import {
  onGifSearchResponseSuccess,
  onGifSearchMoreResponseSuccess,
} from '../slice/gifAutocompleteSlice';
import { store } from '../../../stores';
import { useDispatch } from 'react-redux';

const ITEMS_LIMIT = 9;

const getSearchData = async (searchPhrase: string, offset?: number) => {
  const res = await callSearchGiphyApi(searchPhrase, { limit: ITEMS_LIMIT });
  return res as MultiResponse;
};

const useGifGetDataHandler = () => {
  const dispatch = useDispatch();

  const [currentOffset, setCurrentOffset] = useState(0);
  const [nextOffset, setnextOffset] = useState(ITEMS_LIMIT + 1);

  const searchGifs = async (searchPhrase: string) => {
    const { data, pagination }: MultiResponse = await getSearchData(
      searchPhrase
    );
    if (onGifSearchResponseSuccess) {
      dispatch(
        onGifSearchResponseSuccess({
          // totalCount: pagination.total_count,
          // count: pagination.count,
          // offset: pagination.offset,
          // data: [],
          totalCount: 2,
          count: 0,
          offset: 0,
          data: [],
        })
      );
    }
  };

  const searchMoreGifs = async (searchPhrase: string) => {
    const { data, pagination }: MultiResponse = await getSearchData(
      searchPhrase,
      nextOffset
    );

    if (onGifSearchMoreResponseSuccess) {
      dispatch(
        onGifSearchMoreResponseSuccess({
          // totalCount: pagination.total_count,
          // count: pagination.count,
          // offset: pagination.offset,
          // data: [],
          totalCount: 2,
          count: 0,
          offset: 0,
          data: [],
        })
      );
    }
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
