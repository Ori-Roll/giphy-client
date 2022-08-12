import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GifAutocompleteBase } from './GifAutocompleteBase';
import {
  CurrentGifsSearch,
  GifAutocompleteSliceState,
} from './slice/gifAutocompleteSlice';
import { GifAutocompleteItem } from './GifAutocompleteItem';
import { useGifGetDataHandler } from './dataHandlerHooks/useGifGetDataHandler';
import { GIFObject } from 'giphy-api';

export const GifAutocomplete = () => {
  const [value, setValue] = useState('');

  const { searchGifs, searchMoreGifs } = useGifGetDataHandler();

  const currentGifsSearch: CurrentGifsSearch = useSelector(
    (state: GifAutocompleteSliceState) => state.currentGifsSearch
  );

  const { data: gifsData } = currentGifsSearch;

  const onChangeHandler = (newValue: string) => {
    setValue(newValue);
    searchGifs(newValue);
  };

  return (
    <GifAutocompleteBase value={value} onChange={onChangeHandler}>
      {gifsData.length
        ? gifsData.map((gifItem) => <GifAutocompleteItem gifItem={gifItem} />)
        : null}
    </GifAutocompleteBase>
  );
};
