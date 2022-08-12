import React from 'react';
import styles from './gifAutocomplete.module.css';

interface GifAutocompleteBaseProps {
  value: string;
  onChange: (value: string) => void;
  children: any;
}

export const GifAutocompleteBase: React.FC<GifAutocompleteBaseProps> = ({
  value,
  onChange,
  children,
}) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles['autocomplete-wrapper']}>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        className={styles['autocomplete-input']}
        placeholder="Search gifs..."
      />
      {children ? (
        <div className={styles['autocomplete-children-wrapper']}>
          {children}
        </div>
      ) : null}
    </div>
  );
};
