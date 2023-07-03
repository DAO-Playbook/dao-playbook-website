import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';
import { ButtonVariants } from 'types';

import styles from './Button.module.scss';
import Spinner from '@sharedComponents/Spinner';

interface ButtonProps extends ButtonHTMLAttributes<any> {
  variant?: ButtonVariants;
  loading?: boolean;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  variant,
  className,
  loading,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cx(styles.Button, className, {
        [styles[`Button_${variant}`]]: !!variant,
        [styles.Button_loading]: loading,
      })}
      onClick={e => {
        if (loading || props.disabled) return;
        onClick && onClick(e);
      }}
      {...props}
    >
      {loading ? <Spinner className={styles.Button_loader} /> : children}
    </button>
  );
};

Button.defaultProps = {
  variant: ButtonVariants.Primary,
};

export default Button;
