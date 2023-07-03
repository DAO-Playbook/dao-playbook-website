import React from 'react';
import PartTag from '../PartTag';
import { PART_TAG_COLORS } from '@data/constants';
import { capitalize } from 'lodash';
import { formatQuantity } from 'format-quantity';
import { WithAttribute } from 'types';
import { Part } from 'types/book';

import styles from './PartName.module.scss';

interface PartNameProps {
  part: WithAttribute<Part>;
}

const PartName: React.FC<PartNameProps> = ({ part }) => {
  return (
    <span className={styles.PartName}>
      <PartTag color={PART_TAG_COLORS[part.attributes.part - 1]} />
      PT{' '}
      {capitalize(
        String(
          formatQuantity(part.attributes.part, {
            romanNumerals: true,
          }),
        ),
      )}{' '}
      - {part.attributes.title}
    </span>
  );
};

export default PartName;
