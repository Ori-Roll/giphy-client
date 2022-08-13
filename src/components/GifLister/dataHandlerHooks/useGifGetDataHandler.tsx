import { useState } from 'react';
import { MultiResponse } from 'giphy-api';
import { callSearchGiphyApi } from '../../../apiCalls';
import {
  onGifSearchRequest,
  onGifSearchResponseSuccess,
  onGifSearchMoreResponseSuccess,
  GifListerSliceState,
} from '../slice/gifListerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MoreListInsertStatus } from '../../../types';

const ITEMS_LIMIT = 9;

const getSearchData = async (
  searchPhrase: string,
  searchParams?: Record<string, any>
): Promise<MultiResponse> => {
  const res = await callSearchGiphyApi(searchPhrase, searchParams);
  return res as MultiResponse;
};

export const useGifGetDataHandler = () => {
  const dispatch = useDispatch();

  const loadingStatus: MoreListInsertStatus = useSelector(
    (state: GifListerSliceState) => state.loadingStatus
  );

  const [currentOffset, setCurrentOffset] = useState(0);

  const initSearch = () => onGifSearchRequest && dispatch(onGifSearchRequest());

  const searchGifs = async (searchPhrase: string) => {
    initSearch();
    const { data, pagination }: MultiResponse = await getSearchData(
      searchPhrase,
      { limit: ITEMS_LIMIT * 2 }
    );
    if (onGifSearchResponseSuccess) {
      dispatch(onGifSearchResponseSuccess(data));
    }
    setCurrentOffset(pagination.offset + ITEMS_LIMIT);
  };

  const searchMoreGifs = async (searchPhrase: string) => {
    const nextOffset = currentOffset + ITEMS_LIMIT;
    initSearch();
    const { data, pagination }: MultiResponse = await getSearchData(
      searchPhrase,
      { offset: nextOffset, limit: ITEMS_LIMIT }
    );

    if (onGifSearchMoreResponseSuccess) {
      dispatch(onGifSearchMoreResponseSuccess(data));
    }
    setCurrentOffset(pagination.offset);
  };

  return { searchGifs, searchMoreGifs, loadingStatus };
};
