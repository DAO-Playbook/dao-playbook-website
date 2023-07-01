import React from 'react';

import styles from './PartTag.module.scss';

interface PartTagProps {
  color: string;
}

const PartTag: React.FC<PartTagProps> = ({ color }) => {
  return <span className={styles.PartTag} style={{ backgroundColor: color }} />;
};

export default PartTag;
