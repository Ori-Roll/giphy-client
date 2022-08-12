import React from 'react';
import { MultiResponse } from 'giphy-api';
import { callSearchGiphyApi } from '../../../apiCalls';
import { useDispatch } from 'react-redux';
import { onGifSearchResponseSuccess } from '../slice/gifAutocompleteSlice';
import { store } from '../../../stores';

const getSearchData = async (
  searchPhrase: string,
  searchParams?: Record<string, string | number>
) => {
  const res = await callSearchGiphyApi(searchPhrase, searchParams);
  return res as MultiResponse;
};

const gifGetDataHandler = async (searchPhrase: string) => {
  const { data, pagination }: MultiResponse = await getSearchData(
    searchPhrase,
    { limit: 9 }
  );

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
