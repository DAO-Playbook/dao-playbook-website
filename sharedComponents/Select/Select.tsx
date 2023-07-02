import React, { useState, useEffect, useRef, ReactNode } from 'react';
import cx from 'classnames';
import { isEmpty, isFunction, isString, omit, uniqueId } from 'lodash';
import { CaretDownIcon } from '../../assets/svgs';
import { IObject, TFunc } from '../../types';
import Spinner from '../Spinner';

import styles from './Select.module.scss';

export type Option = {
  label?: string;
  value?: string | number;
  [x: string]: any;
};

export enum Variant {
  // eslint-disable-next-line no-unused-vars
  Default = 'default',
  // eslint-disable-next-line no-unused-vars
  Light = 'light',
}

export type SelectProps = {
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (x: Option) => void;
  className?: string;
  label?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  selectedText?: ReactNode | ((x: Option | null) => ReactNode);
  disabled?: boolean;
  options: Option[];
  renderOption?: TFunc<IObject<any>, ReactNode>;
  value: string | number;
  loading?: boolean;
};

export interface SelectHandle {
  setSearchTerm: TFunc<string, void>;
}

const Select: React.FC<SelectProps> = props => {
  const {
    value,
    options,
    renderOption,
    onChange,
    className,
    label,
    selectedText,
    placeholder,
    disabled,
    loading,
  } = props;

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const optionsListRef = useRef<HTMLUListElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleShowOptions = (showOptions: boolean) => {
    setShowOptions(showOptions);
  };

  const valueText = React.useMemo(() => {
    if (
      selectedText &&
      isFunction(selectedText) &&
      selectedText(selectedOption)
    )
      return selectedText(selectedOption);

    if (selectedText && isString(selectedText)) return selectedText;

    if (selectedOption && !isEmpty(selectedOption)) return selectedOption.label;

    return placeholder || 'Select';
  }, [selectedOption, selectedText]);

  const handleOptionSelect = (e: any, selected: Option) => {
    e.stopPropagation();
    e.preventDefault();
    setSelectedOption(selected);
    setShowOptions(false);
    onChange(selected);
  };

  const getOptionProps = (option: Option, index: number) => ({
    tabIndex: index + 1,
    option,
    active: option.value === value,
    onClick: (e: any) => {
      handleOptionSelect(e, option);
    },
    className: cx(styles.Select__option, {
      [styles.Select__option__active]: option?.value === value,
    }),
  });

  const renderOptions = () => {
    return (
      <ul
        tabIndex={-1}
        ref={optionsListRef}
        className={styles.Select__options_list}
      >
        {options?.map((option: Option, index) => {
          const optionProps = getOptionProps(option, index);
          if (renderOption) {
            return renderOption(optionProps);
          }
          return (
            <li key={uniqueId('option')} {...omit(optionProps, ['option'])}>
              {option.label}
            </li>
          );
        })}
      </ul>
    );
  };

  const selectValueFromPropsCallback = React.useCallback(() => {
    const valueOption = options?.find(option => option.value === value);
    return setSelectedOption(valueOption || null);
  }, [value, options]);

  useEffect(() => {
    const select = selectRef.current;
    const optionsList = optionsListRef.current;
    const outsideClickEventHandler = (e: any) => {
      if (select && !select.contains(e.target)) {
        handleShowOptions(false);
      }
    };

    const keydownEventHandler = (e: KeyboardEvent) => {
      if (
        select?.contains(e.target as HTMLUListElement) &&
        optionsList &&
        (e.key === 'Down' || e.key === 'ArrowDown' || e.code === 'ArrowDown')
      )
        (optionsList as any)?.focus();
    };

    document.addEventListener('click', outsideClickEventHandler);

    select?.addEventListener('keydown', keydownEventHandler);

    return () => {
      document.removeEventListener('click', outsideClickEventHandler);
      select?.removeEventListener('keydown', keydownEventHandler);
    };
  }, []);

  useEffect(() => {
    const optionsList = optionsListRef.current as HTMLUListElement & {
      scrollIntoViewIfNeeded: VoidFunction;
    };
    showOptions && optionsList?.scrollIntoViewIfNeeded();
  }, [showOptions]);

  useEffect(() => {
    selectValueFromPropsCallback();
  }, [value, options]);

  return (
    <div
      className={cx(className, {
        [styles.Select_wrapper]: label,
      })}
    >
      {label && (
        <label
          onClick={e => {
            e.stopPropagation();
            !disabled && !loading && handleShowOptions(!showOptions);
          }}
          className={styles.Select_label}
        >
          {label}
        </label>
      )}
      <div
        role='button'
        onClick={e => {
          e.stopPropagation();
          !disabled && !loading && handleShowOptions(!showOptions);
        }}
        ref={selectRef}
        className={cx(styles.Select, {
          [styles.Select_disabled]: disabled || loading,
        })}
      >
        <p className={styles.Select__valueText}>{valueText}</p>
        {!loading && (
          <div
            className={cx(styles.Select__icon, {
              [styles.Select__icon_open]: showOptions,
            })}
          >
            <CaretDownIcon />
          </div>
        )}
        {loading && (
          <div className={styles.Select__loader}>
            <Spinner />
          </div>
        )}
        <div
          className={cx(styles.Select__options, {
            [styles.Select__options_open]: showOptions,
          })}
        >
          {renderOptions()}
        </div>
      </div>
    </div>
  );
};

Select.defaultProps = {
  placeholder: 'Select',
};

export default Select;
