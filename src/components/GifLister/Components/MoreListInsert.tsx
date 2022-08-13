import React from 'react';
import { MoreListInsertStatus } from '../../../types';
import styles from './gifLister.module.css';

export type MoreListInsertProps = {
  status: MoreListInsertStatus;
  onShowMoreHandler: () => void;
};

const insertComponents = new Map<MoreListInsertStatus, any>([
  [MoreListInsertStatus.EMPTY, () => <div>Empty</div>],
  [MoreListInsertStatus.LOADING, () => <div>Loading...</div>],
  [MoreListInsertStatus.PENDING, () => <div>Load more</div>],
]);

export const MoreListInsert: React.FC<MoreListInsertProps> = ({
  status,
  onShowMoreHandler,
}) => {
  return (
    <div
      key="giphy-more-list-insert"
      className={styles['list-loader-status-insert']}
      onClick={onShowMoreHandler}
    >
      {insertComponents.get(status)()}
    </div>
  );
};
