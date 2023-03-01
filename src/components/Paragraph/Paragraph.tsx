import React from 'react';
// types
import { TextProps } from '../../types/types';
// styles
import styles from './Paragraph.module.css';

export const Paragraph: React.FC<TextProps> = ({ text }) => {
  return <p className={styles.paragraph}>{text}</p>;
};
