import React from 'react';
// types
import { TextProps } from '../../types/types';
// styles
import styles from './Subtitle.module.css';

export const Subtitle: React.FC<TextProps> = ({ text }) => {
  return <h2 className={styles.subtitle}>{text}</h2>;
};
