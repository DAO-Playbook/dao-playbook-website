import React, { SVGAttributes } from 'react';
import cx from 'classnames';

import styles from './Spinner.module.scss';

const strokeWidth = 3;
const viewBoxSize = 24;
const coordinate = viewBoxSize / 2;
const radius = viewBoxSize / 2 - strokeWidth / 2;
const outline = Math.PI * radius * 2;
const outlineHalf = outline / 2;

const Spinner: React.FC<SVGAttributes<any>> = ({ className, ...props }) => {
  return (
    <svg className={cx(styles.Spinner, className)} {...props}>
      <circle opacity='.25' cx={coordinate} cy={coordinate} r={radius} />
      <circle
        cx={coordinate}
        cy={coordinate}
        r={radius}
        strokeDasharray={outlineHalf}
      />
    </svg>
  );
};

Spinner.defaultProps = {
  height: viewBoxSize,
  width: viewBoxSize,
  viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`,
};

export default Spinner;
