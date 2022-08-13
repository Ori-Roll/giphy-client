import React, { useCallback, useState } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import {
  CurrentGifsSearch,
  GifListerSliceState,
} from '../slice/gifListerSlice';
import { GifListerBase } from './GifListerBase';
import { GifListerItem } from './GifListerItem';
import { useGifGetDataHandler } from '../dataHandlerHooks/useGifGetDataHandler';

export const GifLister = () => {
  const [value, setValue] = useState('');

  const { searchGifs, searchMoreGifs, loadingStatus } = useGifGetDataHandler();

  const currentGifsSearch: CurrentGifsSearch = useSelector(
    (state: GifListerSliceState) => state.currentGifsSearch
  );

  const { data: gifsData } = currentGifsSearch;

  const onShowMoreHandler = () => {
    searchMoreGifs(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchGifs = useCallback(
    _.debounce((newValue) => {
      searchGifs(newValue);
    }, 500),
    []
  );

  const onChangeHandler = (newValue: string) => {
    setValue(newValue);
    debouncedSearchGifs(newValue);
  };

  return (
    <GifListerBase
      value={value}
      onChange={onChangeHandler}
      moreListInsertProps={{
        status: loadingStatus,
        onShowMoreHandler: onShowMoreHandler,
      }}
    >
      {gifsData.length
        ? gifsData.map((gifItem, index) => (
            <GifListerItem key={gifItem.id} gifItem={gifItem} />
          ))
        : null}
    </GifListerBase>
  );
};
