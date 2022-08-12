import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GifAutocompleteBase } from './GifAutocompleteBase';
import {
  CurrentGifsSearch,
  GifAutocompleteSliceState,
} from './slice/gifAutocompleteSlice';
import { GifAutocompleteItem } from './GifAutocompleteItem';
import { GIFObject } from 'giphy-api';

export const GifAutocomplete = () => {
  const [value, setValue] = useState('');

  const data: CurrentGifsSearch = useSelector(
    (state: GifAutocompleteSliceState) => state.currentGifsSearch
  );

  const onChangeHandler = (value: string) => {};

  const bla: GIFObject[] = [];

  return (
    <GifAutocompleteBase value={value} onChange={onChangeHandler}>
      {bla.map((item) => (
        <div />
      ))}
    </GifAutocompleteBase>
  );
};
