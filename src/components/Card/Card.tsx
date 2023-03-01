import React from 'react';
// styles
import './Card.scss';
// components
import { Subtitle } from '../Subtitle/Subtitle';
import { Paragraph } from '../Paragraph/Paragraph';
import { ChevronIcon } from '../../assets/ChevronIcon/ChevronIcon';
// types
import { CardProps } from '../../types/types';

export const Card: React.FC<CardProps> = ({ src, alt, subtitle, description }) => {
  return (
    <div className="card">
      <div className="front">
        <Subtitle text={subtitle} />
        <ChevronIcon />
        <img src={src} alt={alt} width="100%" height="100%" loading="lazy" />
      </div>
      <div className="back">
        <Subtitle text={subtitle} />
        <Paragraph text={description} />
      </div>
    </div>
  );
};
