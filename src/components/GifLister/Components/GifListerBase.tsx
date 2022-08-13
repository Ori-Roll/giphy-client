import React from 'react';
import styles from './gifLister.module.css';
import { MoreListInsert, MoreListInsertProps } from './MoreListInsert';

interface GifListerBaseProps {
  value: string;
  onChange: (value: string) => void;
  moreListInsertProps: MoreListInsertProps;
  children: any;
}

export const GifListerBase: React.FC<GifListerBaseProps> = ({
  value,
  onChange,
  moreListInsertProps,
  children,
}) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles['lister-wrapper']}>
      <div className={styles['lister-head-wrapper']}>
        <h2>GIPHY GO</h2>
        <input
          type="text"
          value={value}
          onChange={onChangeHandler}
          className={styles['lister-input']}
          placeholder="Search gifs..."
        />
      </div>
      {children ? (
        <div className={styles['lister-children-with-insert-wrapper']}>
          <div className={styles['lister-children-wrapper']}>{children}</div>
          <MoreListInsert {...moreListInsertProps} />
        </div>
      ) : null}
    </div>
  );
};
