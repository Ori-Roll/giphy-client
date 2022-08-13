import { GIFObject } from 'giphy-api';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './gifLister.module.css';
import { onChoseViewedGif } from '../slice/gifListerSlice';

interface GifListerItemProps {
  gifItem: GIFObject;
}

export const GifListerItem: React.FC<GifListerItemProps> = ({ gifItem }) => {
  const dispatch = useDispatch();

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onChoseViewedGif) dispatch(onChoseViewedGif(gifItem));
  };

  const gifImageTitle = gifItem.title;
  const gifImageId = gifItem.id;
  const gifImageDownsampledUrl = gifItem.images.fixed_height_downsampled.url;

  return (
    <div className={styles['gif-item-wrapper']} onClick={onClickHandler}>
      <Link to={`/${gifImageId}`}>
        <img
          alt="gif missing" //TODO: future - change to some alt
          src={gifImageDownsampledUrl}
        />
        <span className={styles['gif-item-text']}>{gifImageTitle}</span>
      </Link>
    </div>
  );
};
