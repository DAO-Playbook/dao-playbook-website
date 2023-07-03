import cx from 'classnames';
import React from 'react';
import Portal from '../Portal';
import { IObject } from '../../types';
import { CloseIcon } from '@assets/svgs';

import styles from './Modal.module.scss';

export enum Size {
  // eslint-disable-next-line no-unused-vars
  Small = 'small',
  // eslint-disable-next-line no-unused-vars
  Medium = 'medium',
  // eslint-disable-next-line no-unused-vars
  Large = 'large',
}

export interface ModalProps {
  className?: string;
  contentClassName?: string;
  size?: Size | number;
  isOpen: boolean;
  isClosable?: boolean;
  closeModal?: () => void;
  dataAttr?: IObject<string>;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = props => {
  const portalId = `modal-${new Date().getTime()}`;

  return props.isOpen ? (
    <Portal
      className={cx(styles.Modal, props.className)}
      onClick={() => props.isClosable && props.closeModal && props.closeModal()}
      portalId={portalId}
    >
      <div
        style={
          typeof props.size === 'number' ? { maxWidth: `${props.size}px` } : {}
        }
        className={cx(styles.Modal_content, props.contentClassName)}
      >
        {props.isClosable && (
          <button
            data-testid='modal-close-button'
            className={styles.Modal_close_btn}
            onClick={props.closeModal}
          >
            <CloseIcon strokeWidth={3} />
          </button>
        )}
        {props.children}
      </div>
    </Portal>
  ) : null;
};

Modal.defaultProps = {
  size: Size.Small,
  isClosable: true,
};

export default Modal;
