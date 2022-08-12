import React from 'react';
import { MultiResponse } from 'giphy-api';
import { callSearchGiphyApi } from '../../../apiCalls';
import { useSelector, useDispatch } from 'react-redux';
import { onGifSearchResponseSuccess } from '../slice/gifAutocompleteSlice';

const getSearchData = async (searchPhrase: string) => {
  const res = await callSearchGiphyApi(searchPhrase);
  return res as MultiResponse;
};

const useGifDataHandler = async (searchPhrase: string) => {
  const dispatch = useDispatch();

  const { data, pagination }: MultiResponse = await getSearchData(searchPhrase);

  // const data: CurrentGifsSearch = useSelector(
  //   (state: GifAutocompleteSliceState) => state.currentGifsSearch
  // );

  // const newData = dispatch(
  //   onGifSearchResponseSuccess({
  //     totalCount: pagination.total_count,
  //     count: pagination.count,
  //     offset: pagination.offset,
  //     data: [],
  //   })
  // );
};
