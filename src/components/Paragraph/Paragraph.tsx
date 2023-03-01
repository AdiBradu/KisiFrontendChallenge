import React from 'react';
// types
import { TextProps } from '../../types/types';
// styles
import './Paragraph.scss';

export const Paragraph: React.FC<TextProps> = ({ text }) => {
  return <p className="paragraph">{text}</p>;
};
