import React, { CSSProperties } from 'react';
import cx from 'classnames';

import Spinner from '@sharedComponents/Spinner';

import styles from './Loader.module.scss';

interface LoaderProps {
  className?: string;
  message?: string;
  style?: CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({
  className,
  message,
  style,
  ...rest
}) => {
  return (
    <section className={cx(styles.Loader, className)} style={style} {...rest}>
      <Spinner height={32} width={32} />
      {message && <p className={styles.Loader_msg}>{message}</p>}
    </section>
  );
};

export default Loader;
