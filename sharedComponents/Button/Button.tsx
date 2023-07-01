import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import { ButtonVariants } from 'types';

import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={cx(styles.Button, className, {
        [styles[`Button_${variant}`]]: !!variant,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: ButtonVariants.Primary,
};

export default Button;
