import { GIFObject } from 'giphy-api';
import { useSelector } from 'react-redux';
import { formatBytes } from '../../../utils';
import { GifListerSliceState } from '../../GifLister/slice/gifListerSlice';
import styles from './viewPage.module.css';

export const ViewPage = () => {
  const currentGif: GIFObject | null = useSelector(
    (state: GifListerSliceState) => state.currentGifsSearch.viewedGif
  );

  const imageCurrentURL = currentGif?.images.original.webp;
  const imageCurrentSize = currentGif?.images.original.size;
  const { id: imageCurrentId, title: imageCurrentTitle } = currentGif || {
    id: null,
    title: null,
  };

  return (
    <div className={styles['view-page-wrapper']}>
      {imageCurrentURL ? (
        <img
          className={styles['view-page-img']}
          src={imageCurrentURL}
          alt="Not found"
        />
      ) : null}
      {imageCurrentTitle && imageCurrentSize ? (
        <div>
          <div className={styles['view-page-title']}>{imageCurrentTitle}</div>
          <div className={styles['view-page-size']}>
            {formatBytes(Number(imageCurrentSize))?.fullString}
          </div>
        </div>
      ) : null}
    </div>
  );
};
