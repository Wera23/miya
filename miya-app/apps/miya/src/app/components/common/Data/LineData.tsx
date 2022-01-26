import { FC } from 'react';
import classnames from 'classnames';

import styles from './Data.module.scss';

interface LineDataTypes {
  value: string;
  data: string;
}

const LineData: FC<LineDataTypes> = ({ value, data, children }) => {
  return (
    <div
      className={classnames(
        styles.dataLine,
        data === value && styles.descriptionLine
      )}
    >
      {children}
    </div>
  );
};

export default LineData;
