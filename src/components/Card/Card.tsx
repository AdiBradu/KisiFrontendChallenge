import React from 'react';
// styles
import styles from './Card.module.css';
// components
import { Subtitle } from '../Subtitle/Subtitle';
import { Paragraph } from '../Paragraph/Paragraph';
import { ChevronIcon } from '../../assets/ChevronIcon/ChevronIcon';
// types
import { CardProps } from '../../types/types';

export const Card: React.FC<CardProps> = ({ src, alt, subtitle, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <Subtitle text={subtitle} />
        <ChevronIcon />
        <img src={src} alt={alt} width="100%" height="100%" />
      </div>
      <div className={styles.back}>
        <Subtitle text={subtitle} />
        <Paragraph text={description} />
      </div>
    </div>
  );
};
