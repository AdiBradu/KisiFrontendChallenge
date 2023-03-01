import React from 'react';
// types
import { TextProps } from '../../types/types';
// styles
import './Subtitle.scss';

export const Subtitle: React.FC<TextProps> = ({ text }) => {
  return <h2 className="subtitle">{text}</h2>;
};
