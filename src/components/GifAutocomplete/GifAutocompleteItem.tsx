import { GIFObject } from 'giphy-api';
import React from 'react';
import styles from './gifAutocomplete.module.css';

interface GifAutocompleteItemProps {
  gifItem: GIFObject;
}

export const GifAutocompleteItem: React.FC<GifAutocompleteItemProps> = ({
  gifItem,
}) => {
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('clicked');
  };

  const gifImageTitle = gifItem.title;
  const gifImageDownsampledUrl = gifItem.images.fixed_width_downsampled.url;

  return (
    <div className={styles['gif-item-wrapper']} onClick={onClickHandler}>
      <img
        alt="gif missing" //TODO: future - change to some alt
        src={gifImageDownsampledUrl}
        className={styles['gif-item']}
      />
      <span className={styles['gif-item-text']}>{gifImageTitle}</span>
    </div>
  );
};
